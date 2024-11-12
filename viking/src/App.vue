<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./views/Footer.vue";
</script>

<template>
  <div class="max-w-10-[1024px] mx-auto">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>
