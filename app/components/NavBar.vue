<template>
  <UContainer class="fixed top-2 right-0 left-0 z-10">
    <UCard
      variant="subtle"
      color="sage"
      class="backdrop-blur-xl"
      :ui="{ body: 'flex items-center justify-between py-0 sm:py-0' }"
    >
      <AppLogo :height="20" />
      <div class="flex gap-2">
        <UNavigationMenu :items="items" variant="link" />
        <UColorModeButton variant="link" />
      </div>
    </UCard>
  </UContainer>
</template>
<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";
import AppLogo from "~/components/AppLogo.vue";

const items = computed<NavigationMenuItem[]>(() => [
  { to: "/", label: "Welkom" },
  { to: "/about", label: "Over mij" },
  { to: "/work", label: "Projecten" },
  { to: "/contact", label: "Contact" },
]);
</script>
