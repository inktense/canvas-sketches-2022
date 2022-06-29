import { addMarginToCanvas } from "../../utils/canvasSettings";
import { getColorPalette } from "../../utils/helpers";
import { sample } from "lodash";

export const dimensions = "A4";
export const baseColor = "white";

export const generateSketch = (context, width, height) => {
  // Retrieveing actual working space
  const { gridW, gridH, margX, margY } = addMarginToCanvas(width, height);
  const cols = 9;
  const rows = 9;
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

    const squareW = (cellW * 60) / 100;
    const squareH = (cellH * 60) / 100;
    const firstColor = sample(colorsPallete);
    const secondColor = sample(colorsPallete);
    const thirdColor = sample(colorsPallete);

    context.beginPath();
    context.fillStyle = firstColor;
    context.rect(
      squareW / 6 + margX + offsetW,
      squareH / 6 + margY + offsetH,
      squareW,
      squareH
    );
    context.fill();
    context.save();

    context.beginPath();
    context.fillStyle = secondColor;
    context.rect(
      squareW / 6 + margX + offsetW + squareW / 3,
      squareH / 6 + margY + offsetH + squareH / 3,
      squareW,
      squareH
    );
    context.fill();
    context.save();

    context.beginPath();
    context.fillStyle = thirdColor;
    context.rect(
      squareW / 6 + margX + offsetW + squareW / 3,
      squareH / 6 + margY + offsetH + squareH / 3,
      squareW - squareW / 4,
      squareH - squareW / 2
    );
    context.fill();
    context.save();
  }
};
