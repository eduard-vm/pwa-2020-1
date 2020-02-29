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

  .main {
    padding: 80px 0;
  }
</style>
