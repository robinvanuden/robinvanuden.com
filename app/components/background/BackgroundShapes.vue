<template>
  <div
    class="pointer-events-none absolute inset-x-5 inset-y-0 z-[-1] overflow-hidden sm:inset-x-7 lg:inset-x-9"
  >
    <div class="shapes absolute inset-x-0 top-0 size-full">
      <div
        v-for="(layer, index) in shapeLayers"
        :key="index"
        class="shape-layer"
        :style="{
          '--shape-duration': `${layer.duration}s`,
          '--shape-opacity': layer.opacity,
        }"
      >
        <div
          v-for="(shape, shapeIndex) in layer.shapes"
          :key="shapeIndex"
          class="shape absolute"
          :class="{
            'rounded-none': shape.shape === 'square',
            'rounded-full': shape.shape === 'circle',
            'shape-triangle': shape.shape === 'triangle',
          }"
          :style="{
            left: `${shape.x}px`,
            top: `${shape.y}px`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: getRandomColor(),
            opacity: 'var(--shape-opacity)',
          }"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
/**
 * Based on ShapesBg.vue from Nuxt UI
 * @see https://github.com/nuxt/ui
 * @see https://ui.nuxt.com/
 */

import { kebabCase } from "scule";

type ShapeType = "square" | "circle" | "triangle";

interface Shape {
  x: number;
  y: number;
  size: number;
  shape: ShapeType;
}

const props = withDefaults(
  defineProps<{
    shapeCount?: number;
    speed?: "slow" | "normal" | "fast";
    size?: { min: number; max: number };
  }>(),
  {
    shapeCount: 300,
    speed: "fast",
    size: () => ({ min: 1, max: 16 }),
  },
);

const route = useRoute();

const shapeTypes: ShapeType[] = ["square", "circle", "triangle"];

// Define speed configurations at once
const speedMap = {
  slow: { duration: 200, opacity: 0.5, ratio: 0.3 },
  normal: { duration: 150, opacity: 0.75, ratio: 0.3 },
  fast: { duration: 100, opacity: 1, ratio: 0.4 },
};

// Generate random shape positions, sizes, and shapes
const generateShapes = (count: number): Shape[] => {
  return Array.from({ length: count }, () => ({
    x: Math.floor(Math.random() * 2000),
    y: Math.floor(Math.random() * 2000),
    size:
      typeof props.size === "number"
        ? props.size
        : Math.random() * (props.size.max - props.size.min) + props.size.min,
    shape: shapeTypes[Math.floor(Math.random() * shapeTypes.length)]!,
  }));
};

// Use a more efficient approach to generate and store shapes
const shapes = useState<{ slow: Shape[]; normal: Shape[]; fast: Shape[] }>(
  `${kebabCase(route.path)}-shapes`,
  () => {
    return {
      slow: generateShapes(Math.floor(props.shapeCount * speedMap.slow.ratio)),
      normal: generateShapes(
        Math.floor(props.shapeCount * speedMap.normal.ratio),
      ),
      fast: generateShapes(Math.floor(props.shapeCount * speedMap.fast.ratio)),
    };
  },
);

// Compute shape layers with different speeds and opacities
const shapeLayers = computed(() => [
  { shapes: shapes.value.fast, ...speedMap.fast },
  { shapes: shapes.value.normal, ...speedMap.normal },
  { shapes: shapes.value.slow, ...speedMap.slow },
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
.shapes {
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

.shape-layer {
  animation: risingShapesAnimation linear infinite;
  animation-duration: var(--shape-duration);
  will-change: transform;
}

.shape-triangle {
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

@keyframes risingShapesAnimation {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-2000px);
  }
}
</style>
