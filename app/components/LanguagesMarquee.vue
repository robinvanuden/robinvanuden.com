<template>
  <UMarquee pause-on-hover>
    <UTooltip
      v-for="language in languages"
      :key="language.icon"
      :text="language.title"
    >
      <UIcon
        :name="language.icon"
        class="text-primary shrink-0"
        :class="language.size"
      />
    </UTooltip>
  </UMarquee>
</template>
<script setup lang="ts">
const languages = computed(() => [
  { icon: "simple-icons:html5", title: "HTML", size: "size-8" },
  { icon: "simple-icons:css3", title: "CSS", size: "size-8" },
  { icon: "simple-icons:javascript", title: "JavaScript", size: "size-8" },
  { icon: "simple-icons:nodedotjs", title: "Node.js", size: "size-8" },
  { icon: "simple-icons:vuedotjs", title: "Vue.js", size: "size-8" },
  { icon: "simple-icons:nuxtdotjs", title: "Nuxt", size: "size-8" },
  { icon: "fa7-brands:python", title: "Python", size: "size-10" },
  { icon: "fa7-brands:java", title: "Java", size: "size-10" },
  { icon: "simple-icons:kotlin", title: "Kotlin", size: "size-8" },
  { icon: "simple-icons:mongodb", title: "MongoDB", size: "size-8" },
  { icon: "simple-icons:postgresql", title: "PostgresQL", size: "size-8" },
  { icon: "simple-icons:android", title: "Android", size: "size-8" },
  { icon: "simple-icons:php", title: "PHP", size: "size-8" },
  { icon: "simple-icons:git", title: "Git", size: "size-8" },
  { icon: "simple-icons:bitbucket", title: "Bitbucket", size: "size-8" },
  { icon: "simple-icons:github", title: "Github", size: "size-8" },
]);
</script>
