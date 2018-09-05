import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-21600.firebaseio.com/',
});

export default instance;
