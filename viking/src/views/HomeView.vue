<script setup>
import Accommodation from "./Accommodation.vue";
import Hero from "../components/Hero.vue";
import Experience from "./Experience.vue";
import Gift from "./Gift.vue";
import Reservations from "./Reservations.vue";
import Activities from "./Activities.vue";
import LogedIn from "./LogedIn.vue";
</script>

<template>
  <main>
    <section id="hero">
      <Hero />
    </section>
    <section id="accommodation">
      <Accommodation />
    </section>
    <section id="experience">
      <Experience />
    </section>
    <section id="gift">
      <Gift />
    </section>
    <section id="reservations">
      <Reservations />
    </section>
    <section id="activities">
      <Activities />
    </section>
    <section id="logedin">
      <LogedIn />
    </section>
  </main>
</template>
