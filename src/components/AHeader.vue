<template>
  <header class="header">
    <s-container class="header__container">
      <div class="header__left">
        <router-link class="logo" to="/">
          Т
        </router-link>
        <div class="mainmenu">
          <ul class="mainmenu__list list">
            <li class="list__item" v-for="(nav, key) of navs" :key="key">
              <router-link :to="nav.link" class="list__link">
                <span class="list__label">
                  {{ nav.title }}
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="header__right">
        <span>&#9787;user@gmail.com</span>
      </div>
    </s-container>
  </header>
</template>

<script>
export default {
  name: 'a-header',

  data() {
    return {
      navs: [
        { title: 'Каталог', link: '/categories' },
        { title: 'Новинки', link: '/new' },
        { title: 'Акции', link: '/stocks' },
        { title: 'Контакты', link: '/contacts' },
      ],
    };
  },
};
</script>
<style lang="scss">
  @import '~@/assets/scss/components/list.scss';

  .logo {
    margin-right: 50px;
    // background-color: var(--gray-color);
    padding: 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-size: 48px;
    font-weight: 500;
    color: var(--red-color);
    text-decoration: none;
    height: 100%;
  }

  .header {
    position: absolute;
    border-bottom: 1px solid var(--gray-color);
    box-sizing: border-box;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    &__container {
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;
    }

    &__left, &__right {
      display: flex;
      align-items: center;
    }
  }

  .mainmenu {
    &__list {
      display: flex;
    }

    .list__item {
      margin-right: 50px;
    }

    .list__label {
      font-weight: 500;
    }

    .list__link {
      text-decoration: none;
      &:hover {
        .list__label {
          color: var(--red-color);
        }
      }
    }
  }
</style>
