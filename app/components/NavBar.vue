<template>
  <div class="w-full bg-walnut-darkest box">
    <div class="nav-container flex flex-row justify-between items-center">
      <nav>
        <ul class="flex flex-row gap-4">
          <NuxtLink class="nav-link" to="/"> Welkom </NuxtLink>
          <NuxtLink class="nav-link" to="/about"> Over mij </NuxtLink>
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
          <NuxtLink class="nav-link" to="/work"> Projecten </NuxtLink>
          <NuxtLink class="nav-link" to="/contact"> Contact </NuxtLink>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
