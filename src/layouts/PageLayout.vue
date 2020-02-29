<template>
  <div class="page">
    <s-container v-if="showBreadcrumb">
      <a-breadcrumb class="page__breadcrumb" :items="breadcrumb" />
    </s-container>
    <s-container v-if="title">
      <h1 class="page__title">{{ title }}</h1>
    </s-container>
    <slot />
  </div>
</template>

<script>
import ABreadcrumb from '../components/ABreadcrumb.vue';

export default {
  name: 'page-layout',

  components: {
    ABreadcrumb,
  },

  props: {
    title: String,

    showBreadcrumb: {
      type: Boolean,
      default: true,
    },

    breadcrumb: {
      type: Array,
      default() {
        return [
          { link: '/', text: 'Главная' },
        ];
      },
    },
  },
};
</script>

<style lang="scss">
  .page {
    &__breadcrumb {
      margin: 30px 0;
    }
  }
</style>
