<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  BtnSize: {
    type: String,
    default: "medium",
  },
});

const btnSizeClass = computed(() => {
  switch (props.BtnSize) {
    case "small":
      return "px-2 py-1 text-sm";
    case "large":
      return "px-6 py-3 text-lg";
    case "medium":
    default:
      return "px-4 py-2 text-base";
  }
});
</script>

<template>
  <button :class="`rounded-3xl  ${btnSizeClass}`">
    <slot></slot>
  </button>
</template>
