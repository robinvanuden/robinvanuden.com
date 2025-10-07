<template>
  <ComingSoonBlock
    :title="t('contact.title')"
    class="bg-walnut text-walnut-darkest"
  />
</template>
<script setup lang="ts">
import { useI18n } from "#imports";

const { t } = useI18n();
</script>
<style scoped></style>
