<script setup>
import { ref, computed, watch } from "vue";
import Button from "./Button.vue";
import Litepicker from "litepicker";

// Reactive variables
const pricePerNight = 49.99;
const nights = ref(0); // To store the number of nights
const selectedDates = ref([null, null]); // To store the selected dates

// Function to open the date picker modal
function openModal() {
  document.getElementById("dateModal").classList.remove("hidden");

  if (!window.datePicker) {
    window.datePicker = new Litepicker({
      element: document.getElementById("datePickerInput"),
      singleMode: false,
      format: "YYYY-MM-DD",
      numberOfMonths: 2,
      numberOfColumns: 2,
      minDate: new Date().toISOString(),
      maxDate: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ).toISOString(),
      onSelect: () => {
        // Get selected dates as strings
        const [startDateStr, endDateStr] = window.datePicker.getDate();

        if (startDateStr && endDateStr) {
          // Convert the strings to Date objects and update the selectedDates
          const startDate = new Date(startDateStr);
          const endDate = new Date(endDateStr);

          // Trigger Vue reactivity by updating the reactive reference
          selectedDates.value = [startDate, endDate];
        } else {
          selectedDates.value = [null, null];
        }
      },
    });
  }
}

// Watch the selected dates to update the nights calculation
watch(selectedDates, (newDates) => {
  if (newDates[0] && newDates[1]) {
    // Calculate the number of nights whenever dates are selected
    const timeDiff = newDates[1].getTime() - newDates[0].getTime();
    nights.value = timeDiff / (1000 * 3600 * 24); // Calculate nights based on time difference
  } else {
    nights.value = 0;
  }
});

// Function to close the modal
function closeModal() {
  document.getElementById("dateModal").classList.add("hidden");
}

// Function to confirm the dates and close the modal
function confirmDates() {
  console.log("Selected Dates:", selectedDates.value);
  closeModal();
}

// Computed property for total price based on the number of nights
const totalPrice = computed(() => {
  return (nights.value * pricePerNight).toFixed(2);
});
</script>

<template>
  <div
    class="bg-hero text-white bg-cover bg-center h-[1100px] flex flex-col items-center rounded-b-3xl"
  >
    <div class="flex items-center flex-col mt-52">
      <h1 class="text-6xl mb-5">Your Adventure</h1>
      <h1 class="text-6xl">Begins In Our Remote Cabin</h1>
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

    <button class="mt-20" @click="openModal()">
      <Button
        class="border border-primary-dark px-10 w-[300px]"
        BtnSize="large"
      >
        Reserve Now
      </Button>
    </button>

    <div
      id="dateModal"
      class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center hidden"
    >
      <div class="bg-white text-black p-8 rounded-lg max-w-sm w-full relative">
        <h2 class="text-xl font-bold mb-4 text-black">
          Pick Reservation Dates
        </h2>
        <p>Price for each night: 49.99 EUR</p>
        <input
          type="text"
          id="datePickerInput"
          class="w-full border border-gray-300 p-2 rounded mb-4 text-black"
          placeholder="Select dates"
          readonly
        />
        <div class="mt-4">
          <p class="font-medium text-lg">Number of Nights: {{ nights }}</p>
          <p class="font-medium text-lg">Total Price: {{ totalPrice }} EUR</p>
        </div>
        <button
          @click="closeModal()"
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <button
          class="w-full bg-primary-dark text-white py-2 rounded mt-4"
          @click="confirmDates()"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>
