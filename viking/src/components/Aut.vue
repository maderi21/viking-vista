<template>
  <div>
    <section class="p-4 bg-gray-100 w-96 h-96 rounded-lg relative">
      <div
        v-if="authType === 'signup'"
        class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
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

      <div
        v-if="authType === 'login'"
        class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
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
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const signupEmail = ref("");
const signupPassword = ref("");
const signupMessage = ref("");
const signupStatus = ref("");

const loginEmail = ref("");
const loginPassword = ref("");
const loginMessage = ref("");
const loginStatus = ref("");

const authType = ref("");

const openSignupModal = () => {
  authType.value = "signup";
};
const openLoginModal = () => {
  authType.value = "login";
};

const closeModal = () => {
  authType.value = "";
};

const handleSignup = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      signupEmail.value,
      signupPassword.value
    );

    const user = userCredential.user;
    console.log("User UID:", user.uid);
    console.log("User Email:", user.email);

    signupMessage.value = "Sign up successful!";
    signupStatus.value = "success";
  } catch (error) {
    signupMessage.value = error.message;
    signupStatus.value = "error";
  } finally {
    signupEmail.value = "";
    signupPassword.value = "";
    closeModal();
  }
};

const handleLogin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail.value,
      loginPassword.value
    );

    const user = userCredential.user;
    console.log("User UID:", user.uid);
    console.log("User Email:", user.email);

    loginMessage.value = "Login successful!";
    loginStatus.value = "success";
  } catch (error) {
    loginMessage.value = error.message;
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
