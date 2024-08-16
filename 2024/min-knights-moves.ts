type Coordinate = [number, number];

const directions: Coordinate[] = [[1,2], [2,1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];



function minKnightMoves(x: number, y: number): number {
  const initial = [0, 0] as Coordinate;
  let steps = 0;
  const visited = new Set<string>();
  const queue: Coordinate[] = [];
  queue.push(initial);

  while(queue.length > 0) {
    const sizeQueue = queue.length;

    for (let i = 0; i < sizeQueue; i++) {
      const [currX, currY] = queue[i];

      if (currX === x && currY === y) {
        return steps; // this is our exist
      }

      for (const newCoordinate of directions) {
        const [dirX, dirY] = newCoordinate;
        const newX = currX + dirX;
        const newY = currY + dirY;
        const newPos = `${newX},${newY}`;

        if (!visited.has(newPos)) {
          queue.push([newX, newY]);
          visited.add(newPos);
        }
      }


    }


    steps++;
  }


  return -1;
}


console.log(minKnightMoves(5, 5));  // Виведе мінімальну кількість ходів до (5, 5) = 4
