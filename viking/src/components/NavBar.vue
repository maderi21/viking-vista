<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  auth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "../../firebase";
import Icon from "../components/icons/Icon.vue";
import { RouterLink } from "vue-router";

const showAuth = ref(false);
const authType = ref("");
const isUserLoggedIn = ref(false);
const name = ref("");
const email = ref("");
const password = ref("");

const toggleAuth = (type) => {
  authType.value = type;
  showAuth.value = !showAuth.value;
};

const closeAuthOnEsc = (event) => {
  if (event.key === "Escape") {
    toggleAuth("");
  }
};

const submit = () => {
  if (authType.value === "signup") {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        name.value = name.value;
        localStorage.setItem("userName", name.value);
        showAuth.value = false;
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  } else if (authType.value === "login") {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        name.value = user.displayName || "User";
        localStorage.setItem("userName", name.value);
        showAuth.value = false;
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
};

const logout = () => {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully!");
      isUserLoggedIn.value = false;
      name.value = "";
      localStorage.removeItem("userName");
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
};

onMounted(() => {
  document.addEventListener("keydown", closeAuthOnEsc);

  onAuthStateChanged(auth, (user) => {
    isUserLoggedIn.value = !!user;
    if (user) {
      name.value = localStorage.getItem("userName") || "User";
    }
  });
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", closeAuthOnEsc);
});
</script>

<template>
  <div class="w-full sticky top-0">
    <nav class="">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-bold whitespace-nowrap"
            >VIKING VISTA</span
          >
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium px-5 flex flex-col items-center p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
          >
            <li>
              <a
                href="#accommodation"
                class="hover:underline hover:underline-offset-8 block hover:text-primary-dark py-2 px-3 rounded md:bg-transparent md:p-0"
              >
                <Icon name="house" class="mr-3"> </Icon>ACCOMMODATION
              </a>
            </li>

            <li>
              <a
                href="/#experience"
                class="hover:underline hover:underline-offset-8 block py-2 px-3 mx-3 rounded hover:text-primary-dark hover:shadow-md md:border-0 md:p-0"
              >
                <Icon name="coffee" class="mr-3"> </Icon>EXPERIENCE
              </a>
            </li>
            <li>
              <a
                href="/#gift"
                class="hover:underline hover:underline-offset-8 block py-2 px-3 rounded md:hover:bg-transparent md:border-0 hover:text-primary-dark md:p-0"
              >
                <Icon name="gift" class="mr-3"></Icon>GIFT
              </a>
            </li>
            <li>
              <Button class="border border-primary-dark rounded-3xl px-2 py-3">
                <RouterLink
                  to="/reservations"
                  class="block rounded hover:text-primary-dark md:p-0"
                  >RESERVATIONS</RouterLink
                >
              </Button>
            </li>
            <li class="px-5 flex">
              <!-- Conditionally render Login/Sign-up or Logout button -->
              <div v-if="!isUserLoggedIn">
                <button
                  @click="toggleAuth('login')"
                  class="border border-primary-dark rounded-3xl px-4 py-2 hover:bg-gray-200 mr-4"
                >
                  Login
                </button>
                <button
                  @click="toggleAuth('signup')"
                  class="border border-primary-dark rounded-3xl px-4 py-2 hover:bg-gray-200"
                >
                  Sign-up
                </button>
              </div>
              <div v-else class="flex flex-row items-center space-x-3">
                <div
                  class="flex items-center hover:underline hover:underline-offset-8 hover:text-primary-dark py-2 px-3 rounded md:bg-transparent md:p-0"
                >
                  <Icon name="user" class="mr-2"></Icon>
                  <p>{{ name }}</p>
                </div>
                <button @click="logout" class="hover:text-primary-dark">
                  <Icon name="right-from-bracket" />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div
      v-if="showAuth"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-6 rounded-lg w-full max-w-md">
        <h3 class="text-2xl font-bold mb-4 text-black">
          {{ authType === "signup" ? "Sign Up" : "Login" }}
        </h3>

        <form @submit.prevent="submit">
          <div v-if="authType === 'signup'" class="mb-4">
            <label class="block mb-2 text-sm font-medium text-black"
              >Name</label
            >
            <input
              v-model="name"
              type="text"
              id="name"
              class="w-full p-2 border border-gray-300 rounded text-black"
              placeholder="Enter your name"
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 text-sm font-medium">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full p-2 border border-gray-300 rounded text-black"
              placeholder="Enter your email"
            />
          </div>

          <div class="mb-4">
            <label class="block mb-2 text-sm font-medium">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="w-full p-2 border border-gray-300 rounded text-black"
              placeholder="Enter your password"
            />
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-primary-dark text-white p-2 rounded mt-4"
          >
            {{ authType === "signup" ? "Create Account" : "Login" }}
          </button>
        </form>

        <!-- Close Button -->
        <button
          @click="toggleAuth('')"
          class="mt-4 text-sm text-primary-dark underline"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
