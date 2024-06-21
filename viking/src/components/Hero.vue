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
      class="flex flex-col-3 space-x-5 mt-64 max-w-4xl p-10 items-center justify-center"
    >
      <div>
        <h1>Unwind</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, aliquid.
        </p>
      </div>
      <div>
        <h1>Unplug</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, aliquid.
        </p>
      </div>
      <div>
        <h1>Relax</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, aliquid.
        </p>
      </div>
    </div>
  </div>
</template>
