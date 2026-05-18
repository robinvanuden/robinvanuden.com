<template>
  <UContainer>
    <UChangelogVersions>
      <UChangelogVersion
        v-for="(experience, index) in list"
        :key="index"
        v-bind="experience"
      >
        <template #badge>
          <UBadge
            v-for="(badge, b) in experience.badges"
            :key="b"
            v-bind="badge"
          />
        </template>
        <template #description>
          <ContentRenderer :value="experience.body" />
        </template>
      </UChangelogVersion>
    </UChangelogVersions>
  </UContainer>
</template>
<script setup lang="ts">
import type { BadgeProps } from "@nuxt/ui";

const { data: experiences } = await useAsyncData("experiences-list", () =>
  queryCollection("experience").order("date_start", "DESC").all(),
);

function formatBadge(type: string): BadgeProps {
  if (type.toLowerCase().indexOf("time") !== -1) {
    return {
      label: type,
      color: "tertiary",
      variant: "soft",
    };
  }
  if (type.toLowerCase().indexOf("stage") !== -1) {
    return {
      label: type,
      color: "secondary",
      variant: "soft",
    };
  }
  return {
    label: type,
    color: "primary",
    variant: "soft",
  };
}

const list = computed(
  () =>
    experiences.value?.map((experience) => ({
      title: `${experience.title}, ${experience.company}`,
      date: new Date(experience.date_start),
      description: experience.description,
      badges: [formatBadge(experience.type)],
      body: experience,
    })) || [],
);
</script>
