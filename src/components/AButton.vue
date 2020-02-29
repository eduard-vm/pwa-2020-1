<template>
  <button
    type="button"
    class="button"
    @click="$emit('click')"
  >
    <span class="button__inner">
    </span>
    <span class="button__inner">
      <slot />
    </span>
  </button>
</template>

<style lang="scss">
  .button {
    border: 2px solid var(--red-color);
    background-color: var(--red-color);
    padding: 12px 30px;
    font-family: 14px;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    box-sizing: border-box;

    &--outline {
      background-color: transparent;
      color: #333;
      transition: background-color 240ms ease-out;
      &:hover{
        background-color: var(--red-color);
        color: white
      }
    }

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  }
</style>
