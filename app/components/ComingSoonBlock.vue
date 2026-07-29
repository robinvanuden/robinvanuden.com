<template>
  <UPageHero :title="title" description="Binnenkort meer..."></UPageHero>
</template>
<script setup lang="ts">
defineProps<{ title: string }>();
</script>
