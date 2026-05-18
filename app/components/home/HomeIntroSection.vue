<template>
  <UPageSection v-bind="page" orientation="horizontal">
    <template #description>
      <ContentRenderer v-if="page" :value="page" :prose="false" />
    </template>
  </UPageSection>
</template>
<script setup lang="ts">
const { data: page } = await useSection("/section/home/intro");
</script>
