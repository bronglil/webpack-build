import { logWithColor } from './logger';


const fetchData = async () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  logWithColor('trace', 'Entering fetchData function', ['FETCH', 'API_CALL']);

  try {
    logWithColor('debug', `Starting to fetch data from: ${apiUrl}`, [
      'FETCH',
      'API_CALL',
    ]);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      logWithColor(
        'warn',
        `The response was not ok, received status: ${response.status}`,
        ['API_CALL', 'RESPONSE_CHECK'],
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
      logWithColor('warn', 'No posts found in the API response', [
        'API_CALL',
        'NO_POSTS',
      ]);
    }

    return result; // Return the fetched data
  } catch (error) {
    logWithColor('error', `Error during data fetching: ${error.message}`);
    throw error; // Re-throw the error to be handled by the calling function
  }
};

export default fetchData;
