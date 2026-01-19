// Raster Layer
//
// Overlay raster tiles with adjustable opacity
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-raster-source
      source-id="satellite"
      :tiles="['https://tile.openstreetmap.org/{z}/{x}/{y}.png']"
      :tileSize="256"
      :attribution="'© OpenStreetMap contributors'"
    >
      <mgl-raster-layer
        layer-id="satellite-layer"
        :paint="{
          'raster-opacity': opacity
        }"
      />
    </mgl-raster-source>
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px;">
    <label for="opacity">
      Raster Opacity: {{ opacity }}
      <input
        type="range"
        id="opacity"
        v-model.number="opacity"
        min="0"
        max="1"
        step="0.1"
        style="width: 200px; margin-left: 10px;"
      />
    </label>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglRasterSource,
  MglRasterLayer,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';
import { ref } from 'vue';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [12.550343, 55.665957];
const zoom = 8;

const opacity = ref(0.7);
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
