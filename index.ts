// *** Ignore the following lines ***
import chalk from "chalk";
import { realpath } from "fs";
import { stdout } from "process";
import prompt from "prompt-sync";
import { stringify } from "querystring";
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

function runExerciseNine() {
  let filterString = "";
  let input = readLine("Enter a String ");
  for (let i = 0; i < input.length; i++) {
    if (input[i].toUpperCase() != input[i].toLowerCase()) {
      filterString += input[i].toLowerCase();
    }
  }
  let palindrome = true;
  for (let i = 0; i < filterString.length / 2; i++) {
    if (filterString[i] !== filterString[filterString.length - 1 - i]) {
      palindrome = false;
      break;
    }
  }
  if (palindrome) {
    console.log(input + " is a palindrome");
  } else {
    console.log(input + " is no a palindrome");
  }
}

function runExerciseTen() {
  // A
  let Fox = "The quick fox jumped over the dog";
  Fox = Fox.replace("quick", "brown");
  Fox = Fox.replace("dog", "lazy dog");
  console.log(Fox);

  console.log();

  // B

  let word = readLine("Enter a word ");
  let word2 = readLine("Enter another word ");
  if (word === word2) {
    console.log("The words are the same");
  } else {
    console.log("The words are diffrent");
  }

  console.log();

  // C

  let donk = "Donkey";
  donk = donk.replace("D", "M");
  console.log(donk);

  console.log();

  // D

  let kålmården = `I am going to visit Kolmården zoo tomorrow. I am a big fan of the dolphin show. I may watch all dolphin shows 
during the day. I would like to take a gondola safari as well. I wish to visit Bamse and his team there.`;
  kålmården = kålmården.replaceAll("I", "We");
  kålmården = kålmården.replaceAll("am", "are");
  console.log(kålmården);

  console.log();

  // E

  let singer = "She is the popular singer";
  singer = singer.replace("popular", "most popular");
  console.log(singer);

  console.log();

  // F

  let friend = "A friend is the asset of your life";
  friend = friend.replace("A", "A true");
  console.log(friend);

  console.log();

  // G

  let seb = "My name is Sebastian Vallin";
  seb = seb.replace("My name is ", "");
  console.log(seb);

  console.log();

  // H

  let array =
    "Arrays are very common in programming, they look something like: [1,2,3,4,5]";
  array = array.replace(
    "Arrays are very common in programming, they look something like: [1,2,3,4,5]",
    "[1,4,5,6,7,8]"
  );
  console.log(array);
}

function runExerciseEleven() {
  let res = Number(readLine("Enter a Number "));
  let op = readLine("choose what you want to do: +, -, *, /  ");

  let number = Number(readLine("Enter a Number "));

  switch (op) {
    case "+":
      res += number;
      break;
    case "-":
      res -= number;
      break;
    case "*":
      res *= number;
      break;
    case "/":
      res /= number;
      break;
  }

  console.log(`Result is ${res}`);
}

function runExerciseTwelve() {
  function getUserInput(): number {
    const input = readLine("Enter a number less than 100: ");
    const num = Number(input);
    if (isNaN(num) || num <= 0 || num >= 100) {
      console.log("Invalid input. Please enter a number between 1 and 99");
      return getUserInput();
    }
    return num;
  }
  const userNumber = getUserInput();
  console.log("=== Using for loop ===");
  console.log("Ascending: ");
  for (let i = 1; i <= userNumber; i++) {
    console.log(i);
  }
  console.log("Descending: ");
  for (let i = userNumber; i >= 1; i--) {
    console.log(i);
  }
  console.log("=== using while loop ===");
  console.log("Ascending: ");
  let i = 1;
  while (i <= userNumber) {
    console.log(i);
    i++;
  }
  console.log("Descending: ");
  i = userNumber;
  while (i >= 1) {
    console.log(i);
    i--;
  }
  console.log("=== using do-while loop ===");
  console.log("Ascending: ");
  i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= userNumber);

  console.log("Descending: ");
  i = userNumber;
  do {
    console.log(i);
    i--;
  } while (i >= 1);
}

