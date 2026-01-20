# End-to-End Tests

This directory contains Playwright end-to-end tests for the vue-maplibre-gl library.

## Setup

Install Playwright browsers:

```bash
yarn playwright install chromium
```

## Running Tests

### Run all tests in headless mode

```bash
yarn test:e2e
```

### Run tests with UI mode (interactive)

```bash
yarn test:e2e:ui
```

### Run tests in headed mode (see the browser)

```bash
yarn test:e2e:headed
```

### Run specific test file

```bash
yarn test:e2e marker.spec.ts
```

## Test Structure

The test suite includes comprehensive coverage of all major components:

### `fixtures.ts`
Reusable test fixtures and helper functions:
- `mapPage` - Auto-fixture that navigates to the app and waits for map to load
- `mapHelpers` - Utility functions for common map-related assertions
  - `waitForMapLoad()` - Wait for map canvas to be ready
  - `hasCanvasContent()` - Check if map tiles have rendered
  - `getBoundingBox()` - Get element bounding box with validation
  - `isElementInMap()` - Verify element is positioned within map bounds

### `map.spec.ts`
Tests for basic map functionality:
- Map loads and displays correctly
- Interactive map controls work
- Map tiles render properly
- Map container has correct classes
- Map renders at correct zoom level

### `marker.spec.ts`
Tests for MglMarker component:
- Regular marker renders on the map
- Marker displays with custom color
- Marker is positioned within map bounds
- Marker has correct DOM structure
- Multiple markers can be rendered simultaneously

### `popup.spec.ts`
Tests for MglPopup component:
- Standalone popup renders on the map
- Popup attaches to markers correctly
- Popup displays with close button
- Close button functionality works
- Popup has correct DOM structure (content, tip)
- Multiple popups can exist simultaneously
- Popup is positioned within map bounds
- Custom HTML content renders correctly

### `custom-control.spec.ts`
Tests for MglCustomControl component:
- Custom control renders on the map
- Control is positioned in correct corner (top-right)
- Control is clickable and interactive
- Control has correct DOM structure
- Custom styling is applied correctly
- Control is within map container bounds
- Hover effects work properly

### `custom-marker.spec.ts`
Tests for custom marker functionality (using marker slot):
- Custom marker renders with custom HTML
- Custom styling is applied (circular, colored)
- Custom marker is positioned within map bounds
- Custom marker has correct DOM structure
- Differentiates from regular markers (no SVG)
- Hover effects work on custom markers
- Custom marker is positioned differently from regular markers
- Text content displays correctly in custom marker

## Test App

The tests run against a comprehensive Vue application located in the `test-app` directory. This app demonstrates:

- Basic MglMap component usage
- Regular marker with custom color
- Popup attached to a marker
- Standalone popup
- Custom marker using the marker slot
- Custom control with button and click handler

To run the test app manually:

```bash
yarn dev:test
```

Then open http://localhost:5173 in your browser.

## Best Practices

### DRY Principle
Tests follow the DRY (Don't Repeat Yourself) principle:
- Reusable fixtures in `fixtures.ts` eliminate repetitive setup code
- Helper functions centralize common operations
- `mapPage` fixture automatically handles navigation and map loading

### Test Organization
- Each component type has its own spec file
- Tests are focused and test one thing at a time
- Descriptive test names explain what is being tested

### Using Fixtures
```typescript
import { test, expect, mapHelpers } from './fixtures';

test('my test', async ({ mapPage }) => {
  // mapPage is already navigated to the app with map loaded
  const marker = mapPage.locator('.maplibregl-marker');
  await expect(marker).toBeVisible();
});
```

## Screenshots

Test screenshots are saved to `e2e/screenshots/` for visual verification:
- `map-loaded.png` - Basic map rendering
- `marker-regular.png` - Regular marker display
- `custom-marker.png` - Custom marker display
- `popup-standalone.png` - Standalone popup
- `popup-marker.png` - Popup attached to marker
- `custom-control.png` - Custom control button

Screenshots are excluded from git by default (see `.gitignore`).
