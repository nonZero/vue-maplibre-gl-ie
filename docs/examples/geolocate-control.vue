// Geolocate Control
//
// Find and track the user's location on the map
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-geolocate-control
      :position="controlPosition"
      :track-user-location="trackUserLocation"
      :show-user-heading="showUserHeading"
    />
    <mgl-navigation-control />
  </mgl-map>
  <div>
    <input type="checkbox" v-model="trackUserLocation" id="track">
    <label for="track">Track user location continuously</label>
    <br />
    <input type="checkbox" v-model="showUserHeading" id="heading">
    <label for="heading">Show user heading</label>
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
  MglGeolocateControl,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';
import { ref } from 'vue';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [12.550343, 55.665957];
const zoom = 8;

const controlPosition = ref('top-right');
const trackUserLocation = ref(false);
const showUserHeading = ref(true);
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
