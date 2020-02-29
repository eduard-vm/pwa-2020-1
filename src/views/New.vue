<template>
  <page-layout
    :breadcrumb="breadcrumb"
    title="Новинки"
  >
  </page-layout>
</template>

<script>
import PageLayout from '../layouts/PageLayout.vue';

export default {
  name: 'contacts',

  components: {
    PageLayout,
  },

  data() {
    return {
      breadcrumb: [
        { link: '/', text: 'Главная' },
        { link: '/new', text: 'Новинки' },
      ],
    };
  },
};
</script>
