<script setup>
import Icon from "./icons/Icon.vue";

const scrollAmount = 500;

const moveDown = () => {
  window.scrollBy({
    top: scrollAmount,
    behavior: "smooth",
  });
};
</script>

<template>
  <div
    class="bg-hero text-white bg-cover bg-center h-[1340px] flex flex-col items-center"
  >
    <div class="flex items-center flex-col mt-64">
      <h1 class="text-6xl mb-5">Your Adventure</h1>
      <h1 class="text-6xl">Begins In Our Remote Cabin</h1>
      <button @click="moveDown">
        <Icon class="text-4xl mt-16 animate-pulse" name="chevron-down"></Icon>
      </button>
    </div>

    <div
      class="flex flex-col-3 space-x-10 pt-64 mt-40 max-w-4xl items-center justify-center"
    >
      <div>
        <h1 class="text-3xl">Unbend</h1>
        <p>
          Unwind in our cozy rental cabin. Escape the hustle and bustle, embrace
          nature's tranquility, and enjoy ultimate relaxation in serene
          surroundings.
        </p>
      </div>
      <div>
        <h1 class="text-3xl">Unplug</h1>
        <p>
          Unplug in our serene rental cabin. Disconnect from the chaos, immerse
          yourself in nature, and find peace and relaxation in a tranquil
          retreat.
        </p>
      </div>
      <div>
        <h1 class="text-3xl">Relax</h1>
        <p>
          Relax in our tranquil rental cabin. Leave the stress behind, soak in
          nature's beauty, and enjoy unparalleled comfort and serenity in your
          cozy retreat.
        </p>
      </div>
    </div>
  </div>
</template>
