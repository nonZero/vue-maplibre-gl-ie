// Attribution Control
//
// Customize the attribution display on the map. [API Reference](/api/MglAttributionControl)
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-attribution-control
      :position="controlPosition"
      :compact="compact"
      :custom-attribution="customAttribution"
    />
    <mgl-navigation-control />
  </mgl-map>
  <div>
    <input type="checkbox" v-model="compact" id="compact">
    <label for="compact">Compact mode (show icon instead of text)</label>
  </div>
  <div>
    Custom attribution:
    <br />
    <input type="text" v-model="customAttribution" style="width: 300px" placeholder="e.g., Custom Data Source" />
  </div>
  <div>
    Control position:
    <br />
    <input type="radio" id="top-left" value="top-left" v-model="controlPosition"/>
    <label for="top-left">top-left</label>
    <br/>
    <input type="radio" id="top-right" value="top-right" v-model="controlPosition"/>
    <label for="top-right">top-right</label>
    <br/>
    <input type="radio" id="bottom-left" value="bottom-left" v-model="controlPosition"/>
    <label for="bottom-left">bottom-left</label>
    <br/>
    <input type="radio" id="bottom-right" value="bottom-right" v-model="controlPosition"/>
    <label for="bottom-right">bottom-right</label>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglAttributionControl,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';
import { ref } from 'vue';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [12.550343, 55.665957];
const zoom = 8;

const controlPosition = ref('bottom-right');
const compact = ref(false);
const customAttribution = ref('');
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
