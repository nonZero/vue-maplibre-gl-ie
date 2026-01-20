// Use Position Watcher Composable
//
// Track map position changes using the usePositionWatcher composable
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px; background: #f8f9fa; padding: 10px; border-radius: 5px;">
    <h4 style="margin-top: 0;">Map Position Info</h4>
    <div><strong>Center:</strong> {{ formattedCenter }}</div>
    <div><strong>Zoom:</strong> {{ currentZoom.toFixed(2) }}</div>
    <div><strong>Bearing:</strong> {{ currentBearing.toFixed(2)}°</div>
    <div><strong>Pitch:</strong> {{ currentPitch.toFixed(2)}°</div>
    <div style="margin-top: 10px; font-size: 12px; color: #666;">
      Pan and zoom the map to see values update in real-time
    </div>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglNavigationControl,
  usePositionWatcher,
} from '@indoorequal/vue-maplibre-gl';
import { computed } from 'vue';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [12.550343, 55.665957];
const zoom = 8;

// Use the usePositionWatcher composable to track map position
const {
  center: currentCenter,
  zoom: currentZoom,
  bearing: currentBearing,
  pitch: currentPitch,
} = usePositionWatcher();

const formattedCenter = computed(() => {
  if (!currentCenter.value) return 'N/A';
  const [lng, lat] = currentCenter.value;
  return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
});
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
