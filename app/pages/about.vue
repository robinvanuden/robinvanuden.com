<template>
  <div id="about">
    <UPageHero v-if="intro" v-bind="intro">
      <ContentRenderer :value="intro" />
    </UPageHero>
    <UPageSection v-if="course" v-bind="course" orientation="horizontal" />
    <ExperienceSection />
  </div>
</template>
<script setup lang="ts">
const { data: intro } = await useSection("/section/about/intro");
const { data: course } = await useSection("/section/about/course");
</script>
<style scoped></style>
