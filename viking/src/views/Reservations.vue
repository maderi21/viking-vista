<!-- MainComponent.vue -->
<script setup>
import { ref } from "vue";
import SignupForm from "@/components/SignupForm.vue";
import Button from "@/components/Button.vue";
import Icon from "@/components/icons/Icon.vue";

const showSignupForm = ref(false);

const toggleSignupForm = () => {
  showSignupForm.value = !showSignupForm.value;
};
</script>

<template>
  <div>
    <div
      class="bg-primary-green text-white flex justify-center items-center rounded-t-3xl"
    >
      <div class="flex justify-center space-x-20 p-10 mt-10">
        <div class="w-[700px] text-center p-5">
          <h1 class="text-5xl mb-5">SIGN UP & STAY CONNECTED</h1>
          <p class="">
            Stay connected with us! Sign up now to receive the latest updates,
            exclusive offers, and exciting news straight to your inbox. Be the
            first to know about our new products, special promotions, and
            upcoming events. Join our community and never miss out on important
            announcements and insider info!
          </p>
        </div>
        <div class="flex flex-col mt-5 space-y-5 items-center">
          <input
            placeholder="Email"
            class="w-[300px] rounded-3xl px-6 py-3 text-lg"
          />
          <button @click="toggleSignupForm">
            <Button
              class="border border-primary-dark px-10 w-[300px]"
              BtnSize="large"
            >
              Stay Connected
            </Button>
          </button>
        </div>
      </div>
    </div>
    <!-- Conditional rendering of SignupForm component -->
    <div v-if="showSignupForm" class="p-4 bg-gray-100">
      <SignupForm />
    </div>
    <div
      class="bg-ex text-white bg-cover bg-center h-[600px] flex flex-col justify-center items-center"
    >
      <h1 class="text-5xl mb-4">EXPLORE</h1>
      <button>
        <Button
          class="border border-primary-dark px-10 w-[300px] items-center"
          BtnSize="large"
        >
          Learn more
        </Button>
      </button>
    </div>
    <div>
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
        <hr
          class="absolute bottom-4 left-20 right-20 border-t-2 border-white"
        />
      </div>
      <div class="bg-primary-green text-center text-white">
        made with love<Icon name="heart" class="ml-2" />
      </div>
    </div>
  </div>
</template>
