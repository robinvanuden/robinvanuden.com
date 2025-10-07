<template>
  <div class="w-full bg-walnut-dark box">
    <div class="nav-container flex flex-row justify-between items-center">
      <nav>
        <ul class="flex flex-row gap-4">
          <NuxtLinkLocale class="nav-link" to="/">
            {{ t("index.title") }}
          </NuxtLinkLocale>
          <NuxtLinkLocale class="nav-link" to="/about">
            {{ t("about.title") }}
          </NuxtLinkLocale>
        </ul>
      </nav>
      <div id="branding">
        <img
          src="/logo.png"
          alt="Robin van Uden Logo"
          height="30"
          class="h-6"
        />
      </div>
      <nav>
        <ul class="flex flex-row gap-4">
          <NuxtLinkLocale class="nav-link" to="/work">
            {{ t("work.title") }}
          </NuxtLinkLocale>
          <NuxtLinkLocale class="nav-link" to="/contact">
            {{ t("contact.title") }}
          </NuxtLinkLocale>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "#imports";

const { t } = useI18n();
</script>
<style scoped></style>
