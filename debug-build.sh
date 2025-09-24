#!/bin/bash

echo "=== Azure Static Web Apps Troubleshooting ==="
echo ""

echo "1. Checking if staticwebapp.config.json exists in public folder:"
if [ -f "public/staticwebapp.config.json" ]; then
    echo "✅ Found public/staticwebapp.config.json"
    echo "Content:"
    cat public/staticwebapp.config.json
else
    echo "❌ Missing public/staticwebapp.config.json"
fi

echo ""
echo "2. Building the app..."
npm run build

echo ""
echo "3. Checking dist folder contents:"
ls -la dist/ 2>/dev/null || dir dist

echo ""
echo "4. Checking if staticwebapp.config.json is in dist:"
if [ -f "dist/staticwebapp.config.json" ]; then
    echo "✅ Found dist/staticwebapp.config.json"
else
    echo "❌ Missing dist/staticwebapp.config.json"
fi

echo ""
echo "5. Checking index.html content:"
if [ -f "dist/index.html" ]; then
    echo "✅ Found dist/index.html"
    echo "First few lines:"
    head -5 dist/index.html
else
    echo "❌ Missing dist/index.html"
fi

echo ""
echo "=== Troubleshooting complete ==="