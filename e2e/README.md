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

## Test Structure

- `map.spec.ts` - Tests for basic map functionality
  - Verifies map loads and displays correctly
  - Checks interactive map controls
  - Validates map tiles render properly

## Test App

The tests run against a simple Vue application located in the `test-app` directory. This app demonstrates basic usage of the MglMap component.

To run the test app manually:

```bash
yarn dev:test
```

Then open http://localhost:5173 in your browser.

## Screenshots

Test screenshots are saved to `e2e/screenshots/` and are excluded from git by default.
