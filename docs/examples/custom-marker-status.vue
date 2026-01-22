// Status Indicator Markers
//
// Real-time status indicators perfect for IoT dashboards and monitoring apps
<template>
  <mgl-map :map-style="style" :center="center" :zoom="zoom" height="500px">
    <!-- Online/Active sensor -->
    <mgl-marker :coordinates="[12.545, 55.670]" anchor="center">
      <template #marker>
        <div class="status-marker sensor online">
          <div class="icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.76 16.24C6.67 15.16 6 13.66 6 12s.67-3.16 1.76-4.24l1.42 1.42C8.45 9.9 8 10.9 8 12c0 1.1.45 2.1 1.17 2.83l-1.41 1.41zm8.48 0l-1.41-1.41C15.55 14.1 16 13.1 16 12c0-1.1-.45-2.1-1.17-2.83l1.41-1.41C17.33 8.84 18 10.34 18 12s-.67 3.16-1.76 4.24zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6.36 8.36l-1.42 1.42C1.68 17.24 0 14.79 0 12s1.68-5.24 4.22-7.78l1.42 1.42C3.41 7.87 2 9.81 2 12s1.41 4.13 3.64 6.36zm14.14-14.14l1.42-1.42C22.32 4.76 24 7.21 24 10s-1.68 5.24-4.22 7.78l-1.42-1.42C20.59 14.13 22 12.19 22 10s-1.41-4.13-3.64-6.36l-.58.58z"/>
            </svg>
          </div>
          <span class="status-text">Active</span>
          <span class="signal-waves"></span>
        </div>
      </template>
    </mgl-marker>

    <!-- Warning sensor -->
    <mgl-marker :coordinates="[12.555, 55.668]" anchor="center">
      <template #marker>
        <div class="status-marker sensor warning">
          <div class="icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
          </div>
          <span class="status-text">Warning</span>
          <span class="blink-indicator"></span>
        </div>
      </template>
    </mgl-marker>

    <!-- Error/Critical sensor -->
    <mgl-marker :coordinates="[12.560, 55.663]" anchor="center">
      <template #marker>
        <div class="status-marker sensor error">
          <div class="icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </div>
          <span class="status-text">Critical</span>
          <span class="pulse-alert"></span>
        </div>
      </template>
    </mgl-marker>

    <!-- Offline sensor -->
    <mgl-marker :coordinates="[12.540, 55.660]" anchor="center">
      <template #marker>
        <div class="status-marker sensor offline">
          <div class="icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 8.98C20.93 5.9 16.69 4 12 4c-1.98 0-3.88.35-5.65.98l1.53 1.53C9.15 6.18 10.55 6 12 6c3.88 0 7.36 1.58 9.89 4.11l1.41-1.41L24 8.98zM12 10c2.51 0 4.77.73 6.71 1.93l-1.53 1.53C15.68 12.51 13.91 12 12 12c-.67 0-1.32.08-1.95.21l1.48 1.48c.16-.01.31-.03.47-.03 2.21 0 4 1.79 4 4 0 .16-.02.31-.03.47l1.53 1.53C17.71 18.19 18 16.65 18 15c0-3.31-2.69-6-6-6zM2.27 4.22l2.92 2.92C3.7 8.08 2.42 9.25 1.41 10.58L0 8.98c1.2-1.42 2.66-2.61 4.29-3.55l-2.02-2.02 1.27-1.27 19.73 19.73-1.27 1.27-2.92-2.92c-.18.1-.36.2-.54.29l-1.41-1.41c.53-.24 1.02-.54 1.47-.88l-2.83-2.83c-.68.78-1.53 1.39-2.49 1.77l-1.41-1.41c.77-.21 1.47-.57 2.07-1.04l-2.27-2.27c-.73.58-1.63.97-2.61 1.09V17h-2v-3.46c-.98-.12-1.88-.51-2.61-1.09l-4.12-4.12C4.46 9.41 5.68 10.42 7.1 11.15l1.53 1.53C6.89 11.96 5.37 11 3.64 9.27l-1.37 1.37z"/>
            </svg>
          </div>
          <span class="status-text">Offline</span>
        </div>
      </template>
    </mgl-marker>

    <!-- Battery status markers -->
    <mgl-marker :coordinates="[12.548, 55.656]" anchor="center">
      <template #marker>
        <div class="status-marker battery full">
          <div class="battery-icon">
            <div class="level" style="width: 100%"></div>
          </div>
          <span class="percent">100%</span>
        </div>
      </template>
    </mgl-marker>

    <mgl-marker :coordinates="[12.554, 55.654]" anchor="center">
      <template #marker>
        <div class="status-marker battery medium">
          <div class="battery-icon">
            <div class="level" style="width: 50%"></div>
          </div>
          <span class="percent">50%</span>
        </div>
      </template>
    </mgl-marker>

    <mgl-marker :coordinates="[12.560, 55.652]" anchor="center">
      <template #marker>
        <div class="status-marker battery low">
          <div class="battery-icon">
            <div class="level" style="width: 15%"></div>
          </div>
          <span class="percent">15%</span>
          <span class="low-pulse"></span>
        </div>
      </template>
    </mgl-marker>

    <!-- Temperature gauge -->
    <mgl-marker :coordinates="[12.565, 55.665]" anchor="center">
      <template #marker>
        <div class="status-marker temperature hot">
          <div class="thermometer">
            <div class="mercury"></div>
            <div class="bulb"></div>
          </div>
          <span class="temp-value">42°C</span>
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

