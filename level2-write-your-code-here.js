/*
    Implement the function `level2Move` below so that the prince can
    reach his beloved princess.

    The 'level2Move' will be called until your pass to the next level,
    so you should write any movement code in this function.

    You can move the prince through the:
    moveDirection('left')
    moveDirection('up')
    moveDirection('right')
    moveDirection('down')

    HINT: use the BROWSER DEVELOPER TOOLS.
*/
    let moveDown = true;
    let moveRight = true;
    let moveUp = true;
    let moveZigZag = true;

function level2Move(elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince) {
      // the prince should move down first, the problem is that the amount
  // of times to move changes from one level to another. Try to find out
  // based on the variables "elementLeftOfPrince", "elementRightOfPrince",
  // "elementUpOfPrince", "elementDownOfPrince"

  // the prince should move right second, the problem is that the amount
  // of time to move changes from one level to another
  // HINT: try to create a function that would receive the parameters
  // up/down/left/right and the amount of times to move

  // the prince should move up third, the problem is that the amount
  // of time to move changes from one level to another
  // HINT: try to create a function that would receive the parameters
  // up/down/left/right and the amount of times to move

  // the prince should move in a zig-zag pattern. Unfortunately the amount
  // of times changes from one level to another
  // HINT: try to create a function that would receive the parameters

  // to finally reach the princess the prince should move down and sometimes
  // to left or right, depending on the level

    //console.log(elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince);

    if (moveDown) {
    down(elementDownOfPrince);
    };

    if (moveRight) {
    right(elementRightOfPrince);
    };

    if (moveUp) {
    up(elementUpOfPrince);
    };

    if (moveZigZag) {
    ZigZag(elementLeftOfPrince);
    };
};

function down(elementDownOfPrince) {
  if (elementDownOfPrince === 11) {
    moveDirection("down");
    moveDown = true;
    moveRight = false;
    moveUp = false;
    moveZigZag = false;
  } else {
    moveDown = false;
    moveRight = true;
    moveUp = false;
    moveZigZag = false;
  };
};

function right(elementRightOfPrince) {
  if (elementRightOfPrince === 11) {
    moveDirection("right");
    moveDown = false;
    moveRight = true;
    moveUp = false;
    moveZigZag = false;
  } else {
    moveDown = false;
    moveRight = false;
    moveUp = true;
    moveZigZag = false;
  };
};

function up(elementUpOfPrince) {
  if (elementUpOfPrince === 11) {
    moveDirection("up");
    moveDown = false;
    moveRight = false;
    moveUp = true;
    moveZigZag = false;
  } else {
    moveDown = false;
    moveRight = false;
    moveUp = false;
    moveZigZag = true;
  };
};

function ZigZag(elementLeftOfPrince) {
    console.log('lefut');
    if (elementLeftOfPrince === 11) {
    for (let i = 0; i < 2; i++) {
        moveDirection("left");
    };
    moveDirection("up");
    for (let i = 0; i < 2; i++) {
        moveDirection("left");
    };
    moveDirection("down");
    moveDown = false;
    moveRight = false;
    moveUp = false;
    moveZigZag = true;
    } else {
    moveDown = false;
    moveRight = false;
    moveUp = false;
    moveZigZag = false;
  };
};
