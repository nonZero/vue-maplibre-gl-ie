// Canvas Source
//
// Render dynamic canvas content as a map layer. [API Reference](/api/MglCanvasSource)
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-canvas-source
      source-id="canvas-source"
      :coordinates="coordinates"
      :canvas="canvasId"
      :animate="true"
    >
      <mgl-raster-layer
        layer-id="canvas-layer"
        :paint="{
          'raster-opacity': 0.85
        }"
      />
    </mgl-canvas-source>
    <mgl-navigation-control />
  </mgl-map>
  <canvas
    :id="canvasId"
    width="400"
    height="400"
    style="display: none;"
  />
</template>

<script setup>
import {
  MglMap,
  MglCanvasSource,
  MglRasterLayer,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';
import { onMounted } from 'vue';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [-122.4194, 37.7749];
const zoom = 13;

const canvasId = 'animated-canvas';

// Define the canvas coordinates on the map
const coordinates = [
  [-122.43, 37.78],  // top-left
  [-122.41, 37.78],  // top-right
  [-122.41, 37.76],  // bottom-right
  [-122.43, 37.76]   // bottom-left
];

// Animate the canvas
onMounted(() => {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  let rotation = 0;

  function animate() {
    rotation += 0.02;

    // Clear canvas
    ctx.clearRect(0, 0, 400, 400);

    // Draw animated pattern
    ctx.save();
    ctx.translate(200, 200);

    for (let i = 0; i < 8; i++) {
      ctx.save();
      ctx.rotate((rotation + (i * Math.PI / 4)));

      // Draw gradient rectangle
      const gradient = ctx.createLinearGradient(0, 0, 100, 0);
      gradient.addColorStop(0, `hsla(${rotation * 50 + i * 45}, 100%, 50%, 0.8)`);
      gradient.addColorStop(1, `hsla(${rotation * 50 + i * 45 + 60}, 100%, 50%, 0.2)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, -20, 100, 40);
      ctx.restore();
    }

    ctx.restore();

    requestAnimationFrame(animate);
  }

  animate();
});
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
