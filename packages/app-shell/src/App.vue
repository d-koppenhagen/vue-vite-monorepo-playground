<script setup lang="ts">
import { RouterView } from 'vue-router';
import { MyButton } from '@vue-vite-monorepo-playground/ui-lib';

import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <TheHeader title="App Shell">
    <h2>Nx Monorepo Micro Frontend Demo using Vite</h2>
  </TheHeader>

  <div class="page-content">
    <aside class="drawer">
      <mfe2-app />
    </aside>

    <main>
      <mfe1-app />
    </main>
  </div>

  <TheFooter>Some footer content</TheFooter>
</template>

<style scoped lang="scss">
.page-content {
  border-left: 2px dashed red;
  border-right: 2px dashed red;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding-bottom: 1rem;

  .aside {
    grid-area: 1 / 1 / 2 / 2;
  }
  .main {
    grid-area: 1 / 2 / 2 / 3;
  }
}
</style>
