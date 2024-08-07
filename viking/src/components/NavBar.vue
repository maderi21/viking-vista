<script setup>
import { RouterLink } from "vue-router";
import Icon from "./icons/Icon.vue";
import Button from "./Button.vue";
import Aut from "./Aut.vue";
import { ref } from "vue";

const showAuth = ref(true);
const toggleAuth = () => {
  showAuth.value = !showAuth.value;
};
</script>

<template>
  <div class="w-full sticky top-0">
    <nav class="bg-blend-hue backdrop-blur-md mt-10">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-bold whitespace-nowrap"
            >VIKING VISTA</span
          >
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium px-5 flex flex-col items-center p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
          >
            <li>
              <RouterLink
                to="/accommodation"
                class="hover:underline hover:underline-offset-8 block hover:text-primary-dark py-2 px-3 rounded md:bg-transparent md:p-0"
              >
                <Icon name="house" class="mr-3"> </Icon>ACCOMODATION</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/experience"
                class="hover:underline hover:underline-offset-8 block py-2 px-3 mx-3 rounded hover:text-primary-dark hover:shadow-md md:border-0 md:p-0"
              >
                <Icon name="coffee" class="mr-3"> </Icon>
                EXPERIENCE</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="hover:underline hover:underline-offset-8 block py-2 px-3 rounded md:hover:bg-transparent md:border-0 hover:text-primary-dark md:p-0"
              >
                <Icon name="address-card" class="mr-3"> </Icon
                >CONTACT</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/gift"
                class="hover:underline hover:underline-offset-8 block py-2 px-3 rounded md:hover:bg-transparent md:border-0 hover:text-primary-dark md:p-0"
              >
                <Icon name="gift" class="mr-3"></Icon>GIFT</RouterLink
              >
            </li>
            <li>
              <Button class="border border-primary-dark rounded-3xl px-2 py-3">
                <RouterLink
                  to="/reservations"
                  class="block rounded hover:text-primary-dark md:p-0"
                  >RESERVATIONS</RouterLink
                >
              </Button>
            </li>
            <li>
              <button
                @click="toggleAuth"
                class="border border-primary-dark rounded-3xl px-4 py-2 hover:bg-gray-200"
              >
                Login / Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Aut v-if="showAuth" />
    </nav>
  </div>
</template>

<style></style>
