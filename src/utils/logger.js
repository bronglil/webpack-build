import log from 'loglevel';
import chalk from 'chalk';

// Define the colors for each log level
const levelColors = {
  trace: chalk.gray,
  debug: chalk.blue,
  info: chalk.green,
  warn: chalk.yellow,
  error: chalk.red,
  silent: chalk.white,
};

// Set up the logger instance and the default log level
const customLogger = log.getLogger('app-logger');
customLogger.setLevel('trace'); // Set the default log level to 'trace'

// Array to hold log messages for later export to file
const logMessages = [];

// Function to log messages with color based on the level
const logWithColor = (level, message) => {
  const timestamp = new Date().toISOString();
  const coloredMessage = levelColors[level](message);
  const logMessage = `${timestamp} - ${level.toUpperCase()}: ${message}`;

  // Store log message in the array
  logMessages.push(logMessage);

  // Log the message to the console
  customLogger[level](coloredMessage);

  // Log the message to the browser console
  console[level](coloredMessage);
};

// Function to download logs as a text file
const downloadLogFile = () => {
  const logContent = logMessages.join('\n');
  const blob = new Blob([logContent], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'logs.txt'; // Name of the file to download
  link.click(); // Trigger download
};

export { logWithColor, downloadLogFile };
