// Avatar Markers
//
// User avatar markers perfect for social apps showing friend locations
<template>
  <mgl-map :map-style="style" :center="center" :zoom="zoom" height="500px">
    <!-- Avatar with image -->
    <mgl-marker :coordinates="[12.545, 55.670]" anchor="center">
      <template #marker>
        <div class="avatar-marker online">
          <img src="https://i.pravatar.cc/100?img=1" alt="User 1" />
          <span class="status-dot"></span>
        </div>
      </template>
    </mgl-marker>

    <!-- Avatar with initials -->
    <mgl-marker :coordinates="[12.555, 55.668]" anchor="center">
      <template #marker>
        <div class="avatar-marker offline initials gradient-1">
          <span>JD</span>
          <span class="status-dot"></span>
        </div>
      </template>
    </mgl-marker>

    <!-- Avatar with image -->
    <mgl-marker :coordinates="[12.560, 55.663]" anchor="center">
      <template #marker>
        <div class="avatar-marker busy">
          <img src="https://i.pravatar.cc/100?img=5" alt="User 2" />
          <span class="status-dot"></span>
        </div>
      </template>
    </mgl-marker>

    <!-- Avatar with initials -->
    <mgl-marker :coordinates="[12.540, 55.660]" anchor="center">
      <template #marker>
        <div class="avatar-marker away initials gradient-2">
          <span>MK</span>
          <span class="status-dot"></span>
        </div>
      </template>
    </mgl-marker>

    <!-- Group avatar marker -->
    <mgl-marker :coordinates="[12.552, 55.656]" anchor="center">
      <template #marker>
        <div class="group-avatar-marker">
          <div class="avatar small">
            <img src="https://i.pravatar.cc/100?img=8" alt="User 3" />
          </div>
          <div class="avatar small overlap">
            <img src="https://i.pravatar.cc/100?img=9" alt="User 4" />
          </div>
          <div class="avatar small overlap count">
            <span>+3</span>
          </div>
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

.avatar-marker {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.initials {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 16px;
  }

  &.gradient-1 {
    background: linear-gradient(135deg, #667eea, #764ba2);
  }

  &.gradient-2 {
    background: linear-gradient(135deg, #f093fb, #f5576c);
  }

  .status-dot {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid white;
  }

  &.online .status-dot {
    background: #4caf50;
  }

  &.offline .status-dot {
    background: #9e9e9e;
  }

  &.busy .status-dot {
    background: #f44336;
  }

  &.away .status-dot {
    background: #ff9800;
  }
}

.group-avatar-marker {
  display: flex;
  cursor: pointer;

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid white;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

    &.overlap {
      margin-left: -12px;
    }

    &.count {
      background: linear-gradient(135deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 11px;
      font-weight: bold;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover .avatar {
    transform: translateY(-3px);
    transition: transform 0.2s ease;
  }
}
</style>
