import axios from 'axios';

export const TOKEN_CYBERSOFT =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMyIsIkhldEhhblN0cmluZyI6IjIwLzEwLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2NjIyNDAwMDAwMCIsIm5iZiI6MTYzODExODgwMCwiZXhwIjoxNjY2MzcxNjAwfQ.hoaq9WsA187Q0NvdBYPZsn8c2CRg_ZE4mQO5_lUyAL4';
export const DOMAIN = 'https://airbnb.cybersoft.edu.vn';
export const currentDomain =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'https://lit-bayou-04176.herokuapp.com/api';

//setup axios interceptor
export const http = axios.create({
    baseURL: DOMAIN, //Domain khi request api sẽ được ghép vào với link
    timeout: 30000, //Thời gian tối đa chờ response trả về
});

http.interceptors.request.use(
    (config) => {
        config.headers = {
            ...config.headers, //Lấy lại tất cả các giá trị header qua thuộc tính headers
            Authorization: 'Bearer ' + localStorage(ACCESSTOKEN),
            TokenCybersoft: TOKEN_CYBERSOFT,
        };
        return config;
    },
    (errors) => {
        return Promise.reject({ errors });
    }
);
