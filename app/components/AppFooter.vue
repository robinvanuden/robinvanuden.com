<template>
  <UFooter class="bg-accented dark:bg-elevated">
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
      <span class="inline-flex items-center gap-1"
        >Gebouwd met <UIcon name="fas:stroopwafel" class="text-tertiary" /> &
        <UIcon name="fas:heart" class="text-error" /> door
        <NuxtLink to="/" class="text-muted">Robin</NuxtLink></span
      >
    </template>
  </UFooter>
</template>
<script setup lang="ts">
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
    ],
  },
  {
    label: "Socials",
    children: [
      {
        label: "Github",
        icon: "fab:github",
        to: urlGithub.value,
        target: "_blank",
      },
      {
        label: "Instagram",
        icon: "fab:instagram",
        to: urlInstagram.value,
        target: "_blank",
      },
      {
        label: "Linkedin",
        icon: "fab:linkedin",
        to: urlLinkedin.value,
        target: "_blank",
      },
      {
        label: "Letterboxd",
        icon: "fab:letterboxd",
        to: urlLetterboxd.value,
        target: "_blank",
      },
      {
        label: "Pinterest",
        icon: "fab:pinterest",
        to: urlPinterest.value,
        target: "_blank",
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
</script>
