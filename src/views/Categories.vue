<template>
  <page-layout :breadcrumb="breadcrumb">
    <div class="a-categories">
      <s-container>
        <ul class="a-categories__list list" :class="{open: showAll}">
          <li class="a-categories__item" v-for="(item, key) of categories" :key="key">
            <router-link :to="{
              path: item.link,
              props: item.text,
            }" class="a-category">
              <div class="a-category__label" :data-content="item.title">
                {{ item.title }}
              </div>
            </router-link>
          </li>
        </ul>
        <s-row h-center>
          <a-button type="button" class="button button--outline" @click="showAll = !showAll">
            {{ showAll ? 'показать меньше' :  'показать всё' }}
          </a-button>
        </s-row>
      </s-container>
    </div>
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
      categories: [...Array(30)].map((_, i) => ({
        id: i + 1,
        description: '',
        title: `Категория ${i + 1}`,
        link: `/categories/${i + 1}`,
      })),
      breadcrumb: [
        { link: '/', text: 'Главная' },
        { link: '/categories', text: 'Категории' },
      ],
      showAll: false,
    };
  },

  methods: {
    loadMoreHandler() {},
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
        grid-gap: 0;
      }
      margin-bottom: 30px;
      max-height: 480px;
      overflow: hidden;
      &.open {
        max-height: 100%;
        overflow: visible;
        margin-bottom: 30px;
      }
    }
  }

  .a-category {
    border: 1px solid transparent;
    border-right-color: var(--gray-color);
    border-bottom-color: var(--gray-color);
    padding: 30px;
    box-sizing: border-box;
    min-height: 240px;
    display: flex;
    align-items: flex-end;
    background-color: white;
    font-weight: 600;
    // border-radius: 6px;
    color: var(--dark-color);
    text-decoration: none;
    position: relative;

    &__label {
      font-weight: 400;
    }
    &:hover {
      color: var(--red-color);
    }
    &:focus {
      outline: none;
    }
  }
</style>
