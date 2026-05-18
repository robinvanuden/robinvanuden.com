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
      <UColorModeButton color="neutral" variant="link" />
    </template>
  </UHeader>
</template>
<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  { to: "/", label: "Welkom" },
  { to: "/work", label: "Projecten" },
  { to: "/about", label: "Over mij" },
]);
</script>
