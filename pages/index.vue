<template>
  <div
    id="home"
    class="flex flex-wrap flex-row h-screen w-full justify-center items-center"
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
        preload
      />
      <h1>Robin van Uden</h1>
      <p><i>Fullstack Webdeveloper</i></p>
      <a href="mailto:hello@robinvanuden.com" class="underline"
        >hello@robinvanuden.com</a
      >
      <p style="margin-top: 1rem">More coming soon...</p>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
#home {
  color: #222120;
  background-color: #f5ecdc;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 1.5rem;
  font-weight: 700;
}

img {
  width: 14rem;
  height: 14rem;
  object-fit: cover;
  border-radius: 1rem;
}
</style>
