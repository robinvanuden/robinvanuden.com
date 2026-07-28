<template>
  <UHeader to="/" :ui="{ root: 'border-0' }">
    <template #title>
      <AppLogo :height="20" class="ml-2" />
    </template>
    <UNavigationMenu :items="items" color="secondary" variant="link" />
    <template #body>
      <UNavigationMenu
        :items="items"
        color="secondary"
        orientation="vertical"
      />
    </template>
    <template #right>
      <UButton
        title="Linkedin"
        variant="ghost"
        color="primary"
        icon="fab:linkedin"
        :to="urlLinkedin"
        target="_blank"
      />
      <UButton
        title="Github"
        variant="ghost"
        color="primary"
        icon="fab:github"
        :to="urlGithub"
        target="_blank"
      />
      <UColorModeButton color="neutral" variant="link" />
    </template>
  </UHeader>
</template>
<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";
const runtime = useRuntimeConfig();

const urlLinkedin = computed(() => runtime?.public?.socials?.linkedin);
const urlGithub = computed(() => runtime?.public?.socials?.github);

const items = computed<NavigationMenuItem[]>(() => [
  { to: "/", label: "Welkom" },
  { to: "/work", label: "Projecten" },
  { to: "/about", label: "Over mij" },
]);
</script>
