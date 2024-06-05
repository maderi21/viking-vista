<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="">
    <nav class="bg-white border-gray-20">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap"
            >Viking Vista</span
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
            class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
          >
            <li>
              <RouterLink
                to="/accommodation"
                class="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0"
                >ACCOMODATION</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/experience"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-yellow-600 md:border-0 md:p-0"
                >EXPERIENCE</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-yellow-600 md:p-0"
                >CONTACT</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/gift"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-yellow-600 md:p-0"
                >GIFT</RouterLink
              >
            </li>
            <li>
              <button
                class="rounded-3xl bg-yellow-400 border border-r-100 px-2 py-3"
              >
                <RouterLink
                  to="/reservations"
                  class="block text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-yellow-600 md:p-0"
                  >RESERVATIONS</RouterLink
                >
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
