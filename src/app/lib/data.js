const BASE_URL = 'https://678529b51ec630ca33a78452.mockapi.io/';

/**
 * Fetch all articles.
 * @returns {Promise<Object[]>} List of articles.
 */
export async function fetchArticles() {
  try {
    const response = await fetch(`${BASE_URL}articles`);
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw new Error('Failed to fetch articles.');
  }
}

/**
 * Fetch all rehab centers.
 * @returns {Promise<Object[]>} List of rehab centers.
 */
export async function fetchRehabCenters() {
  try {
    const response = await fetch(`${BASE_URL}rehabCenter`);
    if (!response.ok) {
      throw new Error(`Failed to fetch rehab centers: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching rehab centers:', error);
    throw new Error('Failed to fetch rehab centers.');
  }
}

/**
 * Fetch details of a specific rehab center by name.
 * @param {string} centerName - Name of the rehab center.
 * @returns {Promise<Object>} Details of the rehab center.
 */
export async function fetchRehabCenterDetails(centerName) {
  try {
    const response = await fetch(`${BASE_URL}rehabCenter`);
    if (!response.ok) {
      throw new Error(`Failed to fetch rehab center details: ${response.statusText}`);
    }
    const data = await response.json();

    // Find the rehab center with the specified name
    const center = data.find((item) => item.name === centerName);
    if (!center) {
      throw new Error(`Rehab center with name "${centerName}" not found.`);
    }
    return center.details;
  } catch (error) {
    console.error(`Error fetching details for ${centerName}:`, error);
    throw new Error(`Failed to fetch details for ${centerName}.`);
  }
}
