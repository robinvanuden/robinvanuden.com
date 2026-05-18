<template>
  <NuxtImg src="/logo.png" :height="height" class="light:invert" />
</template>
<script setup lang="ts">
withDefaults(defineProps<{ height?: number }>(), { height: 60 });
</script>
