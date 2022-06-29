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

    const squareW = (cellW * 60) / 100;
    const squareH = (cellH * 60) / 100;
    const firstColor = sample(colorsPallete);
    const secondColor = sample(colorsPallete);
    const thirdColor = sample(colorsPallete);

    let iteratorX = 0;
    let iteratorY = 0;
    let size = 0;

    if(col == 0 && row == 0) {iteratorX = 20; iteratorY = 20; size = 20}
    if(col == cols - 1 && row == 0) {iteratorX = 0; iteratorY = 20; size =  20}
    if(col == 0 && row == rows - 1) {iteratorX = 20; iteratorY = 20;size = 20}
    if(col == cols - 1 && row == rows - 1) {iteratorX = 20; iteratorY = 20;size = 20}

    if(col == 1 && row == 0) {iteratorX = 10; iteratorY = 20;size =  10}
    if(col == cols - 2 && row == 0) {iteratorX = 10; iteratorY = 20;size =  10}
    if(col == 1 && row == rows - 1) {iteratorX = 10; iteratorY = 20;size =  10}
    if(col == cols - 2 && row == rows - 1) {iteratorX = 10; iteratorY = 20;size =  10}

    if(col == 0 && row == 1) {iteratorX = 10; iteratorY = 20;size =  10}
    if(col == cols - 1 && row == 1) {iteratorX = 10; iteratorY = 20; size =  10}
    if(col == 0 && row == rows - 2) {iteratorX = 10; iteratorY = 20; size =  10}
    if(col == cols - 1 && row == rows - 2){ iteratorX = 10; iteratorY = 20; size = 10}

    context.beginPath();
    context.fillStyle = firstColor;
    context.rect(
      squareW / 6 + margX + offsetW + iteratorX,
      squareH / 6 + margY + offsetH + iteratorY,
      squareW - size,
      squareH - size
    );
    context.fill();
    context.save();

    context.beginPath();
    context.fillStyle = secondColor;
    context.rect(
      squareW / 6 + margX + offsetW + squareW / 3 + iteratorX,
      squareH / 6 + margY + offsetH + squareH / 3 + iteratorY,
      squareW - size,
      squareH - size
    );
    context.fill();
    context.save();

    context.beginPath();
    context.fillStyle = thirdColor;
    context.rect(
      squareW / 6 + margX + offsetW + squareW / 3 + iteratorX,
      squareH / 6 + margY + offsetH + squareH / 3 + iteratorY,
      squareW - squareW / 4 - size,
      squareH - squareW / 2 - size
    );
    context.fill();
    context.save();
  }
};
