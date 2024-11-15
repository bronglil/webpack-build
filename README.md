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


## Prerequisites

To build and run this project, you will need:

- **Node.js** (version 14 or above)
- **npm** (Node Package Manager, which comes with Node.js)
- **Serve** (Optional: for serving production builds locally):

  ## Getting Started
  
1. Clone the Repository
Clone the project to your local machine:

```
git clone git@github.com:bronglil/webpack-build.git

```

2. Install Dependencies
   Navigate to the project directory and install the required dependencies:

```
cd <project-folder>
npm install
```
3. Start the Development Server
Run the application in development mode:
```
npm start
```
This will start the Webpack Dev Server and open the app in your default browser.

## Building for Production
To create an optimized production build:
```
npm run build
```

The production files will be output to the dist directory.
You can test the production build locally using Serve:

```
serve -s dist
```

## Testing
Run unit tests using the following command:
```
npm test
```
Unit tests are written using Jest and React Testing Library.

## Project Overview
## Key Features:
- Custom Webpack Configuration: Fully manual setup for development and production environments. 
- Hot Module Replacement: Automatically updates modules in development.
- CSS Support: Configured CSS loaders for styling components.
- Unit Testing: Included Jest and React Testing Library setup.
- Optimized Production Builds: Minimized and efficient assets for deployment.

## Highlights:
- Demonstrates a non-trivial codebase.
- Focused on manual React + Webpack configurations for learning.

```
root
├── src
│   ├── components    # React components
│   ├── .styles        # CSS files
│   ├── .test.js        # jest testing file
│   └── index.js      # Entry point for the app
├── dist              # Production build output
├── package.json      # Project dependencies and scripts
├── webpack.config.js # Webpack configuration
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


## License
This project is licensed under the MIT License.

```

This comprehensive README covers everything a user or contributor needs to get started, from setup to understanding the project structure and technologies used. Let me know if you need further customizations!
```
