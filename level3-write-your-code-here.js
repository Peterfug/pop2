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

function level3Move(gameMap) {
/*     console.dir(gameMap);
    console.log(gameMap[0]); */
    /* console.log(gameMap[0].length);
    console.log(gameMap[2][1]); */
    let rownNumber = gameMap.length;
    let columnNumber = gameMap[0].length;
    let wichRow = 0;
    let numberOfDown = [];
    for (let i = 0; i < rownNumber - 3; i++) {
        numberOfDown.push('down');
    };
    for (let i = 0; i < columnNumber -3; i++) {
        numberOfDown.push('right');
    };
    for (let i = 0; i < rownNumber; i++) {
        if (gameMap[i][columnNumber -2] === 13) {
            wichRow += i;
        };
    };
    //for (let i = 0; i < gameMap)
    console.log(rownNumber, columnNumber, numberOfDown, wichRow);
    return numberOfDown;
}

