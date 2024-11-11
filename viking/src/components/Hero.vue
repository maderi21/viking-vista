<script setup>
import { ref, computed, watch } from "vue";
import Button from "./Button.vue";
import Litepicker from "litepicker";

const pricePerNight = 49.99;
const nights = ref(0);
const selectedDates = ref([null, null]);

const numberOfGuests = ref(1);
const guests = ref([{ name: "", surname: "" }]);

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
        const [startDateStr, endDateStr] = window.datePicker.getDate();

        if (startDateStr && endDateStr) {
          const startDate = new Date(startDateStr);
          const endDate = new Date(endDateStr);
          selectedDates.value = [startDate, endDate];
        } else {
          selectedDates.value = [null, null];
        }
      },
    });
  }
}

watch(selectedDates, (newDates) => {
  if (newDates[0] && newDates[1]) {
    const timeDiff = newDates[1].getTime() - newDates[0].getTime();
    nights.value = timeDiff / (1000 * 3600 * 24);
  } else {
    nights.value = 0;
  }
});

function closeModal() {
  document.getElementById("dateModal").classList.add("hidden");
}

function confirmDates() {
  console.log("Selected Dates:", selectedDates.value);
  closeModal();
  document.getElementById("guestFormModal").classList.remove("hidden");
}

const totalPrice = computed(() => {
  return (nights.value * pricePerNight).toFixed(2);
});

function closeGuestFormModal() {
  document.getElementById("guestFormModal").classList.add("hidden");
}

watch(numberOfGuests, (newCount) => {
  guests.value = Array.from({ length: newCount }, () => ({
    name: "",
    surname: "",
  }));
});

function submitGuestForm() {
  console.log("Guest Info:", {
    guests: guests.value,
    selectedDates: selectedDates.value,
    totalPrice: totalPrice.value,
  });

  closeGuestFormModal();
  alert("Booking Confirmed!");
}
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

    <div
      id="guestFormModal"
      class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center hidden"
    >
      <div class="bg-white text-black p-8 rounded-lg max-w-sm w-full relative">
        <h2 class="text-xl font-bold mb-4 text-black">Guest Information</h2>

        <form @submit.prevent="submitGuestForm">
          <div class="mb-4">
            <label for="numberOfGuests" class="block">Number of Guests</label>
            <input
              v-model="numberOfGuests"
              id="numberOfGuests"
              type="number"
              min="1"
              class="w-full border border-gray-300 p-2 rounded mb-4 text-black"
              required
            />
          </div>

          <!-- Dynamic Guest Fields -->
          <div v-for="(guest, index) in guests" :key="index" class="mb-4">
            <h3 class="font-bold">Guest {{ index + 1 }}</h3>
            <div class="mb-2">
              <label :for="'guestName' + index" class="block">First Name</label>
              <input
                v-model="guest.name"
                :id="'guestName' + index"
                type="text"
                class="w-full border border-gray-300 p-2 rounded mb-4 text-black"
                required
              />
            </div>
            <div class="mb-2">
              <label :for="'guestSurname' + index" class="block"
                >Last Name</label
              >
              <input
                v-model="guest.surname"
                :id="'guestSurname' + index"
                type="text"
                class="w-full border border-gray-300 p-2 rounded mb-4 text-black"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-primary-dark text-white py-2 rounded mt-4"
          >
            Submit
          </button>
        </form>

        <button
          @click="closeGuestFormModal()"
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
</template>
