class KnightPosition {
  constructor(positionOnBoard, path = []) {
    this.positionOnBoard = positionOnBoard;
    this.possibleMoves = [];
    this.path = [...path, positionOnBoard];
  }
}

function knightMoves(startCoordinates) {
  let initialBoard = new KnightPosition(startCoordinates);
  let x = startCoordinates[0];
  let y = startCoordinates[1];

  if (x + 2 < 8 && y + 1 < 8) {
    initialBoard.possibleMoves.push(new KnightPosition([x + 2, y + 1]));
  }
  if (x + 2 < 8 && y - 1 >= 0) {
    initialBoard.possibleMoves.push(new KnightPosition([x + 2, y - 1]));
  }
  if (x - 2 >= 0 && y + 1 < 8) {
    initialBoard.possibleMoves.push(new KnightPosition([x - 2, y + 1]));
  }
  if (x - 2 >= 0 && y - 1 >= 0) {
    initialBoard.possibleMoves.push(new KnightPosition([x - 2, y - 1]));
  }
  if (x + 1 < 8 && y + 2 < 8) {
    initialBoard.possibleMoves.push(new KnightPosition([x + 1, y + 2]));
  }
  if (x - 1 >= 0 && y + 2 < 8) {
    initialBoard.possibleMoves.push(new KnightPosition([x - 1, y + 2]));
  }
  if (x + 1 < 8 && y - 2 >= 0) {
    initialBoard.possibleMoves.push(new KnightPosition([x + 1, y - 2]));
  }
  if (x - 1 >= 0 && y - 2 >= 0) {
    initialBoard.possibleMoves.push(new KnightPosition([x - 1, y - 2]));
  }
  return initialBoard;
}

function breadthSearch(node, endCoordinates) {
  let queue = [];
  queue.push(node);
  let visited = new Set();

  while (queue.length !== 0) {
    let currentNode = queue.shift();

    let currentPosition = currentNode.positionOnBoard.toString();

    if (visited.has(currentPosition)) continue;
    visited.add(currentPosition);

    if (
      currentNode.positionOnBoard[0] === endCoordinates[0] &&
      currentNode.positionOnBoard[1] === endCoordinates[1]
    ) {
      console.log(`Path found in ${currentNode.path.length - 1} moves.`);
      console.log(
        `Moves: `,
        currentNode.path.map((pos) => `[${pos}]`).join(" -> ")
      );
      return;
    }

    let nextMoves = knightMoves(currentNode.positionOnBoard);
    for (let move of nextMoves.possibleMoves) {
      if (!visited.has(move.positionOnBoard.toString())) {
        move.path = [...currentNode.path, move.positionOnBoard];
        queue.push(move);
      }
    }
  }
}

let a = knightMoves([0, 0]);

breadthSearch(a, [3, 3]);
