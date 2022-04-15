import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
  params: {api_key: 'c9f17286adf55ea6877bbe571e83ec06'},
});

export const getApi = async ({url, params}) => {
  const response = await API.get(url, params);
  return response.data;
};
