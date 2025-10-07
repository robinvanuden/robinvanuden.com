<template>
  <footer class="w-full bg-sage-darkest text-sand box">
    <div class="footer-top flex flex-row justify-between items-center mb-3">
      <div class="footer-branding">
        <NuxtLink to="/">
          <img
            src="/logo.png"
            alt="Robin van Uden Logo"
            height="60"
            class="h-8"
          />
        </NuxtLink>
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
          <FaIcon :icon="faGithub" size="lg" />
        </a>
        <a
          v-if="urlInstagram"
          :href="urlInstagram"
          target="_blank"
          class="footer-social-link"
        >
          <FaIcon :icon="faInstagram" size="lg" />
        </a>
        <a
          v-if="urlLinkedin"
          :href="urlLinkedin"
          target="_blank"
          class="footer-social-link"
        >
          <FaIcon :icon="faLinkedin" size="lg" />
        </a>
        <a
          v-if="urlLetterboxd"
          :href="urlLetterboxd"
          target="_blank"
          class="footer-social-link"
        >
          <FaIcon :icon="faLetterboxd" size="lg" />
        </a>
        <a
          v-if="urlPinterest"
          :href="urlPinterest"
          target="_blank"
          class="footer-social-link"
        >
          <FaIcon :icon="faPinterest" size="lg" />
        </a>
      </div>
    </div>
    <div class="footer-bottom flex gap-2 mt-6">
      <div class="footer-links w-1/4">
        <nav>
          <ul class="flex flex-col gap-1">
            <li>
              <NuxtLink class="nav-link nav-link-alt" to="/"> Welkom </NuxtLink>
            </li>
            <li>
              <NuxtLink class="nav-link nav-link-alt" to="/about">
                Over mij
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="nav-link nav-link-alt" to="/work">
                Projecten
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="nav-link nav-link-alt" to="/contact">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="copyright-bar w-full mt-6">
      <p>
        <span>Copyright &copy; {{ year }}</span>
        <NuxtLink to="/" class="text-sand ms-2">Robin van Uden</NuxtLink>
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { computed, useRuntimeConfig, ref, onMounted } from "#imports";

import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faLetterboxd } from "@fortawesome/free-brands-svg-icons/faLetterboxd";
import { faPinterest } from "@fortawesome/free-brands-svg-icons/faPinterest";

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
