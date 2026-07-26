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
      <BackgroundCubes />
    </UPageHero>
    <UPageSection v-if="intro" v-bind="intro">
      <template #description>
        <ContentRenderer v-if="intro" :value="intro" :prose="false" />
      </template>
    </UPageSection>
    <UPageSection v-if="skills" v-bind="skills">
      <template #description>
        <ContentRenderer v-if="skills" :value="skills" :prose="false" />
      </template>
      <LanguagesMarquee />
    </UPageSection>
  </div>
</template>
<script lang="ts" setup>
const { data: hero } = await useSection("/section/home/hero");

const { data: intro } = await useSection("/section/home/intro");

const { data: skills } = await useSection("/section/home/skills");

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
