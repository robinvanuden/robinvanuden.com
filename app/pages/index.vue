<template>
  <div id="home" class="flex flex-col gap-4">
    <UPageHero v-bind="hero">
      <template v-if="hero?.image" #headline>
        <NuxtImg v-bind="hero.image" class="rounded-squircle mx-auto size-32" />
      </template>
      <template #description>
        <ContentRenderer v-if="hero" :value="hero" :prose="false" />
      </template>
      <BackgroundCubes />
    </UPageHero>
    <UPageSection v-if="intro" v-bind="intro" orientation="horizontal">
      <template #description>
        <ContentRenderer v-if="intro" :value="intro" :prose="false" />
      </template>
      <NuxtImg
        src="/img/graduation.jpg"
        alt="Afgestudeerd"
        class="rounded-squircle"
        width="500"
        quality="80"
      />
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

const title = computed(() => hero.value?.seo?.title);
const description = computed(() => hero.value?.seo?.description);

useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  description: description,
  ogDescription: description,
  twitterDescription: description,
  twitterCard: "summary",
});
</script>
