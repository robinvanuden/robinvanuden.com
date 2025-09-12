<script setup lang="ts">
import { useI18n } from "#imports";

const { t } = useI18n();
</script>

<template>
  <ComingSoonBlock :title="t('about.title')" class="bg-walnut-dark text-sand" />
</template>

<style scoped></style>
