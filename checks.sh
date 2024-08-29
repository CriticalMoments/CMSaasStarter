#!/bin/sh

# error on first error
set -e

if ! command -v misspellx &> /dev/null
then
    echo "=== Skipping Spell Check ==="
    echo "Skip running spell check using 'misspell' as the tool is not installed."
    echo "Install it using the instructions here: https://github.com/client9/misspell"
    echo "Skipping this check now, but it may fail in CI.\n"
else
    echo "=== Running Spell Check ==="
    misspell -error ./src README.md
    echo "no spelling mistakes found\n"
fi

echo "=== Running Format Check With Prettier ==="
npm run format_check

echo "=== Running Linter ==="
npm run lint

echo "=== Running Svelte Check ===" 
npm run check

echo "=== Running Tests ==="
npm run test_run

echo "\n=== All Checks Pass ===\n"

