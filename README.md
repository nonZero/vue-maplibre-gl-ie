# @indoorequal/vue-maplibre-gl

[![npm](https://img.shields.io/npm/v/@indoorequal/vue-maplibre-gl.svg?style=flat-square)](https://www.npmjs.com/package/@indoorequal/vue-maplibre-gl)
[![npm](https://img.shields.io/npm/dm/@indoorequal/vue-maplibre-gl?style=flat-square)](https://www.npmjs.com/package/@indoorequal/vue-maplibre-gl)
[![size](https://img.shields.io/bundlephobia/minzip/@indoorequal/vue-maplibre-gl?label=size&style=flat-square)](https://bundlephobia.com/package/@indoorequal/vue-maplibre-gl)
[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg?style=flat-square)](https://vuejs.org/)
[![MaplibreGL-JS](https://img.shields.io/badge/Maplibre%20GL%20JS-5.x-brightgreen?style=flat-square)](https://maplibre.org/projects/maplibre-gl-js/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-informational?style=flat-square)](https://www.typescriptlang.org/)

A small Vue 3 plugin for [maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js).

This is a fork of [vue-maplibre-gl](https://github.com/razorness/vue-maplibre-gl) with new features, non-core features removed, and support for MapLibre GL JS > v3.

## Features

- Supports MapLibre GL JS v5.x
- Typescript support
- Components for map, controls, sources, markers, popups and layers
- Support for custom controls
- Support for multiple instances and global access by `useMap(key: string | symbol)`
- Automatic restart on CONTEXT_LOST_WEBGL which can happen on mobile devices when tab was in background for longer time
- Small size


## Documentation

https://indoorequal.github.io/vue-maplibre-gl/

## Development

### Prerequisites

- Node.js >= 18
- [Yarn](https://yarnpkg.com/) 4.12.0 (managed by packageManager in package.json)

### Installation

```bash
yarn install
```

### Available Scripts

#### Building the Library

```bash
yarn build
```

Builds the library for production. This command:
- Runs TypeScript type checking (`vue-tsc --noEmit`)
- Builds the library with Vite
- Generates web-types configuration

#### Running Documentation

```bash
# Start development server with hot reload
yarn docs:dev

# Build documentation for production
yarn docs:build

# Preview production build locally
yarn docs:preview
```

The documentation includes interactive examples that you can test locally. When running `yarn docs:dev`, the documentation will be available at `http://localhost:5173` (default [VitePress](https://vitepress.dev/) port).

#### Testing

```bash
# Run tests
yarn test
```

#### Code Quality

```bash
# Lint code
yarn lint

# Format code with Prettier
yarn prettier
```

### Working with Examples

Examples are located in `docs/examples/` and are automatically included in the documentation site. Each example is a standalone Vue component that demonstrates specific features of the library.

To view examples:
1. Run `yarn docs:dev`
2. Navigate to the Examples section in the documentation
3. Each example includes live preview and source code

## PRs welcome ♥

If you have ideas, improvements, suggestions etc. don't hesitate to open a pull request.

## License

[MIT](http://opensource.org/licenses/MIT)
