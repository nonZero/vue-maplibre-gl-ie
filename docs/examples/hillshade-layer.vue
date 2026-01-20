// Hillshade Layer
//
// Add terrain relief shading using DEM data. [API Reference](/api/MglHillshadeLayer)
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-raster-dem-source
      source-id="terrainSource"
      url="https://demotiles.maplibre.org/terrain-tiles/tiles.json"
      :tileSize="256"
    >
      <mgl-hillshade-layer
        layer-id="hillshading"
        :paint="{
          'hillshade-shadow-color': '#473B24',
          'hillshade-illumination-direction': illuminationDirection,
          'hillshade-exaggeration': exaggeration
        }"
      />
    </mgl-raster-dem-source>
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px;">
    <label for="direction">
      Illumination Direction: {{ illuminationDirection }}°
      <input
        type="range"
        id="direction"
        v-model.number="illuminationDirection"
        min="0"
        max="359"
        step="1"
        style="width: 200px; margin-left: 10px;"
      />
    </label>
    <br />
    <label for="exaggeration">
      Exaggeration: {{ exaggeration }}
      <input
        type="range"
        id="exaggeration"
        v-model.number="exaggeration"
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
  MglRasterDemSource,
  MglHillshadeLayer,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';
import { ref } from 'vue';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [11.39085, 47.27574];
const zoom = 12;

const illuminationDirection = ref(335);
const exaggeration = ref(0.5);
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
