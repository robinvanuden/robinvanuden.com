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
  ogImage: () => ({
    url: img("/robin.jpeg", {
      width: 800,
      height: 800,
      fit: "cover",
    }),
    alt: name.value,
    type: "image/jpeg",
    width: 800,
    height: 800,
  }),
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
