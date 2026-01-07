========================================
Backend Deployment Package
========================================

This directory contains all files needed to deploy the backend
as a separate Node.js application on xmarthost.

DEPLOYMENT STEPS:
================

1. Upload this entire 'backend-deploy/' directory to:
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
