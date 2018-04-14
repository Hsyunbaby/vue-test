import login from '../components/login.vue';
import reg from '../components/reg.vue';
import home from '../components/home.vue';
import goods from '../components/goods.vue';
import buy from '../components/buy.vue';
import error from '../components/error.vue';
import gameTrade from '../components/gameTrade.vue';
import user from '../components/user.vue';
// import node from '../components/node.vue';

let routes = [
    { path: '/home', component: home },
    { path: '/goods', component: goods },
    { path: '/buy', component: buy },
    { path: '/login', component: login },
    { path: '/reg', component: reg },
    { path: '/gameTrade', component: gameTrade },
    { path: '/user', component: user },
    { path: '/', redirect: '/home' },
    { path: '*', component: error }
]



// export default routes;
export default { routes }