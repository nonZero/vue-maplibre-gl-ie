// Scale Control
//
// Display a scale indicator showing map distance. [API Reference](/api/MglScaleControl)
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-scale-control
      :position="controlPosition"
      :max-width="maxWidth"
      :unit="unit"
    />
    <mgl-navigation-control />
  </mgl-map>
  <div>
    Unit:
    <br />
    <input type="radio" id="metric" value="metric" v-model="unit"/>
    <label for="metric">Metric (meters/kilometers)</label>
    <br/>
    <input type="radio" id="imperial" value="imperial" v-model="unit"/>
    <label for="imperial">Imperial (feet/miles)</label>
    <br/>
    <input type="radio" id="nautical" value="nautical" v-model="unit"/>
    <label for="nautical">Nautical (nautical miles)</label>
  </div>
  <div>
    Max width: <input type="number" v-model.number="maxWidth" min="50" max="500" step="10" /> pixels
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
  MglScaleControl,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';
import { ref } from 'vue';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [12.550343, 55.665957];
const zoom = 8;

const controlPosition = ref('bottom-left');
const unit = ref('metric');
const maxWidth = ref(100);
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
