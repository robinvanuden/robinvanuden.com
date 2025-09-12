<template>
  <div class="w-full rounded-xl bg-walnut-darkest text-sand p-3">
    <div class="nav-container flex flex-row justify-between items-center">
      <nav>
        <ul class="flex flex-row gap-4">
          <NavBarLink title="Home" to="/" />
          <NavBarLink title="About Me" to="/about" />
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
          <NavBarLink title="My Work" to="/work" />
          <NavBarLink title="Contact" to="/contact" />
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
