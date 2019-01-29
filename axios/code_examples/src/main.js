import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuedemo-3418c.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'dgdg'
// axios.defaults.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request interceptor ', config);
  return config; /* Skal returneres ellers blokeres requestet. */
});

const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Res interceptors ', res);
  return res; /* Skal returneres ellers vil det ikke sendes videre. */
});

/* Det er også muligt at fjerne interceptors */
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
