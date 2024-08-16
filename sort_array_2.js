'use strict';

function findMinSquare(arr) {
  let result;
  let sortedHeight = arr.sort((a, b) => b.height - a.height);
  console.log(sortedHeight);
  let maxHeight;
  let maxWidth;
  if (sortedHeight.length > 2) {
    if (sortedHeight[0].height >= sortedHeight[1].height + sortedHeight[2].height) {
      maxHeight = sortedHeight[0];
      sortedHeight.splice(0, 1);
    } else {
      maxHeight = sortedHeight[1].height + sortedHeight[2].height;
      sortedHeight.splice(1, 2);
    }
  } else {
    maxHeight = sortedHeight[0].height;
  }

  let sortedWidth = sortedHeight.sort((a, b) => b.width - a.width);
  if (sortedWidth.length > 2) {
    maxWidth =
      sortedWidth[0].width >= sortedWidth[1].width + sortedWidth[2].width
        ? sortedWidth[0].width
        : sortedWidth[1].width + sortedWidth[2].width;
  } else {
    maxWidth = sortedWidth[0].width;
  }
  console.log(maxHeight);
  console.log(maxWidth);
  return result;
}

function main() {
  const input = [{ width: 10, height: 20 }, { width: 30, height: 10 }, { width: 5, height: 30 }];

  let result = findMinSquare(input);
  console.log(result);
}

main();
