// Point Clustering
//
// Cluster point markers at lower zoom levels for better performance
<template>
  <mgl-map
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >
    <mgl-geo-json-source
      source-id="locations"
      :data="locationData"
      :cluster="true"
      :cluster-max-zoom="14"
      :cluster-radius="50"
    >
      <!-- Clustered points circle layer -->
      <mgl-circle-layer
        layer-id="clusters"
        :filter="['has', 'point_count']"
        :paint="{
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#51bbd6',  // < 10 points
            10, '#f1f075',  // 10-30 points
            30, '#f28cb1'   // > 30 points
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,   // < 10 points
            10, 30,   // 10-30 points
            30, 40    // > 30 points
          ]
        }"
      />

      <!-- Cluster count labels -->
      <mgl-symbol-layer
        layer-id="cluster-count"
        :filter="['has', 'point_count']"
        :layout="{
          'text-field': ['get', 'point_count_abbreviated'],
          'text-font': ['Open Sans Bold'],
          'text-size': 14
        }"
        :paint="{
          'text-color': '#ffffff'
        }"
      />

      <!-- Unclustered points -->
      <mgl-circle-layer
        layer-id="unclustered-point"
        :filter="['!', ['has', 'point_count']]"
        :paint="{
          'circle-color': '#11b4da',
          'circle-radius': 8,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff'
        }"
      />
    </mgl-geo-json-source>
    <mgl-navigation-control />
  </mgl-map>
  <div style="margin-top: 10px; background: #f8f9fa; padding: 10px; border-radius: 5px;">
    <h4 style="margin-top: 0;">Clustering Info</h4>
    <div style="margin-bottom: 5px;">
      <span style="display: inline-block; width: 20px; height: 20px; background: #51bbd6; border-radius: 50%; margin-right: 5px;"></span>
      Small clusters (< 10 points)
    </div>
    <div style="margin-bottom: 5px;">
      <span style="display: inline-block; width: 20px; height: 20px; background: #f1f075; border-radius: 50%; margin-right: 5px;"></span>
      Medium clusters (10-30 points)
    </div>
    <div style="margin-bottom: 5px;">
      <span style="display: inline-block; width: 20px; height: 20px; background: #f28cb1; border-radius: 50%; margin-right: 5px;"></span>
      Large clusters (> 30 points)
    </div>
    <div style="margin-top: 10px; font-size: 12px; color: #666;">
      Zoom in to see individual points. Zoom out to see clusters.
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
const zoom = 3;

// Generate random points for clustering
const generatePoints = (count) => {
  const features = [];
  for (let i = 0; i < count; i++) {
    features.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -98.5795 + (Math.random() - 0.5) * 60,
          39.8283 + (Math.random() - 0.5) * 30
        ]
      },
      properties: {
        id: i,
        name: `Location ${i + 1}`
      }
    });
  }
  return features;
};

const locationData = {
  type: 'FeatureCollection',
  features: generatePoints(200)
};
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
