import axios from 'axios';

const api = axios.create({
    baseURL: 'http://sandbox-api.lomadee.com/v3'
});


export default api;