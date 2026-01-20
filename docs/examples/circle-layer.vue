// Circle Layer
//
// Visualize point data with circles sized and colored by properties. [API Reference](/api/MglCircleLayer)
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-geo-json-source source-id="earthquakes" :data="earthquakeData">
      <mgl-circle-layer
        layer-id="earthquake-circles"
        :paint="{
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['get', 'mag'],
            0, 2,
            6, 20
          ],
          'circle-color': [
            'interpolate',
            ['linear'],
            ['get', 'mag'],
            0, '#ffffb2',
            3, '#feb24c',
            6, '#f03b20'
          ],
          'circle-opacity': 0.7,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff'
        }"
      />
    </mgl-geo-json-source>
    <mgl-navigation-control />
  </mgl-map>
</template>

<script setup>
import {
  MglMap,
  MglGeoJsonSource,
  MglCircleLayer,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [-98.5795, 39.8283];
const zoom = 3;

// Sample earthquake data
const earthquakeData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-122.4194, 37.7749] },
      properties: { mag: 4.2, place: 'San Francisco' }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-118.2437, 34.0522] },
      properties: { mag: 3.5, place: 'Los Angeles' }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-95.3698, 29.7604] },
      properties: { mag: 2.1, place: 'Houston' }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-87.6298, 41.8781] },
      properties: { mag: 3.8, place: 'Chicago' }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-74.0060, 40.7128] },
      properties: { mag: 2.9, place: 'New York' }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-112.0740, 33.4484] },
      properties: { mag: 5.1, place: 'Phoenix' }
    }
  ]
};
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
