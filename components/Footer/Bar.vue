<template>
  <footer class="w-full bg-sage-darkest text-sand box">
    <div class="footer-top flex flex-row justify-between items-center mb-3">
      <div class="footer-branding">
        <img
          src="/logo.png"
          alt="Robin van Uden Logo"
          height="30"
          class="h-6"
        />
      </div>
      <div class="footer-socials"></div>
    </div>
    <div class="footer-bottom flex gap-2">
      <div class="footer-links w-1/4">
        <nav>
          <ul class="flex flex-col gap-1">
            <li>
              <NuxtLink class="nav-link" :to="localePath('/')">
                {{ t("index.title") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="nav-link" :to="localePath('/about')">
                {{ t("about.title") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="nav-link" :to="localePath('/work')">
                {{ t("work.title") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="nav-link" :to="localePath('/contact')">
                {{ t("contact.title") }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="locale-links w-1/4">
        <ul class="flex flex-col gap-1">
          <li v-for="loc in locales" :key="loc.code">
            <NuxtLink
              class="nav-link uppercase"
              :to="switchLocalePath(loc.code)"
            >
              {{ loc.code }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { useI18n } from "#imports";

const { t, locales } = useI18n();

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>
<style scoped></style>
