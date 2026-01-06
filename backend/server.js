// Server entry point for cPanel Node.js App Manager (Backend)
// This file starts the NestJS backend application

// Set default environment variables if not provided
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.PORT = process.env.PORT || '3001';

// Start the compiled NestJS application
require('./dist/main.js');

