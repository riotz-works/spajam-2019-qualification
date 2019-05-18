import axios from 'axios';

const client = axios.create({
  baseURL: process.env.CORE_API
});

export default client;
