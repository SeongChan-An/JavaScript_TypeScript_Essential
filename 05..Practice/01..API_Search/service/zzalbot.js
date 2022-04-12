const BASE_URL = 'https://jjalbot.com/api/jjals';

export async function jjalBot(text) {
  try {
    const response = await fetch(`${BASE_URL}?text=${text}`);
    const result = await response.json();

    return result;
  } catch {
    return [];
  }
}
