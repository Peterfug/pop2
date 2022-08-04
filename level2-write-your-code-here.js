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
let firstTask = true;
let secondTask = true;
let thirdTask = true;
let fourthTask = true;
function level2Move(
  elementLeftOfPrince,
  elementRightOfPrince,
  elementUpOfPrince,
  elementDownOfPrince
) {
  console.log(
    `MOST van körülötted le:${elementDownOfPrince} fel:${elementUpOfPrince} jobbra:${elementRightOfPrince} balra:${elementLeftOfPrince}`
  );
  if (firstTask) {
    down(elementDownOfPrince);
  }
  if (secondTask) {
    right(elementRightOfPrince);
  }
  if (thirdTask) {
    up(elementUpOfPrince);
  }
  if (fourthTask) {
    ZigZag(elementDownOfPrince, elementUpOfPrince);
  }
  console.log(
    `MI van körülötted le:${elementDownOfPrince} fel:${elementUpOfPrince} jobbra:${elementRightOfPrince} balra:${elementLeftOfPrince}`
  );

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

}

function down(elementDownOfPrince) {
  if (elementDownOfPrince < 12) {
    moveDirection("down");
    firstTask = true;
    secondTask = false;
    thirdTask = false;
    fourthTask = false;
  } else {
    firstTask = false;
    secondTask = true;
    thirdTask = false;
    fourthTask = false;
  }
}

function right(elementRightOfPrince) {
  if (elementRightOfPrince < 12) {
    moveDirection("right");
    firstTask = false;
    secondTask = true;
    thirdTask = false;
    fourthTask = false;
  } else {
    firstTask = false;
    secondTask = false;
    thirdTask = true;
    fourthTask = false;
  }
}

function up(elementUpOfPrince) {
  if (elementUpOfPrince < 12) {
    moveDirection("up");
    firstTask = false;
    secondTask = false;
    thirdTask = true;
    fourthTask = false;
  } else {
    firstTask = false;
    secondTask = false;
    thirdTask = false;
    fourthTask = true;
  }
}

function ZigZag(elementDownOfPrince, elementUpOfPrince) {
  if (elementDownOfPrince === 11 && elementUpOfPrince === 11) {
    firstTask = false;
    secondTask = false;
    thirdTask = false;
    fourthTask = false;
  } else {
    moveDirection("left");
    console.log("most balra lépek");
    moveDirection("left");
    console.log("most balra lépek");
    moveDirection("up");
    console.log("most fel lépek");
    moveDirection("left");
    console.log("most balra lépek");
    moveDirection("left");
    console.log("most balra lépek");
    moveDirection("down");
    console.log("most lefele lépek");

    firstTask = false;
    secondTask = false;
    thirdTask = false;
    fourthTask = true;
  }
}

