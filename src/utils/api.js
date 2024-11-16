import axios from 'axios';
import { BASE_URL } from '../constant';

export const CustomAxios = axios.create({
    baseURL: BASE_URL,
    timeout: 30 * 1000
  });
  
CustomAxios.interceptors.request.use(
config => {
    const tokens = sessionStorage.getItem(USER);
    if (tokens) {
    const accessToken = JSON.parse(tokens).accessToken;
    config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
},
error => {
    Promise.reject(error);
}
);
