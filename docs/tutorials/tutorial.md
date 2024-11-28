## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setting Up the Project](#setting-started)
3. [Running the Development Server](#Development-Server)
4. [Script](#NPM Scripts)




## Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- **Node.js** (version 14 or above)
- **npm** (Node Package Manager, which comes with Node.js)
- **yarn** (Node Package Manager)
- **Serve** (Optional: for serving production builds locally):


    ## Setting-started

## 1.clone the repository
Clone the project to your local machine:

```
ssh:

git clone git@github.com:bronglil/webpack-build.git

https:

https://github.com/bronglil/webpack-build.git

```

## 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```
cd <project-folder>
npm install / yarn 
```

##  Start Development-Server

Run the application in development mode:

```
npm start / yarn start / yarn serve / npm serve

```

This will start the Webpack Dev Server and open the app in your default browser.




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



## For Detailed Documentation, Please Refer Here
For a more comprehensive guide on setting up, running, and managing the project, please refer to the full documentation in the [README.md](https://github.com/bronglil/webpack-build/blob/main/README.md).
