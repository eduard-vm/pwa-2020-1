<template>
  <div class="s-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 's-container',
};
</script>
<style lang="scss">
  .s-container {
    margin: 0 auto;
    padding-left: var(--grid-padding);
    padding-right: var(--grid-padding);
    box-sizing: border-box;
    max-width: 1200px;
    width: 100%;
  }
</style>
