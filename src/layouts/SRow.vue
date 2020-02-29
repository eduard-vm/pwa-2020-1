<template>
  <div
    class="s-row"
    :style="{
      'justify-content': 'center',
      'align-items': 'center',
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 's-row',

  props: {
    hCenter: Boolean,
    vCenter: Boolean,
  },
};
</script>
<style lang="scss">
  .s-row {
    display: flex;
  }
</style>
