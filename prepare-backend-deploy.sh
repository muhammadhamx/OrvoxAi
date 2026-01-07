#!/bin/bash

# Script to prepare backend for deployment in a separate directory
# This solves the xmarthost limitation where you can't deploy in a subdirectory

echo "🚀 Preparing Backend for Deployment in Separate Directory..."
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
BACKEND_DIR="backend"
DEPLOY_DIR="backend-deploy"
SERVER_PATH="${DEPLOY_DIR}/server.js"

# Step 1: Create deployment directory
echo -e "${YELLOW}Step 1: Creating deployment directory...${NC}"
rm -rf ${DEPLOY_DIR}
mkdir -p ${DEPLOY_DIR}
echo -e "${GREEN}✓ Created ${DEPLOY_DIR}/${NC}"

# Step 2: Copy backend files
echo -e "${YELLOW}Step 2: Copying backend files...${NC}"

# Copy essential files and directories
cp -r ${BACKEND_DIR}/dist ${DEPLOY_DIR}/
cp -r ${BACKEND_DIR}/prisma ${DEPLOY_DIR}/
cp -r ${BACKEND_DIR}/uploads ${DEPLOY_DIR}/ 2>/dev/null || mkdir -p ${DEPLOY_DIR}/uploads
cp ${BACKEND_DIR}/package.json ${DEPLOY_DIR}/
cp ${BACKEND_DIR}/package-lock.json ${DEPLOY_DIR}/ 2>/dev/null || true
cp ${BACKEND_DIR}/tsconfig.json ${DEPLOY_DIR}/ 2>/dev/null || true
cp ${BACKEND_DIR}/nest-cli.json ${DEPLOY_DIR}/ 2>/dev/null || true
cp ${BACKEND_DIR}/prisma.config.ts ${DEPLOY_DIR}/ 2>/dev/null || true
cp ${BACKEND_DIR}/prisma.config.js ${DEPLOY_DIR}/ 2>/dev/null || true

# Copy server.js to the root of deploy directory
cp ${BACKEND_DIR}/server.js ${DEPLOY_DIR}/server.js

echo -e "${GREEN}✓ Files copied${NC}"

# Step 3: Create .gitignore for deployment
echo -e "${YELLOW}Step 3: Creating .gitignore...${NC}"
cat > ${DEPLOY_DIR}/.gitignore << EOF
node_modules/
.env
.env.local
*.log
.DS_Store
EOF
echo -e "${GREEN}✓ .gitignore created${NC}"

# Step 4: Create deployment instructions
echo -e "${YELLOW}Step 4: Creating deployment instructions...${NC}"
cat > ${DEPLOY_DIR}/DEPLOY_README.txt << EOF
========================================
Backend Deployment Package
========================================

This directory contains all files needed to deploy the backend
as a separate Node.js application on xmarthost.

DEPLOYMENT STEPS:
================

1. Upload this entire '${DEPLOY_DIR}/' directory to:
   /home2/orvoxaic/public_html/api/
   
   (You can rename 'api' to whatever you want, but make sure
   it's NOT inside the OrvoxAi directory)

2. In xmarthost Node.js App Manager:
   - Create a NEW application
   - Application Root: /home2/orvoxaic/public_html/api
   - Startup File: server.js
   - Node Version: 20.x or 22.x
   - Mode: Production

3. Set Environment Variables:
   NODE_ENV=production
   PORT=3001
   FRONTEND_URL=https://orvoxai.com
   DATABASE_URL=your_database_url_here
   JWT_SECRET=your_jwt_secret_here

4. SSH into server and run:
   cd /home2/orvoxaic/public_html/api
   npm install --production
   
   (If dist folder is missing, also run: npm run build)

5. Start the application in xmarthost panel

IMPORTANT:
==========
- Do NOT deploy this inside /OrvoxAi/ directory
- It must be a separate directory at the same level
- Example: /public_html/api/ (NOT /public_html/OrvoxAi/api/)

========================================
EOF

echo -e "${GREEN}✓ Instructions created${NC}"

# Step 5: Create tarball for easy upload
echo -e "${YELLOW}Step 5: Creating deployment tarball...${NC}"
tar -czf ${DEPLOY_DIR}.tar.gz ${DEPLOY_DIR}/
echo -e "${GREEN}✓ Created ${DEPLOY_DIR}.tar.gz${NC}"

echo ""
echo -e "${GREEN}✅ Backend deployment package ready!${NC}"
echo ""
echo "Next steps:"
echo "1. Upload ${DEPLOY_DIR}/ directory to: /home2/orvoxaic/public_html/api/"
echo "   OR upload ${DEPLOY_DIR}.tar.gz and extract it on the server"
echo "2. Create a new Node.js app in xmarthost pointing to /home2/orvoxaic/public_html/api"
echo "3. See ${DEPLOY_DIR}/DEPLOY_README.txt for detailed instructions"
echo ""
echo "⚠️  Remember: The 'api' directory must be at the SAME LEVEL as 'OrvoxAi',"
echo "   NOT inside it! This is required by xmarthost."
echo ""

