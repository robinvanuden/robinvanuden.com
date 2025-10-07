<template>
  <div class="w-full min-h-120 box flex flex-col justify-center items-center">
    <h1 class="font-bold">{{ title }}</h1>
    <p>Binnenkort meer...</p>
  </div>
</template>
<script setup lang="ts">
defineProps<{ title: string }>();
</script>
<style scoped></style>
