// Fill Layer
//
// Display filled polygons with data-driven styling. [API Reference](/api/MglFillLayer)
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-geo-json-source source-id="regions" :data="regionData">
      <mgl-fill-layer
        layer-id="region-fills"
        :paint="{
          'fill-color': [
            'match',
            ['get', 'density'],
            'high', '#d7191c',
            'medium', '#fdae61',
            'low', '#a6d96a',
            '#cccccc'
          ],
          'fill-opacity': 0.7
        }"
      />
      <mgl-line-layer
        layer-id="region-borders"
        :paint="{
          'line-color': '#ffffff',
          'line-width': 2
        }"
      />
    </mgl-geo-json-source>
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px;">
    <strong>Legend:</strong>
    <span style="background: #d7191c; padding: 5px; margin-left: 10px;">High Density</span>
    <span style="background: #fdae61; padding: 5px; margin-left: 5px;">Medium Density</span>
    <span style="background: #a6d96a; padding: 5px; margin-left: 5px;">Low Density</span>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglGeoJsonSource,
  MglFillLayer,
  MglLineLayer,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [-98.5795, 39.8283];
const zoom = 4;

// Sample region data
const regionData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-100, 40],
          [-90, 40],
          [-90, 35],
          [-100, 35],
          [-100, 40]
        ]]
      },
      properties: { name: 'Region A', density: 'high' }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-110, 45],
          [-100, 45],
          [-100, 40],
          [-110, 40],
          [-110, 45]
        ]]
      },
      properties: { name: 'Region B', density: 'medium' }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-90, 40],
          [-80, 40],
          [-80, 35],
          [-90, 35],
          [-90, 40]
        ]]
      },
      properties: { name: 'Region C', density: 'low' }
    }
  ]
};
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
