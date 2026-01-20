import { test, expect, mapHelpers } from './fixtures';

test.describe('MglMarker', () => {
  test('should render a regular marker on the map', async ({ mapPage }) => {
    // Check if marker container exists
    const markerElement = mapPage.locator('.maplibregl-marker');
    await expect(markerElement).toBeVisible({ timeout: 5000 });

    // Verify marker is positioned on the map
    const markerBox = await markerElement.boundingBox();
    expect(markerBox).not.toBeNull();
    expect(markerBox!.width).toBeGreaterThan(0);
    expect(markerBox!.height).toBeGreaterThan(0);

    // Take a screenshot
    await mapPage.screenshot({
      path: 'e2e/screenshots/marker-regular.png',
      fullPage: true,
    });
  });

  test('should display marker with custom color', async ({ mapPage }) => {
    const markerElement = mapPage.locator('.maplibregl-marker');
    await expect(markerElement).toBeVisible();

    // Check if the marker has color styling (SVG with fill)
    const markerSvg = markerElement.locator('svg');
    await expect(markerSvg).toBeVisible();

    // Verify the SVG has a fill attribute or style
    const hasFill = await markerSvg.evaluate((svg) => {
      const fill = svg.getAttribute('fill') ||
                   window.getComputedStyle(svg).fill ||
                   svg.querySelector('[fill]')?.getAttribute('fill');
      return fill !== null && fill !== 'none';
    });

    expect(hasFill).toBe(true);
  });

  test('should render marker within map bounds', async ({ mapPage }) => {
    const markerElement = mapPage.locator('.maplibregl-marker').first();
    await expect(markerElement).toBeVisible();

    // Check if marker is within the map container
    const isInMap = await mapHelpers.isElementInMap(
      mapPage,
      '.maplibregl-marker'
    );
    expect(isInMap).toBe(true);
  });

  test('should have correct marker DOM structure', async ({ mapPage }) => {
    const markerElement = mapPage.locator('.maplibregl-marker').first();
    await expect(markerElement).toBeVisible();

    // Check for MapLibre GL marker classes
    const hasMarkerClass = await markerElement.evaluate((el) =>
      el.classList.contains('maplibregl-marker')
    );
    expect(hasMarkerClass).toBe(true);

    // Check for anchor element (the actual marker SVG)
    const markerContent = markerElement.locator('svg, .custom-marker');
    await expect(markerContent.first()).toBeVisible();
  });

  test('should count all markers on the map', async ({ mapPage }) => {
    const markers = mapPage.locator('.maplibregl-marker');
    const markerCount = await markers.count();

    // We should have 2 markers (1 regular + 1 custom)
    expect(markerCount).toBe(2);
  });
});
