# Custom axios instances
Hvis du f.eks. vil give nogen url header med authorization og andre skal ikke have det.  
Du kan lave lige så mange custom instances som du har brug for.  
##### axios.js
```
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vuedemo-3418c.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
```
##### signup.vue
```
import axios from '../../axios-auth';
```
