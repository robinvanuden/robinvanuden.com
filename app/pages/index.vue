<template>
  <div id="home" class="w-full flex flex-no-wrap flex-row gap-2">
    <NuxtImg
      src="/robin.jpeg"
      alt="Robin van Uden"
      quality="70"
      width="500"
      height="500"
      densities="x1 x2"
      loading="lazy"
      class="box size-120 p-0"
      preload
    />
    <div
      v-if="page"
      class="w-1/1 h-120 bg-sage box flex flex-col justify-center items-center"
    >
      <div class="block">
        <ContentRenderer :value="page.body" :prose="false" />
      </div>
    </div>
    <ComingSoonBlock v-else title="Home" class="bg-sage" />
  </div>
</template>
<script lang="ts" setup>
import { withLeadingSlash } from "ufo";

const route = useRoute();
const slug = computed(() => withLeadingSlash(String(route.path)));

const { data: page } = await useAsyncData("page-index", () =>
  queryCollection("content").path(slug.value).first(),
);
</script>
<style scoped></style>
