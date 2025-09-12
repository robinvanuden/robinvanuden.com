<template>
  <li class="text-walnut hover:text-sage font-medium tracking-wider">
    <NuxtLink :to="localePath(to)" active-class="text-sage">
      {{ title }}
    </NuxtLink>
  </li>
</template>
<script setup lang="ts">
const localePath = useLocalePath();

defineProps({
  title: { type: String, required: true },
  to: { type: String, required: true },
});
</script>
<style scoped></style>
