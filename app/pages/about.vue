<template>
  <div id="about">
    <UPageHero v-if="intro" v-bind="intro" />
    <UPageSection v-if="course" v-bind="course">
      <template #description>
        <ContentRenderer :value="course" />
      </template>
    </UPageSection>
    <ExperienceSection />
  </div>
</template>
<script setup lang="ts">
const { data: intro } = await useSection("/section/about/intro");
const { data: course } = await useSection("/section/about/course");
</script>
<style scoped></style>
