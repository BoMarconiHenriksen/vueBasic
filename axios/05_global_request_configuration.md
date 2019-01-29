# Setting a global request configuration
Sæt en base url op, så du ikke skal skrive urlen hele tiden.  
Det gøres i main.js  
Det er muligt at sætte global konfiguration af axios her.  
```
import axios from 'axios';

axios.defaults.baseURL = 'https://vuedemo-3418c.firebaseio.com';

<!-- Det er muligt at sætte globale headers -->
axios.defaults.headers.common['Authorization'] = 'dgdg';
axios.defaults.get['Accepts'] = 'application/json';
```
