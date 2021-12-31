import axios from 'axios';
export const api = axios.create({ baseURL: 'https://restcountries.com/v3.1/' });

export const endpoints = {
  allCountries: 'all',
  countriesWithNameFilter: (name) =>
    `https://restcountries.com/v3.1/name/${name}`,
  countriesWithAlphaFilter: (alpha) =>
    `https://restcountries.com/v3.1/alpha/${alpha}`,
};

export const universalParams = {
  params: {
    fields:
      'name,capital,currencies,tld,borders,flags,languages,subregion,region,population',
  },
};
