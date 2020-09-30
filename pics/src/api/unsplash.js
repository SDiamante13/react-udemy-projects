import axios from 'axios';

const accessKey =  process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID ${accessKey}`
    }
});
