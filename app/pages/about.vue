<script setup lang="ts">
import { useI18n } from "#imports";

const { t } = useI18n();
</script>

<template>
  <ComingSoonBlock :title="t('about.title')" class="bg-gold text-walnut-darkest" />
</template>

<style scoped></style>
