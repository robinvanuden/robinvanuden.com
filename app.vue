<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
useHead({
  titleTemplate: (title) =>
    [title, "Robin van Uden"].filter((s) => s).join(" | "),
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
  ogUrl: "https://www.robinvanuden.com",
  ogSiteName: "Robin van Uden",
  ogImage: () => ({
    secureUrl: "https://www.robinvanuden.com/robin.jpeg",
    url: "/robin.jpeg",
    alt: "Robin van Uden",
    type: "image/jpeg",
    width: 720,
    height: 720,
  }),
});
</script>
