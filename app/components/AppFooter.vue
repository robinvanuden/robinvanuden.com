<template>
  <UFooter class="bg-elevated">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #left>
            <AppLogo :height="40" />
          </template>
        </UFooterColumns>
      </UContainer>
    </template>
    <template #left>
      <span class="text-dimmed">© {{ year }}</span>
      <NuxtLink to="/" class="text-muted ms-2">Robin van Uden</NuxtLink>
    </template>
  </UFooter>
</template>
<script setup lang="ts">
import { computed, useRuntimeConfig, ref, onMounted } from "#imports";

import type { FooterColumn } from "@nuxt/ui";

const runtime = useRuntimeConfig();

const email = computed(() => runtime?.public?.site?.email);
const urlGithub = computed(() => runtime?.public?.socials?.github);
const urlInstagram = computed(() => runtime?.public?.socials?.instagram);
const urlLinkedin = computed(() => runtime?.public?.socials?.linkedin);
const urlLetterboxd = computed(() => runtime?.public?.socials?.letterboxd);
const urlPinterest = computed(() => runtime?.public?.socials?.pinterest);

const columns = computed<FooterColumn[]>(() => [
  {
    label: "Website",
    children: [
      {
        label: "Welkom",
        icon: "far:home",
        to: "/",
      },
      {
        label: "Over mij",
        icon: "far:user",
        to: "/about",
      },
      {
        label: "Projecten",
        icon: "far:briefcase",
        to: "/work",
      },
      {
        label: "Contact",
        icon: "far:messages",
        to: "/contact",
      },
    ],
  },
  {
    label: "Socials",
    children: [
      {
        label: "Github",
        icon: "fab:github",
        to: urlGithub.value,
      },
      {
        label: "Instagram",
        icon: "fab:instagram",
        to: urlInstagram.value,
      },
      {
        label: "Linkedin",
        icon: "fab:linkedin",
        to: urlLinkedin.value,
      },
      {
        label: "Letterboxd",
        icon: "fab:letterboxd",
        to: urlLetterboxd.value,
      },
      {
        label: "Pinterest",
        icon: "fab:pinterest",
        to: urlPinterest.value,
      },
    ],
  },
  {
    label: "Contact me",
    children: [
      {
        label: email.value,
        to: "mailto:" + email.value,
      },
    ],
  },
]);

const year = ref(new Date().getFullYear());

onMounted(() => {
  year.value = new Date().getFullYear();
});
</script>
