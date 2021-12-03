import axios from 'axios';

export const apiAxios = axios.create({
    baseURL: 'http://ec2-184-72-118-16.compute-1.amazonaws.com:3000'
    //baseURL: 'http://localhost:3001/'
});

apiAxios.interceptors.request.use((request) => {
    
    const token = localStorage.getItem('token');
    
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
})

export const config = {
    RESOURCES_API_URL: 'http://ec2-184-72-118-16.compute-1.amazonaws.com:3000',
    //RESOURCES_API_URL: 'http://localhost:3001/',
}