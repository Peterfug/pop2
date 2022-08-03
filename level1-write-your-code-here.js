/*
    Implement the functions below so that the prince can
    reach his beloved princess.

    HINT: use the BROWSER DEVELOPER TOOLS.
*/

function getStairsMovementDirection(stairNumber, isClimbingStairs) {
  if (isClimbingStairs === false) {
    if (stairNumber % 2 === 0) {
      return "down";
    } else {
      return "right";
    }
  }

  if (isClimbingStairs === true) {
    if (stairNumber % 2 === 0) {
      return "up";
    } else {
      return "right";
    }
  }

  /* Implement the function to return "left", "right", "up", "down"
       based on the values of the parameters "stairNumber" and "isClimbingStairs"
       so that prince will descend and ascend the stairs.
       HINT: to avoid writing a lot of if else, if else, if else...
       you can see if the stair number can be divided by a certain number
    */
}
function getZigZagMovementDirection(step) {
  if (step % 3 === 0) {
    if (step % 2 === 0) {
      return "up";
    } else return "down";
  } else {
    return "right";
  }

  /* Implement the function to return "left", "right", "up", "down"
       based on the values of the parameters "step" so that prince will reach the keyboard symbol on the map.
       HINT: to avoid writing a lot of if else, if else, if else...
       you can see if the step can be divided by a certain number for "up" and another number for "down"
    */
}

function manuallyControl(key) {
  if (key === "ArrowRight") {
    moveDirection("right");
  }

  if (key === "ArrowLeft") {
    moveDirection("left");
  }

  if (key === "ArrowUp") {
    moveDirection("up");
  }

  if (key === "ArrowDown") {
    moveDirection("down");
  }

  // when moving the prince using the keyboard you can call the already implemented
  // function `moveDirection` with the STRING as PARAMETER `left`, `right`, `up`, `down`.
  console.log(`[manuallyControl] received key pressed: ${key}`);
}

function givePotion2Answer(list) {
  const sumEvens = list;
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      sum = sum + list[i];
    }
  }
  return sum;
}

function givePotion3Answer(list) {
  hnumb = 0;

  list.forEach((element) => {
    if (hnumb < element) {
      hnumb = element;
    }
  });
  return hnumb;
}

function givePotion4Answer(letters, uppers) {
  const upp = [];
  const lett = letters.split("");

  for (let index = 0; index < lett.length; index++) {
    const element = lett[index];

    for (let index = 0; index < uppers.length; index++) {
      const upperelement = uppers[index];

      if (element === upperelement) {
        upp.push(element.toUpperCase());
      } else {
        upp.push(element);
      }
    }
  }
  return upp.join("");
}

function givePotion5Answer(hours, minutes, seconds, addSeconds) {
    const  date = new Date(2022, 8, 3, hours, minutes, seconds);
    date.setSeconds(date.getSeconds() + addSeconds);
    newTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    return newTime;
};

function givePotion6Answer(asterisknumber) {
    let characters = asterisknumber.split('*');
    let sum = 0;
    for (let i = 0; i < (characters.length); i++) {
        if (characters[i] !== '') {
            sum += parseInt(characters[i]);
        };
    };
    return sum;
};

function givePotion10Answer(char, str) {
    notFound = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return(i);
        };
    };
    return notFound;
};

function givePotion11Answer(str, oldChar, newChar) {
    console.log(str, oldChar, newChar);
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== oldChar) {
            newStr += str[i];
        }
        else {
            newStr += newChar;
        };
    };
    return newStr;
};