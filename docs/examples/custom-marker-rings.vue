// Gradient Ring Markers
//
// Eye-catching markers with animated gradient borders and glow effects
<template>
  <mgl-map :map-style="style" :center="center" :zoom="zoom" height="500px">
    <!-- Spinning gradient ring -->
    <mgl-marker :coordinates="[12.545, 55.670]" anchor="center">
      <template #marker>
        <div class="ring-marker spinning">
          <div class="ring"></div>
          <div class="center">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
          </div>
        </div>
      </template>
    </mgl-marker>

    <!-- Pulsing glow ring -->
    <mgl-marker :coordinates="[12.555, 55.668]" anchor="center">
      <template #marker>
        <div class="ring-marker glow cyan">
          <div class="glow-ring"></div>
          <div class="glow-ring delay"></div>
          <div class="center">A</div>
        </div>
      </template>
    </mgl-marker>

    <!-- Double ring -->
    <mgl-marker :coordinates="[12.560, 55.663]" anchor="center">
      <template #marker>
        <div class="ring-marker double purple">
          <div class="outer-ring"></div>
          <div class="inner-ring"></div>
          <div class="center">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
        </div>
      </template>
    </mgl-marker>

    <!-- Dashed orbit ring -->
    <mgl-marker :coordinates="[12.540, 55.660]" anchor="center">
      <template #marker>
        <div class="ring-marker orbit green">
          <div class="orbit-ring"></div>
          <div class="satellite"></div>
          <div class="center"></div>
        </div>
      </template>
    </mgl-marker>

    <!-- Neon ring -->
    <mgl-marker :coordinates="[12.552, 55.656]" anchor="center">
      <template #marker>
        <div class="ring-marker neon pink">
          <div class="neon-ring"></div>
          <div class="center">!</div>
        </div>
      </template>
    </mgl-marker>

    <!-- Progress ring -->
    <mgl-marker :coordinates="[12.565, 55.665]" anchor="center">
      <template #marker>
        <div class="ring-marker progress">
          <svg class="progress-ring" viewBox="0 0 60 60">
            <circle class="bg" cx="30" cy="30" r="26" />
            <circle class="fill" cx="30" cy="30" r="26" />
          </svg>
          <div class="center">75%</div>
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

.ring-marker {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .center {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  // Spinning gradient ring
  &.spinning {
    width: 60px;
    height: 60px;

    .ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      padding: 4px;
      background: conic-gradient(from 0deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff, #ff6b6b);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      animation: spin 3s linear infinite;
    }

    .center {
      width: 44px;
      height: 44px;
      background: white;
      border-radius: 50%;
      color: #ff6b6b;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  // Pulsing glow ring
  &.glow {
    width: 50px;
    height: 50px;

    .glow-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      animation: glow-pulse 2s ease-out infinite;
    }

    .glow-ring.delay {
      animation-delay: 0.5s;
    }

    .center {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      color: white;
      font-weight: bold;
      font-size: 16px;
    }

    &.cyan {
      .glow-ring {
        border: 3px solid #00bcd4;
        box-shadow: 0 0 15px rgba(0, 188, 212, 0.6);
      }
      .center {
        background: linear-gradient(135deg, #00bcd4, #00838f);
      }
    }
  }

  // Double ring
  &.double {
    width: 56px;
    height: 56px;

    .outer-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 3px solid;
      animation: spin 4s linear infinite;
    }

    .inner-ring {
      position: absolute;
      inset: 8px;
      border-radius: 50%;
      border: 2px dashed;
      animation: spin 3s linear infinite reverse;
    }

    .center {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      color: white;

      svg {
        width: 16px;
        height: 16px;
      }
    }

    &.purple {
      .outer-ring {
        border-color: #9c27b0;
      }
      .inner-ring {
        border-color: rgba(156, 39, 176, 0.5);
      }
      .center {
        background: linear-gradient(135deg, #9c27b0, #6a1b9a);
      }
    }
  }

  // Dashed orbit ring
  &.orbit {
    width: 60px;
    height: 60px;

    .orbit-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 2px dashed;
      animation: spin 6s linear infinite;
    }

    .satellite {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      animation: orbit 3s linear infinite;
    }

    .center {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }

    &.green {
      .orbit-ring {
        border-color: rgba(76, 175, 80, 0.5);
      }
      .satellite {
        background: #4caf50;
        box-shadow: 0 0 10px rgba(76, 175, 80, 0.8);
      }
      .center {
        background: linear-gradient(135deg, #4caf50, #2e7d32);
      }
    }
  }

  // Neon ring
  &.neon {
    width: 50px;
    height: 50px;

    .neon-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 3px solid;
      animation: neon-flicker 1.5s ease-in-out infinite;
    }

    .center {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      color: white;
      font-weight: bold;
      font-size: 18px;
    }

    &.pink {
      .neon-ring {
        border-color: #e91e63;
        box-shadow: 0 0 10px rgba(233, 30, 99, 0.8),
                    0 0 20px rgba(233, 30, 99, 0.4),
                    inset 0 0 10px rgba(233, 30, 99, 0.3);
      }
      .center {
        background: linear-gradient(135deg, #e91e63, #c2185b);
      }
    }
  }

  // Progress ring
  &.progress {
    width: 60px;
    height: 60px;

    .progress-ring {
      width: 100%;
      height: 100%;

      circle {
        fill: none;
        stroke-width: 5;
        transform: rotate(-90deg);
        transform-origin: center;
      }

      .bg {
        stroke: rgba(76, 175, 80, 0.2);
      }

      .fill {
        stroke: #4caf50;
        stroke-linecap: round;
        stroke-dasharray: 163.36;
        stroke-dashoffset: 40.84; // 75% progress
        animation: progress-fill 2s ease-out;
      }
    }

    .center {
      width: 44px;
      height: 44px;
      background: white;
      border-radius: 50%;
      font-size: 12px;
      font-weight: bold;
      color: #4caf50;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes glow-pulse {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

@keyframes orbit {
  from {
    transform: rotate(0deg) translateX(25px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(25px) rotate(-360deg);
  }
}

@keyframes neon-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes progress-fill {
  from {
    stroke-dashoffset: 163.36;
  }
}
</style>
