<template>
  <UApp>
    <AppNavigation />
    <UMain>
      <NuxtPage />
      <AppFooter class="mt-4" />
    </UMain>
  </UApp>
</template>
<script lang="ts" setup>
import { computed, useRuntimeConfig, useHead, useSeoMeta } from "#imports";

const runtime = useRuntimeConfig();

const name = computed(() => runtime.public?.site?.name);

const img = useImage();

useHead({
  titleTemplate: (title) => [title, name.value].filter((s) => s).join(" | "),
  htmlAttrs: {
    lang: "nl",
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});

useSeoMeta({
  description: "Fullstack Webdeveloper",
  ogDescription: "Fullstack Webdeveloper",
  ogImage: {
    url: img("/img/hands.jpg", { width: 600, height: 315 }),
    alt: name.value,
    type: "image/jpeg",
    width: 600,
    height: 315,
  },
  twitterImage: {
    url: img("/img/robin.jpg", { width: 800, height: 800 }),
    alt: name.value,
    type: "image/jpeg",
    width: 800,
    height: 800,
  },
});
</script>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.page-enter-active,
.layout-enter-active {
  transition: all 0.3s ease-out;
}

.page-leave-active,
.layout-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.page-enter-from,
.layout-enter-from {
  opacity: 0;
  transform: translate(1rem, 0);
}
.page-leave-to,
.layout-leave-to {
  opacity: 0;
  transform: translate(-3rem, 0);
}
</style>
