import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://coursesjordanio.netlify.app/.netlify/functions/',
});