import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '80ee08fe4c0645e9a3e4f0c70c883718',
    }
})