// Symbol Layer
//
// Display text labels and symbols on the map
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-geo-json-source source-id="cities" :data="cityData">
      <mgl-symbol-layer
        layer-id="city-labels"
        :layout="{
          'text-field': ['get', 'name'],
          'text-font': ['Open Sans Regular'],
          'text-size': [
            'interpolate',
            ['linear'],
            ['get', 'population'],
            100000, 12,
            1000000, 18,
            5000000, 24
          ],
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
    <strong>Note:</strong> Text size is based on city population
  </div>
</template>

<script setup>
import {
  MglMap,
  MglGeoJsonSource,
  MglSymbolLayer,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [-98.5795, 39.8283];
const zoom = 4;

// Sample city data
const cityData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-118.2437, 34.0522] },
      properties: { name: 'Los Angeles', population: 3900000 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-87.6298, 41.8781] },
      properties: { name: 'Chicago', population: 2700000 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-95.3698, 29.7604] },
      properties: { name: 'Houston', population: 2300000 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-112.0740, 33.4484] },
      properties: { name: 'Phoenix', population: 1600000 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-75.1652, 39.9526] },
      properties: { name: 'Philadelphia', population: 1600000 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-98.4936, 29.4241] },
      properties: { name: 'San Antonio', population: 1500000 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-117.1611, 32.7157] },
      properties: { name: 'San Diego', population: 1400000 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-96.7970, 32.7767] },
      properties: { name: 'Dallas', population: 1300000 }
    }
  ]
};
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
