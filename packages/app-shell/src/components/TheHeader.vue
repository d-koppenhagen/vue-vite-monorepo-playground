<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  title: string;
}>();
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <slot />
  </header>
</template>

<style scoped lang="scss">
header {
  border: 2px dashed red;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}
</style>
