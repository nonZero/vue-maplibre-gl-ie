// Heatmap Layer
//
// Visualize point density with a heatmap gradient. [API Reference](/api/MglHeatmapLayer)
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-geo-json-source source-id="events" :data="eventData">
      <mgl-heatmap-layer
        layer-id="event-heat"
        :paint="{
          'heatmap-weight': [
            'interpolate',
            ['linear'],
            ['get', 'intensity'],
            0, 0,
            10, 1
          ],
          'heatmap-intensity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0, 1,
            9, 3
          ],
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(33,102,172,0)',
            0.2, 'rgb(103,169,207)',
            0.4, 'rgb(209,229,240)',
            0.6, 'rgb(253,219,199)',
            0.8, 'rgb(239,138,98)',
            1, 'rgb(178,24,43)'
          ],
          'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0, 2,
            9, 20
          ],
          'heatmap-opacity': 0.8
        }"
      />
    </mgl-geo-json-source>
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px;">
    <strong>Legend:</strong>
    <span style="background: linear-gradient(to right, rgba(33,102,172,0.5), rgb(239,138,98), rgb(178,24,43)); padding: 5px 20px; margin-left: 10px; color: white;">
      Low ← Density → High
    </span>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglGeoJsonSource,
  MglHeatmapLayer,
  MglNavigationControl,
} from '@indoorequal/vue-maplibre-gl';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [-122.4194, 37.7749];
const zoom = 11;

// Generate random event points
const generateEvents = () => {
  const features = [];
  for (let i = 0; i < 100; i++) {
    features.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -122.4194 + (Math.random() - 0.5) * 0.2,
          37.7749 + (Math.random() - 0.5) * 0.2
        ]
      },
      properties: {
        intensity: Math.random() * 10
      }
    });
  }
  return features;
};

const eventData = {
  type: 'FeatureCollection',
  features: generateEvents()
};
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
