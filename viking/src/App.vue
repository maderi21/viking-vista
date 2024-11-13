<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./views/Footer.vue";
</script>

<template>
  <!-- Use flex and column layout for the full height container -->
  <div class="min-h-screen flex flex-col max-w-10-[1024px] mx-auto">
    <!-- NavBar stays at the top -->
    <NavBar />

    <!-- Main content area -->
    <div class="flex-grow">
      <router-view />
    </div>

    <!-- Footer stays at the bottom -->
    <Footer />
  </div>
</template>
