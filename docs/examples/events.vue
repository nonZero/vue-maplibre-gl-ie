// Map and Layer Events
//
// Handle click, hover, and other interactive events on the map
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
    @load="onMapLoad"
    @click="onMapClick"
    @move="onMapMove"
    @zoom="onMapZoom"
  >
    <mgl-geo-json-source source-id="interactive-points" :data="pointData">
      <mgl-circle-layer
        layer-id="clickable-points"
        :paint="{
          'circle-radius': 10,
          'circle-color': [
            'case',
            ['==', ['get', 'id'], hoveredId || -1],
            '#e74c3c',  // hovered
            ['==', ['get', 'id'], clickedId || -1],
            '#2ecc71',  // clicked
            '#3498db'   // default
          ],
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }"
        @click="onPointClick"
        @mouseenter="onPointMouseEnter"
        @mouseleave="onPointMouseLeave"
      />

      <mgl-symbol-layer
        layer-id="point-labels"
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
  <div style="margin-top: 10px; background: #f8f9fa; padding: 10px; border-radius: 5px;">
    <h4 style="margin-top: 0;">Event Log</h4>
    <div style="max-height: 150px; overflow-y: auto; font-size: 12px; font-family: monospace;">
      <div v-for="(event, index) in eventLog" :key="index" style="padding: 2px 0;">
        <strong>{{ event.type }}:</strong> {{ event.message }}
      </div>
    </div>
    <div style="margin-top: 10px; font-size: 12px; color: #666;">
      <div><span style="color: #3498db;">●</span> Default | <span style="color: #e74c3c;">●</span> Hovered | <span style="color: #2ecc71;">●</span> Clicked</div>
      <div style="margin-top: 5px;">Try: Click map, hover points, click points</div>
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
import { ref } from 'vue';

const style = 'https://api.maptiler.com/maps/streets-v2/style.json?key=3YeFnghdqUJJpIvlgLti';
const center = [-98.5795, 39.8283];
const zoom = 4;

const hoveredId = ref(null);
const clickedId = ref(null);
const eventLog = ref([]);
const maxLogSize = 20;

const pointData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-100, 40] },
      properties: { id: 1, name: 'Point A' }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-95, 38] },
      properties: { id: 2, name: 'Point B' }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-105, 36] },
      properties: { id: 3, name: 'Point C' }
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-90, 42] },
      properties: { id: 4, name: 'Point D' }
    }
  ]
};

function addEvent(type, message) {
  eventLog.value.unshift({ type, message, time: new Date().toLocaleTimeString() });
  if (eventLog.value.length > maxLogSize) {
    eventLog.value.pop();
  }
}

function onMapLoad(event) {
  addEvent('LOAD', 'Map loaded successfully');
}

function onMapClick(event) {
  const { lng, lat } = event.lngLat;
  addEvent('MAP_CLICK', `Clicked at [${lng.toFixed(4)}, ${lat.toFixed(4)}]`);
}

function onMapMove(event) {
  // Commented out to avoid log spam
  // addEvent('MOVE', 'Map moved');
}

function onMapZoom(event) {
  const zoom = event.target.getZoom();
  addEvent('ZOOM', `Zoom level: ${zoom.toFixed(2)}`);
}

function onPointClick(event) {
  const feature = event.features[0];
  const id = feature.properties.id;
  const name = feature.properties.name;

  clickedId.value = id;
  addEvent('POINT_CLICK', `Clicked ${name} (ID: ${id})`);

  // Prevent map click event from firing
  event.originalEvent.stopPropagation();
}

function onPointMouseEnter(event) {
  const feature = event.features[0];
  const id = feature.properties.id;
  const name = feature.properties.name;

  hoveredId.value = id;
  addEvent('POINT_HOVER', `Hovering ${name} (ID: ${id})`);

  // Change cursor to pointer
  event.target.getCanvas().style.cursor = 'pointer';
}

function onPointMouseLeave(event) {
  hoveredId.value = null;

  // Reset cursor
  event.target.getCanvas().style.cursor = '';
}
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
