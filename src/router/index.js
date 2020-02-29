import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contacts',
    name: 'Contacts',

    component: () => import('../views/Contacts.vue'),
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/Categories.vue'),
  },
  {
    path: '/categories/:id',
    name: 'Category',
    props: true,
    component: () => import('../views/Category.vue'),
  },
  {
    path: '/stocks',
    name: 'Stocks',
    props: true,
    component: () => import('../views/Stocks.vue'),
  },
  {
    path: '/new',
    name: 'New',
    props: true,
    component: () => import('../views/New.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.onError((error) => {
  if (/loading chunk .* failed/i.test(error.message)) {
    console.info('router error ', error, router);
  }
});

export default router;
