import chalk from 'chalk';
import log from 'loglevel';

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

// Function to log messages with color based on the level and tags
const logWithColor = (level, message, tags = []) => {
  const timestamp = new Date().toISOString();

  // Check if the provided level is valid
  if (!levelColors[level]) {
    console.error(`Invalid log level: ${level}. Defaulting to 'info'.`);
    level = 'info'; // Default to 'info' if invalid
  }

  const coloredTags = tags.map((tag) => chalk.cyan(`[${tag}]`)).join(' ');
  const coloredMessage = levelColors[level](message);

  const formattedMessage = `${timestamp} - ${coloredTags} ${level.toUpperCase()}: ${coloredMessage}`;

  logMessages.push(formattedMessage);

  customLogger[level](formattedMessage);

  console[level](formattedMessage);
};

const downloadLogFile = () => {
  const logContent = logMessages.join('\n');
  const blob = new Blob([logContent], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'logs.txt'; // Name of the file to download
  link.click(); // Trigger download
};

export { logWithColor, downloadLogFile };
