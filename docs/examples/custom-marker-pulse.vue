// Animated Pulse Markers
//
// Markers with pulsing animations to draw attention to important locations
<template>
  <mgl-map :map-style="style" :center="center" :zoom="zoom" height="500px">
    <!-- Live location pulse -->
    <mgl-marker :coordinates="[12.550, 55.666]" anchor="center">
      <template #marker>
        <div class="pulse-marker live">
          <span class="pulse-ring"></span>
          <span class="pulse-ring delay-1"></span>
          <span class="pulse-ring delay-2"></span>
          <span class="pulse-dot"></span>
        </div>
      </template>
    </mgl-marker>

    <!-- Alert pulse -->
    <mgl-marker :coordinates="[12.558, 55.662]" anchor="center">
      <template #marker>
        <div class="pulse-marker alert">
          <span class="pulse-ring"></span>
          <span class="pulse-ring delay-1"></span>
          <span class="pulse-dot">!</span>
        </div>
      </template>
    </mgl-marker>

    <!-- Success pulse -->
    <mgl-marker :coordinates="[12.542, 55.670]" anchor="center">
      <template #marker>
        <div class="pulse-marker success">
          <span class="pulse-ring"></span>
          <span class="pulse-ring delay-1"></span>
          <span class="pulse-dot">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </span>
        </div>
      </template>
    </mgl-marker>

    <!-- Radar sweep -->
    <mgl-marker :coordinates="[12.565, 55.668]" anchor="center">
      <template #marker>
        <div class="radar-marker">
          <span class="radar-sweep"></span>
          <span class="radar-dot"></span>
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

.pulse-marker {
  position: relative;
  width: 60px;
  height: 60px;

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    animation: pulse-expand 2s ease-out infinite;
  }

  .pulse-ring.delay-1 {
    animation-delay: 0.5s;
  }

  .pulse-ring.delay-2 {
    animation-delay: 1s;
  }

  .pulse-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    font-size: 14px;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  &.live {
    .pulse-ring {
      border: 3px solid #2196f3;
    }
    .pulse-dot {
      background: #2196f3;
    }
  }

  &.alert {
    .pulse-ring {
      border: 3px solid #ff5722;
    }
    .pulse-dot {
      background: #ff5722;
    }
  }

  &.success {
    .pulse-ring {
      border: 3px solid #4caf50;
    }
    .pulse-dot {
      background: #4caf50;
    }
  }
}

.radar-marker {
  position: relative;
  width: 80px;
  height: 80px;

  .radar-sweep {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid rgba(156, 39, 176, 0.3);
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      rgba(156, 39, 176, 0.4) 60deg,
      transparent 120deg
    );
    animation: radar-spin 2s linear infinite;
  }

  .radar-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #9c27b0;
    box-shadow: 0 0 10px rgba(156, 39, 176, 0.8);
  }
}

@keyframes pulse-expand {
  0% {
    transform: scale(0.3);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes radar-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
