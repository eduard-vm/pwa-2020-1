<template>
  <div class="home">
    <s-container>
      <div class="home__banner" />
    </s-container>
    <div class="home__block-1">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
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
      // margin-top: 60px;
      box-sizing: border-box;
      height: 540px;
      border: 1px solid var(--gray-color);
      // box-shadow: 0 10px 20px 0 rgba(black, .1);
    }

    &__block-1 {
      height: 420px;
      margin-top: 100px;
      background-color: #f0f0f0;
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
</style>
