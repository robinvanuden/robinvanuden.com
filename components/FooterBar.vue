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
      <div class="footer-socials flex gap-2">
        <a
          v-if="email"
          :href="'mailto:' + email"
          class="footer-social-link footer-social-email"
        >
          {{ email }}
        </a>
        <a
          v-if="urlGithub"
          :href="urlGithub"
          target="_blank"
          class="footer-social-link"
        >
          <FaIcon :icon="faGithub" />
        </a>
        <a
          v-if="urlInstagram"
          :href="urlInstagram"
          target="_blank"
          class="footer-social-link"
        >
          <FaIcon :icon="faInstagram" />
        </a>
        <a
          v-if="urlLinkedin"
          :href="urlLinkedin"
          target="_blank"
          class="footer-social-link"
        >
          <FaIcon :icon="faLinkedin" />
        </a>
        <a
          v-if="urlLetterboxd"
          :href="urlLetterboxd"
          target="_blank"
          class="footer-social-link"
        >
          <FaIcon :icon="faLetterboxd" />
        </a>
        <a
          v-if="urlPinterest"
          :href="urlPinterest"
          target="_blank"
          class="footer-social-link"
        >
          <FaIcon :icon="faPinterest" />
        </a>
      </div>
    </div>
    <div class="footer-bottom flex gap-2">
      <div class="footer-links w-1/4">
        <nav>
          <ul class="flex flex-col gap-1">
            <li>
              <NuxtLink class="nav-link nav-link-alt" :to="localePath('/')">
                {{ t("index.title") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="nav-link nav-link-alt"
                :to="localePath('/about')"
              >
                {{ t("about.title") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="nav-link nav-link-alt" :to="localePath('/work')">
                {{ t("work.title") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="nav-link nav-link-alt"
                :to="localePath('/contact')"
              >
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
              class="nav-link nav-link-alt uppercase"
              :to="switchLocalePath(loc.code)"
            >
              {{ loc.code }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright-bar w-full mt-10">
      <p>
        <span>Copyright &copy; {{ year }}</span>
        <NuxtLink :to="localePath('/')" class="text-sand ms-2">
          Robin van Uden
        </NuxtLink>
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts">
import {
  computed,
  useRuntimeConfig,
  useI18n,
  useLocalePath,
  useSwitchLocalePath,
  ref,
  onMounted } from "#imports";

import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faLetterboxd } from "@fortawesome/free-brands-svg-icons/faLetterboxd";
import { faPinterest } from "@fortawesome/free-brands-svg-icons/faPinterest";

const { t, locales } = useI18n();

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const runtime = useRuntimeConfig();

const email = computed(() => runtime?.public?.email);
const urlGithub = computed(() => runtime?.public?.socials?.github);
const urlInstagram = computed(() => runtime?.public?.socials?.instagram);
const urlLinkedin = computed(() => runtime?.public?.socials?.linkedin);
const urlLetterboxd = computed(() => runtime?.public?.socials?.letterboxd);
const urlPinterest = computed(() => runtime?.public?.socials?.pinterest);

const year = ref(new Date().getFullYear());

onMounted(() => {
  year.value = new Date().getFullYear();
});
</script>
<style scoped></style>
