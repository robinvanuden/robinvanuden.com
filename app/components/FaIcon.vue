<template>
  <FontAwesomeIcon v-bind="props" />
</template>
<script setup lang="ts">
import type { FontAwesomeIconProps } from "@fortawesome/vue-fontawesome";

const props = defineProps<FontAwesomeIconProps>();
</script>
<style scoped></style>
