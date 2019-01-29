# POST request
Import axios i script taget.  
POST er et array af f.eks. users.  
Et POST request tager 2 parameter. Urlen og det som skal sendesw med.  
´´´
axios.post('https://vuedemo-3418c.firebaseio.com/users.json', formData)
.then(res => console.log(res))
.catch(error => console.log(error))
´´´
Axios stringifier automatisk de data som du sender.  
Det er muligt at give et 3. paramater med. Et objekt, hvor du kan give yderligere konfiguration med til requestet.  

Returner et promise.   

Se eksempel i signup.vue  
