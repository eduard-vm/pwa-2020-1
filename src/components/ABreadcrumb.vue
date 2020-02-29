<template>
  <div class="a-breadcrumb">
    <ul class="a-breadcrumb__list list">
      <li class="a-breadcrumb__item list__item" v-for="(item, key) of items" :key="key">
        <span v-if="key === items.length - 1" class="a-breadcrumb__label list__label">
          {{ item.text }}
        </span>
        <router-link class="a-breadcrumb__link list__link" :to="item.link" v-else>
          <span class="a-breadcrumb__label list__label">
            {{ item.text }}
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'a-breadcrumb',

  props: {
    items: Array,
  },
};
</script>

<style lang="scss">
  @import '~@/assets/scss/components/list.scss';

  .a-breadcrumb {
    &__list {
      &.list {
        display: flex;
      }
    }

    &__item {
      &.list__item {
        margin: 0;
      }

      &:after {
        content: '/';
        margin: 0 10px;
      }
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
        &:after {
          content: '';
        }
      }
    }

    &__label {
      color: #9A9A9A;
    }

    &__link {
      text-decoration: none;
      &:hover {
        .list__label {
          color: var(--red-color);
        }
      }
    }

    &__item {
      .list__label {
        color: #9A9A9A;
      }
      &:last-child {
        .list__label {
          color: var(--dark-color);
        }
      }
    }
  }
</style>
