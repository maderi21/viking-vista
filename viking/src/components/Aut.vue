<template>
  <div class="auth-container">
    <div v-if="showLogin" class="auth-form">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form @submit.prevent="login">
        <label for="login-email" class="block mb-2">Email</label>
        <input
          id="login-email"
          v-model="loginEmail"
          type="email"
          name="signup_email"
          required
          class="block w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        />
        <label for="login-password" class="block mb-2">Password</label>
        <input
          id="login-password"
          v-model="loginPassword"
          type="password"
          name="signup_password"
          required
          class="block w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          class="w-full py-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
        <p class="mt-4 text-center">
          Don't have an account?
          <a @click="toggleForm" class="text-blue-500 cursor-pointer"
            >Sign Up</a
          >
        </p>
      </form>
    </div>

    <div v-else class="auth-form">
      <h2 class="text-2xl font-bold mb-4">Sign Up</h2>
      <form @submit.prevent="signup">
        <label for="signup-email" class="block mb-2">Email</label>
        <input
          id="signup-email"
          name="login_email"
          v-model="signupEmail"
          type="email"
          required
          class="block w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        />
        <label for="signup-password" class="block mb-2">Password</label>
        <input
          id="signup-password"
          v-model="signupPassword"
          name="login_password"
          type="password"
          required
          class="block w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          class="w-full py-2 bg-green-500 text-white rounded"
        >
          Sign Up
        </button>
        <p class="mt-4 text-center">
          Already have an account?
          <a
            @click="toggleForm"
            class="text-blue-500 cursor-pointer"
            method="post"
            action="includes/formhandler.php"
            >Login</a
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showLogin = ref(true);

const loginEmail = ref("");
const loginPassword = ref("");
const signupEmail = ref("");
const signupPassword = ref("");

const toggleForm = () => {
  showLogin.value = !showLogin.value;
};

const login = () => {
  // Handle login logic
  console.log("Login:", loginEmail.value, loginPassword.value);
};

const signup = () => {
  // Handle signup logic
  console.log("Sign Up:", signupEmail.value, signupPassword.value);
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.auth-form {
  display: flex;
  flex-direction: column;
}
</style>
