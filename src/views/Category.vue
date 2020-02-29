<template>
  <page-layout :breadcrumb="breadcrumb" :title="title">
  </page-layout>
</template>

<script>
import PageLayout from '../layouts/PageLayout.vue';

export default {
  name: 'category',

  components: {
    PageLayout,
  },

  data() {
    return {
      breadcrumb: [
        { link: '/', text: 'Главная' },
        { link: '/categories', text: 'Категории' },
      ],
      title: null,
    };
  },

  watch: {
    $route: 'setCategory',
  },

  methods: {
    setCategory() {
      const title = `Категория ${this.$route.params.id}`;
      this.breadcrumb.push({ link: this.$route.path, text: title });
      this.title = title;
    },
  },

  created() {
    this.setCategory();
  },
};
</script>
