import axios from 'axios';

axios.defaults.headers.common['Accept'] = 'application/json';

// Request Method for dynamic method
export const request = (method, url, payload = {}, headers = {}) => {
    return axios({
        headers,
    	method,
        url: process.env.API_URL + url,
        [(method == 'GET') ? 'params' : 'data']: payload
    });
}

// GET Method
export const get = (url, payload = {}, headers = {}) => {
    return axios({
        headers,
    	method: 'GET',
        url: process.env.API_URL + url,
        params:payload
    });
}

// POST Method
export const post = (url, payload = {}, headers = {}, other = {}) => {
    return axios({
        headers,
        ...other,
        method: 'POST',
        url: process.env.API_URL + url,
        data: payload
    });
}

// PUT Method
export const put = (url, payload = {}, headers = {}) => {
    return axios({
        headers,
        method: 'PUT',
        url: process.env.API_URL + url,
        data: payload
    })
}

// PATCH Method
export const patch = (url, payload = {}, headers = {}) => {
    return axios({
        headers,
        method: 'PATCH',
        url: process.env.API_URL + url,
        data: payload
    })
}

// DELETE Method
export const del = (url, payload = {}, headers = {}) => {
    return axios({
        headers,
        method: 'DELETE',
        url: process.env.API_URL + url,
    })
}
