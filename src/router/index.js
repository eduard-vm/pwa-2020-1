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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.onError((error) => {
  if (/loading chunk .* failed/i.test(error.message)) {
    // eslint-disable-next-line no-alert
    // if (window.confirm('Ошибка загрузки необходимых скриптов. Необходимо перезагрузить страницу.')) {
    //   const { id, enabled } = __config.yametric;
    //   if (enabled && ym) {
    //     ym(id, 'reachGoal', 'loading_chunk_failed');
    //   }
    //   window.location.reload(true);
    // }
    console.info('router error ', error, router);
  }
});

export default router;
