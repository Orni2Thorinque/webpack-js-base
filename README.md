# webpack-js-base
## Purpose
Base material to develop a JS wrapper project bundling multiple JS, CSS files into single index.html to deploy
Handles versioning through manifest.json file configuration.

## Installation
Run npm install
Uses ESLint to enforce javascript es6 conding style. Plugin ESLint available for multiple code-editors.

## Scripts
    npm run dev-server: Launch dev server on port 8081 with hot reload on src files
    npm run dev: Run re-bundling on src on change 
    npm run start-server: Launch http-server based on NodeJS in dist folder
    npm run build: Run src bundling in webpack 4 production mode
    npm run lint: Lint JS code
