// Line Layer
//
// Display lines and paths with customizable styling. [API Reference](/api/MglLineLayer)
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-geo-json-source source-id="routes" :data="routeData">
      <mgl-line-layer
        layer-id="route-lines"
        :paint="{
          'line-color': [
            'match',
            ['get', 'type'],
            'highway', '#e74c3c',
            'road', '#3498db',
            'path', '#2ecc71',
            '#95a5a6'
          ],
          'line-width': [
            'match',
            ['get', 'type'],
            'highway', 6,
            'road', 4,
            'path', 2,
            3
          ],
          'line-dasharray': [
            'match',
            ['get', 'type'],
            'path', ['literal', [2, 2]],
            ['literal', [1, 0]]
          ]
        }"
        :layout="{
          'line-cap': 'round',
          'line-join': 'round'
        }"
      />
    </mgl-geo-json-source>
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px;">
    <strong>Legend:</strong>
    <span style="color: #e74c3c; margin-left: 10px;"><strong>━━━</strong> Highway</span>
    <span style="color: #3498db; margin-left: 10px;"><strong>━━━</strong> Road</span>
    <span style="color: #2ecc71; margin-left: 10px;"><strong>- - -</strong> Path</span>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglGeoJsonSource,
  MglLineLayer,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [-122.4194, 37.7749];
const zoom = 12;

// Sample route data
const routeData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [
          [-122.48, 37.83],
          [-122.47, 37.81],
          [-122.45, 37.80],
          [-122.43, 37.79]
        ]
      },
      properties: { name: 'Route 1', type: 'highway' }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [
          [-122.46, 37.78],
          [-122.44, 37.77],
          [-122.42, 37.76],
          [-122.40, 37.75]
        ]
      },
      properties: { name: 'Route 2', type: 'road' }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [
          [-122.45, 37.76],
          [-122.43, 37.75],
          [-122.41, 37.74],
          [-122.39, 37.73]
        ]
      },
      properties: { name: 'Route 3', type: 'path' }
    }
  ]
};
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
