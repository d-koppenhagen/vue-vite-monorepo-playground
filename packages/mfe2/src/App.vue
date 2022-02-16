<script setup lang="ts">
import { useRouter } from 'vue-router';
import { MyButton } from '@vue-vite-monorepo-playground/ui-lib';

const router = useRouter();

const doNavigate = (target: string) => {
  router.push(target);
};
</script>

<template>
  <div class="container">
    <ul>
      <li :class="{ active: $route?.name === 'route1' }">
        <MyButton @click="doNavigate('route1')" title="View 1" />
      </li>
      <li :class="{ active: $route?.name === 'route2' }">
        <MyButton @click="doNavigate('route2')" title="View 2" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.container {
  nav {
    position: relative;
    ul {
      display: inline-flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      margin-bottom: 0;
      top: 2px;
      position: relative;
    }
  }
}
</style>
