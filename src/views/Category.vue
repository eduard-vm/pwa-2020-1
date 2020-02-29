<template>
  <page-layout :breadcrumb="breadcrumb" :title="title">
  </page-layout>
</template>

<script>
import PageLayout from '../layouts/PageLayout.vue';

export default {
  name: 'categories',

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

<style lang="scss">
  @import '~@/assets/scss/components/list.scss';

  .a-categories {
    padding: 15px 0;
    box-sizing: border-box;
    background-color: #f6f6f6;

    &__list {
      &.list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
      }
      max-height: 540px;
      overflow: hidden;
    }
  }

  .a-category {
    border: 1px solid var(--gray-color);
    padding: 30px;
    box-sizing: border-box;
    min-height: 240px;
    display: flex;
    align-items: flex-end;
    background-color: white;
    font-weight: 600;
    border-radius: 6px;
  }
</style>
