# GET request
created() er en vue livecycle method. Kører kode når Vue instancen laves.  
Første argument er urlen. Du kan give et 2. argument med, hvis du vil konfigrer requestet.  
```
<script>
  import axios from 'axios';

  export default {
    created() {
      axios.get('https://vuedemo-3418c.firebaseio.com/users.json')
      .then(res => console.log(res))
      .catch(error => console.log(error))
    }
  }
</script>
```
Returner et promise.  

Se eksempel i dashboard.vue  
