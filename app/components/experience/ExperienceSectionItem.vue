<template>
  <div class="flex flex-row items-center gap-2 text-nowrap">
    <div class="date text-muted">{{ dateStarted }} - {{ dateEnded }}</div>
    <USeparator />
    <p class="">
      {{ experience.title }} bij
      <span class="text-primary">{{ experience.company }}</span>
    </p>
  </div>
</template>
<script setup lang="ts">
import type { ExperienceCollectionItem } from "@nuxt/content";

const props = defineProps<{ experience: ExperienceCollectionItem }>();

const dateStarted = computed(() =>
  new Date(props.experience.date_start).toLocaleDateString("nl-NL", {
    month: "short",
    year: "numeric",
  }),
);

const dateEnded = computed(() => {
  if (!props.experience.date_ended) {
    return "heden";
  }
  return new Date(props.experience.date_ended).toLocaleDateString("nl-NL", {
    month: "short",
    year: "numeric",
  });
});
</script>
<style scoped></style>
