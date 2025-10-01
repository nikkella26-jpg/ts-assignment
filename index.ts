// *** Ignore the following lines ***
import chalk from "chalk";
import prompt from "prompt-sync";
// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({ sigint: true });

function runExerciseOne() {
  const firstName = "Sebastian";
  const lastName = "Vallin";
  console.log(
    `Hello ${firstName} ${lastName}! I'm glad to inform you that you are the test subject for my first assignment!`
  );
}

function runExerciseTwo() {
  const firstName: string = readLine("First name: ");
  const lastName: string = readLine("Last Name: ");
  console.log(`Hello ${firstName} ${lastName} Have a nice day `);
}

function runExerciseThree() {
  const num1: number = 10;
  const num2: number = 4;
  const sum: number = num1 + num2;
  console.log("Sum (stored as number):", sum);

  const even: number = 8;
  const odd: number = 9;
  const divisionResult: number = odd / even;
  console.log("Accurate Division Result:", divisionResult);
}

function runExerciseFour() {
  let radius: string = readLine("Enter the radius of the circle:");
  let radiusNum: number = parseFloat(radius);
  let area: number = Math.PI * Math.pow(radiusNum, 2);
  console.log(`The area of a circle with radius ${radiusNum} is ${area}`);
}

function runExerciseFive() {
  function areConsecutive(num1: number, num2: number): boolean {
    return Math.abs(num1 - num2) === 1;
  }
  const num1: number = parseInt(readLine("Enter the first number:"));
  const num2: number = parseInt(readLine("Enter the second number:"));

  if (isNaN(num1) || isNaN(num2)) {
    console.log("please enter valid numbers");
  } else {
    if (areConsecutive(num1, num2)) {
      console.log("consecutive");
    } else {
      console.log("not consecutive");
    }
  }
}

function runExerciseSix() {
  const userInput: string = readLine("Enter a integer ");
  const number = Number(userInput);
  if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
    console.log("Invalid input! Please enter a nog negative integer.");
  } else {
    if (number % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  }
}

function runExerciseSeven() {
  const userInput: string = readLine("Enter body temerature in celsius. ");
  const temperature = Number(userInput);
  if (isNaN(temperature)) {
  } else {
    if (temperature >= 38) {
      console.log("you have a fever");
    } else {
      console.log("you dont have a feber");
    }
  }
}

function runExerciseEight() {
  const userInput: string = readLine("Enter your exam Grade: ");
  const grade = String(userInput);
  if (grade === "A") {
    console.log("Excellent");
  } else if (grade === "B") {
    console.log("Well done");
  } else if (grade === "C") {
    console.log("Good");
  } else if (grade === "D") {
    console.log("You passed");
  } else if (grade === "E") {
    console.log("You failed");
  }
}

function runExerciseNine() {}

function runExerciseTen() {}

function runExerciseEleven() {}

function runExerciseTwelve() {}

function runExerciseThirteen() {}

function runExerciseFourteen() {}

function runExerciseFifteen() {
  let srtCnt = Number(readLine("How many stars "));

  let sp1 = 1;
  let strStr1 = "";

  for (let i = srtCnt; i >= 1; i--) {
    for (let x = sp1; x > 0; x--) {
      strStr1 += " ";
    }
    sp1++;
    for (let j = 1; j <= i; j++) {
      strStr1 += "* ";
    }
    console.log(strStr1);
    strStr1 = "";
  }
}

function runExerciseSixteen() {}

function runExerciseSeventeen() {}

function runExerciseEighteen() {}

function runExerciseNineteen() {}

function runExerciseTwenty() {}

function runExerciseTwentyOne() {}

function runExerciseTwentyTwo() {}

function runExerciseTwentyThree() {}

function runExerciseTwentyFour() {}

function runExerciseTwentyFive() {}

function runExerciseTwentSix() {}

function runExerciseTwentSeven() {}

function runExerciseTwentEight() {}

function runExerciseTwentNine() {}

function runExerciseThirty() {}

function runExerciseThirtyOne() {}

function runExerciseThirtyTwo() {}

function runExerciseThirtyThree() {}

function runExerciseThirtyFour() {}
/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
  try {
    const assignmentChoice = parseInt(
      readLine("Enter assignment number (ctrl + C or -1 to exit): ")
    );
    console.log();
    switch (assignmentChoice) {
      case 1:
        runExerciseOne();
        break;
      case 2:
        runExerciseTwo();
        break;
      case 3:
        runExerciseThree();
        break;
      case 4:
        runExerciseFour();
        break;
      case 5:
        runExerciseFive();
        break;
      case 6:
        runExerciseSix();
        break;
      case 7:
        runExerciseSeven();
        break;
      case 8:
        runExerciseEight();
        break;
      case 9:
        runExerciseNine();
        break;
      case 10:
        runExerciseTen();
        break;
      case 11:
        runExerciseEleven();
        break;
      case 12:
        runExerciseTwelve();
        break;
      case 13:
        runExerciseThirteen();
        break;
      case 14:
        runExerciseFourteen();
        break;
      case 15:
        runExerciseFifteen();
        break;
      case 16:
        runExerciseSixteen();
        break;
      case 17:
        runExerciseSeventeen();
        break;
      case 18:
        runExerciseEighteen();
        break;
      case 19:
        runExerciseNineteen();
        break;
      case 20:
        runExerciseTwenty();
        break;
      case 21:
        runExerciseTwentyOne();
        break;
      case 22:
        runExerciseTwentyTwo();
        break;
      case 23:
        runExerciseTwentyThree();
        break;
      case 24:
        runExerciseTwentyFour();
        break;
      case 25:
        runExerciseTwentyFive();
        break;
      case 26:
        runExerciseTwentSix();
        break;
      case 27:
        runExerciseTwentSeven();
        break;
      case 28:
        runExerciseTwentEight();
        break;
      case 29:
        runExerciseTwentNine();
        break;
      case 30:
        runExerciseThirty();
        break;
      case 31:
        runExerciseThirtyOne();
        break;
      case 32:
        runExerciseThirtyTwo();
        break;
      case 33:
        runExerciseThirtyThree();
        break;
      case 34:
        runExerciseThirtyFour();
        break;

      /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
      case -1:
        keepAlive = false;
        break;
      default:
        console.log(chalk.red("That is not a valid assignment number!"));
        break;
    }
    if (assignmentChoice !== -1) {
      console.log();
      readLine(chalk.dim("Press enter to continue..."));
      console.clear();
    } else {
      console.log(chalk.green("Exiting..."));
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
}
