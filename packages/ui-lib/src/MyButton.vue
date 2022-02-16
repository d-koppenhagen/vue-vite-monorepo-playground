<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
  title: string;
}>();

const emit = defineEmits(['click']);

const doClick = () => emit('click');
</script>

<template>
  <button @click="doClick()">
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
button {
  border: 2px dashed #0b0b0b;
  padding: 1rem;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
}
</style>
