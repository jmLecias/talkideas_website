<script setup>
import Landingpage from '@/components/Landingpage.vue';
import NavBar from '@/components/NavBar.vue';
import Hero from '@/components/Hero.vue';
import Features from '@/components/Features.vue';
import About from '@/components/About.vue';

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'Payment', href: '/payment' },
  { text: 'About', href: '/about' },
  { text: 'Blog', href: '/blog' },
];
</script>

<template>
  <main class="home-view">
    <NavBar :navLinkItems="navLinks" />
    <Hero />
    <Features />
    <About />
    <Landingpage />
  </main>
</template>

<style scoped>
.home-view {
  width: 100%;
  padding: 0;
  margin: 0;
  min-height: 100vh;
}
</style>