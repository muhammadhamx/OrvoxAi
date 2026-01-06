(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75221,e=>{"use strict";let t,n;var i=e.i(43476),r=e.i(71645),o=e.i(75056),a=e.i(49774),s=e.i(31067),l=e.i(90072),f=e.i(91037),f=f,d=l,c=l;let u=new c.Box3,p=new c.Vector3;class h extends c.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new c.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new c.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new c.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new c.InterleavedBufferAttribute(n,3,0)),this.setAttribute("instanceEnd",new c.InterleavedBufferAttribute(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let i=new c.InstancedInterleavedBuffer(n,2*t,1);return this.setAttribute("instanceColorStart",new c.InterleavedBufferAttribute(i,t,0)),this.setAttribute("instanceColorEnd",new c.InterleavedBufferAttribute(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new c.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new c.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),u.setFromBufferAttribute(t),this.boundingBox.union(u))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new c.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)p.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(p)),p.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(p));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var m=l,v=e.i(8560);let y=parseInt(l.REVISION.replace(/\D+/g,""));class g extends m.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:m.UniformsUtils.clone(m.UniformsUtils.merge([v.UniformsLib.common,v.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new m.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${y>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let w=y>=125?"uv1":"uv2",S=new d.Vector4,b=new d.Vector3,x=new d.Vector3,E=new d.Vector4,A=new d.Vector4,_=new d.Vector4,L=new d.Vector3,U=new d.Matrix4,O=new d.Line3,z=new d.Vector3,M=new d.Box3,B=new d.Sphere,C=new d.Vector4;function P(e,t,i){return C.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),C.multiplyScalar(1/C.w),C.x=n/i.width,C.y=n/i.height,C.applyMatrix4(e.projectionMatrixInverse),C.multiplyScalar(1/C.w),Math.abs(Math.max(C.x,C.y))}class D extends d.Mesh{constructor(e=new h,t=new g({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let e=0,r=0,o=t.count;e<o;e++,r+=2)b.fromBufferAttribute(t,e),x.fromBufferAttribute(n,e),i[r]=0===r?0:i[r-1],i[r+1]=i[r]+b.distanceTo(x);let r=new d.InstancedInterleavedBuffer(i,2,1);return e.setAttribute("instanceDistanceStart",new d.InterleavedBufferAttribute(r,1,0)),e.setAttribute("instanceDistanceEnd",new d.InterleavedBufferAttribute(r,1,1)),this}raycast(e,i){let r,o,a=this.material.worldUnits,s=e.camera;null!==s||a||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let l=void 0!==e.params.Line2&&e.params.Line2.threshold||0;t=e.ray;let f=this.matrixWorld,c=this.geometry,u=this.material;if(n=u.linewidth+l,null===c.boundingSphere&&c.computeBoundingSphere(),B.copy(c.boundingSphere).applyMatrix4(f),a)r=.5*n;else{let e=Math.max(s.near,B.distanceToPoint(t.origin));r=P(s,e,u.resolution)}if(B.radius+=r,!1!==t.intersectsSphere(B)){if(null===c.boundingBox&&c.computeBoundingBox(),M.copy(c.boundingBox).applyMatrix4(f),a)o=.5*n;else{let e=Math.max(s.near,M.distanceToPoint(t.origin));o=P(s,e,u.resolution)}M.expandByScalar(o),!1!==t.intersectsBox(M)&&(a?function(e,i){let r=e.matrixWorld,o=e.geometry,a=o.attributes.instanceStart,s=o.attributes.instanceEnd,l=Math.min(o.instanceCount,a.count);for(let o=0;o<l;o++){O.start.fromBufferAttribute(a,o),O.end.fromBufferAttribute(s,o),O.applyMatrix4(r);let l=new d.Vector3,f=new d.Vector3;t.distanceSqToSegment(O.start,O.end,f,l),f.distanceTo(l)<.5*n&&i.push({point:f,pointOnLine:l,distance:t.origin.distanceTo(f),object:e,face:null,faceIndex:o,uv:null,[w]:null})}}(this,i):function(e,i,r){let o=i.projectionMatrix,a=e.material.resolution,s=e.matrixWorld,l=e.geometry,f=l.attributes.instanceStart,c=l.attributes.instanceEnd,u=Math.min(l.instanceCount,f.count),p=-i.near;t.at(1,_),_.w=1,_.applyMatrix4(i.matrixWorldInverse),_.applyMatrix4(o),_.multiplyScalar(1/_.w),_.x*=a.x/2,_.y*=a.y/2,_.z=0,L.copy(_),U.multiplyMatrices(i.matrixWorldInverse,s);for(let i=0;i<u;i++){if(E.fromBufferAttribute(f,i),A.fromBufferAttribute(c,i),E.w=1,A.w=1,E.applyMatrix4(U),A.applyMatrix4(U),E.z>p&&A.z>p)continue;if(E.z>p){let e=E.z-A.z,t=(E.z-p)/e;E.lerp(A,t)}else if(A.z>p){let e=A.z-E.z,t=(A.z-p)/e;A.lerp(E,t)}E.applyMatrix4(o),A.applyMatrix4(o),E.multiplyScalar(1/E.w),A.multiplyScalar(1/A.w),E.x*=a.x/2,E.y*=a.y/2,A.x*=a.x/2,A.y*=a.y/2,O.start.copy(E),O.start.z=0,O.end.copy(A),O.end.z=0;let l=O.closestPointToPointParameter(L,!0);O.at(l,z);let u=d.MathUtils.lerp(E.z,A.z,l),h=u>=-1&&u<=1,m=L.distanceTo(z)<.5*n;if(h&&m){O.start.fromBufferAttribute(f,i),O.end.fromBufferAttribute(c,i),O.start.applyMatrix4(s),O.end.applyMatrix4(s);let n=new d.Vector3,o=new d.Vector3;t.distanceSqToSegment(O.start,O.end,o,n),r.push({point:o,pointOnLine:n,distance:t.origin.distanceTo(o),object:e,face:null,faceIndex:i,uv:null,[w]:null})}}}(this,s,i))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(S),this.material.uniforms.resolution.value.set(S.z,S.w))}}class j extends h{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,i=new Float32Array(2*n);if(3===t)for(let r=0;r<n;r+=t)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];else for(let r=0;r<n;r+=t)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5],i[2*r+6]=e[r+6],i[2*r+7]=e[r+7];return super.setColors(i,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class T extends D{constructor(e=new j,t=new g({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let I=r.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:i,lineWidth:o,segments:a,dashed:d,...c},u){var p,m;let v=(0,f.C)(e=>e.size),y=r.useMemo(()=>a?new D:new T,[a]),[w]=r.useState(()=>new g),S=(null==n||null==(p=n[0])?void 0:p.length)===4?4:3,b=r.useMemo(()=>{let i=a?new h:new j,r=e.map(e=>{let t=Array.isArray(e);return e instanceof l.Vector3||e instanceof l.Vector4?[e.x,e.y,e.z]:e instanceof l.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(i.setPositions(r.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof l.Color?e.toArray():e);i.setColors(e.flat(),S)}return i},[e,a,n,S]);return r.useLayoutEffect(()=>{y.computeLineDistances()},[e,y]),r.useLayoutEffect(()=>{d?w.defines.USE_DASH="":delete w.defines.USE_DASH,w.needsUpdate=!0},[d,w]),r.useEffect(()=>()=>{b.dispose(),w.dispose()},[b]),r.createElement("primitive",(0,s.default)({object:y,ref:u},c),r.createElement("primitive",{object:b,attach:"geometry"}),r.createElement("primitive",(0,s.default)({object:w,attach:"material",color:t,vertexColors:!!n,resolution:[v.width,v.height],linewidth:null!=(m=null!=i?i:o)?m:1,dashed:d,transparent:4===S},c)))});var R=e.i(21395),V=e.i(43430);function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(t){H(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function F(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}new l.Vector2,new l.Vector2;var G=function e(t,n,i){var r=this;F(this,e),H(this,"dot2",function(e,t){return r.x*e+r.y*t}),H(this,"dot3",function(e,t,n){return r.x*e+r.y*t+r.z*n}),this.x=t,this.y=n,this.z=i},q=[new G(1,1,0),new G(-1,1,0),new G(1,-1,0),new G(-1,-1,0),new G(1,0,1),new G(-1,0,1),new G(1,0,-1),new G(-1,0,-1),new G(0,1,1),new G(0,-1,1),new G(0,1,-1),new G(0,-1,-1)],k=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],K=Array(512),J=Array(512),X=0;(X=Math.floor(X))<256&&(X|=X<<8);for(var $,Q=0;Q<256;Q++)$=1&Q?k[Q]^255&X:k[Q]^X>>8&255,K[Q]=K[Q+256]=$,J[Q]=J[Q+256]=q[$%12];function Y(e){var t=function(e){if("number"==typeof e)e=Math.abs(e);else if("string"==typeof e){var t=e;e=0;for(var n=0;n<t.length;n++)e=(e+(n+1)*(t.charCodeAt(n)%96))%0x7fffffff}return 0===e&&(e=311),e}(e);return function(){var e=48271*t%0x7fffffff;return t=e,e/0x7fffffff}}var Z=new function e(t){var n=this;F(this,e),H(this,"seed",0),H(this,"init",function(e){n.seed=e,n.value=Y(e)}),H(this,"value",Y(this.seed)),this.init(t)}(Math.random()),ee={radius:1,center:[0,0,0]};function et(){let e=(0,r.useRef)(null),t=(0,r.useMemo)(()=>{let e=[];for(let t=0;t<50;t++){let t=(Math.random()-.5)*20,n=(Math.random()-.5)*20,i=(Math.random()-.5)*10;e.push(new l.Vector3(t,n,i)),e.push(new l.Vector3(t+(Math.random()-.5),n+(Math.random()-.5),i))}return e},[]);return(0,a.useFrame)(t=>{e.current&&(e.current.rotation.y=.05*t.clock.getElapsedTime())}),(0,i.jsx)("group",{ref:e,children:(0,i.jsx)(I,{worldUnits:!0,points:t,color:"#00f0ff",lineWidth:.5,opacity:.2,transparent:!0})})}function en(){let e=(0,r.useRef)(null),t=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Z,i=W(W({},ee),t),r=i.radius,o=i.center,a=0;a<e.length;a+=3){var s=Math.pow(n.value(),1/3),l=2*n.value()-1,f=2*n.value()-1,d=2*n.value()-1,c=Math.sqrt(l*l+f*f+d*d);l=s*l/c,f=s*f/c,d=s*d/c,e[a]=l*r+o[0],e[a+1]=f*r+o[1],e[a+2]=d*r+o[2]}return e}(new Float32Array(500),{radius:10});return(0,a.useFrame)((t,n)=>{e.current&&(e.current.rotation.x-=n/15,e.current.rotation.y-=n/20)}),(0,i.jsx)("group",{rotation:[0,0,Math.PI/4],children:(0,i.jsx)(R.Points,{ref:e,positions:t,stride:3,frustumCulled:!1,children:(0,i.jsx)(V.PointMaterial,{transparent:!0,color:"#8b5cf6",size:.03,sizeAttenuation:!0,depthWrite:!1})})})}function ei(){return(0,i.jsx)("div",{className:"fixed inset-0 z-0 pointer-events-none opacity-40",children:(0,i.jsxs)(o.Canvas,{camera:{position:[0,0,5]},children:[(0,i.jsx)(et,{}),(0,i.jsx)(en,{})]})})}e.s(["default",()=>ei],75221)}]);