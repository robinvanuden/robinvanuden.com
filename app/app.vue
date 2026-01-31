<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script lang="ts" setup>
import { computed, useRuntimeConfig, useHead, useSeoMeta } from "#imports";

const runtime = useRuntimeConfig();

const name = computed(() => runtime.public?.site?.name);

const img = useImage();

useHead({
  titleTemplate: (title) => [title, name.value].filter((s) => s).join(" | "),
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
