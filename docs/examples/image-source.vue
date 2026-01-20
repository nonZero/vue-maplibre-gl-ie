// Image Source
//
// Overlay a georeferenced image on the map. [API Reference](/api/MglImageSource)
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-image-source
      source-id="overlay-image"
      :url="imageUrl"
      :coordinates="coordinates"
    >
      <mgl-raster-layer
        layer-id="overlay-layer"
        :paint="{
          'raster-opacity': opacity
        }"
      />
    </mgl-image-source>
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px;">
    <label for="opacity">
      Image Opacity: {{ opacity }}
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
    <br />
    <small>Example: Georeferenced historical map overlay</small>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglImageSource,
  MglRasterLayer,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';
import { ref } from 'vue';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [-80.425, 37.775];
const zoom = 13;

// Using a sample image URL
const imageUrl = 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif';

// Define the image coordinates on the map (corners)
const coordinates = [
  [-80.45, 37.80],  // top-left
  [-80.40, 37.80],  // top-right
  [-80.40, 37.75],  // bottom-right
  [-80.45, 37.75]   // bottom-left
];

const opacity = ref(0.7);
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
