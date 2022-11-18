import axios from 'axios';

const api = axios.create({
    baseURL: 'http://sandbox-api.lomadee.com'
});


export default api;