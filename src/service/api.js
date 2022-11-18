import axios from 'axios';

const request = axios.create({
    baseURL: 'http://sandbox-api.lomadee.com/v3'
})

export const api = () => ({
    getoffers: async () => {
        
    }
})