<template>
  <footer class="copyright box bg-walnut-darkest text-walnut">
    <p>
      <span>Copyright &copy; {{ year }}</span>
      <NuxtLink :to="localePath('/')" class="text-sand ms-2">
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
