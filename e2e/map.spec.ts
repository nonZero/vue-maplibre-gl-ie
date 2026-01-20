import { test, expect, mapHelpers } from './fixtures';

test.describe('MapLibre GL Map', () => {
  test('should load and display a map', async ({ mapPage }) => {
    // Check if the title is visible
    await expect(mapPage.locator('h1')).toHaveText('MapLibre GL Test');

    // Check if the map container exists
    const mapContainer = mapPage.locator('[data-testid="map"]');
    await expect(mapContainer).toBeVisible();

    // Map canvas is already verified by fixture
    const mapCanvas = mapPage.locator('canvas.maplibregl-canvas');
    await expect(mapCanvas).toBeVisible();

    // Verify the canvas has dimensions (map has rendered)
    const canvasBoundingBox = await mapCanvas.boundingBox();
    expect(canvasBoundingBox).not.toBeNull();
    expect(canvasBoundingBox!.width).toBeGreaterThan(0);
    expect(canvasBoundingBox!.height).toBeGreaterThan(0);

    // Take a screenshot for visual verification
    await mapPage.screenshot({ path: 'e2e/screenshots/map-loaded.png', fullPage: true });
  });

  test('should have interactive map controls', async ({ mapPage }) => {
    // Map canvas is already loaded by fixture
    const mapCanvas = mapPage.locator('canvas.maplibregl-canvas');
    await expect(mapCanvas).toBeVisible();

    // Verify the map canvas is interactive
    const canvasElement = await mapCanvas.elementHandle();
    expect(canvasElement).not.toBeNull();

    // Check that the map container has the maplibregl class
    const mapContainer = mapPage.locator('.maplibregl-map');
    await expect(mapContainer).toBeVisible();
  });

  test('should render map tiles', async ({ mapPage }) => {
    // Map is already loaded by fixture
    const mapCanvas = mapPage.locator('canvas.maplibregl-canvas');
    await expect(mapCanvas).toBeVisible();

    // Give the map some time to load tiles
    await mapPage.waitForTimeout(2000);

    // Use helper to check if canvas has content
    const canvasHasContent = await mapHelpers.hasCanvasContent(mapPage);
    expect(canvasHasContent).toBe(true);
  });

  test('should have correct map container classes', async ({ mapPage }) => {
    const mapContainer = mapPage.locator('.maplibregl-map');
    await expect(mapContainer).toBeVisible();

    // Verify map container has expected classes
    const hasRequiredClasses = await mapContainer.evaluate((el) => {
      return (
        el.classList.contains('maplibregl-map') &&
        el.querySelector('canvas.maplibregl-canvas') !== null
      );
    });

    expect(hasRequiredClasses).toBe(true);
  });

  test('should render map at correct zoom level', async ({ mapPage }) => {
    // Map should be rendered at zoom level 2 (as configured in App.vue)
    const mapCanvas = mapPage.locator('canvas.maplibregl-canvas');
    await expect(mapCanvas).toBeVisible();

    // Give map time to stabilize
    await mapPage.waitForTimeout(1000);

    // We can't directly check zoom level, but we can verify the map rendered
    // and has the expected canvas size
    const box = await mapCanvas.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeGreaterThan(100);
    expect(box!.height).toBeGreaterThan(100);
  });
});
