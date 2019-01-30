# Creating custom validators
Lav dine egne validators til f.eks. async validators.  


```
email: {
    required, // required: required,
    email, // email: email
    unique: val => {
        if(val === '') return true;
        return axios.get('/users.json?orderBy="email"&equalTo="' + val + '"')
        .then(res => {
            return Object.keys(res.data).length === 0
        })
    }
}
```
