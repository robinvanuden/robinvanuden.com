<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
const runtime = useRuntimeConfig();

const name = computed(() => runtime.public.name);
const url = computed(() => runtime.public.url);

useHead({
  titleTemplate: (title) => [title, name.value].filter((s) => s).join(" | "),
});

useSeoMeta({
  description: "Fullstack Webdeveloper",
  ogDescription: "Fullstack Webdeveloper",
  ogUrl: () => url.value,
  ogSiteName: () => name.value,
  ogImage: () => ({
    url: "/robin.jpeg",
    alt: name.value,
    type: "image/jpeg",
    width: 720,
    height: 720,
  }),
});
</script>