.status-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  // Sensor status markers
  &.sensor {
    position: relative;

    .icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

      svg {
        width: 24px;
        height: 24px;
        color: white;
      }
    }

    .status-text {
      margin-top: 4px;
      padding: 2px 8px;
      background: white;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 600;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
    }

    &.online {
      .icon {
        background: linear-gradient(135deg, #4caf50, #2e7d32);
      }
      .status-text {
        color: #2e7d32;
      }
      .signal-waves {
        position: absolute;
        top: 0;
        left: 0;
        width: 44px;
        height: 44px;
        border-radius: 12px;
        border: 2px solid #4caf50;
        animation: signal-pulse 2s ease-out infinite;
      }
    }

    &.warning {
      .icon {
        background: linear-gradient(135deg, #ff9800, #f57c00);
      }
      .status-text {
        color: #f57c00;
      }
      .blink-indicator {
        position: absolute;
        top: -4px;
        right: -4px;
        width: 12px;
        height: 12px;
        background: #ff9800;
        border-radius: 50%;
        border: 2px solid white;
        animation: blink 1s ease-in-out infinite;
      }
    }

    &.error {
      .icon {
        background: linear-gradient(135deg, #f44336, #c62828);
        animation: shake 0.5s ease-in-out infinite;
      }
      .status-text {
        color: #c62828;
      }
      .pulse-alert {
        position: absolute;
        top: 0;
        left: 0;
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: rgba(244, 67, 54, 0.4);
        animation: pulse-alert 1s ease-out infinite;
      }
    }

    &.offline {
      .icon {
        background: linear-gradient(135deg, #9e9e9e, #616161);
      }
      .status-text {
        color: #616161;
      }
    }
  }

  // Battery status markers
  &.battery {
    .battery-icon {
      width: 40px;
      height: 20px;
      border: 2px solid;
      border-radius: 4px;
      padding: 2px;
      position: relative;
      background: white;

      &::after {
        content: '';
        position: absolute;
        right: -6px;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 10px;
        border-radius: 0 2px 2px 0;
      }

      .level {
        height: 100%;
        border-radius: 2px;
        transition: width 0.3s ease;
      }
    }

    .percent {
      margin-top: 4px;
      font-size: 11px;
      font-weight: bold;
    }

    &.full {
      .battery-icon {
        border-color: #4caf50;
        &::after { background: #4caf50; }
        .level { background: #4caf50; }
      }
      .percent { color: #4caf50; }
    }

    &.medium {
      .battery-icon {
        border-color: #ff9800;
        &::after { background: #ff9800; }
        .level { background: #ff9800; }
      }
      .percent { color: #ff9800; }
    }

    &.low {
      position: relative;
      .battery-icon {
        border-color: #f44336;
        &::after { background: #f44336; }
        .level { background: #f44336; animation: blink 1s infinite; }
      }
      .percent { color: #f44336; }
      .low-pulse {
        position: absolute;
        width: 50px;
        height: 30px;
        border: 2px solid rgba(244, 67, 54, 0.5);
        border-radius: 8px;
        top: -5px;
        left: -5px;
        animation: battery-pulse 1.5s ease-out infinite;
      }
    }
  }

  // Temperature gauge
  &.temperature {
    .thermometer {
      width: 16px;
      height: 40px;
      background: #e0e0e0;
      border-radius: 8px 8px 0 0;
      position: relative;
      overflow: hidden;

      .mercury {
        position: absolute;
        bottom: 0;
        left: 2px;
        right: 2px;
        border-radius: 6px 6px 0 0;
        transition: height 0.5s ease;
      }

      .bulb {
        position: absolute;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
    }

    .temp-value {
      margin-top: 16px;
      font-size: 12px;
      font-weight: bold;
    }

    &.hot {
      .mercury {
        height: 85%;
        background: linear-gradient(to top, #f44336, #ff5722);
      }
      .bulb {
        background: #f44336;
        box-shadow: 0 0 10px rgba(244, 67, 54, 0.6);
      }
      .temp-value {
        color: #f44336;
      }
    }
  }
}

@keyframes signal-pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}

@keyframes pulse-alert {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0; }
}

@keyframes battery-pulse {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.3); opacity: 0; }
}
</style>
