#!/usr/bin/env bash
rm -rf dist
tsc -b
vite build
cp src/mapsApi.js dist/assets/
sed -i 's|src="/src|src="/assets|g' dist/index.html
