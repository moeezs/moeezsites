#!/bin/bash
# Simple script to create a placeholder PNG image using ImageMagick if available
# This creates a 40x40 blue square with white 'D' text

if command -v convert &> /dev/null; then
    convert -size 40x40 xc:#3b82f6 -fill white -font Arial -pointsize 24 -gravity center -annotate +0+0 "D" /Users/moeez/Documents/Big\ Things/moeezsites/public/divtech.png
    echo "Created divtech.png placeholder"
else
    echo "ImageMagick not available - using SVG placeholder instead"
fi
