import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import moment from "moment";
import VueGoogleAutocomplete from "vue-google-autocomplete";
//const dev = process.env.NODE_ENV != 'production';
// axios.defaults.baseURL="https://posh-marketplace.plego.pro/api/";
// const url = 'http://127.0.0.1:8000'
const url = 'https://posh-marketplace.plego.pro';
//   require('smartmenus');
axios.defaults.baseURL=url+"/api/";
axios.defaults.url = url;
//app.config.globalProperties.$assets = assets+"/src/assets";
createApp(App).use(router, axios,moment).mount('#app')