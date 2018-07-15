// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Button,
  Select,
  DatePicker,
  upload,
  dialog
} from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(DatePicker);
Vue.use(upload);
Vue.use(dialog);

import vali from './validate';
Vue.use(vali);

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
