import { test, expect, mapHelpers } from './fixtures';

test.describe('MglPopup', () => {
  test('should render a standalone popup on the map', async ({ mapPage }) => {
    // Check if standalone popup exists
    const standalonePopup = mapPage.locator('.maplibregl-popup.standalone-popup');
    await expect(standalonePopup).toBeVisible({ timeout: 5000 });

    // Verify popup content is visible
    const popupContent = standalonePopup.locator('.popup-content');
    await expect(popupContent).toBeVisible();

    // Check for heading
    const heading = popupContent.locator('h3');
    await expect(heading).toHaveText('Standalone Popup');

    // Take a screenshot
    await mapPage.screenshot({
      path: 'e2e/screenshots/popup-standalone.png',
      fullPage: true,
    });
  });

  test('should render popup attached to marker', async ({ mapPage }) => {
    // Find the marker
    const marker = mapPage.locator('.maplibregl-marker').first();
    await expect(marker).toBeVisible();

    // Click the marker to show the popup
    await marker.click();

    // Wait for popup to appear
    const markerPopup = mapPage.locator('.maplibregl-popup').first();
    await expect(markerPopup).toBeVisible({ timeout: 3000 });

    // Verify popup content
    const popupContent = markerPopup.locator('.popup-content');
    await expect(popupContent).toBeVisible();

    const heading = popupContent.locator('h3');
    await expect(heading).toHaveText('Marker Popup');

    // Take a screenshot
    await mapPage.screenshot({
      path: 'e2e/screenshots/popup-marker.png',
      fullPage: true,
    });
  });

  test('should display popup with close button', async ({ mapPage }) => {
    // Click marker to open popup
    const marker = mapPage.locator('.maplibregl-marker').first();
    await marker.click();

    const popup = mapPage.locator('.maplibregl-popup').first();
    await expect(popup).toBeVisible({ timeout: 3000 });

    // Check for close button
    const closeButton = popup.locator('.maplibregl-popup-close-button');
    await expect(closeButton).toBeVisible();

    // Click close button
    await closeButton.click();

    // Popup should be removed from DOM or hidden
    await expect(popup).not.toBeVisible({ timeout: 2000 });
  });

  test('should have correct popup DOM structure', async ({ mapPage }) => {
    const popup = mapPage.locator('.maplibregl-popup.standalone-popup');
    await expect(popup).toBeVisible();

    // Check for MapLibre GL popup classes
    const hasPopupClass = await popup.evaluate((el) =>
      el.classList.contains('maplibregl-popup')
    );
    expect(hasPopupClass).toBe(true);

    // Check for popup content container
    const popupContent = popup.locator('.maplibregl-popup-content');
    await expect(popupContent).toBeVisible();

    // Check for popup tip (the pointer)
    const popupTip = popup.locator('.maplibregl-popup-tip');
    await expect(popupTip).toBeVisible();
  });

  test('should count all popups on the map', async ({ mapPage }) => {
    // Initially we should see the standalone popup
    const popups = mapPage.locator('.maplibregl-popup');
    const initialCount = await popups.count();
    expect(initialCount).toBeGreaterThanOrEqual(1);

    // Click marker to show its popup
    const marker = mapPage.locator('.maplibregl-marker').first();
    await marker.click();
    await mapPage.waitForTimeout(500);

    // Now we should have 2 popups
    const finalCount = await popups.count();
    expect(finalCount).toBe(2);
  });

  test('should position popup within map bounds', async ({ mapPage }) => {
    const popup = mapPage.locator('.maplibregl-popup.standalone-popup');
    await expect(popup).toBeVisible();

    // Get popup position
    const popupBox = await popup.boundingBox();
    expect(popupBox).not.toBeNull();

    // Get map position
    const mapBox = await mapHelpers.getBoundingBox(mapPage, '.maplibregl-map');

    // Check if popup is at least partially within map bounds
    const isInBounds =
      popupBox!.x < mapBox.x + mapBox.width &&
      popupBox!.x + popupBox!.width > mapBox.x &&
      popupBox!.y < mapBox.y + mapBox.height &&
      popupBox!.y + popupBox!.height > mapBox.y;

    expect(isInBounds).toBe(true);
  });

  test('should render custom HTML content in popup', async ({ mapPage }) => {
    const popup = mapPage.locator('.maplibregl-popup.standalone-popup');
    await expect(popup).toBeVisible();

    // Check for custom content structure
    const customContent = popup.locator('.popup-content');
    await expect(customContent).toBeVisible();

    // Verify heading
    const heading = customContent.locator('h3');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Standalone Popup');

    // Verify paragraph
    const paragraph = customContent.locator('p');
    await expect(paragraph).toBeVisible();
    await expect(paragraph).toContainText('not attached to a marker');
  });
});
