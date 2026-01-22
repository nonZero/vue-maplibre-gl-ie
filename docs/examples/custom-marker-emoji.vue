// Emoji Markers
//
// Fun and expressive markers using emoji characters with bounce animations
<template>
  <mgl-map :map-style="style" :center="center" :zoom="zoom" height="500px">
    <mgl-marker :coordinates="[12.545, 55.670]" anchor="bottom">
      <template #marker>
        <div class="emoji-marker bounce">
          <span class="emoji">🏠</span>
          <span class="shadow"></span>
        </div>
      </template>
    </mgl-marker>

    <mgl-marker :coordinates="[12.555, 55.668]" anchor="bottom">
      <template #marker>
        <div class="emoji-marker bounce delay-1">
          <span class="emoji">🎉</span>
          <span class="shadow"></span>
        </div>
      </template>
    </mgl-marker>

    <mgl-marker :coordinates="[12.560, 55.663]" anchor="bottom">
      <template #marker>
        <div class="emoji-marker bounce delay-2">
          <span class="emoji">🌳</span>
          <span class="shadow"></span>
        </div>
      </template>
    </mgl-marker>

    <mgl-marker :coordinates="[12.540, 55.660]" anchor="bottom">
      <template #marker>
        <div class="emoji-marker bounce delay-3">
          <span class="emoji">🏥</span>
          <span class="shadow"></span>
        </div>
      </template>
    </mgl-marker>

    <mgl-marker :coordinates="[12.552, 55.656]" anchor="bottom">
      <template #marker>
        <div class="emoji-marker bounce delay-4">
          <span class="emoji">🍕</span>
          <span class="shadow"></span>
        </div>
      </template>
    </mgl-marker>

    <mgl-marker :coordinates="[12.565, 55.665]" anchor="bottom">
      <template #marker>
        <div class="emoji-marker wiggle">
          <span class="emoji">🚀</span>
          <span class="shadow"></span>
        </div>
      </template>
    </mgl-marker>

    <mgl-marker :coordinates="[12.548, 55.658]" anchor="bottom">
      <template #marker>
        <div class="emoji-marker spin">
          <span class="emoji">⭐</span>
          <span class="shadow"></span>
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

.emoji-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .emoji {
    font-size: 36px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    transition: transform 0.2s ease;
  }

  .shadow {
    width: 20px;
    height: 6px;
    background: radial-gradient(ellipse, rgba(0, 0, 0, 0.3) 0%, transparent 70%);
    margin-top: -4px;
  }

  &:hover .emoji {
    transform: scale(1.3);
  }

  &.bounce .emoji {
    animation: emoji-bounce 1s ease-in-out infinite;
  }

  &.bounce.delay-1 .emoji {
    animation-delay: 0.1s;
  }

  &.bounce.delay-2 .emoji {
    animation-delay: 0.2s;
  }

  &.bounce.delay-3 .emoji {
    animation-delay: 0.3s;
  }

  &.bounce.delay-4 .emoji {
    animation-delay: 0.4s;
  }

  &.wiggle .emoji {
    animation: emoji-wiggle 0.5s ease-in-out infinite;
  }

  &.spin .emoji {
    animation: emoji-spin 2s linear infinite;
  }
}

@keyframes emoji-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes emoji-wiggle {
  0%, 100% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
}

@keyframes emoji-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
