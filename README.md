# Name

TFSD-Assignment

# Project Description

This project is a React application built with a custom Webpack and Babel setup. It features structured React components styled with CSS and emphasizes an educational approach to manually configuring the React build process. The project utilizes ESLint for maintaining code quality and Husky for enforcing pre-commit hooks, ensuring that code adheres to style rules before commits. It is licensed under the MIT License, allowing for free use and contributions. This description succinctly captures the essence of your project while including the necessary details about ESLint, Husky, and licensing. If you need further modifications or additional information, feel free to ask!

## Project Features

- Linting and auto-fixing code with ESLint.
- Code formatting with Prettier.
- Enforcing code quality with Husky pre-commit hooks.
- Optimized build setup with Webpack.
- Test code with Jest.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install foobar.

```bash
cd webpack-build
npm install
```

## Start the Development Server

Run the application in development mode:

```
npm run start

```

## How It Works

Run Eslint/Formatter/Fix-Eslint

```
# 'find lint issues'
npm run lint

# 'fix lint issues'
npm run lint:fix

# 'fix formating issues'
npm run format

# 'Lint and Format Code'
npm run pc

# 'Prepare Husky Hooks'
npm run prepare

# 'Generate Documentation'
npm run generate-docs
```

## Support

Node Version: `^18.18.0`

## Usage

You can use the following commands to maintain code quality and documentation in the project: `npm run lint:fix` automatically fixes issues found by ESLint, ensuring that your code follows the defined linting rules. npm run format formats your code according to the specified style guide (e.g., Prettier). `npm run pc` likely runs a custom script, such as running tests or building the project, but the exact behavior depends on its setup. `npm run prepare` typically sets up hooks (like Husky) or other preparation tasks before a commit or deployment. Finally, `npm run generate-docs` generates the documentation for your project, helping you keep the docs up to date.

## Config

### ESLint: `.eslint.config.json`

This snippet is part of the setup for an **ESLint** configuration in a JavaScript or React project. It imports several necessary packages to ensure that the code follows best practices and standards:

- **`globals`**: Provides a set of predefined global variables for various environments (e.g., browser, Node.js).
- **`@eslint/js`**: A plugin for basic JavaScript linting rules.
- **`eslint-plugin-react`**: A plugin for enforcing React-specific linting rules.
- **`eslint-plugin-import`**: A plugin that helps ensure proper import/export syntax and consistency.

By using these plugins, you can enforce code style, maintainability, and prevent potential issues in your JavaScript or React project.

### Prettier `.prettierrc.json`

Prettier Configuration

The following configuration is part of the Prettier setup for the project:

```json
{
  "singleQuote": true
}
```

### Husky:

Automates Git hooks (e.g., pre-commit, pre-push) to enforce code quality checks like linting or formatting before code is committed.

```
# install package
npm install husky --save-dev

# create a new file and add script commond
touch .husky/pre-commit

# put script
"prepare": "husky"

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the MIT License.
