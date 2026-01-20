// Multiple Layers
//
// Combine different layer types with proper ordering and styling. API: [MglFillLayer](/api/MglFillLayer) | [MglLineLayer](/api/MglLineLayer) | [MglCircleLayer](/api/MglCircleLayer) | [MglSymbolLayer](/api/MglSymbolLayer)
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-geo-json-source source-id="combined-data" :data="combinedData">
      <!-- Fill layer for regions (bottom layer) -->
      <mgl-fill-layer
        v-if="showFill"
        layer-id="regions-fill"
        :filter="['==', ['geometry-type'], 'Polygon']"
        :paint="{
          'fill-color': ['get', 'fillColor'],
          'fill-opacity': 0.5
        }"
      />

      <!-- Line layer for boundaries (middle layer) -->
      <mgl-line-layer
        v-if="showLines"
        layer-id="regions-outline"
        :filter="['==', ['geometry-type'], 'Polygon']"
        :paint="{
          'line-color': '#2c3e50',
          'line-width': 2
        }"
      />

      <!-- Line layer for routes -->
      <mgl-line-layer
        v-if="showLines"
        layer-id="routes"
        :filter="['==', ['geometry-type'], 'LineString']"
        :paint="{
          'line-color': ['get', 'lineColor'],
          'line-width': 3,
          'line-dasharray': [2, 1]
        }"
      />

      <!-- Circle layer for points (top layer) -->
      <mgl-circle-layer
        v-if="showCircles"
        layer-id="cities"
        :filter="['==', ['geometry-type'], 'Point']"
        :paint="{
          'circle-radius': 8,
          'circle-color': ['get', 'circleColor'],
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }"
      />

      <!-- Symbol layer for labels (topmost layer) -->
      <mgl-symbol-layer
        v-if="showLabels"
        layer-id="city-labels"
        :filter="['==', ['geometry-type'], 'Point']"
        :layout="{
          'text-field': ['get', 'name'],
          'text-font': ['Open Sans Regular'],
          'text-size': 12,
          'text-offset': [0, 1.5],
          'text-anchor': 'top'
        }"
        :paint="{
          'text-color': '#2c3e50',
          'text-halo-color': '#ffffff',
          'text-halo-width': 2
        }"
      />
    </mgl-geo-json-source>
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px;">
    <label><input type="checkbox" v-model="showFill"> Show Fill</label>
    <label style="margin-left: 10px;"><input type="checkbox" v-model="showLines"> Show Lines</label>
    <label style="margin-left: 10px;"><input type="checkbox" v-model="showCircles"> Show Circles</label>
    <label style="margin-left: 10px;"><input type="checkbox" v-model="showLabels"> Show Labels</label>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglGeoJsonSource,
  MglFillLayer,
  MglLineLayer,
  MglCircleLayer,
  MglSymbolLayer,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';
import { ref } from 'vue';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [-98.5795, 39.8283];
const zoom = 4;

const showFill = ref(true);
const showLines = ref(true);
const showCircles = ref(true);
const showLabels = ref(true);

// Combined GeoJSON data with different geometry types
const combinedData = {
  type: 'FeatureCollection',
  features: [
    // Polygon regions
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-105, 41], [-95, 41], [-95, 37], [-105, 37], [-105, 41]
        ]]
      },
      properties: { name: 'Region A', fillColor: '#e8f5e9' }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-95, 41], [-85, 41], [-85, 37], [-95, 37], [-95, 41]
        ]]
      },
      properties: { name: 'Region B', fillColor: '#e3f2fd' }
    },
    // LineString routes
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [
          [-100, 40], [-95, 38], [-90, 39]
        ]
      },
      properties: { name: 'Route 1', lineColor: '#e74c3c' }
    },
    // Point cities
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-100, 40] },
      properties: { name: 'Denver', circleColor: '#3498db' }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-95, 38] },
      properties: { name: 'Kansas City', circleColor: '#e74c3c' }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-90, 39] },
      properties: { name: 'St. Louis', circleColor: '#2ecc71' }
    }
  ]
};
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
