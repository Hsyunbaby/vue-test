import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter); //安装    内部实现:Vue.component('router-link',routerLink),


import routes from './router.config'

let router = new VueRouter(routes);

export default router