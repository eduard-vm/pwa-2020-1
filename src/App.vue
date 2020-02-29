<template>
  <div id="app">
    <a-header />
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import AHeader from './components/AHeader.vue';
import './assets/scss/app.scss';

export default {
  name: 'app',

  components: {
    AHeader,
  },
};
</script>
<style>
  html,
  body {
    padding: 0;
    margin: 0;
  }

  #app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    font-family: 'Roboto';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .main {
    padding: 80px 0;
  }
</style>
