const baseUrl = 'https://pixabay.com/api/';

const search = async ({ query, page }) => {
  const params = [
    `q=${query.trim().toLowerCase().split(' ').join('+')}`,
    `page=${page}`,
    `key=${process.env.REACT_APP_KEY}`,
    `image_type=photo`,
    `orientation=horizontal`,
    `per_page=12`,
  ].join('&');

  const url = `${baseUrl}?${params}`;
  try {
    const res = await fetch(url);

    console.log(res);

    const data = await res.json();

    if (res.ok !== true) {
      throw new Error(`res.ok !== true, ${res}`);
    }
    if (res.status === 404) {
      throw new Error('res.status === 404');
    }

    console.log(data);
    console.log(
      data.hits.map(({ id, webformatURL, largeImageURL }) => ({
        id,
        webformatURL,
        largeImageURL,
      })),
    );
  } catch (e) {
    console.log('error:', e);
  }
};

const pixabayAPI = { search };
export default pixabayAPI;
