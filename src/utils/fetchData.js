import { logWithColor } from './logger';

const fetchData = async () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  logWithColor('trace', 'Entering fetchData function');

  try {
    logWithColor('debug', `Starting to fetch data from: ${apiUrl}`);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      logWithColor(
        'warn',
        `The response was not ok, received status: ${response.status}`,
      );
      throw new Error('Failed to fetch data');
    }

    const result = await response.json();
    logWithColor(
      'debug',
      `Data fetched successfully, number of posts: ${result.length}`,
    );
    logWithColor(
      'trace',
      `Fetched data: ${JSON.stringify(result.slice(0, 3))}`,
    );

    if (result.length === 0) {
      logWithColor('warn', 'No posts found in the API response');
    }

    return result; // Return the fetched data
  } catch (error) {
    logWithColor('error', `Error during data fetching: ${error.message}`);
    throw error; // Re-throw the error to be handled by the calling function
  }
};

export default fetchData;
