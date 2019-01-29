import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vuedemo-3418c.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
