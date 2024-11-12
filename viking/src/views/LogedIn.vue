<script setup>
import { ref } from "vue";

const currentTab = ref("payments");

const menuItems = [
  { name: "Payments", id: "payments" },
  { name: "Dates", id: "dates" },
  { name: "Personal Information", id: "personalInfo" },
  { name: "Summary", id: "summary" },
];

const changeTab = (tabId) => {
  currentTab.value = tabId;
};
</script>

<template>
  <div class="p-6 font-sans container mx-auto">
    <h1 class="text-2xl font-bold mb-4">You are logged in.</h1>

    <div class="flex">
      <nav class="w-48 bg-gray-100 p-4 rounded-lg shadow-md">
        <ul>
          <li v-for="item in menuItems" :key="item.id" class="mb-2">
            <button
              @click="changeTab(item.id)"
              class="block w-full text-left py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md transition"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </nav>

      <div class="ml-6 flex-1 bg-white p-6 rounded-lg shadow-md">
        <div v-if="currentTab === 'summary'" id="summary">
          <h2 class="text-xl font-semibold mb-2">Booking Dates Summary</h2>
          <p class="text-gray-600">Summary of booking dates...</p>
        </div>

        <div v-if="currentTab === 'payments'" id="payments">
          <h2 class="text-xl font-semibold mb-2">Payment Details</h2>
          <p class="text-gray-600">Summary of payments...</p>
        </div>

        <div v-if="currentTab === 'dates'" id="dates">
          <h2 class="text-xl font-semibold mb-2">Confirmation of Dates</h2>
          <p class="text-gray-600">Confirmation of dates...</p>
        </div>

        <div v-if="currentTab === 'personalInfo'" id="personalInfo">
          <h2 class="text-xl font-semibold mb-2">Personal Information</h2>
          <p class="text-gray-600">Personal information details...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
