import { addMarginToCanvas } from "../../utils/canvasSettings";
import { getColorPalette } from "../../utils/helpers";
import { sample } from "lodash";
import { random } from "canvas-sketch-util";

export const dimensions = "A4";
export const baseColor = "white";

const colorsPallete = getColorPalette();

const getCellColor = (row) => {
  let color = null;

  if (row < 6) {
    color = Math.floor(random.range(0, 4)) != 0 ? baseColor : sample(colorsPallete);
  } else if (row >= 6 && row < 9){
    color = Math.floor(random.range(0, 3)) == 0 ? baseColor : sample(colorsPallete);
  } else {
    color = sample(colorsPallete);
  }

  return color;
};

export const generateSketch = (context, width, height) => {
  // Retrieveing actual working space
  const { gridW, gridH, margX, margY } = addMarginToCanvas(width, height);

  // We define the number of collomns and based on that we calculate number of rows
  // as for Tetris to look right we need to have perfect sqares
  const cols = 9;
  const cellDimension = gridW / cols;
  const rows = gridH / cellDimension;

  for (let i = 0; i < cols; i++) {
    const col = i % cols;

    for (let j = 0; j < rows; j++) {
      const row = Math.floor(j % rows);

      // Width of a collumn cell
      const offsetW = cellDimension * col;
      // Height of a collumn cell
      const offsetH = cellDimension * row;

      context.beginPath();
      context.fillStyle = getCellColor(row);
      context.rect(
        margX + offsetW,
        margY + offsetH,
        cellDimension,
        cellDimension
      );
      context.fill();
      context.save();
    }
  }
};
