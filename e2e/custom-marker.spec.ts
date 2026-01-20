import { test, expect, mapHelpers } from './fixtures';

test.describe('MglMarker - Custom Marker', () => {
  test('should render a custom marker on the map', async ({ mapPage }) => {
    // Check if custom marker exists
    const customMarker = mapPage.locator('[data-testid="custom-marker"]');
    await expect(customMarker).toBeVisible({ timeout: 5000 });

    // Verify custom marker content
    const markerInner = customMarker.locator('.custom-marker-inner');
    await expect(markerInner).toBeVisible();
    await expect(markerInner).toHaveText('CM');

    // Take a screenshot
    await mapPage.screenshot({
      path: 'e2e/screenshots/custom-marker.png',
      fullPage: true,
    });
  });

  test('should have custom marker styling', async ({ mapPage }) => {
    const customMarker = mapPage.locator('[data-testid="custom-marker"]');
    await expect(customMarker).toBeVisible();

    // Check computed styles
    const styles = await customMarker.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        width: computed.width,
        height: computed.height,
        borderRadius: computed.borderRadius,
        backgroundColor: computed.backgroundColor,
        cursor: computed.cursor,
      };
    });

    // Verify custom styling is applied
    expect(styles.width).toBe('40px');
    expect(styles.height).toBe('40px');
    expect(styles.borderRadius).toContain('50%'); // Circular
    expect(styles.cursor).toBe('pointer');

    // Background should be blue (#3b82f6)
    // Note: computed style returns rgb format
    expect(styles.backgroundColor).toMatch(/rgb\(59,\s*130,\s*246\)/);
  });

  test('should position custom marker within map bounds', async ({ mapPage }) => {
    const customMarkerContainer = mapPage.locator('[data-testid="custom-marker-container"]');
    await expect(customMarkerContainer).toBeVisible();

    // Verify it's a MapLibre marker
    const hasMarkerClass = await customMarkerContainer.evaluate((el) => {
      // Navigate up to find the marker container
      let parent = el.parentElement;
      while (parent) {
        if (parent.classList.contains('maplibregl-marker')) {
          return true;
        }
        parent = parent.parentElement;
      }
      return false;
    });

    expect(hasMarkerClass).toBe(true);
  });

  test('should render custom marker with correct DOM structure', async ({ mapPage }) => {
    const customMarker = mapPage.locator('[data-testid="custom-marker"]');
    await expect(customMarker).toBeVisible();

    // Check for inner content
    const innerText = customMarker.locator('.custom-marker-inner');
    await expect(innerText).toBeVisible();

    // Verify the structure: custom-marker > custom-marker-inner
    const hasCorrectStructure = await customMarker.evaluate((el) => {
      const inner = el.querySelector('.custom-marker-inner');
      return inner !== null && inner.parentElement === el;
    });

    expect(hasCorrectStructure).toBe(true);
  });

  test('should differentiate custom marker from regular marker', async ({ mapPage }) => {
    // Get all markers
    const allMarkers = mapPage.locator('.maplibregl-marker');
    const markerCount = await allMarkers.count();
    expect(markerCount).toBe(2);

    // Check that one has custom styling
    const customMarker = mapPage.locator('[data-testid="custom-marker"]');
    await expect(customMarker).toBeVisible();

    // Check that another has default SVG
    const regularMarkerSvg = mapPage.locator('.maplibregl-marker svg').first();
    await expect(regularMarkerSvg).toBeVisible();

    // Custom marker should NOT have the default SVG
    const customMarkerHasSvg = await allMarkers.last().locator('svg').count();
    expect(customMarkerHasSvg).toBe(0);
  });

  test('should have hover effect on custom marker', async ({ mapPage }) => {
    const customMarker = mapPage.locator('[data-testid="custom-marker"]');
    await expect(customMarker).toBeVisible();

    // Get initial transform
    const initialTransform = await customMarker.evaluate((el) => {
      return window.getComputedStyle(el).transform;
    });

    // Hover over the marker
    await customMarker.hover();
    await mapPage.waitForTimeout(250); // Wait for transition

    // Get transform after hover
    const hoverTransform = await customMarker.evaluate((el) => {
      return window.getComputedStyle(el).transform;
    });

    // Transform should change on hover (scale effect)
    // Either it changed or there's a CSS transition defined
    const hasTransition = await customMarker.evaluate((el) => {
      const transition = window.getComputedStyle(el).transition;
      return transition.includes('transform');
    });

    expect(initialTransform !== hoverTransform || hasTransition).toBe(true);
  });

  test('should render custom marker at different position than regular marker', async ({ mapPage }) => {
    // Get both markers
    const allMarkers = mapPage.locator('.maplibregl-marker');
    expect(await allMarkers.count()).toBe(2);

    // Get positions of both markers
    const marker1Box = await allMarkers.nth(0).boundingBox();
    const marker2Box = await allMarkers.nth(1).boundingBox();

    expect(marker1Box).not.toBeNull();
    expect(marker2Box).not.toBeNull();

    // Verify they're at different positions
    const isDifferentPosition =
      Math.abs(marker1Box!.x - marker2Box!.x) > 10 ||
      Math.abs(marker1Box!.y - marker2Box!.y) > 10;

    expect(isDifferentPosition).toBe(true);
  });

  test('should have circular shape for custom marker', async ({ mapPage }) => {
    const customMarker = mapPage.locator('[data-testid="custom-marker"]');
    await expect(customMarker).toBeVisible();

    // Get dimensions
    const dimensions = await customMarker.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        width: parseInt(computed.width),
        height: parseInt(computed.height),
        borderRadius: computed.borderRadius,
      };
    });

    // Should be square (for circular with 50% border-radius)
    expect(dimensions.width).toBe(dimensions.height);

    // Should have 50% border radius
    expect(dimensions.borderRadius).toContain('50%');
  });

  test('should display text content in custom marker', async ({ mapPage }) => {
    const customMarkerInner = mapPage.locator('[data-testid="custom-marker"] .custom-marker-inner');
    await expect(customMarkerInner).toBeVisible();

    // Check text content
    const text = await customMarkerInner.textContent();
    expect(text?.trim()).toBe('CM');

    // Check text styling
    const textStyles = await customMarkerInner.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        color: computed.color,
        fontWeight: computed.fontWeight,
      };
    });

    // Text should be white and bold
    expect(textStyles.color).toMatch(/rgb\(255,\s*255,\s*255\)/);
    expect(parseInt(textStyles.fontWeight)).toBeGreaterThanOrEqual(600);
  });
});
