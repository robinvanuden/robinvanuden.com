<template>
  <li class="text-sand hover:text-walnut font-medium tracking-wider">
    <NuxtLink :to="toPath" active-class="text-walnut">
      {{ title }}
    </NuxtLink>
  </li>
</template>
<script setup lang="ts">
const localePath = useLocalePath();

const props = defineProps({
  title: { type: String, required: true },
  to: { type: String, required: true },
});

const toPath = computed(() => localePath(props.to));
</script>
<style scoped></style>
