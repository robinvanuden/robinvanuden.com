<template>
  <li class="text-walnut hover:text-walnut-dark">
    <NuxtLink :to="to" active-class="text-walnut-dark">{{ title }}</NuxtLink>
  </li>
</template>
<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  to: { type: String, required: true },
});
</script>
<style scoped></style>
