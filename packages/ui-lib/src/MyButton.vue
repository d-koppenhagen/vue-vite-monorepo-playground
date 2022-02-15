<script setup lang="ts">
defineProps<{
  title: string;
}>();

const emit = defineEmits<{
  (e: 'click', value: MouseEvent): void;
}>();

function doClick(event: MouseEvent) {
  emit('click', event);
}
</script>

<template>
  <button @click="doClick()">{{ title }}</button>
</template>

<style scoped>
button {
  border: 2px dashed #0b0b0b;
}
</style>
