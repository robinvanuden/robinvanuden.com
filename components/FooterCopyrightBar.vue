<template>
  <footer class="copyright box bg-sage-dark text-sand/50">
    <p>
      Copyright &copy; {{ year }} -
      <NuxtLink :to="localePath('/')" class="text-sand">
        Robin van Uden
      </NuxtLink>
    </p>
  </footer>
</template>
<script setup lang="ts">
import { ref, onMounted, useLocalePath } from "#imports";

const year = ref(new Date().getFullYear());
const localePath = useLocalePath();

onMounted(() => {
  year.value = new Date().getFullYear();
});
</script>
<style scoped></style>
