<script setup>
import Button from "./Button.vue";
</script>

<template>
  <div
    class="bg-hero text-white bg-cover bg-center h-[1340px] flex flex-col items-center"
  >
    <div class="flex items-center flex-col mt-64">
      <h1 class="text-3xl">Your Adventure Begins Here</h1>
      <p class="text-xl">Discover relaxation from a different angle</p>
    </div>

    <div class="flex flex-col mt-64 max-w-4xl p-10 items-center justify-center">
      <p class="text-center">
        Escape to nature's tranquility. Rent a cozy cabin today and discover
        relaxation like never before. Your adventure awaits! Whether you're
        seeking a peaceful retreat or an exciting outdoor adventure, our cabins
        offer the perfect escape. Enjoy breathtaking views, serene surroundings,
        and all the comforts of home!
      </p>
      <button class="mt-10">
        <Button>Reserve a spot</Button>
      </button>
    </div>
  </div>
</template>
