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

let numberOfDown = 0;
let numberOfRight = 0;

function level2Move(elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince) {
    
    moveDown(elementDownOfPrince);
    moveRight(elementRightOfPrince);
    //moveUp(elementUpOfPrince);
    
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


function moveDown(elementDownOfPrince) {
    if (elementDownOfPrince === 11) {
        moveDirection('down');
        numberOfDown += 1;
    };
    console.log(numberOfDown);
};

function moveRight(elementRightOfPrince) {
    if (elementRightOfPrince === 11) {
        moveDirection('right');
        numberOfRight += 1;
    };
    console.log(numberOfRight);
};
 
/* function moveUp(elementUpOfPrince) {
    if (elementUpOfPrince === 11 && functionRun > 20) {
        moveDirection('up');
    };
}; */