<script setup>
import Accommodation from "./Accommodation.vue";
import Hero from "../components/Hero.vue";
import Experience from "./Experience.vue";
import Gift from "./Gift.vue";
import Reservations from "./Reservations.vue";
import Activities from "../assets/pages/Activities.vue";
import LogedIn from "./LogedIn.vue";
</script>

<template>
  <main>
    <section>
      <Hero />
    </section>
    <section>
      <Accommodation />
    </section>
    <section>
      <Experience />
    </section>
    <section>
      <Gift />
    </section>
    <section>
      <Reservations />
    </section>
    <Activities />
    <LogedIn />
  </main>
</template>
