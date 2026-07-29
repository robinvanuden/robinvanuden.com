<template>
  <div
    class="pointer-events-none absolute inset-x-5 inset-y-0 z-[-1] overflow-hidden sm:inset-x-7 lg:inset-x-9"
  >
    <div class="stars absolute inset-x-0 top-0 size-full">
      <div
        v-for="(layer, index) in starLayers"
        :key="index"
        class="star-layer"
        :style="{
          '--star-duration': `${layer.duration}s`,
          '--star-opacity': layer.opacity,
        }"
      >
        <div
          v-for="(star, starIndex) in layer.stars"
          :key="starIndex"
          class="star absolute rounded-none"
          :style="{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: getRandomColor(),
            opacity: 'var(--star-opacity)',
          }"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
/**
 * Based on StarsBg.vue from Nuxt UI
 * @see https://github.com/nuxt/ui/blob/v4/docs/app/components/StarsBg.vue
 * @see https://ui.nuxt.com/
 */

import { kebabCase } from "scule";

interface Star {
  x: number;
  y: number;
  size: number;
}

const props = withDefaults(
  defineProps<{
    starCount?: number;
    speed?: "slow" | "normal" | "fast";
    size?: { min: number; max: number };
  }>(),
  {
    starCount: 300,
    speed: "fast",
    size: () => ({ min: 1, max: 10 }),
  },
);

const route = useRoute();

// Define speed configurations at once
const speedMap = {
  slow: { duration: 200, opacity: 0.5, ratio: 0.3 },
  normal: { duration: 150, opacity: 0.75, ratio: 0.3 },
  fast: { duration: 100, opacity: 1, ratio: 0.4 },
};

// Generate random star positions and sizes
const generateStars = (count: number): Star[] => {
  return Array.from({ length: count }, () => ({
    x: Math.floor(Math.random() * 2000),
    y: Math.floor(Math.random() * 2000),
    size:
      typeof props.size === "number"
        ? props.size
        : Math.random() * (props.size.max - props.size.min) + props.size.min,
  }));
};

// Use a more efficient approach to generate and store stars
const stars = useState<{ slow: Star[]; normal: Star[]; fast: Star[] }>(
  `${kebabCase(route.path)}-stars`,
  () => {
    return {
      slow: generateStars(Math.floor(props.starCount * speedMap.slow.ratio)),
      normal: generateStars(
        Math.floor(props.starCount * speedMap.normal.ratio),
      ),
      fast: generateStars(Math.floor(props.starCount * speedMap.fast.ratio)),
    };
  },
);

// Compute star layers with different speeds and opacities
const starLayers = computed(() => [
  { stars: stars.value.fast, ...speedMap.fast },
  { stars: stars.value.normal, ...speedMap.normal },
  { stars: stars.value.slow, ...speedMap.slow },
]);

function getRandomColor() {
  const colors = [
    "var(--ui-primary)",
    "var(--ui-secondary)",
    "var(--ui-tertiary)",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
</script>
<style scoped>
.stars {
  left: 50%;
  transform: translate(-50%);
  -webkit-mask-image: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 0%,
    rgba(217, 217, 217, 0.8) 25%,
    #d9d9d9 50%,
    rgba(217, 217, 217, 0.8) 75%,
    rgba(217, 217, 217, 0) 100%
  );
  mask-image: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 0%,
    rgba(217, 217, 217, 0.8) 25%,
    #d9d9d9 50%,
    rgba(217, 217, 217, 0.8) 75%,
    rgba(217, 217, 217, 0) 100%
  );
  -webkit-mask-size: cover;
  mask-size: cover;
}

.star-layer {
  animation: risingStarsAnimation linear infinite;
  animation-duration: var(--star-duration);
  will-change: transform;
}

@keyframes risingStarsAnimation {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-2000px);
  }
}
</style>
