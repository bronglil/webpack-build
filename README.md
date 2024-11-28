This project is a **React application** built with a custom **Webpack** and **Babel** setup. It includes a structured React component styled with CSS and focuses on an educational approach to configuring a React build process manually.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
   - [Clone the Repository](#1-clone-the-repository)
   - [Install Dependencies](#2-install-dependencies)
   - [Start the Development Server](#3-start-the-development-server)
3. [Building for Production](#building-for-production)
4. [Testing](#testing)
5. [Project Overview](#project-overview)
6. [Folder Structure](#folder-structure)
7. [Technologies Used](#technologies-used)
8. [Contribution](#contribution)
9. [License](#license)
10. [ESLint&Husky](#ESLint and Husky)
11. [NPM](#NPM Scripts)
12. [JSDoc](#Generating JSDoc Reference Documentation)

---

## Prerequisites

To build and run this project, you will need:

- **Node.js** (version 14 or above)
- **npm** (Node Package Manager, which comes with Node.js)
- **Serve** (Optional: for serving production builds locally):

  ## Getting Started

## 1.clone the repository

Clone the project to your local machine:

```
git clone git@github.com:bronglil/webpack-build.git

```

## 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```
cd <project-folder>
npm install
```

## 3. Start the Development Server

Run the application in development mode:

```
npm start / yarn start / yarn serve / npm serve

```

This will start the Webpack Dev Server and open the app in your default browser.

## Building for Production

To create an optimized production build:

```
npm run build
```

## Testing

Run unit tests using the following command:

```
npm test / yarn test

```

Unit tests are written using Jest and React Testing Library.

## Project Overview

## Key Features:

- Custom Webpack Configuration: Fully manual setup for development and production environments.
- Hot Module Replacement: Automatically updates modules in development.
- CSS Support: Configured CSS loaders for styling components.
- Unit Testing: Included Jest and React Testing Library setup.
- Optimized Production Builds: Minimized and efficient assets for deployment.

## Folder Structure:

- Demonstrates a non-trivial codebase.
- Focused on manual React + Webpack configurations for learning.

```
root
├── src
│   ├── components  # React components
│   ├── utils
│   ├── .styles        # CSS files
│   ├── .test.js        # jest testing file
│   └── index.js      # Entry point for the app
├── dist              # Production build output
├── package.json      # Project dependencies and scripts
├── webpack.config.js # Webpack configuration
├── eslint.config.mjs
├── prettierrc
├── env
└── README.md         # Documentation
```

## Technologies Used

- React: Library for building user interfaces.
- Webpack: Bundler for managing assets and modules.
- Babel: JavaScript compiler for modern syntax and JSX.
- Jest: Testing framework for JavaScript.

</hr>

## Contribution

Contributions are welcome! Please follow these steps:

1- Fork the repository:

2- Create a new branch:

```
git checkout -b branch-name
```

3- Commit your changes:

```
git commit -m "new message here"
```

4- Push to the branch:

```
git push origin branch
```

5- Open a Pull Request:

## ESLint and Husky

### **ESLint**:

ESLint is a tool for identifying and fixing problems in your JavaScript code. In this project, it is used to maintain consistent code quality and style across the project.

- **How to Run ESLint**:
  - To check for linting issues, run:
    ```bash
    npm run lint
    ```
  - To automatically fix fixable linting issues, run:
    ```bash
    npm run lint:fix
    ```
  - ESLint will analyze all `.js`, `.ts`, and `.tsx` files in your project, ensuring that your code adheres to predefined style rules.

### **Husky**:

Husky is used to enforce pre-commit and pre-push hooks for your Git workflow. It is used in this project to ensure that linting and formatting rules are followed before committing or pushing changes.

- **How Husky Works**:

  - Husky hooks are automatically set up when you run `npm install`. By default, Husky will ensure that linting and formatting checks are run on all files before committing:
    - **Pre-commit hook**: Before a commit is made, it will run `lint` and `format` to ensure that code is lint-free and formatted according to the project’s conventions.
    - **Pre-push hook**: Before pushing the commit to Git, Husky will check that all changes meet the necessary requirements (such as passing linting).

- **How to Run Husky**:

  - If you have Husky configured in your project, you don't need to manually trigger the hooks. Husky automatically runs the `lint` and `format` scripts when you make a commit or push.

  - You can also trigger Husky’s actions manually by running:

  ```bash
    npm run pc
  ```

  This ensures that Husky hooks are installed and ready to be used.

### **How to Configure Husky** (Optional):

If you need to customize Husky's hooks, you can modify the `.husky/` folder in the root directory of your project. The hooks are defined there and can be edited according to your preferences.

## Generating JSDoc Reference Documentation

To generate reference documentation for this project, we use **JSDoc**, a tool that automatically creates HTML documentation from comments in the JavaScript code.

### Steps to Generate JSDoc Documentation

1. **Install JSDoc**

   Install **JSDoc** as a development dependency in your project by running the following command:

   ```bash
   yarn add --dev jsdoc
   ```

````
2. **Run Script**
 - Run the following command to generate the JSDoc documentation:

  ```bash
  yarn generate-docs
````

## NPM Scripts

Here are the available NPM scripts for managing your project:

- **`npm run test / yarn test`**: Run unit tests using **Jest** in watch mode. This will continuously monitor the tests and re-run them whenever the files change.
- **`npm run serve / yarn serve`**: Start the app in development mode using **react-scripts**. This will run the app on a local development server with hot reloading.

- **`npm run start/ yarn start`**: Start the **Webpack Dev Server** in development mode. It will serve the app with live reloading and efficient bundling.

- **`npm run build / yarn`**: Build the project for **production** using **Webpack**. This will create a production-ready bundle in the `dist` folder, with optimized assets and code.

- **`npm run eject`**: Eject the configuration for **Create React App** (if used). This will give you full control over the configuration but is irreversible.

- **`npm run lint / yarn lint`**: Run **ESLint** to check for code quality issues and potential errors in your JavaScript and TypeScript files.

- **`npm run lint:fix / yarn lint:fix`**: Automatically fix linting issues using **ESLint**. This will fix any issues that can be resolved automatically, such as formatting and simple errors.

- **`npm run format / yarn format`**: Format your code using **Prettier**. This ensures consistent code formatting across your project.

- **`npm run pc/ yarn pc`**: Lint and fix the code, then format it using **Prettier**. This is a combined script to ensure your code is both lint-free and well-formatted in one command.
- **`npm generate-docs / yarn  generate-docs`**: Generate documentation for your project using **JSDoc**. This will generate documentation for your JavaScript and TypeScript files based on the comments in your code.

---

These scripts provide an easy way to manage and maintain your codebase, ensuring that it's well-tested, properly formatted, and following best practices.


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the MIT License.



```
This comprehensive README covers everything a user or contributor needs to get started, from setup to understanding the project structure and technologies used. Let me know if you need further customizations!
```
