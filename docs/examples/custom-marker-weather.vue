// Weather Icon Markers
//
// Animated weather markers with CSS-only sun, clouds, rain, snow, and lightning
<template>
  <mgl-map :map-style="style" :center="center" :zoom="zoom" height="500px">
    <!-- Sunny marker -->
    <mgl-marker :coordinates="[12.545, 55.670]" anchor="center">
      <template #marker>
        <div class="weather-marker sunny">
          <div class="sun">
            <div class="rays"></div>
            <div class="core"></div>
          </div>
          <span class="temp">28°</span>
        </div>
      </template>
    </mgl-marker>

    <!-- Cloudy marker -->
    <mgl-marker :coordinates="[12.555, 55.668]" anchor="center">
      <template #marker>
        <div class="weather-marker cloudy">
          <div class="cloud">
            <div class="puff p1"></div>
            <div class="puff p2"></div>
            <div class="puff p3"></div>
            <div class="base"></div>
          </div>
          <span class="temp">18°</span>
        </div>
      </template>
    </mgl-marker>

    <!-- Rainy marker -->
    <mgl-marker :coordinates="[12.560, 55.663]" anchor="center">
      <template #marker>
        <div class="weather-marker rainy">
          <div class="rain-cloud">
            <div class="cloud-body"></div>
            <div class="raindrops">
              <span class="drop d1"></span>
              <span class="drop d2"></span>
              <span class="drop d3"></span>
              <span class="drop d4"></span>
              <span class="drop d5"></span>
            </div>
          </div>
          <span class="temp">12°</span>
        </div>
      </template>
    </mgl-marker>

    <!-- Snowy marker -->
    <mgl-marker :coordinates="[12.540, 55.660]" anchor="center">
      <template #marker>
        <div class="weather-marker snowy">
          <div class="snow-cloud">
            <div class="cloud-body"></div>
            <div class="snowflakes">
              <span class="flake f1">❄</span>
              <span class="flake f2">❄</span>
              <span class="flake f3">❄</span>
            </div>
          </div>
          <span class="temp">-5°</span>
        </div>
      </template>
    </mgl-marker>

    <!-- Thunderstorm marker -->
    <mgl-marker :coordinates="[12.552, 55.656]" anchor="center">
      <template #marker>
        <div class="weather-marker storm">
          <div class="storm-cloud">
            <div class="cloud-body dark"></div>
            <div class="lightning">⚡</div>
            <div class="raindrops">
              <span class="drop d1"></span>
              <span class="drop d2"></span>
              <span class="drop d3"></span>
            </div>
          </div>
          <span class="temp">15°</span>
        </div>
      </template>
    </mgl-marker>

    <!-- Partly cloudy marker -->
    <mgl-marker :coordinates="[12.565, 55.665]" anchor="center">
      <template #marker>
        <div class="weather-marker partly-cloudy">
          <div class="sun-small">
            <div class="core"></div>
          </div>
          <div class="cloud-small">
            <div class="puff p1"></div>
            <div class="puff p2"></div>
            <div class="base"></div>
          </div>
          <span class="temp">22°</span>
        </div>
      </template>
    </mgl-marker>

    <!-- Windy marker -->
    <mgl-marker :coordinates="[12.548, 55.673]" anchor="center">
      <template #marker>
        <div class="weather-marker windy">
          <div class="wind-lines">
            <span class="line l1"></span>
            <span class="line l2"></span>
            <span class="line l3"></span>
          </div>
          <span class="temp">16°</span>
        </div>
      </template>
    </mgl-marker>

    <!-- Foggy marker -->
    <mgl-marker :coordinates="[12.538, 55.665]" anchor="center">
      <template #marker>
        <div class="weather-marker foggy">
          <div class="fog-layers">
            <span class="fog-line fl1"></span>
            <span class="fog-line fl2"></span>
            <span class="fog-line fl3"></span>
          </div>
          <span class="temp">10°</span>
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

