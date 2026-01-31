<template>
  <UPageHero
    v-if="page"
    :title="page.title"
    :links="[
      {
        label: 'Projecten',
        to: '/work',
      },
      {
        label: 'hello@robinvanuden.com',
        to: 'mailto:hello@robinvanuden.com',
        color: 'neutral',
      },
    ]"
  >
    <template #description>
      <ContentRenderer :value="page" :prose="false" />
    </template>
    <template #headline>
      <NuxtImg
        src="/robin.jpeg"
        width="120"
        height="120"
        alt="Robin van Uden"
        class="mx-auto rounded-full"
        loading="lazy"
        densities="x1 x2"
      />
    </template>
  </UPageHero>
</template>
<script lang="ts" setup>
import { withLeadingSlash } from "ufo";

const route = useRoute();
const slug = computed(() => withLeadingSlash(String(route.path)));

const { data: page } = await useAsyncData("page-index", () =>
  queryCollection("content").path(slug.value).first(),
);
</script>
