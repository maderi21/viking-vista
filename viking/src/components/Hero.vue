<script setup>
import Icon from "./icons/Icon.vue";
import Button from "./Button.vue";
import NavBar from "./NavBar.vue";

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
    class="bg-hero text-white bg-cover bg-center h-[1350px] flex flex-col items-center rounded-b-3xl"
  >
    <nav-bar></nav-bar>
    <div class="flex items-center flex-col mt-52">
      <h1 class="text-6xl mb-5">Your Adventure</h1>
      <h1 class="text-6xl">Begins In Our Remote Cabin</h1>
      <button @click="moveDown">
        <Icon class="text-4xl mt-16 animate-pulse" name="chevron-down"></Icon>
      </button>
    </div>

    <div
      class="flex flex-col-3 space-x-10 mt-72 max-w-4xl items-center justify-center"
    >
      <div class="mx-3">
        <h1 class="text-3xl underline underline-offset-8">Unbend</h1>
        <p class="mt-4">
          Unwind in our cozy rental cabin. Escape the hustle and bustle, embrace
          nature's tranquility, and enjoy ultimate relaxation in serene
          surroundings.
        </p>
      </div>
      <div class="mx-3">
        <h1 class="text-3xl underline underline-offset-8">Unplug</h1>
        <p class="mt-4">
          Unplug in our serene rental cabin. Disconnect from the chaos, immerse
          yourself in nature, and find peace and relaxation in a tranquil
          retreat.
        </p>
      </div>
      <div class="mx-3">
        <h1 class="text-3xl underline underline-offset-8">Relax</h1>
        <p class="mt-4">
          Relax in our tranquil rental cabin. Leave the stress behind, soak in
          nature's beauty, and enjoy unparalleled comfort and serenity in your
          cozy retreat.
        </p>
      </div>
    </div>
    <button class="mt-16">
      <Button class="border border-primary-dark px-10 w-[300px]" BtnSize="large"
        >Reserve Now</Button
      >
    </button>
  </div>
</template>
