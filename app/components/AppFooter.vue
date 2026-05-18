<template>
  <UFooter>
    <template #left>
      <span class="inline-flex items-center gap-1"
        >Gebouwd met
        <UIcon name="fas:stroopwafel" class="text-old-gold-500" /> &
        <UIcon name="fas:heart" class="text-red-500" /> door
        <NuxtLink to="/" class="text-muted">Robin</NuxtLink></span
      >
    </template>
    <template #right>
      <UNavigationMenu :items="socials" variant="link" />
    </template>
  </UFooter>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const runtime = useRuntimeConfig();

const urlGithub = computed(() => runtime?.public?.socials?.github);
const urlLinkedin = computed(() => runtime?.public?.socials?.linkedin);
const urlLetterboxd = computed(() => runtime?.public?.socials?.letterboxd);

const socials = computed<NavigationMenuItem[]>(() => [
  {
    title: "Github",
    icon: "fab:github",
    to: urlGithub.value,
    target: "_blank",
  },
  {
    title: "Linkedin",
    icon: "fab:linkedin",
    to: urlLinkedin.value,
    target: "_blank",
  },
  {
    title: "Letterboxd",
    icon: "fab:letterboxd",
    to: urlLetterboxd.value,
    target: "_blank",
  },
]);
</script>
