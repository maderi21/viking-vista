<script setup>
import Button from "@/components/Button.vue";

defineProps({});
</script>

<template>
  <div class="bg-primary-green text-white flex justify-center rounded-t-3xl">
    <div class="flex justify-center space-x-20 p-10 mt-10">
      <div class="w-[700px] text-center p-5">
        <h1 class="text-5xl mb-10">SIGN UP & STAY CONNECTED</h1>
        <p class="p-5">
          Stay connected with us! Sign up now to receive the latest updates,
          exclusive offers, and exciting news straight to your inbox. Be the
          first to know about our new products, special promotions, and upcoming
          events. Join our community and never miss out on important
          announcements and insider info!
        </p>
      </div>
      <div class="flex flex-col mt-5 space-y-5 items-center">
        <input
          placeholder="Email"
          class="w-[300px] rounded-3xl px-6 py-3 text-lg"
        />
        <button>
          <Button
            class="border border-primary-dark px-10 w-[300px]"
            BtnSize="large"
            >Stay Connected</Button
          >
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
