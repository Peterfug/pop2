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
let fifthTask = true;
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
  if (fifthTask){
    princess()
  }
}

function down(elementDownOfPrince) {
  if (elementDownOfPrince < 12) {
    moveDirection("down");
    firstTask = true;
    secondTask = false;
    thirdTask = false;
    fourthTask = false;
    fifthTask = false;
  } else {
    firstTask = false;
    secondTask = true;
    thirdTask = false;
    fourthTask = false;
    fifthTask = false;
  }
}

function right(elementRightOfPrince) {
  if (elementRightOfPrince < 12) {
    moveDirection("right");
    firstTask = false;
    secondTask = true;
    thirdTask = false;
    fourthTask = false;
    fifthTask = false;
  } else {
    firstTask = false;
    secondTask = false;
    thirdTask = true;
    fourthTask = false;
    fifthTask = false;
  }
}

function up(elementUpOfPrince) {
  if (elementUpOfPrince < 12) {
    moveDirection("up");
    firstTask = false;
    secondTask = false;
    thirdTask = true;
    fourthTask = false;
    fifthTask = false;
  } else {
    firstTask = false;
    secondTask = false;
    thirdTask = false;
    fourthTask = true;
    fifthTask = false;
  }
}

function ZigZag(elementDownOfPrince, elementUpOfPrince) {
  if (elementDownOfPrince === 11 && elementUpOfPrince === 11) {
    firstTask = false;
    secondTask = false;
    thirdTask = false;
    fourthTask = false;
    fifthTask = true;
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
    fifthTask = false;
  }
}

function princess() {
  for (let index = 0; index < 50; index++) {
    moveDirection("left");
    moveDirection("down");
    moveDirection("right");
    moveDirection("down");
    firstTask = false;
    secondTask = false;
    thirdTask = false;
    fourthTask = false;
    fifthTask = true;
  }
 
  
  
}



