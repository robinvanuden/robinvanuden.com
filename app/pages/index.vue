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
import { useI18n } from "#imports";
import { withLeadingSlash } from "ufo";
import type { Collections } from "@nuxt/content";

const { locale } = useI18n();

const route = useRoute();
const slug = computed(() => withLeadingSlash(String(route.path)));

const { data: page } = await useAsyncData(
  "page-" + slug.value,
  async () => {
    // Build collection name based on current locale
    const collection = ("content_" + locale.value) as keyof Collections;
    const content = await queryCollection(collection).path(slug.value).first();

    // Optional: fallback to default locale if content is missing
    if (!content && locale.value !== "en") {
      return await queryCollection("content_en").path(slug.value).first();
    }

    return content;
  },
  {
    watch: [locale], // Refetch when locale changes
  },
);
</script>
<style scoped></style>
