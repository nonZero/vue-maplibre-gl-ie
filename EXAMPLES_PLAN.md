# Component Examples Plan

## 📊 Component Coverage Analysis

### Current State:
- **Total Components:** 35 (1 Map + 1 Marker + 1 Popup + 1 Image + 7 Controls + 7 Sources + 9 Layers + 5 Composables)
- **Existing Examples:** 18
- **Components Missing Dedicated Examples:** ~20

---

## 🎯 Proposed Examples Plan

### Priority 1: Essential Controls (Missing Examples)

1. **`fullscreen-control.vue`** - MglFullscreenControl
   - Show fullscreen toggle button
   - Demonstrate position options (top-right, top-left, etc.)
   - Simple, high-value for users

2. **`geolocate-control.vue`** - MglGeolocateControl
   - User location tracking
   - "Find my location" button
   - Very common use case

3. **`scale-control.vue`** - MglScaleControl
   - Display map scale indicator
   - Show metric/imperial units
   - Essential for professional maps

4. **`attribution-control.vue`** - MglAttributionControl
   - Custom attribution placement
   - Add/modify attribution text
   - Good for understanding control customization

### Priority 2: Layer Components (Critical Gap)

5. **`circle-layer.vue`** - MglCircleLayer
   - Point data visualization with circles
   - Size/color based on properties
   - Common for data visualization (earthquakes, cities, etc.)

6. **`fill-layer.vue`** - MglFillLayer
   - Polygon rendering with fill colors
   - Property-based styling
   - Essential for choropleth maps, regions, zones

7. **`line-layer.vue`** - MglLineLayer
   - Draw lines/paths (routes, boundaries, networks)
   - Line width, color, dashing
   - Critical for route visualization

8. **`symbol-layer.vue`** - MglSymbolLayer
   - Text labels and icons on map
   - Data-driven text placement
   - Essential for POI markers, city labels

9. **`fill-extrusion-layer.vue`** - MglFillExtrusionLayer
   - 3D buildings/bars
   - Height-based extrusion
   - Impressive visual, popular feature

10. **`heatmap-layer.vue`** - MglHeatmapLayer
    - Density visualization (crime data, popularity, etc.)
    - Color gradient configuration
    - Popular for analytics dashboards

11. **`hillshade-layer.vue`** - MglHillshadeLayer
    - Terrain relief shading
    - Complements terrain example
    - Good for outdoor/topographic maps

12. **`background-layer.vue`** - MglBackgroundLayer
    - Custom background colors/patterns
    - Alternative to raster base maps
    - Useful for minimalist styles

13. **`raster-layer.vue`** - MglRasterLayer
    - Overlay raster tiles (satellite, weather, etc.)
    - Opacity/blend modes
    - Common for overlays

### Priority 3: Source Components (Data Management)

14. **`canvas-source.vue`** - MglCanvasSource
    - Dynamic canvas rendering
    - Animation/real-time data
    - Advanced but powerful feature

15. **`image-source.vue`** - MglImageSource
    - Georeferenced image overlay
    - Different from MglImage (which adds icons)
    - Useful for floor plans, historical maps

16. **`raster-source.vue`** - MglRasterSource
    - Load custom raster tiles
    - XYZ tile configuration
    - Complements raster-layer

### Priority 4: Composables (Developer Tools)

17. **`use-source.vue`** - useSource composable
    - Programmatic source manipulation
    - Update GeoJSON data dynamically
    - Important for reactive applications

18. **`use-position-watcher.vue`** - usePositionWatcher composable
    - Track map center/zoom changes
    - Sync multiple maps
    - Useful for advanced interactions

19. **`use-disposable-layer.vue`** - useDisposableLayer composable
    - Temporary layer management
    - Highlight/selection effects
    - Advanced pattern for interactive apps

### Priority 5: Combined/Advanced Examples

20. **`multiple-layers.vue`** - Multiple layer types together
    - Fill + Line + Symbol on same map
    - Layer ordering
    - Real-world styling pattern

21. **`data-driven-styling.vue`** - Expression-based styling
    - Color/size by data properties
    - Showcase MapLibre expressions
    - Common requirement

22. **`clustering.vue`** - Point clustering
    - Cluster markers at low zoom
    - Expand on click
    - Popular feature for many points

23. **`events.vue`** - Map and layer events
    - Click, hover, load events
    - Event handling patterns
    - Essential for interactivity

---

## 📋 Implementation Order Recommendation

### Phase 1: High-Impact Controls (Quick Wins)
- fullscreen-control
- geolocate-control
- scale-control
- attribution-control

### Phase 2: Essential Layers (Core Functionality)
- circle-layer
- fill-layer
- line-layer
- symbol-layer

### Phase 3: Advanced Visualization
- fill-extrusion-layer
- heatmap-layer
- hillshade-layer
- background-layer
- raster-layer

### Phase 4: Sources & Composables
- canvas-source
- image-source
- raster-source
- use-source
- use-position-watcher
- use-disposable-layer

### Phase 5: Advanced Patterns
- multiple-layers
- data-driven-styling
- clustering
- events

---

## 💡 Additional Observations

1. **Layer examples are the biggest gap** - Only 1-2 layers have dedicated examples currently
2. **Controls are fairly well covered** - Just need 4 more control examples
3. **Sources are 50% covered** - Need 3 more examples
4. **Composables need attention** - Only 2/5 have examples
5. **Consider combining related examples** - e.g., "controls-overview" showing all controls together

---

## Summary

**Missing Examples Breakdown:**
- **4 Control components** need examples (Fullscreen, Geolocate, Scale, Attribution)
- **9 Layer components** need examples (all except basic usage in existing examples)
- **3 Source components** need examples (Canvas, Image, Raster)
- **3 Composables** need examples (useSource, usePositionWatcher, useDisposableLayer)
- **4 Advanced pattern examples** recommended (Multiple layers, Data-driven styling, Clustering, Events)

**Total: 23 new examples recommended**
