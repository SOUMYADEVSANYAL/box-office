const BASE_API_LINK = 'https://api.tvmaze.com/';

export async function apiGet(queryString) {
  const response = await fetch(`${BASE_API_LINK}${queryString}`).then(r =>
    r.json()
  );
  return response;
}
