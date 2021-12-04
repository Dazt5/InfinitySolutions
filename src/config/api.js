import axios from 'axios';

export const apiAxios = axios.create({
    baseURL: 'http://ec2-54-204-236-34.compute-1.amazonaws.com:3001/',
});

apiAxios.interceptors.request.use((request) => {
    
    const token = localStorage.getItem('token');
    
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
})

export const config = {
    RESOURCES_API_URL: 'http://ec2-54-204-236-34.compute-1.amazonaws.com:3001',
}
