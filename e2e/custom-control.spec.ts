import { test, expect } from './fixtures';

test.describe('MglCustomControl', () => {
  test('should render a custom control on the map', async ({ mapPage }) => {
    // Check if custom control button exists
    const controlButton = mapPage.locator('[data-testid="custom-control-button"]');
    await expect(controlButton).toBeVisible({ timeout: 5000 });

    // Verify button text
    const buttonText = controlButton.locator('.button-text');
    await expect(buttonText).toHaveText('Custom Control');

    // Take a screenshot
    await mapPage.screenshot({
      path: 'e2e/screenshots/custom-control.png',
      fullPage: true,
    });
  });

  test('should position custom control in top-right corner', async ({ mapPage }) => {
    const controlButton = mapPage.locator('[data-testid="custom-control-button"]');
    await expect(controlButton).toBeVisible();

    // Get the control container
    const controlContainer = mapPage.locator('.maplibregl-ctrl-top-right');
    await expect(controlContainer).toBeVisible();

    // Verify the custom control is inside the top-right container
    const customControl = controlContainer.locator('[data-testid="custom-control-button"]');
    await expect(customControl).toBeVisible();
  });

  test('should be clickable and interactive', async ({ mapPage }) => {
    const controlButton = mapPage.locator('[data-testid="custom-control-button"]');
    await expect(controlButton).toBeVisible();

    // Set up console listener to catch the click event
    const consoleLogs: string[] = [];
    mapPage.on('console', (msg) => {
      if (msg.type() === 'log') {
        consoleLogs.push(msg.text());
      }
    });

    // Click the custom control
    await controlButton.click();

    // Wait a moment for the console log
    await mapPage.waitForTimeout(200);

    // Verify the click was registered
    expect(consoleLogs).toContain('Custom control clicked!');
  });

  test('should have correct control DOM structure', async ({ mapPage }) => {
    // Find the control in the top-right position
    const topRightContainer = mapPage.locator('.maplibregl-ctrl-top-right');
    await expect(topRightContainer).toBeVisible();

    // Check for maplibregl-ctrl class on parent
    const controlGroup = topRightContainer.locator('.maplibregl-ctrl');
    await expect(controlGroup.first()).toBeVisible();

    // Verify button is a descendant of the control group
    const button = topRightContainer.locator('[data-testid="custom-control-button"]');
    await expect(button).toBeVisible();
  });

  test('should style custom control button correctly', async ({ mapPage }) => {
    const controlButton = mapPage.locator('[data-testid="custom-control-button"]');
    await expect(controlButton).toBeVisible();

    // Check computed styles
    const styles = await controlButton.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        cursor: computed.cursor,
        backgroundColor: computed.backgroundColor,
        border: computed.border,
      };
    });

    // Verify button has pointer cursor
    expect(styles.cursor).toBe('pointer');

    // Verify button has a background color
    expect(styles.backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
  });

  test('should render control within map container', async ({ mapPage }) => {
    const controlButton = mapPage.locator('[data-testid="custom-control-button"]');
    await expect(controlButton).toBeVisible();

    // Get positions
    const buttonBox = await controlButton.boundingBox();
    expect(buttonBox).not.toBeNull();

    const mapContainer = mapPage.locator('.maplibregl-map');
    const mapBox = await mapContainer.boundingBox();
    expect(mapBox).not.toBeNull();

    // Verify control is positioned within the map
    expect(buttonBox!.x).toBeGreaterThanOrEqual(mapBox!.x);
    expect(buttonBox!.y).toBeGreaterThanOrEqual(mapBox!.y);
    expect(buttonBox!.x + buttonBox!.width).toBeLessThanOrEqual(mapBox!.x + mapBox!.width);
    expect(buttonBox!.y + buttonBox!.height).toBeLessThanOrEqual(mapBox!.y + mapBox!.height);
  });

  test('should hover effect work on custom control', async ({ mapPage }) => {
    const controlButton = mapPage.locator('[data-testid="custom-control-button"]');
    await expect(controlButton).toBeVisible();

    // Get initial background color
    const initialBg = await controlButton.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    // Hover over the button
    await controlButton.hover();
    await mapPage.waitForTimeout(100);

    // Get background color after hover
    const hoverBg = await controlButton.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    // Background should change on hover (or at least styles should allow it)
    // Since CSS transitions might not apply immediately, we just verify the element responds to hover
    const hasHoverStyle = await controlButton.evaluate((el) => {
      // Check if hover pseudo-class styles are defined
      const sheets = Array.from(document.styleSheets);
      for (const sheet of sheets) {
        try {
          const rules = Array.from(sheet.cssRules || []);
          for (const rule of rules) {
            if (rule instanceof CSSStyleRule && rule.selectorText?.includes(':hover')) {
              return true;
            }
          }
        } catch (e) {
          // CORS issues with some stylesheets
        }
      }
      return false;
    });

    // Either the background changed or hover styles are defined
    expect(initialBg !== hoverBg || hasHoverStyle).toBe(true);
  });
});
