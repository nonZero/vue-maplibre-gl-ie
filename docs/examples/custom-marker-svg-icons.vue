// SVG Icon Markers
//
// Custom markers using inline SVG icons for different location types
<template>
  <mgl-map :map-style="style" :center="center" :zoom="zoom" height="500px">
    <!-- Restaurant marker -->
    <mgl-marker :coordinates="[12.545, 55.670]" anchor="bottom">
      <template #marker>
        <div class="svg-marker restaurant">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
          </svg>
        </div>
      </template>
    </mgl-marker>

    <!-- Coffee shop marker -->
    <mgl-marker :coordinates="[12.555, 55.668]" anchor="bottom">
      <template #marker>
        <div class="svg-marker coffee">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3h-2V5h2zm-4 0v3H8V5h4zM6 5h1v3H6V5zm12.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4v-2z"/>
          </svg>
        </div>
      </template>
    </mgl-marker>

    <!-- Park marker -->
    <mgl-marker :coordinates="[12.560, 55.663]" anchor="bottom">
      <template #marker>
        <div class="svg-marker park">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 12h2L12 2 5 12h2l-3 6h7v4h2v-4h7l-3-6z"/>
          </svg>
        </div>
      </template>
    </mgl-marker>

    <!-- Hospital marker -->
    <mgl-marker :coordinates="[12.540, 55.660]" anchor="bottom">
      <template #marker>
        <div class="svg-marker hospital">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
          </svg>
        </div>
      </template>
    </mgl-marker>

    <!-- Shopping marker -->
    <mgl-marker :coordinates="[12.552, 55.658]" anchor="bottom">
      <template #marker>
        <div class="svg-marker shopping">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
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
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";

.svg-marker {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.15);
  }

  svg {
    width: 22px;
    height: 22px;
  }

  &.restaurant {
    background: linear-gradient(135deg, #ff6b6b, #ee5a5a);
  }

  &.coffee {
    background: linear-gradient(135deg, #8b5a2b, #6d4c1d);
  }

  &.park {
    background: linear-gradient(135deg, #4caf50, #388e3c);
  }

  &.hospital {
    background: linear-gradient(135deg, #e53935, #c62828);
  }

  &.shopping {
    background: linear-gradient(135deg, #9c27b0, #7b1fa2);
  }
}
</style>
