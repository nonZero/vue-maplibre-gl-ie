// Use Source Composable
//
// Programmatically update GeoJSON source data using the useSource composable. [API Reference](/api/composables#usesource)
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-geo-json-source source-id="dynamic-points" :data="initialData">
      <mgl-circle-layer
        layer-id="points"
        :paint="{
          'circle-radius': 8,
          'circle-color': '#3498db',
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }"
      />
    </mgl-geo-json-source>
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px;">
    <button @click="addRandomPoint" style="padding: 5px 10px; margin-right: 10px;">
      Add Random Point
    </button>
    <button @click="clearPoints" style="padding: 5px 10px; margin-right: 10px;">
      Clear All Points
    </button>
    <span>Points: {{ pointCount }}</span>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglGeoJsonSource,
  MglCircleLayer,
  MglNavigationControl,
  useSource,
} from '@indoorequal/vue-maplibre-gl';
import { ref, computed } from 'vue';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [-98.5795, 39.8283];
const zoom = 4;

const initialData = {
  type: 'FeatureCollection',
  features: []
};

const points = ref([]);

const pointCount = computed(() => points.value.length);

// Use the useSource composable to access and update the source
const { setData } = useSource('dynamic-points');

function addRandomPoint() {
  const newPoint = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [
        -98.5795 + (Math.random() - 0.5) * 40,
        39.8283 + (Math.random() - 0.5) * 20
      ]
    },
    properties: {
      id: Date.now()
    }
  };

  points.value.push(newPoint);
  updateSource();
}

function clearPoints() {
  points.value = [];
  updateSource();
}

function updateSource() {
  const data = {
    type: 'FeatureCollection',
    features: points.value
  };
  setData(data);
}
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
