<template>
  <div class="w-full bg-walnut-darkest text-sand box">
    <div class="nav-container flex flex-row justify-between items-center">
      <nav>
        <ul class="flex flex-row gap-4">
          <NuxtLink class="nav-link" :to="localePath('/')">
            {{ t("index.title") }}
          </NuxtLink>
          <NuxtLink class="nav-link" :to="localePath('/about')">
            {{ t("about.title") }}
          </NuxtLink>
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
          <NuxtLink class="nav-link" :to="localePath('/work')">
            {{ t("work.title") }}
          </NuxtLink>
          <NuxtLink class="nav-link" :to="localePath('/contact')">
            {{ t("contact.title") }}
          </NuxtLink>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n, useLocalePath } from "#imports";

const { t } = useI18n();

const localePath = useLocalePath();
</script>
<style scoped></style>
