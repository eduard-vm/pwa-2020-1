<template>
  <div class="home">
    <s-container>
      <div class="home__banner">
        <div class="banner">
          <div class="banner__slider" ref="slider" :style="slidePosition">
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
          </div>
          <div class="banner__pagination">
            <span class="pagination-bullet"></span>
            <span class="pagination-bullet"></span>
            <span class="pagination-bullet"></span>
          </div>
        </div>
      </div>
    </s-container>
    <div class="home__block-1">
      <s-container>
        <div class="block__title">Товары</div>
        <ul class="goods-list">
          <li
            class="goods-list__item"
            v-for="(item, key) of goods"
            :key="key"
          >
            <router-link class="goods-list__link" :to="item.link">
              <div class="product-card">
                <span class="product-card__name">
                  {{ item.name }}
                </span>
              </div>
            </router-link>
          </li>
        </ul>
      </s-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },

  data() {
    return {
      slidePosition: {
        transform: 'translate(0, 0)',
      },

      goods: [...Array(60)].map((_, id) => ({
        name: `Товар ${id + 1}`,
        code: id + 1,
        link: `/products/${id + 1}`,
      })),
    };
  },
};
</script>

<style lang="scss">
  .main-video {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
    height: 480px;
    width: 100%;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    video {
      width: 100%;
    }
  }
  .home {
    &__banner {
      margin-top: 60px;
    }

    &__block-1 {
      margin-top: 100px;
    }

    &__banner {
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
  }

  .block {
    &__title {
      font-size: 32px;
      line-height: 48px;
      margin: 15px 0;
    }
  }

  .slider {
    background-color: #f0f0f0;
    min-height: 320px;
    padding: 30px 0;
    box-sizing: border-box;

    &__pane {
      margin: 0 auto;
      background-color: #ccc;
      min-height: 300px;
      max-width: 1200px;
      // width: 100%;
    }
  }

  .banner {
    box-sizing: border-box;
    height: 540px;
    border: 1px solid var(--gray-color);
    width: 100%;
    position: relative;
    // box-shadow: 0 10px 20px 0 rgba(black, .1);
    border-radius: 3px;

    &__slider {
      height: 100%;
      width: 100%;
      display: flex;
      overflow: hidden;
    }

    &__pagination {
      position: absolute;
      display: flex;
      justify-content: center;
      margin: 20px 0;
      bottom: 20px;
      width: 100%;
    }
  }

  .slide {
    border-right: 1px solid red;
    height: 100%;
    width: 100%;
    flex-shrink: 0;

    &:nth-child(2) {
      background-color: #aaa;
    }
  }

  // banner__pagination
  .pagination-bullet {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    background: #f0f0f0;
    margin-right: 12px;
    border: 2px solid transparent;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      cursor: pointer;
      // border-color: var(--red-color);
      border-color: #d0d0d0;
    }

    &.active {
      border-color: #d0d0d0;
      // border-color: var(--red-color);
    }
  }

  .goods-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0;
    grid-gap: 10px;
    padding: 0;

    &__link {
      text-decoration: none;
      width: 100%;
      &:hover {
        text-decoration: none;
      }
    }
  }

  .product-card {
    padding: 30px;
    box-sizing: border-box;
    height: 300px;
    display: flex;
    width: 100%;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    background-color: #fff;

    &__name {
      color: #8d8d8d;
      font-size: 20px;
      line-height: 25px;
      align-self: flex-end;
      text-align: right;
      width: 100%;
    }

    &:hover {
      background-color: #f6f6f6;
    }
  }
</style>
