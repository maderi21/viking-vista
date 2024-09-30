<template>
  <div>
    <section
      class="absolute flex flex-col items-center justify-center h-[400px] w-[400px] p-4 bg-gray-100"
    >
      <!-- Sign Up Modal -->
      <transition name="fade">
        <div
          v-if="authType === 'signup'"
          class="modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
        >
          <div class="bg-white p-6 rounded-lg shadow-lg max-w-md relative">
            <button
              @click="closeModal"
              class="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h2 class="text-2xl mb-4">Sign Up</h2>
            <form @submit.prevent="handleSignup">
              <label class="block mb-2">
                <span class="text-gray-700">Email:</span>
                <input
                  v-model="signupEmail"
                  type="email"
                  required
                  class="form-input mt-1 block w-full"
                />
              </label>
              <label class="block mb-4">
                <span class="text-gray-700">Password:</span>
                <input
                  v-model="signupPassword"
                  type="password"
                  required
                  class="form-input mt-1 block w-full"
                />
              </label>
              <button
                type="submit"
                class="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Sign Up
              </button>
              <p
                v-if="signupMessage"
                :class="{
                  'text-red-500': signupStatus === 'error',
                  'text-green-500': signupStatus === 'success',
                }"
                class="mt-4"
              >
                {{ signupMessage }}
              </p>
            </form>
          </div>
        </div>
      </transition>

      <!-- Login Modal -->
      <transition name="fade">
        <div
          v-if="authType === 'login'"
          class="modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
        >
          <div
            class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
          >
            <button
              @click="closeModal"
              class="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h2 class="text-2xl mb-4">Login</h2>
            <form @submit.prevent="handleLogin">
              <label class="block mb-2">
                <span class="text-gray-700">Email:</span>
                <input
                  v-model="loginEmail"
                  type="email"
                  required
                  class="form-input mt-1 block w-full"
                />
              </label>
              <label class="block mb-4">
                <span class="text-gray-700">Password:</span>
                <input
                  v-model="loginPassword"
                  type="password"
                  required
                  class="form-input mt-1 block w-full"
                />
              </label>
              <button
                type="submit"
                class="px-4 py-2 bg-green-500 text-white rounded"
              >
                Login
              </button>
              <p
                v-if="loginMessage"
                :class="{
                  'text-red-500': loginStatus === 'error',
                  'text-green-500': loginStatus === 'success',
                }"
                class="mt-4"
              >
                {{ loginMessage }}
              </p>
            </form>
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

// Sign-up form data and response status
const signupEmail = ref("");
const signupPassword = ref("");
const signupMessage = ref("");
const signupStatus = ref(""); // 'success' or 'error'

// Login form data and response status
const loginEmail = ref("");
const loginPassword = ref("");
const loginMessage = ref("");
const loginStatus = ref(""); // 'success' or 'error'

// Modal state control
const authType = ref(""); // 'signup' or 'login'

// Open the Sign Up modal
const openSignupModal = () => {
  authType.value = "signup"; // Opens the Sign Up modal
};

// Open the Login modal
const openLoginModal = () => {
  authType.value = "login"; // Opens the Login modal
};

// Close the modal
const closeModal = () => {
  authType.value = ""; // Closes both modals
};

// Handle sign-up form submission
const handleSignup = async () => {
  try {
    const response = await axios.post("/path-to-your-signup-endpoint", {
      email: signupEmail.value,
      password: signupPassword.value,
    });

    signupMessage.value = response.data.message;
    signupStatus.value = response.data.status;
  } catch (error) {
    signupMessage.value = "An error occurred. Please try again.";
    signupStatus.value = "error";
  } finally {
    signupEmail.value = "";
    signupPassword.value = "";
    closeModal();
  }
};

// Handle login form submission
const handleLogin = async () => {
  try {
    const response = await axios.post("/path-to-your-login-endpoint", {
      email: loginEmail.value,
      password: loginPassword.value,
    });
    loginMessage.value = response.data.message;
    loginStatus.value = response.data.status;
  } catch (error) {
    loginMessage.value = "An error occurred. Please try again.";
    loginStatus.value = "error";
  } finally {
    loginEmail.value = "";
    loginPassword.value = "";
    closeModal();
  }
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
