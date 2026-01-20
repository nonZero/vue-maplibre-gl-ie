// Data-Driven Styling
//
// Use MapLibre expressions for dynamic styling based on feature properties. API: [MglCircleLayer](/api/MglCircleLayer) | [MglSymbolLayer](/api/MglSymbolLayer)
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-geo-json-source source-id="cities" :data="cityData">
      <!-- Circle layer with data-driven styling -->
      <mgl-circle-layer
        layer-id="city-circles"
        :paint="{
          // Circle radius based on population (interpolate)
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['get', 'population'],
            50000, 5,
            500000, 15,
            2000000, 30
          ],
          // Circle color based on temperature (step)
          'circle-color': [
            'step',
            ['get', 'temperature'],
            '#4575b4',  // cold (< 50)
            50, '#91bfdb',
            60, '#fee090',
            70, '#fc8d59',
            80, '#d73027'  // hot (>= 80)
          ],
          // Opacity based on growth rate
          'circle-opacity': [
            'interpolate',
            ['linear'],
            ['get', 'growthRate'],
            -5, 0.3,
            0, 0.6,
            5, 1.0
          ],
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }"
      />

      <!-- Labels showing city names -->
      <mgl-symbol-layer
        layer-id="city-labels"
        :layout="{
          'text-field': [
            'concat',
            ['get', 'name'],
            ' (',
            ['to-string', ['get', 'population']],
            ')'
          ],
          'text-font': ['Open Sans Regular'],
          'text-size': 11,
          'text-offset': [0, 2],
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
  <div style="margin-top: 10px; background: #f8f9fa; padding: 10px; border-radius: 5px;">
    <h4 style="margin-top: 0;">Legend</h4>
    <div style="margin-bottom: 10px;">
      <strong>Size:</strong> Population (larger = more people)
    </div>
    <div style="margin-bottom: 10px;">
      <strong>Color:</strong> Temperature
      <span style="display: inline-block; width: 20px; height: 20px; background: #4575b4; margin-left: 5px;"></span> Cold
      <span style="display: inline-block; width: 20px; height: 20px; background: #91bfdb; margin-left: 5px;"></span>
      <span style="display: inline-block; width: 20px; height: 20px; background: #fee090; margin-left: 5px;"></span>
      <span style="display: inline-block; width: 20px; height: 20px; background: #fc8d59; margin-left: 5px;"></span>
      <span style="display: inline-block; width: 20px; height: 20px; background: #d73027; margin-left: 5px;"></span> Hot
    </div>
    <div>
      <strong>Opacity:</strong> Growth rate (brighter = faster growth)
    </div>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglGeoJsonSource,
  MglCircleLayer,
  MglSymbolLayer,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [-98.5795, 39.8283];
const zoom = 4;

// City data with various properties for data-driven styling
const cityData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-118.2437, 34.0522] },
      properties: { name: 'Los Angeles', population: 3900000, temperature: 72, growthRate: 2.1 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-87.6298, 41.8781] },
      properties: { name: 'Chicago', population: 2700000, temperature: 55, growthRate: 0.5 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-95.3698, 29.7604] },
      properties: { name: 'Houston', population: 2300000, temperature: 82, growthRate: 4.2 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-112.0740, 33.4484] },
      properties: { name: 'Phoenix', population: 1600000, temperature: 88, growthRate: 3.8 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-75.1652, 39.9526] },
      properties: { name: 'Philadelphia', population: 1600000, temperature: 62, growthRate: 1.1 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-122.4194, 37.7749] },
      properties: { name: 'San Francisco', population: 880000, temperature: 65, growthRate: 1.5 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-84.3880, 33.7490] },
      properties: { name: 'Atlanta', population: 500000, temperature: 75, growthRate: 3.2 }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-71.0589, 42.3601] },
      properties: { name: 'Boston', population: 690000, temperature: 52, growthRate: 1.8 }
    }
  ]
};
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
