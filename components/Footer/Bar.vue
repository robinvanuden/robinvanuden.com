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
    <div class="footer-bottom">
      <div class="footer-links">
        <nav>
          <ul class="flex flex-col gap-1">
            <NavBarLink :title="t('index.title')" to="/" />
            <NavBarLink :title="t('about.title')" to="/about" />
            <NavBarLink :title="t('work.title')" to="/work" />
            <NavBarLink :title="t('contact.title')" to="/contact" />
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { useI18n } from "#imports";

const { t } = useI18n();
</script>
<style scoped></style>
