<template>
  <page-layout
    :breadcrumb="breadcrumb"
    :title="title"
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
      ],
      title: null,
    };
  },

  watch: {
    $route: 'setProduct',
  },

  methods: {
    setProduct() {
      const title = `Продукт ${this.$route.params.id}`;
      this.breadcrumb.push({ link: this.$route.path, text: title });
      this.title = title;
    },
  },

  created() {
    this.setProduct();
  },
};
</script>
