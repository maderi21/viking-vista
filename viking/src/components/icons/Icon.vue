<template>
  <font-awesome-icon :icon="icon" />
</template>

<script setup>
import { defineProps, computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const icon = computed(() => {
  return props.name;
});
</script>
