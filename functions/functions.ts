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
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const add = (x: number, y: number): number => {
  return x + y;
};

const colors = ["red", "orange", "yellow"];
colors.map((colors) => {
  return colors.toUpperCase();
  // with this anon func, typscript implicitly infers the parameter type
});

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}
