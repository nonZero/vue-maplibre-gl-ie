// Use Disposable Layer Composable
//
// Create and remove temporary layers programmatically using useDisposableLayer
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
    @click="onMapClick"
  >
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px;">
    <button @click="clearHighlight" style="padding: 5px 10px; margin-right: 10px;">
      Clear Highlight
    </button>
    <button @click="addRandomHighlight" style="padding: 5px 10px;">
      Add Random Highlight
    </button>
    <div style="margin-top: 10px; font-size: 14px; color: #666;">
      Click on the map to create a temporary highlight circle
    </div>
  </div>
</template>

<script setup>
import {
  MglMap,
  MglNavigationControl,
  useDisposableLayer,
} from '@indoorequal/vue-maplibre-gl';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [-98.5795, 39.8283];
const zoom = 4;

// Use the useDisposableLayer composable
const { addLayer, removeLayer } = useDisposableLayer();

function onMapClick(event) {
  const { lng, lat } = event.lngLat;
  createHighlight(lng, lat);
}

function createHighlight(lng, lat) {
  // Remove existing highlight if any
  clearHighlight();

  // Create a circle highlight at the clicked position
  const sourceId = 'highlight-source';
  const layerId = 'highlight-layer';

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lng, lat]
        },
        properties: {}
      }
    ]
  };

  addLayer(
    sourceId,
    layerId,
    'circle',
    geojson,
    {
      'circle-radius': 20,
      'circle-color': '#ff6b6b',
      'circle-opacity': 0.6,
      'circle-stroke-width': 3,
      'circle-stroke-color': '#ffffff'
    }
  );
}

function clearHighlight() {
  removeLayer('highlight-source', 'highlight-layer');
}

function addRandomHighlight() {
  const lng = -98.5795 + (Math.random() - 0.5) * 40;
  const lat = 39.8283 + (Math.random() - 0.5) * 20;
  createHighlight(lng, lat);
}
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
