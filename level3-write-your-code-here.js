/*
    Implement the function `level3Move` below so that the prince can
    reach his beloved princess.

    The 'level3Move' should return an array with a mixture of the words
    'left', 'right', 'up' or 'down'. These words will then be passed as
    parameters to the `moveDirection` function (you do not have access to
    this function in this level).

    The map changes from level to level BUT you have a representation of
    it through the variables `gameMap`.

    HINT: use the BROWSER DEVELOPER TOOLS.
*/
let princeX = 0;
let princeY = 0;
function level3Move(gameMap) {
  /* console.dir(gameMap);
    console.log(gameMap[0]);
    console.log(gameMap[0].length);
    console.log(gameMap[2][1]); */

  let numberOfDown = [];
  for (let i = 0; i < gameMap.length - 3; i++) {
    numberOfDown.push("down");
  }
  for (let i = 0; i < gameMap[0].length - 3; i++) {
    numberOfDown.push("right");
  }
  princeY = gameMap.length - 2;
  princeX = gameMap[0].length - 2;
  console.log(princeY);
  console.log(princeX);
  console.log(numberOfDown);

  while (gameMap[princeY - 1][princeX] !== 13) {
    moveUp(numberOfDown);
  }

  while (gameMap[princeY][princeX - 1] === 11) {
    zigZag(numberOfDown);
    if (gameMap[princeY - 1][princeX - 1] === 11) {
      break;
    }
  }

  for (let index = 0; index < 51; index++) {
    toPrincess(numberOfDown);
  }
  return numberOfDown;
}
function toPrincess(numberOfDown) {
  MoveLeft(numberOfDown);
  MoveDown(numberOfDown);
  MoveRight(numberOfDown);
  MoveDown(numberOfDown);
}

function zigZag(numberOfDown) {
  MoveLeft(numberOfDown);
  MoveLeft(numberOfDown);
  moveUp(numberOfDown);
  MoveLeft(numberOfDown);
  MoveLeft(numberOfDown);
  MoveDown(numberOfDown);
}

function moveUp(numberOfDown) {
  numberOfDown.push("up");
  princeY = princeY - 1;
}

function MoveLeft(numberOfDown) {
  numberOfDown.push("left");
  princeX = princeX - 1;
}

function MoveRight(numberOfDown) {
  numberOfDown.push("right");
  princeX = princeX + 1;
}

function MoveDown(numberOfDown) {
  numberOfDown.push("down");
  princeY = princeY + 1;
}
