<template>
  <UPageHero v-bind="page">
    <template v-if="page?.image" #headline>
      <NuxtImg
        v-bind="page.image"
        class="pixelated mx-auto size-36 rounded-full"
      />
    </template>
    <template #description>
      <ContentRenderer v-if="page" :value="page" :prose="false" />
    </template>
  </UPageHero>
</template>
<script setup lang="ts">
const { data: page } = await useSection("/section/home/hero");
</script>
<style scoped></style>
