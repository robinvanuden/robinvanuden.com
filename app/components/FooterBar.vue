<template>
  <UFooter class="border-t-default bg-elevated/50 border-t">
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
      <NuxtLink to="/" class="text-sand ms-2">Robin van Uden</NuxtLink>
    </template>
    <template #right>
      <UColorModeButton />
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
        to: "/",
      },
      {
        label: "Over mij",
        to: "/about",
      },
      {
        label: "Projecten",
        to: "/work",
      },
      {
        label: "Contact",
        to: "/contact",
      },
    ],
  },
  {
    label: "Socials",
    children: [
      {
        label: "Github",
        to: urlGithub.value,
      },
      {
        label: "Instagram",
        to: urlInstagram.value,
      },
      {
        label: "Linkedin",
        to: urlLinkedin.value,
      },
      {
        label: "Letterboxd",
        to: urlLetterboxd.value,
      },
      {
        label: "Pinterest",
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

const credits = computed(() => `© ${new Date().getFullYear()}`);

onMounted(() => {
  year.value = new Date().getFullYear();
});
</script>
