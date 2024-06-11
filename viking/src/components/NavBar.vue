<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="sticky top-0">
    <nav
      class="bg-primary-light border-gray-20 shadow-lg border border-blue-200"
    >
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
            class="font-medium px-5 flex flex-col items-center p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
          >
            <li>
              <RouterLink
                to="/accommodation"
                class="block bg-primary-light py-2 px-3 rounded md:bg-transparent md:p-0"
                >ACCOMODATION</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/experience"
                class="block py-2 px-3 mx-3 rounded hover:text-primary-dark hover:shadow-md md:border-0 md:p-0"
                >EXPERIENCE</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 hover:text-primary-dark md:p-0"
                >CONTACT</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/gift"
                class="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 hover:text-primary-dark md:p-0"
                >GIFT</RouterLink
              >
            </li>
            <li>
              <button
                class="bg-primary rounded-3xl bg- border border-r-100 px-2 py-3"
              >
                <RouterLink
                  to="/reservations"
                  class="block rounded md:border-0 hover:text-primary-dark md:p-0"
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
