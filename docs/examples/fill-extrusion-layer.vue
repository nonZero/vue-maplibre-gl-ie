// Fill Extrusion Layer
//
// Create 3D extruded buildings with height-based visualization
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    :pitch="pitch"
    :bearing="bearing"
    height="500px"
  >
    <mgl-geo-json-source source-id="buildings" :data="buildingData">
      <mgl-fill-extrusion-layer
        layer-id="3d-buildings"
        :paint="{
          'fill-extrusion-color': [
            'interpolate',
            ['linear'],
            ['get', 'height'],
            0, '#ffffb2',
            50, '#fecc5c',
            100, '#fd8d3c',
            150, '#f03b20',
            200, '#bd0026'
          ],
          'fill-extrusion-height': ['get', 'height'],
          'fill-extrusion-base': 0,
          'fill-extrusion-opacity': 0.8
        }"
      />
    </mgl-geo-json-source>
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px;">
    <strong>Tip:</strong> Use mouse to rotate and tilt the map view
  </div>
</template>

<script setup>
import {
  MglMap,
  MglGeoJsonSource,
  MglFillExtrusionLayer,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [-74.0060, 40.7128];
const zoom = 15;
const pitch = 45;
const bearing = -17;

// Sample building data with heights
const buildingData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-74.0070, 40.7135],
          [-74.0065, 40.7135],
          [-74.0065, 40.7130],
          [-74.0070, 40.7130],
          [-74.0070, 40.7135]
        ]]
      },
      properties: { height: 150, name: 'Building A' }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-74.0060, 40.7135],
          [-74.0055, 40.7135],
          [-74.0055, 40.7130],
          [-74.0060, 40.7130],
          [-74.0060, 40.7135]
        ]]
      },
      properties: { height: 200, name: 'Building B' }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-74.0050, 40.7135],
          [-74.0045, 40.7135],
          [-74.0045, 40.7130],
          [-74.0050, 40.7130],
          [-74.0050, 40.7135]
        ]]
      },
      properties: { height: 100, name: 'Building C' }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-74.0070, 40.7125],
          [-74.0065, 40.7125],
          [-74.0065, 40.7120],
          [-74.0070, 40.7120],
          [-74.0070, 40.7125]
        ]]
      },
      properties: { height: 75, name: 'Building D' }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-74.0060, 40.7125],
          [-74.0055, 40.7125],
          [-74.0055, 40.7120],
          [-74.0060, 40.7120],
          [-74.0060, 40.7125]
        ]]
      },
      properties: { height: 180, name: 'Building E' }
    }
  ]
};
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
