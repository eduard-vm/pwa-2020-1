import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
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
    path: '/products/:id',
    name: 'Product',
    props: true,
    component: () => import('../views/Product.vue'),
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
