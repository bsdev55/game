import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '570eed29618e4f2ba32648d9210f08a9',
    }
})