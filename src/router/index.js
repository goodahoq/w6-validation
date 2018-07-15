import Vue from 'vue'
import Router from 'vue-router'
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import stepBar from '@/components/stepBar'
import step1 from '@/components/step1'
import step2 from '@/components/step2'
import step3 from '@/components/step3'
import step4 from '@/components/step4'
import done from '@/components/done'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/step1',
    name: 'step1',
    component: step1
  }, {
    path: '/step2',
    name: 'step2',
    component: step2
  }, {
    path: '/step3',
    name: 'step3',
    component: step3
  }, {
    path: '/step4',
    name: 'step4',
    component: step4
  }, {
    path: '/done',
    name: 'done',
    component: done
  }, {
    path: '*',
    redirect: '/step1'
  }]
})
