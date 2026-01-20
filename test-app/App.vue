<template>
  <div class="app-container">
    <h1 class="title">MapLibre GL Test</h1>
    <MglMap
      :map-style="mapStyle"
      :center="center"
      :zoom="zoom"
      class="map-container"
      data-testid="map"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MglMap } from '../lib/main';

const mapStyle = ref('https://demotiles.maplibre.org/style.json');
const center = ref([0, 0]);
const zoom = ref(1);
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
</style>
