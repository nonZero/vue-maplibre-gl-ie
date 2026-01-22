// Numbered Badge Markers
//
// Sequential numbered markers ideal for routes, tours, and step-by-step guides
<template>
  <mgl-map :map-style="style" :center="center" :zoom="zoom" height="500px">
    <!-- Route markers with connecting line visualization -->
    <mgl-marker
      v-for="(point, index) in routePoints"
      :key="index"
      :coordinates="point.coords"
      anchor="center"
    >
      <template #marker>
        <div class="numbered-marker" :class="point.style">
          <span class="number">{{ index + 1 }}</span>
          <span class="label" v-if="point.label">{{ point.label }}</span>
        </div>
      </template>
    </mgl-marker>

    <!-- Cluster count marker -->
    <mgl-marker :coordinates="[12.565, 55.658]" anchor="center">
      <template #marker>
        <div class="cluster-marker">
          <span class="count">42</span>
          <span class="ring"></span>
        </div>
      </template>
    </mgl-marker>

    <!-- Ranking markers -->
    <mgl-marker :coordinates="[12.538, 55.665]" anchor="bottom">
      <template #marker>
        <div class="rank-marker gold">
          <span class="medal">🥇</span>
          <span class="rank">1st</span>
        </div>
      </template>
    </mgl-marker>

    <mgl-marker :coordinates="[12.542, 55.663]" anchor="bottom">
      <template #marker>
        <div class="rank-marker silver">
          <span class="medal">🥈</span>
          <span class="rank">2nd</span>
        </div>
      </template>
    </mgl-marker>

    <mgl-marker :coordinates="[12.546, 55.661]" anchor="bottom">
      <template #marker>
        <div class="rank-marker bronze">
          <span class="medal">🥉</span>
          <span class="rank">3rd</span>
        </div>
      </template>
    </mgl-marker>
  </mgl-map>
</template>

<script setup>
import { MglMap, MglMarker } from '@indoorequal/vue-maplibre-gl';

const style = 'https://api.maptiler.com/maps/streets/style.json?key=cQX2iET1gmOW38bedbUh';
const center = [12.550343, 55.665957];
const zoom = 13;

const routePoints = [
  { coords: [12.548, 55.672], style: 'start', label: 'Start' },
  { coords: [12.552, 55.670], style: 'waypoint' },
  { coords: [12.556, 55.668], style: 'waypoint' },
  { coords: [12.560, 55.666], style: 'waypoint' },
  { coords: [12.558, 55.662], style: 'end', label: 'End' },
];
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";

.numbered-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .number {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
    color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;
  }

  .label {
    margin-top: 4px;
    padding: 2px 8px;
    background: white;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 600;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }

  &:hover .number {
    transform: scale(1.2);
  }

  &.start .number {
    background: linear-gradient(135deg, #4caf50, #2e7d32);
    width: 38px;
    height: 38px;
  }

  &.end .number {
    background: linear-gradient(135deg, #f44336, #c62828);
    width: 38px;
    height: 38px;
  }

  &.waypoint .number {
    background: linear-gradient(135deg, #2196f3, #1565c0);
  }
}

.cluster-marker {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .count {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff6b6b, #ee5a5a);
    color: white;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 10px rgba(255, 107, 107, 0.4);
    z-index: 2;
    transition: transform 0.2s ease;
  }

  .ring {
    position: absolute;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 3px solid rgba(255, 107, 107, 0.4);
    animation: cluster-pulse 2s ease-out infinite;
  }

  &:hover .count {
    transform: scale(1.1);
  }
}

.rank-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  .medal {
    font-size: 32px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }

  .rank {
    margin-top: 2px;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: bold;
    color: white;
  }

  &.gold .rank {
    background: linear-gradient(135deg, #ffd700, #ffb300);
  }

  &.silver .rank {
    background: linear-gradient(135deg, #c0c0c0, #9e9e9e);
  }

  &.bronze .rank {
    background: linear-gradient(135deg, #cd7f32, #a0522d);
  }

  &:hover {
    transform: scale(1.15);
  }
}

@keyframes cluster-pulse {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}
</style>
