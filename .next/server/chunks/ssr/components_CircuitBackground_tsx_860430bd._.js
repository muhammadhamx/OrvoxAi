module.exports=[99666,a=>{"use strict";let b,c;var d=a.i(87924),e=a.i(72131),f=a.i(10129),g=a.i(99777),h=a.i(39705),i=a.i(35258),j=a.i(87072),j=j,k=i,l=i;let m=new l.Box3,n=new l.Vector3;class o extends l.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new l.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new l.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(a){let b=this.attributes.instanceStart,c=this.attributes.instanceEnd;return void 0!==b&&(b.applyMatrix4(a),c.applyMatrix4(a),b.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(a){let b;a instanceof Float32Array?b=a:Array.isArray(a)&&(b=new Float32Array(a));let c=new l.InstancedInterleavedBuffer(b,6,1);return this.setAttribute("instanceStart",new l.InterleavedBufferAttribute(c,3,0)),this.setAttribute("instanceEnd",new l.InterleavedBufferAttribute(c,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(a,b=3){let c;a instanceof Float32Array?c=a:Array.isArray(a)&&(c=new Float32Array(a));let d=new l.InstancedInterleavedBuffer(c,2*b,1);return this.setAttribute("instanceColorStart",new l.InterleavedBufferAttribute(d,b,0)),this.setAttribute("instanceColorEnd",new l.InterleavedBufferAttribute(d,b,b)),this}fromWireframeGeometry(a){return this.setPositions(a.attributes.position.array),this}fromEdgesGeometry(a){return this.setPositions(a.attributes.position.array),this}fromMesh(a){return this.fromWireframeGeometry(new l.WireframeGeometry(a.geometry)),this}fromLineSegments(a){let b=a.geometry;return this.setPositions(b.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new l.Box3);let a=this.attributes.instanceStart,b=this.attributes.instanceEnd;void 0!==a&&void 0!==b&&(this.boundingBox.setFromBufferAttribute(a),m.setFromBufferAttribute(b),this.boundingBox.union(m))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new l.Sphere),null===this.boundingBox&&this.computeBoundingBox();let a=this.attributes.instanceStart,b=this.attributes.instanceEnd;if(void 0!==a&&void 0!==b){let c=this.boundingSphere.center;this.boundingBox.getCenter(c);let d=0;for(let e=0,f=a.count;e<f;e++)n.fromBufferAttribute(a,e),d=Math.max(d,c.distanceToSquared(n)),n.fromBufferAttribute(b,e),d=Math.max(d,c.distanceToSquared(n));this.boundingSphere.radius=Math.sqrt(d),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(a){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(a)}}var p=i,q=a.i(66110);let r=parseInt(i.REVISION.replace(/\D+/g,""));class s extends p.ShaderMaterial{constructor(a){super({type:"LineMaterial",uniforms:p.UniformsUtils.clone(p.UniformsUtils.merge([q.UniformsLib.common,q.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new p.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${r>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(a){this.uniforms.diffuse.value=a}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(a){!0===a?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(a){this.uniforms.linewidth.value=a}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(a){!!a!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===a?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(a){this.uniforms.dashScale.value=a}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(a){this.uniforms.dashSize.value=a}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(a){this.uniforms.dashOffset.value=a}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(a){this.uniforms.gapSize.value=a}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(a){this.uniforms.opacity.value=a}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(a){this.uniforms.resolution.value.copy(a)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(a){!!a!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===a?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(a)}}let t=r>=125?"uv1":"uv2",u=new k.Vector4,v=new k.Vector3,w=new k.Vector3,x=new k.Vector4,y=new k.Vector4,z=new k.Vector4,A=new k.Vector3,B=new k.Matrix4,C=new k.Line3,D=new k.Vector3,E=new k.Box3,F=new k.Sphere,G=new k.Vector4;function H(a,b,d){return G.set(0,0,-b,1).applyMatrix4(a.projectionMatrix),G.multiplyScalar(1/G.w),G.x=c/d.width,G.y=c/d.height,G.applyMatrix4(a.projectionMatrixInverse),G.multiplyScalar(1/G.w),Math.abs(Math.max(G.x,G.y))}class I extends k.Mesh{constructor(a=new o,b=new s({color:0xffffff*Math.random()})){super(a,b),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let a=this.geometry,b=a.attributes.instanceStart,c=a.attributes.instanceEnd,d=new Float32Array(2*b.count);for(let a=0,e=0,f=b.count;a<f;a++,e+=2)v.fromBufferAttribute(b,a),w.fromBufferAttribute(c,a),d[e]=0===e?0:d[e-1],d[e+1]=d[e]+v.distanceTo(w);let e=new k.InstancedInterleavedBuffer(d,2,1);return a.setAttribute("instanceDistanceStart",new k.InterleavedBufferAttribute(e,1,0)),a.setAttribute("instanceDistanceEnd",new k.InterleavedBufferAttribute(e,1,1)),this}raycast(a,d){let e,f,g=this.material.worldUnits,h=a.camera;null!==h||g||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let i=void 0!==a.params.Line2&&a.params.Line2.threshold||0;b=a.ray;let j=this.matrixWorld,l=this.geometry,m=this.material;if(c=m.linewidth+i,null===l.boundingSphere&&l.computeBoundingSphere(),F.copy(l.boundingSphere).applyMatrix4(j),g)e=.5*c;else{let a=Math.max(h.near,F.distanceToPoint(b.origin));e=H(h,a,m.resolution)}if(F.radius+=e,!1!==b.intersectsSphere(F)){if(null===l.boundingBox&&l.computeBoundingBox(),E.copy(l.boundingBox).applyMatrix4(j),g)f=.5*c;else{let a=Math.max(h.near,E.distanceToPoint(b.origin));f=H(h,a,m.resolution)}E.expandByScalar(f),!1!==b.intersectsBox(E)&&(g?function(a,d){let e=a.matrixWorld,f=a.geometry,g=f.attributes.instanceStart,h=f.attributes.instanceEnd,i=Math.min(f.instanceCount,g.count);for(let f=0;f<i;f++){C.start.fromBufferAttribute(g,f),C.end.fromBufferAttribute(h,f),C.applyMatrix4(e);let i=new k.Vector3,j=new k.Vector3;b.distanceSqToSegment(C.start,C.end,j,i),j.distanceTo(i)<.5*c&&d.push({point:j,pointOnLine:i,distance:b.origin.distanceTo(j),object:a,face:null,faceIndex:f,uv:null,[t]:null})}}(this,d):function(a,d,e){let f=d.projectionMatrix,g=a.material.resolution,h=a.matrixWorld,i=a.geometry,j=i.attributes.instanceStart,l=i.attributes.instanceEnd,m=Math.min(i.instanceCount,j.count),n=-d.near;b.at(1,z),z.w=1,z.applyMatrix4(d.matrixWorldInverse),z.applyMatrix4(f),z.multiplyScalar(1/z.w),z.x*=g.x/2,z.y*=g.y/2,z.z=0,A.copy(z),B.multiplyMatrices(d.matrixWorldInverse,h);for(let d=0;d<m;d++){if(x.fromBufferAttribute(j,d),y.fromBufferAttribute(l,d),x.w=1,y.w=1,x.applyMatrix4(B),y.applyMatrix4(B),x.z>n&&y.z>n)continue;if(x.z>n){let a=x.z-y.z,b=(x.z-n)/a;x.lerp(y,b)}else if(y.z>n){let a=y.z-x.z,b=(y.z-n)/a;y.lerp(x,b)}x.applyMatrix4(f),y.applyMatrix4(f),x.multiplyScalar(1/x.w),y.multiplyScalar(1/y.w),x.x*=g.x/2,x.y*=g.y/2,y.x*=g.x/2,y.y*=g.y/2,C.start.copy(x),C.start.z=0,C.end.copy(y),C.end.z=0;let i=C.closestPointToPointParameter(A,!0);C.at(i,D);let m=k.MathUtils.lerp(x.z,y.z,i),o=m>=-1&&m<=1,p=A.distanceTo(D)<.5*c;if(o&&p){C.start.fromBufferAttribute(j,d),C.end.fromBufferAttribute(l,d),C.start.applyMatrix4(h),C.end.applyMatrix4(h);let c=new k.Vector3,f=new k.Vector3;b.distanceSqToSegment(C.start,C.end,f,c),e.push({point:f,pointOnLine:c,distance:b.origin.distanceTo(f),object:a,face:null,faceIndex:d,uv:null,[t]:null})}}}(this,h,d))}}onBeforeRender(a){let b=this.material.uniforms;b&&b.resolution&&(a.getViewport(u),this.material.uniforms.resolution.value.set(u.z,u.w))}}class J extends o{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(a){let b=a.length-3,c=new Float32Array(2*b);for(let d=0;d<b;d+=3)c[2*d]=a[d],c[2*d+1]=a[d+1],c[2*d+2]=a[d+2],c[2*d+3]=a[d+3],c[2*d+4]=a[d+4],c[2*d+5]=a[d+5];return super.setPositions(c),this}setColors(a,b=3){let c=a.length-b,d=new Float32Array(2*c);if(3===b)for(let e=0;e<c;e+=b)d[2*e]=a[e],d[2*e+1]=a[e+1],d[2*e+2]=a[e+2],d[2*e+3]=a[e+3],d[2*e+4]=a[e+4],d[2*e+5]=a[e+5];else for(let e=0;e<c;e+=b)d[2*e]=a[e],d[2*e+1]=a[e+1],d[2*e+2]=a[e+2],d[2*e+3]=a[e+3],d[2*e+4]=a[e+4],d[2*e+5]=a[e+5],d[2*e+6]=a[e+6],d[2*e+7]=a[e+7];return super.setColors(d,b),this}fromLine(a){let b=a.geometry;return this.setPositions(b.attributes.position.array),this}}class K extends I{constructor(a=new J,b=new s({color:0xffffff*Math.random()})){super(a,b),this.isLine2=!0,this.type="Line2"}}let L=e.forwardRef(function({points:a,color:b=0xffffff,vertexColors:c,linewidth:d,lineWidth:f,segments:g,dashed:k,...l},m){var n,p;let q=(0,j.C)(a=>a.size),r=e.useMemo(()=>g?new I:new K,[g]),[t]=e.useState(()=>new s),u=(null==c||null==(n=c[0])?void 0:n.length)===4?4:3,v=e.useMemo(()=>{let d=g?new o:new J,e=a.map(a=>{let b=Array.isArray(a);return a instanceof i.Vector3||a instanceof i.Vector4?[a.x,a.y,a.z]:a instanceof i.Vector2?[a.x,a.y,0]:b&&3===a.length?[a[0],a[1],a[2]]:b&&2===a.length?[a[0],a[1],0]:a});if(d.setPositions(e.flat()),c){b=0xffffff;let a=c.map(a=>a instanceof i.Color?a.toArray():a);d.setColors(a.flat(),u)}return d},[a,g,c,u]);return e.useLayoutEffect(()=>{r.computeLineDistances()},[a,r]),e.useLayoutEffect(()=>{k?t.defines.USE_DASH="":delete t.defines.USE_DASH,t.needsUpdate=!0},[k,t]),e.useEffect(()=>()=>{v.dispose(),t.dispose()},[v]),e.createElement("primitive",(0,h.default)({object:r,ref:m},l),e.createElement("primitive",{object:v,attach:"geometry"}),e.createElement("primitive",(0,h.default)({object:t,attach:"material",color:b,vertexColors:!!c,resolution:[q.width,q.height],linewidth:null!=(p=null!=d?d:f)?p:1,dashed:k,transparent:4===u},l)))});var M=a.i(30672),N=a.i(66125);function O(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function P(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function Q(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?P(Object(c),!0).forEach(function(b){O(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):P(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function R(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}new i.Vector2,new i.Vector2;var S=function a(b,c,d){var e=this;R(this,a),O(this,"dot2",function(a,b){return e.x*a+e.y*b}),O(this,"dot3",function(a,b,c){return e.x*a+e.y*b+e.z*c}),this.x=b,this.y=c,this.z=d},T=[new S(1,1,0),new S(-1,1,0),new S(1,-1,0),new S(-1,-1,0),new S(1,0,1),new S(-1,0,1),new S(1,0,-1),new S(-1,0,-1),new S(0,1,1),new S(0,-1,1),new S(0,1,-1),new S(0,-1,-1)],U=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],V=Array(512),W=Array(512),X=0;(X=Math.floor(X))<256&&(X|=X<<8);for(var Y,Z=0;Z<256;Z++)Y=1&Z?U[Z]^255&X:U[Z]^X>>8&255,V[Z]=V[Z+256]=Y,W[Z]=W[Z+256]=T[Y%12];function $(a){var b=function(a){if("number"==typeof a)a=Math.abs(a);else if("string"==typeof a){var b=a;a=0;for(var c=0;c<b.length;c++)a=(a+(c+1)*(b.charCodeAt(c)%96))%0x7fffffff}return 0===a&&(a=311),a}(a);return function(){var a=48271*b%0x7fffffff;return b=a,a/0x7fffffff}}var _=new function a(b){var c=this;R(this,a),O(this,"seed",0),O(this,"init",function(a){c.seed=a,c.value=$(a)}),O(this,"value",$(this.seed)),this.init(b)}(Math.random()),aa={radius:1,center:[0,0,0]};function ab(){let a=(0,e.useRef)(null),b=(0,e.useMemo)(()=>{let a=[];for(let b=0;b<50;b++){let b=(Math.random()-.5)*20,c=(Math.random()-.5)*20,d=(Math.random()-.5)*10;a.push(new i.Vector3(b,c,d)),a.push(new i.Vector3(b+(Math.random()-.5),c+(Math.random()-.5),d))}return a},[]);return(0,g.useFrame)(b=>{a.current&&(a.current.rotation.y=.05*b.clock.getElapsedTime())}),(0,d.jsx)("group",{ref:a,children:(0,d.jsx)(L,{worldUnits:!0,points:b,color:"#00f0ff",lineWidth:.5,opacity:.2,transparent:!0})})}function ac(){let a=(0,e.useRef)(null),b=function(a,b){for(var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_,d=Q(Q({},aa),b),e=d.radius,f=d.center,g=0;g<a.length;g+=3){var h=Math.pow(c.value(),1/3),i=2*c.value()-1,j=2*c.value()-1,k=2*c.value()-1,l=Math.sqrt(i*i+j*j+k*k);i=h*i/l,j=h*j/l,k=h*k/l,a[g]=i*e+f[0],a[g+1]=j*e+f[1],a[g+2]=k*e+f[2]}return a}(new Float32Array(500),{radius:10});return(0,g.useFrame)((b,c)=>{a.current&&(a.current.rotation.x-=c/15,a.current.rotation.y-=c/20)}),(0,d.jsx)("group",{rotation:[0,0,Math.PI/4],children:(0,d.jsx)(M.Points,{ref:a,positions:b,stride:3,frustumCulled:!1,children:(0,d.jsx)(N.PointMaterial,{transparent:!0,color:"#8b5cf6",size:.03,sizeAttenuation:!0,depthWrite:!1})})})}function ad(){return(0,d.jsx)("div",{className:"fixed inset-0 z-0 pointer-events-none opacity-40",children:(0,d.jsxs)(f.Canvas,{camera:{position:[0,0,5]},children:[(0,d.jsx)(ab,{}),(0,d.jsx)(ac,{})]})})}a.s(["default",()=>ad],99666)}];

//# sourceMappingURL=components_CircuitBackground_tsx_860430bd._.js.map