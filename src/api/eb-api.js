import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.eventbriteapi.com/v3/',
  headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
});

export default api;
