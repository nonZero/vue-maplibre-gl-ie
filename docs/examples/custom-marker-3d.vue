// 3D Transform Markers
//
// Markers with CSS 3D perspective effects, flips, and depth illusions
<template>
  <mgl-map :map-style="style" :center="center" :zoom="zoom" height="500px">
    <!-- Flip card marker -->
    <mgl-marker :coordinates="[12.545, 55.670]" anchor="center">
      <template #marker>
        <div class="marker-3d flip-card">
          <div class="card-inner">
            <div class="card-front">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              </svg>
            </div>
            <div class="card-back">
              <span>Click!</span>
            </div>
          </div>
        </div>
      </template>
    </mgl-marker>

    <!-- Floating cube marker -->
    <mgl-marker :coordinates="[12.555, 55.668]" anchor="center">
      <template #marker>
        <div class="marker-3d cube">
          <div class="cube-inner">
            <div class="face front">A</div>
            <div class="face back">B</div>
            <div class="face right">C</div>
            <div class="face left">D</div>
            <div class="face top">E</div>
            <div class="face bottom">F</div>
          </div>
        </div>
      </template>
    </mgl-marker>

    <!-- Layered stack marker -->
    <mgl-marker :coordinates="[12.560, 55.663]" anchor="center">
      <template #marker>
        <div class="marker-3d stack">
          <div class="layer layer-1"></div>
          <div class="layer layer-2"></div>
          <div class="layer layer-3"></div>
          <div class="icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
        </div>
      </template>
    </mgl-marker>

    <!-- Bounce depth marker -->
    <mgl-marker :coordinates="[12.540, 55.660]" anchor="center">
      <template #marker>
        <div class="marker-3d bounce-depth">
          <div class="ball">
            <div class="shine"></div>
          </div>
          <div class="shadow"></div>
        </div>
      </template>
    </mgl-marker>

    <!-- Rotating badge marker -->
    <mgl-marker :coordinates="[12.552, 55.656]" anchor="center">
      <template #marker>
        <div class="marker-3d rotating-badge">
          <div class="badge-inner">
            <span class="text">NEW</span>
          </div>
        </div>
      </template>
    </mgl-marker>

    <!-- Perspective tilt marker -->
    <mgl-marker :coordinates="[12.565, 55.665]" anchor="center">
      <template #marker>
        <div class="marker-3d tilt-card">
          <div class="card">
            <div class="content">
              <span class="price">$99</span>
              <span class="label">Best Deal</span>
            </div>
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

.marker-3d {
  cursor: pointer;
  perspective: 500px;

  // Flip card
  &.flip-card {
    width: 50px;
    height: 50px;

    .card-inner {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.6s;
    }

    &:hover .card-inner {
      transform: rotateY(180deg);
    }

    .card-front, .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .card-front {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;

      svg {
        width: 28px;
        height: 28px;
      }
    }

    .card-back {
      background: linear-gradient(135deg, #f093fb, #f5576c);
      transform: rotateY(180deg);
      color: white;
      font-weight: bold;
      font-size: 12px;
    }
  }

  // Cube
  &.cube {
    width: 40px;
    height: 40px;

    .cube-inner {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      animation: cube-rotate 8s linear infinite;
    }

    .face {
      position: absolute;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 14px;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .front  { background: rgba(255, 87, 34, 0.9); transform: translateZ(20px); }
    .back   { background: rgba(255, 87, 34, 0.9); transform: rotateY(180deg) translateZ(20px); }
    .right  { background: rgba(233, 30, 99, 0.9); transform: rotateY(90deg) translateZ(20px); }
    .left   { background: rgba(233, 30, 99, 0.9); transform: rotateY(-90deg) translateZ(20px); }
    .top    { background: rgba(156, 39, 176, 0.9); transform: rotateX(90deg) translateZ(20px); }
    .bottom { background: rgba(156, 39, 176, 0.9); transform: rotateX(-90deg) translateZ(20px); }
  }

  // Layered stack
  &.stack {
    width: 50px;
    height: 50px;
    transform-style: preserve-3d;
    transform: rotateX(60deg) rotateZ(-30deg);
    transition: transform 0.3s ease;

    &:hover {
      transform: rotateX(60deg) rotateZ(-30deg) translateY(-10px);
    }

    .layer {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      left: 5px;
    }

    .layer-1 {
      background: linear-gradient(135deg, #4caf50, #2e7d32);
      transform: translateZ(0px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .layer-2 {
      background: linear-gradient(135deg, #8bc34a, #558b2f);
      transform: translateZ(8px);
    }

    .layer-3 {
      background: linear-gradient(135deg, #cddc39, #9e9d24);
      transform: translateZ(16px);
    }

    .icon {
      position: absolute;
      transform: translateZ(24px) rotateZ(30deg) rotateX(-60deg);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 5px;
      color: #2e7d32;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  // Bounce depth
  &.bounce-depth {
    width: 50px;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    .ball {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, #ff9800, #e65100);
      box-shadow: inset -5px -5px 15px rgba(0, 0, 0, 0.3);
      animation: bounce-3d 1s ease-in-out infinite;
      position: relative;

      .shine {
        position: absolute;
        width: 12px;
        height: 12px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        top: 8px;
        left: 10px;
      }
    }

    .shadow {
      width: 30px;
      height: 10px;
      background: radial-gradient(ellipse, rgba(0, 0, 0, 0.4), transparent);
      border-radius: 50%;
      animation: shadow-scale 1s ease-in-out infinite;
    }
  }

  // Rotating badge
  &.rotating-badge {
    width: 60px;
    height: 30px;

    .badge-inner {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #f44336, #c62828);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: badge-swing 3s ease-in-out infinite;
      transform-origin: top center;
      box-shadow: 0 4px 10px rgba(244, 67, 54, 0.4);

      .text {
        color: white;
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }
  }

  // Tilt card
  &.tilt-card {
    width: 70px;
    height: 50px;

    .card {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #2196f3, #1565c0);
      border-radius: 8px;
      transition: transform 0.3s ease;
      box-shadow: 0 10px 30px rgba(33, 150, 243, 0.3);
      transform: rotateX(10deg) rotateY(-10deg);

      .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;

        .price {
          font-size: 18px;
          font-weight: bold;
        }

        .label {
          font-size: 10px;
          opacity: 0.9;
        }
      }
    }

    &:hover .card {
      transform: rotateX(0) rotateY(0) scale(1.1);
    }
  }
}

@keyframes cube-rotate {
  0% { transform: rotateX(0) rotateY(0); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

@keyframes bounce-3d {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes shadow-scale {
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(0.6); opacity: 0.2; }
}

@keyframes badge-swing {
  0%, 100% { transform: rotateY(-20deg); }
  50% { transform: rotateY(20deg); }
}
</style>
