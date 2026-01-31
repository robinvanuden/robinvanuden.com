<template>
  <UContainer class="fixed top-2 right-0 left-0 z-10">
    <div
      class="bg-elevated flex items-center justify-between rounded-xl px-2 backdrop-blur-xl"
    >
      <AppLogo :height="20" class="ml-2" />
      <div class="flex gap-1 md:gap-2">
        <UNavigationMenu :items="items" variant="link" />
        <UColorModeButton variant="link" />
      </div>
    </div>
  </UContainer>
</template>
<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  { to: "/", label: "Welkom" },
  { to: "/about", label: "Over mij" },
  { to: "/work", label: "Projecten" },
  { to: "/contact", label: "Contact" },
]);
</script>
