# Accessing  using response data
Du har kun adgang til response data inde i .then blokken, da det er asynkront.  

##### dashboard.vue 
```
export default {
    data() {
      return {
        email: ''
      }
    },
    created() {
      axios.get('https://vuedemo-3418c.firebaseio.com/users.json')
      .then(res => {
        console.log(res);
        const data = res.data;
        const users = [];
        for (let key in data)  {
          const user = data[key];
          users.push(user);
        }
        console.log(users);
        this.email = users[0].email;
      }) 
      .catch(error => console.log(error))
    }
  }
```
