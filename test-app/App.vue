<template>
  <div class="app-container">
    <h1 class="title">MapLibre GL Test</h1>
    <MglMap
      :map-style="mapStyle"
      :center="center"
      :zoom="zoom"
      class="map-container"
      data-testid="map"
    >
      <!-- Regular marker with popup -->
      <MglMarker
        :coordinates="markerCoordinates"
        color="#cc0000"
        data-testid="regular-marker"
      >
        <MglPopup :close-button="true" data-testid="marker-popup">
          <div class="popup-content">
            <h3>Marker Popup</h3>
            <p>This is a popup attached to a marker</p>
          </div>
        </MglPopup>
      </MglMarker>

      <!-- Custom marker -->
      <MglMarker :coordinates="customMarkerCoordinates" data-testid="custom-marker-container">
        <template #marker>
          <div class="custom-marker" data-testid="custom-marker">
            <div class="custom-marker-inner">CM</div>
          </div>
        </template>
      </MglMarker>

      <!-- Standalone popup -->
      <MglPopup
        v-if="showStandalonePopup"
        :coordinates="standalonePopupCoordinates"
        :close-button="false"
        class-name="standalone-popup"
        data-testid="standalone-popup"
      >
        <div class="popup-content">
          <h3>Standalone Popup</h3>
          <p>This popup is not attached to a marker</p>
        </div>
      </MglPopup>

      <!-- Custom control -->
      <MglCustomControl
        v-if="showCustomControl"
        position="top-right"
        data-testid="custom-control"
      >
        <button
          class="custom-control-button"
          data-testid="custom-control-button"
          @click="handleCustomControlClick"
        >
          <span class="button-text">Custom Control</span>
        </button>
      </MglCustomControl>
    </MglMap>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MglMap, MglMarker, MglPopup, MglCustomControl } from '../lib/main';

const mapStyle = ref('https://demotiles.maplibre.org/style.json');
const center = ref([0, 0]);
const zoom = ref(2);

// Marker coordinates
const markerCoordinates = ref([10, 10]);
const customMarkerCoordinates = ref([-10, -10]);
const standalonePopupCoordinates = ref([20, 5]);

// Control visibility
const showStandalonePopup = ref(true);
const showCustomControl = ref(true);

// Event handler for custom control
const handleCustomControlClick = () => {
  console.log('Custom control clicked!');
};
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.title {
  margin: 0;
  padding: 1rem;
  background-color: #2c3e50;
  color: white;
  font-size: 1.5rem;
  text-align: center;
}

.map-container {
  flex: 1;
  width: 100%;
}

/* Custom marker styles */
.custom-marker {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3b82f6;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.custom-marker:hover {
  transform: scale(1.1);
}

.custom-marker-inner {
  color: white;
  font-weight: bold;
  font-size: 14px;
}

/* Popup styles */
.popup-content {
  padding: 0.5rem;
  min-width: 150px;
}

.popup-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: #2c3e50;
}

.popup-content p {
  margin: 0;
  font-size: 0.875rem;
  color: #666;
}

/* Custom control styles */
.custom-control-button {
  background: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  border-radius: 4px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;
}

.custom-control-button:hover {
  background-color: #f3f4f6;
}

.button-text {
  display: block;
}
</style>
