import axios from 'axios';

export const apiAxios = axios.create({
    baseURL: 'https://infinity-solutions-api-71od9aa5i-dazt5.vercel.app'
});

apiAxios.interceptors.request.use((request) => {
    
    const token = localStorage.getItem('token');
    
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
})

export const config = {
    RESOURCES_API_URL: 'https://infinity-solutions-api-71od9aa5i-dazt5.vercel.app',
}