.weather-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  .temp {
    font-size: 14px;
    font-weight: bold;
    margin-top: 4px;
    color: #333;
  }

  // Sunny
  &.sunny {
    .sun {
      width: 50px;
      height: 50px;
      position: relative;

      .core {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        background: linear-gradient(135deg, #ffd93d, #ff9800);
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(255, 152, 0, 0.6);
      }

      .rays {
        position: absolute;
        inset: 0;
        animation: rotate-slow 10s linear infinite;

        &::before, &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 50px;
          background: linear-gradient(to bottom, #ffd93d, transparent, #ffd93d);
          transform-origin: center;
        }

        &::before {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        &::after {
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
    }
    .temp { color: #ff9800; }
  }

  // Cloudy
  &.cloudy {
    .cloud {
      width: 55px;
      height: 35px;
      position: relative;
      animation: float 3s ease-in-out infinite;

      .puff {
        position: absolute;
        background: linear-gradient(135deg, #e0e0e0, #bdbdbd);
        border-radius: 50%;
      }

      .p1 { width: 24px; height: 24px; top: 0; left: 8px; }
      .p2 { width: 20px; height: 20px; top: 4px; left: 0; }
      .p3 { width: 18px; height: 18px; top: 6px; left: 28px; }

      .base {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 16px;
        background: linear-gradient(to bottom, #bdbdbd, #9e9e9e);
        border-radius: 8px;
      }
    }
    .temp { color: #757575; }
  }

  // Rainy
  &.rainy {
    .rain-cloud {
      width: 55px;
      height: 50px;
      position: relative;

      .cloud-body {
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 25px;
        background: linear-gradient(135deg, #90a4ae, #607d8b);
        border-radius: 25px 25px 8px 8px;
      }

      .raindrops {
        position: absolute;
        bottom: 0;
        left: 5px;
        width: 40px;
        height: 25px;

        .drop {
          position: absolute;
          width: 3px;
          height: 12px;
          background: linear-gradient(to bottom, #64b5f6, #2196f3);
          border-radius: 0 0 3px 3px;
          animation: rain-fall 0.8s linear infinite;
        }

        .d1 { left: 5px; animation-delay: 0s; }
        .d2 { left: 15px; animation-delay: 0.2s; }
        .d3 { left: 25px; animation-delay: 0.4s; }
        .d4 { left: 10px; animation-delay: 0.3s; }
        .d5 { left: 30px; animation-delay: 0.1s; }
      }
    }
    .temp { color: #2196f3; }
  }

  // Snowy
  &.snowy {
    .snow-cloud {
      width: 55px;
      height: 50px;
      position: relative;

      .cloud-body {
        position: absolute;
        top: 0;
        left: 2px;
        width: 50px;
        height: 25px;
        background: linear-gradient(135deg, #cfd8dc, #b0bec5);
        border-radius: 25px 25px 8px 8px;
      }

      .snowflakes {
        position: absolute;
        bottom: 0;
        left: 5px;
        width: 45px;
        height: 25px;

        .flake {
          position: absolute;
          font-size: 12px;
          color: #81d4fa;
          animation: snow-fall 2s linear infinite;
        }

        .f1 { left: 5px; animation-delay: 0s; }
        .f2 { left: 20px; animation-delay: 0.5s; }
        .f3 { left: 35px; animation-delay: 1s; }
      }
    }
    .temp { color: #29b6f6; }
  }

  // Storm
  &.storm {
    .storm-cloud {
      width: 55px;
      height: 55px;
      position: relative;

      .cloud-body.dark {
        position: absolute;
        top: 0;
        left: 2px;
        width: 50px;
        height: 25px;
        background: linear-gradient(135deg, #546e7a, #37474f);
        border-radius: 25px 25px 8px 8px;
      }

      .lightning {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;
        animation: lightning-flash 2s ease-in-out infinite;
      }

      .raindrops {
        position: absolute;
        bottom: 0;
        left: 5px;
        width: 40px;
        height: 20px;

        .drop {
          position: absolute;
          width: 2px;
          height: 10px;
          background: #90caf9;
          border-radius: 0 0 2px 2px;
          animation: rain-fall 0.5s linear infinite;
        }

        .d1 { left: 8px; }
        .d2 { left: 20px; animation-delay: 0.15s; }
        .d3 { left: 32px; animation-delay: 0.3s; }
      }
    }
    .temp { color: #455a64; }
  }

  // Partly cloudy
  &.partly-cloudy {
    width: 60px;
    height: 50px;
    position: relative;

    .sun-small {
      position: absolute;
      top: 2px;
      right: 5px;

      .core {
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #ffd93d, #ff9800);
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(255, 152, 0, 0.5);
      }
    }

    .cloud-small {
      position: absolute;
      bottom: 15px;
      left: 0;
      width: 40px;
      animation: float 3s ease-in-out infinite;

      .puff {
        position: absolute;
        background: white;
        border-radius: 50%;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      .p1 { width: 18px; height: 18px; top: 0; left: 5px; }
      .p2 { width: 14px; height: 14px; top: 4px; left: 20px; }

      .base {
        position: absolute;
        bottom: 0;
        width: 35px;
        height: 12px;
        background: white;
        border-radius: 6px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
    }

    .temp {
      position: absolute;
      bottom: 0;
      color: #ff9800;
    }
  }

  // Windy
  &.windy {
    .wind-lines {
      width: 50px;
      height: 35px;
      position: relative;

      .line {
        position: absolute;
        height: 3px;
        background: linear-gradient(to right, transparent, #78909c, #78909c, transparent);
        border-radius: 3px;
        animation: wind-blow 1.5s ease-in-out infinite;
      }

      .l1 { width: 40px; top: 5px; left: 0; }
      .l2 { width: 35px; top: 15px; left: 10px; animation-delay: 0.3s; }
      .l3 { width: 30px; top: 25px; left: 5px; animation-delay: 0.6s; }
    }
    .temp { color: #78909c; }
  }

  // Foggy
  &.foggy {
    .fog-layers {
      width: 50px;
      height: 35px;
      position: relative;

      .fog-line {
        position: absolute;
        height: 6px;
        background: linear-gradient(to right, transparent, rgba(158, 158, 158, 0.6), rgba(158, 158, 158, 0.6), transparent);
        border-radius: 3px;
      }

      .fl1 { width: 45px; top: 5px; left: 2px; animation: fog-drift 4s ease-in-out infinite; }
      .fl2 { width: 40px; top: 15px; left: 5px; animation: fog-drift 4s ease-in-out infinite 1s; }
      .fl3 { width: 35px; top: 25px; left: 8px; animation: fog-drift 4s ease-in-out infinite 2s; }
    }
    .temp { color: #9e9e9e; }
  }
}

@keyframes rotate-slow {
  to { transform: rotate(360deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

@keyframes rain-fall {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0; }
}

@keyframes snow-fall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(20px) rotate(180deg); opacity: 0; }
}

@keyframes lightning-flash {
  0%, 100% { opacity: 0; }
  10%, 12% { opacity: 1; }
  14%, 50% { opacity: 0; }
  52%, 54% { opacity: 1; }
  56% { opacity: 0; }
}

@keyframes wind-blow {
  0%, 100% { transform: translateX(0) scaleX(1); }
  50% { transform: translateX(5px) scaleX(1.1); }
}

@keyframes fog-drift {
  0%, 100% { transform: translateX(0); opacity: 0.6; }
  50% { transform: translateX(5px); opacity: 0.8; }
}
</style>
