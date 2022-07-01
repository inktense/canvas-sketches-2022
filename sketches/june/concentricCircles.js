import { addMarginToCanvas } from "../../utils/canvasSettings";
import { getColorPalette } from "../../utils/helpers";
import { sample } from "lodash";

export const dimensions = "A4";
export const baseColor = "#212d40";

export const generateSketch = (context, width, height) => {
  // Retrieveing actual working space
  const { gridW, gridH, margX, margY } = addMarginToCanvas(width, height);
  const cols = 15;
  const rows = 15;
  const cellW = gridW / cols;
  const cellH = gridH / rows;
  
  const numCells = cols * rows;

  const colorsPallete = getColorPalette();

  for (let i = 0; i < numCells; i++) {
    // i % 4 = 0, 1, 2, 3...
    const col = i % cols;
    // Math.floor(i / 4) = 0, 0, 0, 0, 1, 1, 1, 1...
    const row = Math.floor(i / cols);
    // Width of a collumn cell
    const offsetW = cellW * col;
    // Height of a collumn cell
    const offsetH = cellH * row;


  }
};
