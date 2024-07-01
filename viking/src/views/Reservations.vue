<script setup>
import Button from "@/components/Button.vue";

defineProps({});
</script>

<template>
  <div
    class="bg-primary-green text-white flex flex-col items-center rounded-t-3xl"
  >
    <div class="flex flex-col-2">
      <div>
        <h1>SIGN UP & STAY CONNECTED</h1>
        <p>
          Stay in the loop! Sign up now to receive the latest updates, exclusive
          offers, and news straight to your inbox. Don't miss out!
        </p>
      </div>
      <div>
        <input placeholder="Email" />
      </div>
      <div>
        <button>
          <Button class="border border-primary-dark px-10" BtnSize="large"
            >Reservation</Button
          >
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
