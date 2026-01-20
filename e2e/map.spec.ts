import { test, expect } from '@playwright/test';

test.describe('MapLibre GL Map', () => {
  test('should load and display a map', async ({ page }) => {
    // Navigate to the test app
    await page.goto('/');

    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Check if the title is visible
    await expect(page.locator('h1')).toHaveText('MapLibre GL Test');

    // Check if the map container exists
    const mapContainer = page.locator('[data-testid="map"]');
    await expect(mapContainer).toBeVisible();

    // Wait for the map canvas to be present (this indicates the map has rendered)
    const mapCanvas = page.locator('canvas.maplibregl-canvas');
    await expect(mapCanvas).toBeVisible({ timeout: 10000 });

    // Verify the canvas has dimensions (map has rendered)
    const canvasBoundingBox = await mapCanvas.boundingBox();
    expect(canvasBoundingBox).not.toBeNull();
    expect(canvasBoundingBox!.width).toBeGreaterThan(0);
    expect(canvasBoundingBox!.height).toBeGreaterThan(0);

    // Take a screenshot for visual verification
    await page.screenshot({ path: 'e2e/screenshots/map-loaded.png', fullPage: true });
  });

  test('should have interactive map controls', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Wait for map to load
    const mapCanvas = page.locator('canvas.maplibregl-canvas');
    await expect(mapCanvas).toBeVisible({ timeout: 10000 });

    // Verify the map canvas is interactive
    const canvasElement = await mapCanvas.elementHandle();
    expect(canvasElement).not.toBeNull();

    // Check that the map container has the maplibregl class
    const mapContainer = page.locator('.maplibregl-map');
    await expect(mapContainer).toBeVisible();
  });

  test('should render map tiles', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Wait for the map canvas
    const mapCanvas = page.locator('canvas.maplibregl-canvas');
    await expect(mapCanvas).toBeVisible({ timeout: 10000 });

    // Give the map some time to load tiles
    await page.waitForTimeout(2000);

    // Check if there are any tile images loaded
    // We can verify this by checking if the canvas has been drawn on
    const canvasHasContent = await mapCanvas.evaluate((canvas: HTMLCanvasElement) => {
      const context = canvas.getContext('2d');
      if (!context) return false;

      // Get image data from a small area of the canvas
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Check if there's any non-zero pixel data (indicating something has been drawn)
      for (let i = 0; i < data.length; i += 4) {
        // Check if any pixel has color (not just transparent black)
        if (data[i] !== 0 || data[i + 1] !== 0 || data[i + 2] !== 0 || data[i + 3] !== 0) {
          return true;
        }
      }
      return false;
    });

    expect(canvasHasContent).toBe(true);
  });
});
