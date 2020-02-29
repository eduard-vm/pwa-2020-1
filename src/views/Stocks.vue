<template>
  <page-layout
    :breadcrumb="breadcrumb"
    title="Акции"
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
        { link: '/stocks', text: 'Акции' },
      ],
    };
  },
};
</script>
