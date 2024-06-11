<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  BtnSize: {
    type: String,
    default: "medium",
  },
  BtnStyle: {
    type: String,
    default: "filled",
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

const btnStyleClass = computed(() => {
  if (props.BtnStyle === "outline") {
    return "border border-primary-dark text-primary-dark bg-transparent";
  } else {
    return "bg-primary-dark text-white";
  }
});
</script>

<template>
  <span :class="`rounded ${btnSizeClass.value} ${btnStyleClass.value}`">
    <slot></slot>
  </span>
</template>
