<template>
  <div id="home" class="w-full flex flex-no-wrap flex-row gap-3">
    <NuxtImg
      src="/robin.jpeg"
      alt="Robin van Uden"
      quality="70"
      width="300"
      height="300"
      densities="x1 x2"
      loading="lazy"
      class="rounded-xl size-100"
      preload
    />
    <div
      class="w-1/1 h-100 bg-sage p-3 rounded-xl flex flex-col justify-center items-center"
    >
      <div class="block">
        <h1 class="font-bold">Robin van Uden</h1>
        <p>
          <i>Fullstack Webdeveloper</i>
          <br />
          <a href="mailto:hello@robinvanuden.com" class="underline">
            hello@robinvanuden.com
          </a>
        </p>
        <p class="mt-4 text-gold-600"><i>More coming soon...</i></p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped></style>
