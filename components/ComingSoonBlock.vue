<template>
  <div class="w-full min-h-140 box flex flex-col justify-center items-center">
    <h1 class="font-bold">{{ title }}</h1>
    <p>{{ t("soon") }}</p>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "#imports";

defineProps<{ title: string }>();

const { t } = useI18n();
</script>
<style scoped></style>
