// Raster Source
//
// Configure custom raster tile sources with various tile servers
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-raster-source
      source-id="custom-tiles"
      :tiles="selectedTiles"
      :tileSize="tileSize"
      :attribution="attribution"
      :minzoom="minZoom"
      :maxzoom="maxZoom"
    >
      <mgl-raster-layer
        layer-id="custom-raster-layer"
        :paint="{
          'raster-opacity': opacity
        }"
      />
    </mgl-raster-source>
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px;">
    <label>
      Tile Source:
      <select v-model="tileSourceKey" style="margin-left: 10px;">
        <option value="osm">OpenStreetMap</option>
        <option value="watercolor">Stamen Watercolor</option>
        <option value="toner">Stamen Toner</option>
      </select>
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
    <br />
    <small>Tile Size: {{ tileSize }}px | Zoom: {{ minZoom }}-{{ maxZoom }}</small>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglRasterSource,
  MglRasterLayer,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';
import { ref, computed } from 'vue';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [12.550343, 55.665957];
const zoom = 8;

const tileSourceKey = ref('osm');
const opacity = ref(0.7);
const tileSize = ref(256);
const minZoom = ref(0);
const maxZoom = ref(18);

const tileSources = {
  osm: {
    tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
    attribution: '© OpenStreetMap contributors'
  },
  watercolor: {
    tiles: ['https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg'],
    attribution: '© Stamen Design, © OpenStreetMap contributors'
  },
  toner: {
    tiles: ['https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png'],
    attribution: '© Stamen Design, © OpenStreetMap contributors'
  }
};

const selectedTiles = computed(() => tileSources[tileSourceKey.value].tiles);
const attribution = computed(() => tileSources[tileSourceKey.value].attribution);
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
