# Astro Serverless Function Issue

This repository is a minimal reproducible example demonstrating an issue with deploying an Astro project using Vercel's serverless functions. The problem arises because the `dist/server` folder is not generated during the build process, preventing Vercel from finding the necessary `entry.mjs` file to properly handle server-side rendering and serverless functions.

## The Issue

After running `npm run build`, the expected `dist/server` folder is not generated. This is problematic because Vercel requires `dist/server/entry.mjs` to correctly deploy and handle serverless functions. Without this file, deploying to Vercel results in an `ERR_MODULE_NOT_FOUND` error.

## Expected Behavior
- The build process should generate `dist/server/entry.mjs`.
- Vercel should be able to locate this file and deploy the project without issues.

## Current Behavior
- The `dist/server/` folder is missing after `npm run build`.
- Deploying to Vercel fails because `entry.mjs` is not found.