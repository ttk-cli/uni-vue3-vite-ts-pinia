<template>
  <scroll-view
    :style="{
      height: '100%',
      width: '100%',
    }"
    :scroll-y="true"
    :lower-threshold="300"
    :scroll-top="scrollTop"
    @scrolltolower="onScrollToLower"
    @scroll="onScroll"
  >
    <slot name="list"></slot>
  </scroll-view>
</template>

<script setup lang="ts">
defineProps({
  scrollTop: {
    type: Number,
    default: 0,
  },
  onScrollToLower: {
    type: Function,
    default: () => {
      console.log('onScrollToLower')
    },
  },
  onScroll: {
    type: Function,
    default: () => {
      console.log('onScroll')
    },
  },
})
</script>

<style scoped lang="scss"></style>
