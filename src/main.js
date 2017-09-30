// import Vue from 'vue';
// import App from './App';
// import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
// import goods from 'components/goods/goods.vue';
// import ratings from 'components/ratings/ratings.vue';
// import seller from 'components/seller/seller.vue';
// import 'common/stylus/index.styl';
//
// Vue.use(VueRouter);
// Vue.use(VueResource);
//
// let app = Vue.extend(App);
// let router = new VueRouter({
//   linkActiveClass: 'active'
// });
// router.map({
//   '/goods': {
//     component: goods
//   },
//   '/ratings': {
//     component: ratings
//   },
//   '/seller': {
//     component: seller
//   }
// });
// router.start(app, '#app');
// router.go('/goods');

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

