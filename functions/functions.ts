///********************FUNTION PARAMETER ANNOTATION*******************/

function square(num: number) {
  // num.toUpperCase();
  return num * num;
}

function greet(person: string) {
  return `Hi there, ${person}!`;
}

square(3);
greet("Nerdy");
// square('asd')
// square(true)

// Multiple parameters of different types
const doSomething = (person: string, age: number, isBlessed: boolean) => {};
doSomething("Henry", 30, true);

//Default parameters
function salute(person: string = "Stranger") {
  return `Hi there, ${person}!`;
}

// Return Type Annotations
function calc(num: number = 99): number {
  // expected to return a number
  return num * num;
}

function mystery(num: number) {
  // multiple return types
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const add = (x: number, y: number): number => {
  return x + y;
};

// implicit type inference of Anon functions
const colors = ["red", "orange", "yellow"];
colors.map((colors) => {
  return colors.toUpperCase();
  // with this anon func, typscript implicitly infers the parameter type
});

//Void type
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// Never type (a function that doesn't finish running or returns)
function makeError(msg: string): never {
  throw new Error(msg);
}

// eg. 2
function gameLoop(): never {
  while (true) {
    console.log("game loop running");
  }
}
