import axios from 'axios';
import {API_BASE_URL} from './config';

export const getRequest = (url, params = {}, headers = {}) => {
  return axios
    .get(`${API_BASE_URL}${url}`, {params, headers})
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('GET request failed', error);
    });
};

export const postRequest = (url, data = {}, headers = {}) => {
  return axios
    .post(`${API_BASE_URL}${url}`, data, {headers})
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('POST request failed', error);
    });
};
