<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
/* Global styles */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

#app {
  width: 100%;
  min-height: 100vh;
  max-width: 100%;
  margin: 0;
  padding: 0;
}
</style>