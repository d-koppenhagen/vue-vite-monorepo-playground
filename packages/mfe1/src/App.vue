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
    <nav>
      <ul>
        <li :class="{ active: $route?.name === 'route1' }">
          <MyButton @click="doNavigate('route1')" title="View 1" />
        </li>
        <li :class="{ active: $route?.name === 'route2' }">
          <MyButton @click="doNavigate('route2')" title="View 2" />
        </li>
      </ul>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  nav {
    position: relative;
    ul {
      display: inline-flex;
      list-style: none;
      padding: 0;
      margin-bottom: 0;
      top: 2px;
      position: relative;
      > li {
        background-color: bisque;
        border-top: 2px solid black;
        border-left: 2px solid black;
        border-right: 2px solid black;
        border-bottom: 2px solid bisque;

        button {
          border: none;
        }

        &:first-child {
          border-right: none;
        }
        &:last-child {
        }

        &:hover,
        .active {
          background-color: darken($color: bisque, $amount: 5);
        }
        &:not(.active) {
          background-color: lighten($color: bisque, $amount: 5);
          border-bottom: 2px solid black;
        }
      }
    }
  }

  .content {
    padding: 1rem;
    background-color: bisque;
    border: 2px solid black;
  }
}
</style>