function runExerciseThirteen() {
  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const secretNumber = getRandomNumber(1, 10);
  let guess: number | null = 0;

  do {
    const input = readLine("Guess the secret number (1-10): ");
    if (input === null) {
      console.log("Game cancelled");
      break;
    }
    guess = Number(input);
    if (isNaN(guess) || guess < 1 || guess > 10) {
      console.log("Please enter a valid number between 1 - 10. ");
      continue;
    }
    if (guess === secretNumber) {
      console.log("Gratz you guessed right");
      break;
    } else {
      console.log(" Wrong! ");
    }
  } while (true);
  if (guess !== secretNumber) {
    console.log(`The secret number was: ${secretNumber}`);
  }
}

function runExerciseFourteen() {
  const table = [];
  for (let i = 1; i <= 10; i++) {
    table.push([
      i * 1,
      i * 2,
      i * 3,
      i * 4,
      i * 5,
      i * 6,
      i * 7,
      i * 8,
      i * 9,
      i * 10,
    ]);
  }
  console.table(table);
}

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

function runExerciseSixteen() {
  let total = 0;
  let num = Number(readLine("Give a Number: Enter 0 to stop:   "));
  let lund = 0;
  while (num != 0) {
    total += num;
    lund++;
    num = Number(readLine("Give a Number: Enter 0 to stop:   "));
  }
  const avg = lund > 0 ? total / lund : 0;
  console.log(`total ${total}`);
  console.log(`Average ${avg}`);
}

function runExerciseSeventeen() {
  function Fibonacci(n: number): void {
    let a = 0,
      b = 1;
    console.log(` Fibonacci sequence up to ${n} terms`);
    for (let i = 0; i < n; i++) {
      console.log(a);
      const next = a + b;
      a = b;
      b = next;
    }
  }
  Fibonacci(Number(readLine("Write a random Number ")));
}

function runExerciseEighteen() {
  console.log("Am I here or am I not here? That is the question. ");
}

function runExerciseNineteen() {
  function calculateTriangleArea(width: number, height: number): number {
    return 0.5 * width * height;
  }
  const triangleHeight: number = Number(readLine("Height "));
  const tringleWidth: number = Number(readLine("Width "));
  const area: number = calculateTriangleArea(triangleHeight, tringleWidth);

  console.log(`The area of triangle ${area}`);
}

function runExerciseTwenty() {
  function swap(a: number, b: number): [number, number] {
    //console.log(`Before swap a = ${a}, b = ${b}`);
    [a, b] = [b, a];
    console.log(`After swap a = ${a}, b = ${b}`);
    return [a, b];
  }
  let num1: number = 10;
  let num2: number = 20;

  console.log(`num1 = ${num1}, num2 = ${num2}`);
  [num1, num2] = swap(num1, num2);

  console.log(`num1 = ${num1}, num2 = ${num2}`);
}

function runExerciseTwentyOne() {
  let userInput = readLine("What year were you born? ");
  function calculateAge(birthdate: string) {
    let today = new Date();
    let birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }
  console.log(calculateAge(userInput));
}

function runExerciseTwentyTwo() {
  const userInput = readLine("Hey whats your name ? ");
  const userInput_1 = readLine(`Hello ${userInput} what year were you born? `);

  const Age = calculateAge(userInput_1);

  function calculateAge(birthdate: string) {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  console.log(calculateAge(userInput_1));

  if (Age >= 18) {
    const userInput_2 = readLine("Do you want a beer? ");
    if (userInput_2.toLowerCase() === "yes") {
      console.log("Here you go! ");
    } else if (userInput_2.toLowerCase() === "no") {
      console.log("suit yourself ");
    }
  } else if (Age <= 18) {
    const userInput_2 = readLine("You too young, do you want soda insteed ? ");
    if (userInput_2.toLowerCase() === "yes") {
      console.log("Here you go! ");
    } else if (userInput_2.toLowerCase() === "no") {
      console.log("suit yourself! ");
    }
  }
}

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
