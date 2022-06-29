const canvasSketch = require('canvas-sketch');

//import { dimensions, generateSketch } from "./sketches/june/intersectingSquares"
import { dimensions, generateSketch, baseColor } from "./sketches/june/tetris"

const settings = {
  dimensions
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = baseColor;
    context.fillRect(0, 0, width, height);

    generateSketch(context, width, height)
  };
};

canvasSketch(sketch, settings);
