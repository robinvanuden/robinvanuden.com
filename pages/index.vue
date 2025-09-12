<template>
  <div id="home" class="w-full flex flex-no-wrap flex-row gap-3">
    <NuxtImg
      src="/robin.jpeg"
      alt="Robin van Uden"
      quality="70"
      width="500"
      height="500"
      densities="x1 x2"
      loading="lazy"
      class="box size-100 p-0"
      preload
    />
    <div
      class="w-1/1 h-100 bg-sage box flex flex-col justify-center items-center"
    >
      <div class="block">
        <h1 class="font-bold">Robin van Uden</h1>
        <p>
          <i>Fullstack Webdeveloper</i> @
          <a href="https://www.qdata.nl" class="underline"
            >Q-data Automatisering</a
          >
        </p>
        <p>
          <a href="mailto:hello@robinvanuden.com" class="underline">
            hello@robinvanuden.com
          </a>
        </p>
        <p class="mt-4 text-gold-600">
          <i>{{ t("soon") }}</i>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from "#imports";

const { t } = useI18n();
</script>
<style scoped></style>
