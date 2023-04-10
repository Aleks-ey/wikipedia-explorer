import axios from 'axios';

const wikipediaAPI = axios.create({
  baseURL: 'https://en.wikipedia.org/w/api.php',
  params: {
    format: 'json',
    action: 'query',
    origin: '*',
  },
});

export const searchPages = async (searchTerm) => {
  const response = await wikipediaAPI.get('', {
    params: {
      list: 'search',
      srsearch: searchTerm,
      srlimit: 10,
      srprop: 'size|wordcount',
      formatversion: 2,
    },
  });
  return response.data.query.search;
};

export const getPageContent = async (pageTitle) => {
  const response = await wikipediaAPI.get('', {
    params: {
      prop: 'extracts|info',
      inprop: 'url',
      exintro: 1,
      explaintext: 1,
      titles: pageTitle,
      formatversion: 2,
    },
  });

  const pages = response.data.query.pages;
  return pages.length ? pages[0] : null;
};
