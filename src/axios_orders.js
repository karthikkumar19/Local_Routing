import axios from 'axios';


const instance = axios.create({
    baseURL:'https://localrouting.firebaseio.com/'
});

export default instance;