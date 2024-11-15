## Prerequisites

To build and run this project, you will need:

- **Node.js** (version 14 or above)
- **npm** (Node Package Manager, which comes with Node.js)

## Instruction to Start the Project

- **Run Project**    npm start or npm run start
- **Build Project**  npm build or npm run build
- **Test Project**   npm test or npm run test
- **serve -s dist**    serve -s dist  <!-- - (Serves the dist folder locally to test the production build (only if serve is installed) -->

# Webpack Assignment

This project is a **React application** using a custom Webpack setup. It is built to demonstrate a non-trivial codebase with a functional React component that includes a button, title, and description, styled with CSS. The primary objective is educational, illustrating how to configure a build process for a React project using Webpack and Babel without relying on `create-react-app`.

## Project Overview

This project showcases:
- **Webpack** for managing and bundling assets.
- **Babel** to transpile JSX and ES6+ syntax for browser compatibility.
- **Webpack Dev Server** to provide a local development environment with hot-reloading.
- **Jest** and **React Testing Library** for unit testing.

### Key Features
- Custom Webpack configuration for development and production builds.
- CSS and JSX support through Babel and CSS loaders.
- Unit tests for React components.
- Simple component structure with scoped styling for maintainable code.

## Project Scope

This project meets the non-trivial codebase requirement by:
1. Including a structured and styled React component.
2. Relying on multiple dependencies (e.g., Webpack, Babel, Jest).
3. Illustrating a build setup for both local development and production deployment.

### Technologies and External Libraries

- **React**: For building the user interface.
- **React DOM**: For rendering React components to the DOM.
- **Webpack**: For bundling JavaScript, CSS, and other assets.
- **Babel**: To convert JSX and modern JavaScript into browser-compatible code.
- **Jest**: For running tests.
- **React Testing Library**: For testing React components.

This configuration provides a foundation for building React applications while focusing on manual setup and control over the build process.

