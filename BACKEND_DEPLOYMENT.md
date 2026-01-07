# Backend Deployment Guide for xmarthost

## Problem
You've already deployed the frontend using the root directory (`/home2/orvoxaic/public_html/OrvoxAi/`) with `server.js` as the startup file. xmarthost **does not allow** creating a Node.js application in a subdirectory (`/OrvoxAi/backend`) of an existing application.

## Solution
Deploy the backend in a **completely separate directory** at the same level as your frontend, not as a subdirectory.

## Steps to Deploy Backend on xmarthost

### 1. Create a New Node.js Application in xmarthost

1. Log into your xmarthost cPanel
2. Navigate to **Node.js App Manager** (or **Node.js Selector**)
3. Click **"Create Application"** or **"Add Application"**

### 2. Choose a Separate Directory for Backend

**⚠️ CRITICAL**: You must use a directory that is **NOT** a subdirectory of your frontend app.

**Recommended paths:**
- `/home2/orvoxaic/public_html/api` (recommended)
- `/home2/orvoxaic/public_html/backend-api`
- `/home2/orvoxaic/public_html/orvox-backend`

### 3. Upload Backend Files to the New Directory

You need to copy all backend files to the new separate directory. See the script below for automated setup.

**Directory structure should be:**
```
/home2/orvoxaic/public_html/
├── OrvoxAi/              (Frontend - already deployed)
│   ├── server.js
│   ├── .next/
│   └── ...
└── api/                  (Backend - NEW separate directory)
    ├── server.js
    ├── dist/
    ├── package.json
    ├── node_modules/
    └── ... (all backend files)
```

### 4. Configure the Backend Application in xmarthost

When creating the new application, use these settings:

- **Application Root**: `/home2/orvoxaic/public_html/api`
  - ⚠️ **Important**: This is a separate directory, NOT a subdirectory of OrvoxAi
  
- **Application URL**: Choose a subdomain or path like:
  - `api.orvoxai.com` (if you have subdomain setup)
  - OR use a path like `/api` (if using same domain)
  
- **Application Startup File**: `server.js`
  - This will use `/api/server.js` automatically since the root is set to `api/`

- **Application Mode**: `Production`

- **Node.js Version**: `20.x` or `22.x` (match your local version)

### 5. Environment Variables

Set these environment variables in the Node.js App Manager:

```
NODE_ENV=production
PORT=3001
FRONTEND_URL=https://orvoxai.com
DATABASE_URL=your_database_url_here
```

### 6. Build Commands (if needed)

If xmarthost requires build commands, you might need:

- **Build Command**: `npm install && npm run build`
- **Start Command**: (usually auto-detected from server.js)

### 7. Install Dependencies

After uploading, SSH into your server and run:

```bash
cd /home2/orvoxaic/public_html/api
npm install --production
```

Or if you need to build:

```bash
cd /home2/orvoxaic/public_html/api
npm install
npm run build
```

### 8. Start the Application

In xmarthost Node.js App Manager:
- Click on your backend application
- Click **"Start App"** or **"Restart App"**

## Quick Setup Script

To prepare backend files for deployment in a separate directory, use the provided script:

```bash
./prepare-backend-deploy.sh
```

This script will:
- Create a `backend-deploy/` directory with all necessary files
- Copy all backend files (dist, package.json, server.js, etc.)
- Create a tarball for easy upload
- Generate deployment instructions

**Manual Alternative:**
1. Create the new directory on your server: `/home2/orvoxaic/public_html/api`
2. Copy all files from `backend/` folder to the new `api/` directory
3. Make sure `server.js` is in the root of the `api/` directory

## Verify Deployment

1. Check backend is running: Visit your backend URL (e.g., `https://api.orvoxai.com` or `https://orvoxai.com:3001`)
2. Check logs in xmarthost Node.js App Manager
3. Test API endpoints from your frontend

## Important Notes

- **Different Ports**: Frontend and backend will run on different ports
  - Frontend: Usually port 3000 (or whatever you configured)
  - Backend: Port 3001 (as set in `backend/server.js`)

- **CORS Configuration**: Make sure your backend CORS settings allow your frontend domain

- **Database**: Ensure your backend has access to the database and environment variables are set correctly

## Troubleshooting

### "Path already used" or "Path not allowed" error
- **This is the main issue**: xmarthost doesn't allow subdirectories of existing apps
- **Solution**: Use a completely separate directory like `/home2/orvoxaic/public_html/api` (NOT `/home2/orvoxaic/public_html/OrvoxAi/backend`)
- Make sure the new directory is at the same level as `OrvoxAi/`, not inside it

### Backend not starting
- Check that `backend/dist/src/main.js` exists (backend must be built)
- Verify `backend/server.js` is in the correct location
- Check Node.js logs in xmarthost panel

### Port conflicts
- Backend uses port 3001 by default (configured in `backend/server.js`)
- Frontend uses port 3000 by default
- Make sure these don't conflict with other applications

