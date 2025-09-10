<template>
  <div
    id="home"
    class="w-full h-screen flex flex-wrap flex-row justify-center items-center"
  >
    <div class="home-container">
      <NuxtImg
        src="/robin.jpeg"
        alt="Robin van Uden"
        quality="70"
        width="300"
        height="300"
        densities="x1 x2"
        loading="lazy"
        class="rounded-lg size-56 mb-2"
        preload
      />
      <h1 class="font-bold text-2xl">Robin van Uden</h1>
      <p>
        <i>Fullstack Webdeveloper</i>
        <br />
        <a href="mailto:hello@robinvanuden.com" class="underline"
          >hello@robinvanuden.com</a
        >
      </p>
      <p class="mt-4 text-gold-600"><i>More coming soon...</i></p>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped></style>
