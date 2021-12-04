import axios from 'axios';

export const apiAxios = axios.create({
    baseURL: 'http://localhost:3001'
});

apiAxios.interceptors.request.use((request) => {
    
    const token = localStorage.getItem('token');
    
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
})

export const config = {
    RESOURCES_API_URL: 'http://localhost:3001',
}