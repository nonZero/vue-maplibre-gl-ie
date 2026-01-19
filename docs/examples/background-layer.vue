// Background Layer
//
// Set a custom background color or pattern for the map
<template>
  <mgl-map
    :map-style="mapStyle"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px;">
    <label for="bgColor">
      Background Color:
      <input
        type="color"
        id="bgColor"
        v-model="backgroundColor"
        style="margin-left: 10px;"
      />
    </label>
    <br />
    <label for="opacity">
      Opacity: {{ opacity }}
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
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';
import { ref, computed } from 'vue';

const center = [12.550343, 55.665957];
const zoom = 8;

const backgroundColor = ref('#e0f2f7');
const opacity = ref(1);

// Create a minimal style with a background layer
const mapStyle = computed(() => ({
  version: 8,
  sources: {},
  layers: [
    {
      id: 'background',
      type: 'background',
      paint: {
        'background-color': backgroundColor.value,
        'background-opacity': opacity.value
      }
    }
  ]
}));
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
