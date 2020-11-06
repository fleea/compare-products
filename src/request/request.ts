import axios from 'axios';

export const request = axios.create({
    baseURL: 'https://5f993a3050d84900163b845a.mockapi.io/eriks/products/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});
