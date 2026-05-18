<template>
  <UPageSection v-bind="props" orientation="horizontal">
    <template #description>
      <ContentRenderer v-if="page" :value="page" :prose="false" />
    </template>
  </UPageSection>
</template>
<script setup lang="ts">
import type { SectionCollectionItem } from "@nuxt/content";
import type { PageSectionProps } from "@nuxt/ui";

interface AppPageSectionProps extends PageSectionProps {
  page: SectionCollectionItem | null | undefined;
}

const props = defineProps<AppPageSectionProps>();
</script>
