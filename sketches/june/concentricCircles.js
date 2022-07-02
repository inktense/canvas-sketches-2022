import { addMarginToCanvas } from "../../utils/canvasSettings";
import { getColorPalette } from "../../utils/helpers";
import { sample } from "lodash";
import { random } from "canvas-sketch-util";

export const dimensions = [1080, 1080];
export const baseColor = "#264653";

export const generateSketch = (context, width, height) => {
  // Retrieveing actual working space
  const { gridW, gridH, margX, margY } = addMarginToCanvas(width, height);
  const cols = 5;
  const rows = 5;
  const numCells = cols * rows;

  const colorsPallete = getColorPalette();

  for (let i = 0; i < numCells; i++) {

    const x = random.range(margX, gridW);
    const y = random.range(margY, gridH);
    const radius = random.range(5, 25);

    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = sample(colorsPallete);
    context.fill();

    for (let j = 0; j < random.range(0, 10); j++) {
      context.beginPath();
      context.arc(x, y, radius + j * random.range(10, 40), 0, 2 * Math.PI);

      if (random.boolean()) {
        context.fillStyle = sample(colorsPallete);
        context.fill();
      } else {
        context.strokeStyle = sample(colorsPallete);
        context.stroke();
      }
    }
  }
};
