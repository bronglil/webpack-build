import chalk from 'chalk';
import log from 'loglevel';

const levelColors = {
  trace: chalk.gray,
  debug: chalk.blue,
  info: chalk.green,
  warn: chalk.yellow,
  error: chalk.red,
  silent: chalk.white,
};

const customLogger = log.getLogger('app-logger');
customLogger.setLevel('trace');

const logMessages = [];

const logWithColor = (level, message, tags = [], format = '{timestamp} - [{level}] {tags} {message}') => {
  const timestamp = new Date().toISOString();

  if (!levelColors[level]) {
    console.error(`Invalid log level: ${level}. Defaulting to 'info'.`);
    level = 'info';
  }

  const coloredTags = tags.length > 0 ? tags.map(tag => chalk.cyan(`[${tag}]`)).join(' ') : '';
  const coloredMessage = levelColors[level](message);

  const formattedMessage = format
    .replace('{timestamp}', timestamp)
    .replace('{level}', level.toUpperCase())
    .replace('{tags}', coloredTags)
    .replace('{message}', coloredMessage);

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
