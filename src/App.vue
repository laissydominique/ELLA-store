<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AcessoriesView from "./views/AcessoriesView.vue";
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
