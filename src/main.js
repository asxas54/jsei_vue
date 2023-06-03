import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import url from './axios/urls.js'
import axios from './axios/index.js'
import vueQr from 'vue-qr'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.prototype.$url=url
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
