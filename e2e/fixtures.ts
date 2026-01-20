import { test as base, expect, type Page } from '@playwright/test';

/**
 * Custom fixtures for MapLibre GL tests
 */
export const test = base.extend({
  // Automatically navigate to the app and wait for map to load
  mapPage: async ({ page }, use) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Wait for the map canvas to be visible
    const mapCanvas = page.locator('canvas.maplibregl-canvas');
    await expect(mapCanvas).toBeVisible({ timeout: 10000 });

    // Give the map a moment to stabilize
    await page.waitForTimeout(500);

    await use(page);
  },
});

/**
 * Helper functions for map-related assertions
 */
export const mapHelpers = {
  /**
   * Wait for the map to fully load with tiles
   */
  async waitForMapLoad(page: Page) {
    const mapCanvas = page.locator('canvas.maplibregl-canvas');
    await expect(mapCanvas).toBeVisible({ timeout: 10000 });
    await page.waitForTimeout(1000); // Allow time for tiles to load
  },

  /**
   * Check if the map canvas has rendered content
   */
  async hasCanvasContent(page: Page): Promise<boolean> {
    const mapCanvas = page.locator('canvas.maplibregl-canvas');
    return await mapCanvas.evaluate((canvas: HTMLCanvasElement) => {
      const context = canvas.getContext('2d');
      if (!context) return false;

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        if (data[i] !== 0 || data[i + 1] !== 0 || data[i + 2] !== 0 || data[i + 3] !== 0) {
          return true;
        }
      }
      return false;
    });
  },

  /**
   * Get bounding box of an element
   */
  async getBoundingBox(page: Page, selector: string) {
    const element = page.locator(selector);
    await expect(element).toBeVisible();
    const box = await element.boundingBox();
    expect(box).not.toBeNull();
    return box!;
  },

  /**
   * Check if an element is within the map bounds
   */
  async isElementInMap(page: Page, elementSelector: string) {
    const mapBox = await this.getBoundingBox(page, '.maplibregl-map');
    const elementBox = await this.getBoundingBox(page, elementSelector);

    return (
      elementBox.x >= mapBox.x &&
      elementBox.y >= mapBox.y &&
      elementBox.x + elementBox.width <= mapBox.x + mapBox.width &&
      elementBox.y + elementBox.height <= mapBox.y + mapBox.height
    );
  },
};

export { expect };
