<template>
  <div id="home" class="flex flex-col gap-4">
    <UPageHero v-bind="hero">
      <template v-if="hero?.image" #headline>
        <NuxtImg
          v-bind="hero.image"
          class="pixelated mx-auto size-32 rounded-full"
        />
      </template>
      <template #description>
        <ContentRenderer v-if="hero" :value="hero" :prose="false" />
      </template>
    </UPageHero>
    <UPageSection v-bind="intro" orientation="horizontal">
      <template #description>
        <ContentRenderer v-if="intro" :value="intro" :prose="false" />
      </template>
    </UPageSection>
    <LanguagesMarquee />
  </div>
</template>
<script lang="ts" setup>
const { data: hero } = await useSection("/section/home/hero");

const { data: intro } = await useSection("/section/home/intro");

const root = useRequestURL();

const title = computed(() => hero.value?.seo?.title);
const description = computed(() => hero.value?.seo?.description);
const image = computed(() => root.origin + hero.value?.image?.src);

useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  description: description,
  ogDescription: description,
  twitterDescription: description,
  twitterCard: "summary",
  ogImage: image,
  twitterImage: image,
});
</script>
