const canvasSketch = require('canvas-sketch');

import { dimensions, generateSketch } from "./sketches/june/intersectingSqares"

const settings = {
  dimensions
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#e9edc9';
    context.fillRect(0, 0, width, height);

    generateSketch(context, width, height)
  };
};

canvasSketch(sketch, settings);
