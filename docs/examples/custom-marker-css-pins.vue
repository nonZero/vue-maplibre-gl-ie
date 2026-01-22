// CSS-Only Pin Markers
//
// Beautiful map pins created entirely with CSS - no images needed
<template>
  <mgl-map :map-style="style" :center="center" :zoom="zoom" height="500px">
    <!-- Classic pin -->
    <mgl-marker :coordinates="[12.545, 55.670]" anchor="bottom">
      <template #marker>
        <div class="css-pin classic">
          <div class="head"></div>
          <div class="tail"></div>
        </div>
      </template>
    </mgl-marker>

    <!-- Flat pin -->
    <mgl-marker :coordinates="[12.555, 55.668]" anchor="bottom">
      <template #marker>
        <div class="css-pin flat blue">
          <div class="head">
            <span class="icon">★</span>
          </div>
          <div class="pointer"></div>
        </div>
      </template>
    </mgl-marker>

    <!-- Bubble pin -->
    <mgl-marker :coordinates="[12.560, 55.663]" anchor="bottom">
      <template #marker>
        <div class="css-pin bubble green">
          <div class="content">Hi!</div>
        </div>
      </template>
    </mgl-marker>

    <!-- Flag pin -->
    <mgl-marker :coordinates="[12.540, 55.660]" anchor="bottom">
      <template #marker>
        <div class="css-pin flag orange">
          <div class="pole"></div>
          <div class="banner">NEW</div>
        </div>
      </template>
    </mgl-marker>

    <!-- Diamond pin -->
    <mgl-marker :coordinates="[12.552, 55.656]" anchor="center">
      <template #marker>
        <div class="css-pin diamond purple">
          <div class="shape"></div>
        </div>
      </template>
    </mgl-marker>

    <!-- Heart pin -->
    <mgl-marker :coordinates="[12.565, 55.665]" anchor="bottom">
      <template #marker>
        <div class="css-pin heart">
          <div class="shape"></div>
          <div class="stem"></div>
        </div>
      </template>
    </mgl-marker>

    <!-- Teardrop pin -->
    <mgl-marker :coordinates="[12.548, 55.673]" anchor="bottom">
      <template #marker>
        <div class="css-pin teardrop teal">
          <div class="drop">
            <span class="dot"></span>
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

.css-pin {
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.15) translateY(-3px);
  }

  // Classic pin style
  &.classic {
    .head {
      width: 30px;
      height: 30px;
      background: linear-gradient(135deg, #e53935, #b71c1c);
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        content: '';
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        transform: rotate(45deg);
      }
    }

    .tail {
      width: 4px;
      height: 12px;
      background: linear-gradient(to bottom, #b71c1c, #7f0000);
      margin: -2px auto 0;
      border-radius: 0 0 2px 2px;
    }
  }

  // Flat pin style
  &.flat {
    display: flex;
    flex-direction: column;
    align-items: center;

    .head {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);

      .icon {
        color: white;
        font-size: 20px;
      }
    }

    .pointer {
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      margin-top: -2px;
    }

    &.blue {
      .head {
        background: linear-gradient(135deg, #2196f3, #1565c0);
      }
      .pointer {
        border-top: 12px solid #1565c0;
      }
    }
  }

  // Bubble pin style
  &.bubble {
    .content {
      padding: 8px 16px;
      border-radius: 20px;
      color: white;
      font-weight: bold;
      font-size: 14px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
      }
    }

    &.green .content {
      background: linear-gradient(135deg, #4caf50, #2e7d32);
      &::after {
        border-top: 10px solid #2e7d32;
      }
    }
  }

  // Flag pin style
  &.flag {
    display: flex;

    .pole {
      width: 3px;
      height: 50px;
      background: linear-gradient(to bottom, #5d4037, #3e2723);
      border-radius: 2px;
    }

    .banner {
      padding: 4px 10px;
      color: white;
      font-size: 11px;
      font-weight: bold;
      margin-top: 4px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      clip-path: polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%);
    }

    &.orange .banner {
      background: linear-gradient(135deg, #ff9800, #f57c00);
    }
  }

  // Diamond pin style
  &.diamond {
    .shape {
      width: 28px;
      height: 28px;
      transform: rotate(45deg);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    }

    &.purple .shape {
      background: linear-gradient(135deg, #9c27b0, #6a1b9a);
    }
  }

  // Heart pin style
  &.heart {
    display: flex;
    flex-direction: column;
    align-items: center;

    .shape {
      width: 30px;
      height: 27px;
      background: linear-gradient(135deg, #e91e63, #c2185b);
      position: relative;
      transform: rotate(-45deg);
      box-shadow: 0 3px 10px rgba(233, 30, 99, 0.4);

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 27px;
        background: inherit;
        border-radius: 50%;
      }

      &::before {
        top: -13px;
        left: 0;
      }

      &::after {
        top: 0;
        left: 13px;
      }
    }

    .stem {
      width: 3px;
      height: 15px;
      background: linear-gradient(to bottom, #c2185b, #880e4f);
      margin-top: 8px;
      border-radius: 2px;
    }
  }

  // Teardrop pin style
  &.teardrop {
    .drop {
      width: 32px;
      height: 44px;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 8px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);

      .dot {
        width: 12px;
        height: 12px;
        background: white;
        border-radius: 50%;
      }
    }

    &.teal .drop {
      background: linear-gradient(135deg, #009688, #00695c);
    }
  }
}
</style>
