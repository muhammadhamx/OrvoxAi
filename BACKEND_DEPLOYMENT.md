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

### 4. Configure the Backend Application in xmarthost (CloudLinux NodeJS Selector)

When creating the new application, use these settings:

- **Application Root**: `public_html/api`
  - ⚠️ **CRITICAL**: Use `public_html/api` NOT `public_html/api/backend`
  - The full path will be: `/home2/orvoxaic/public_html/api`
  - This is a separate directory, NOT a subdirectory of OrvoxAi
  
- **Application URL**: `api`
  - This will make your backend accessible at: `http://orvoxai.com/api/`
  
- **Application Startup File**: `server.js`
  - This file must be directly in `public_html/api/server.js`
  - NOT in `public_html/api/backend/server.js`

- **Application Mode**: `Production`
  - This sets `NODE_ENV=production`

- **Node.js Version**: `22.x` (or `20.x` - match your local version)

- **⚠️ IMPORTANT - CloudLinux Virtual Environment**:
  - CloudLinux stores `node_modules` in a separate virtual environment
  - The `node_modules` folder in your app root will be a **symlink**
  - **DO NOT** upload a `node_modules` folder - let CloudLinux create the symlink
  - After uploading files, use "Run NPM Install" button in the Node.js Selector

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

### 7. Install Dependencies (CloudLinux Method)

**Option 1: Using Node.js Selector (Recommended)**
1. In the Node.js Selector, find your application
2. Click **"Run NPM Install"** button
3. This will install dependencies in the virtual environment and create the symlink

**Option 2: Using SSH**
```bash
cd /home2/orvoxaic/public_html/api
npm install --production
```

**If you need to rebuild:**
```bash
cd /home2/orvoxaic/public_html/api
npm install
npm run build
```

**⚠️ Note**: CloudLinux will automatically create a `node_modules` symlink pointing to the virtual environment. Do not manually create or upload a `node_modules` folder.

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
- **Solution**: Use a completely separate directory like `public_html/api` (NOT `public_html/api/backend`)
- Make sure the new directory is at the same level as `OrvoxAi/`, not inside it

### Backend showing "It works!" instead of API responses
- **Check Application Root**: Must be `public_html/api` NOT `public_html/api/backend`
- **Verify file structure**: `server.js` must be in `public_html/api/server.js` (not in a subdirectory)
- **Check logs**: Look at Node.js application logs in CloudLinux Node.js Selector
- **Verify dist folder**: Ensure `dist/src/main.js` exists in the application root

### Backend not starting
- Check that `dist/src/main.js` exists (backend must be built)
- Verify `server.js` is in the correct location: `public_html/api/server.js`
- Check Node.js logs in CloudLinux Node.js Selector
- Verify environment variables are set (DATABASE_URL, PORT, etc.)
- Make sure "Run NPM Install" was executed successfully

### node_modules issues
- **CloudLinux uses virtual environments**: The `node_modules` folder is a symlink
- **Do NOT upload node_modules**: Let CloudLinux create it via "Run NPM Install"
- If you see errors about missing modules, run "Run NPM Install" again

### Port conflicts
- Backend uses port 3001 by default (configured in `server.js`)
- Frontend uses port 3000 by default
- Make sure these don't conflict with other applications
- CloudLinux may assign ports automatically - check the application settings

