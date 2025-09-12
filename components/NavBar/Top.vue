<template>
  <div class="w-full bg-walnut-darkest text-sand box">
    <div class="nav-container flex flex-row justify-between items-center">
      <nav>
        <ul class="flex flex-row gap-4">
          <NavBarLink :title="t('index.title')" to="/" />
          <NavBarLink :title="t('about.title')" to="/about" />
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
          <NavBarLink :title="t('work.title')" to="/work" />
          <NavBarLink :title="t('contact.title')" to="/contact" />
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
