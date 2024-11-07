<script setup>
import { ref } from "vue";
import Button from "@/components/Button.vue";

const isModalOpen = ref(false);
const selectedImage = ref("");

function openModal(image) {
  selectedImage.value = image;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
  selectedImage.value = "";
}

const images = [
  new URL("../images/look1.webp", import.meta.url).href,
  new URL("../images/look2.webp", import.meta.url).href,
  new URL("../images/look3.webp", import.meta.url).href,
  new URL("../images/look4.webp", import.meta.url).href,
  new URL("../images/look5.webp", import.meta.url).href,
  new URL("../images/look6.webp", import.meta.url).href,
  new URL("../images/look7.webp", import.meta.url).href,
  new URL("../images/look8.webp", import.meta.url).href,
];
</script>

<template>
  <div class="w-full pt-28 mb-20 flex flex-col items-center justify-center">
    <div class="flex items-start">
      <h3 class="text-4xl mb-10">What Does it Look Like?</h3>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="image in images"
        :key="image"
        class="h-[450px] w-[350px]"
        @click="openModal(image)"
      >
        <img
          :src="image"
          alt="look"
          class="object-cover h-full w-full rounded-md shadow-md transform transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
    <button class="mt-20">
      <Button class="border border-primary-dark px-10" BtnSize="large"
        >Reservations</Button
      >
    </button>
  </div>

  <div
    v-if="isModalOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    @click.self="closeModal"
  >
    <div class="relative bg-white rounded-lg p-4 max-w-4xl mx-auto">
      <img
        :src="selectedImage"
        alt="Selected"
        class="max-w-[600px] max-h-[750px]"
      />
    </div>
  </div>
</template>
