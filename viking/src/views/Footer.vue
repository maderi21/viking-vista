<script setup>
import Icon from "../components/icons/Icon.vue";

defineProps({});
</script>

<template>
  <div class="container mx-auto">
    <div
      class="bg-primary-green h-[200px] pl-40 flex w-full justify-between items-center text-white relative"
    >
      <div class="flex w-2/3 space-x-1">
        <div class="flex flex-col items-start">
          <Icon name="house-chimney" class="text-7xl"></Icon>
          <p>Perfect Relax</p>
        </div>
        <div class="flex flex-col items-start pl-20 mt-2">
          <p>
            Kuchynska 506<br />
            906 38<br />
            Rohoznik
          </p>
        </div>
      </div>
      <div class="flex flex-col items-end w-1/3 mr-40">
        <a href="">facebook</a>
        <a href="">twitter</a>
        <a href="">instagram</a>
        <a href="">youtube</a>
        <p class="mt-2">kostolansky.marek@gmail.com</p>
      </div>
      <hr class="absolute bottom-4 left-20 right-20 border-t-2 border-white" />
    </div>
    <div class="bg-primary-green text-center text-white">
      made with love<Icon name="heart" class="ml-2" />
    </div>
  </div>
</template>
