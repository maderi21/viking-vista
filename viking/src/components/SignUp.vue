<template>
  <form
    @submit.prevent="handleSubmit"
    class="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
  >
    <div class="mb-4">
      <label for="name" class="block text-sm font-semibold text-gray-700"
        >Name</label
      >
      <input
        type="text"
        id="name"
        v-model="form.name"
        required
        placeholder="Enter your name"
        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-sm font-semibold text-gray-700"
        >Email</label
      >
      <input
        type="email"
        id="email"
        v-model="form.email"
        required
        placeholder="Enter your email"
        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <button
      type="submit"
      class="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Sign Up
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
});

const handleSubmit = () => {
  console.log("Form submitted:", form.value);
};
</script>
