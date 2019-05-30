import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.eventbriteapi.com/v3/',
  headers: { Authorization: 'Bearer E2Y5WNPQNPDDMIWHMFFZ' },
});

export default api;
