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
doSomething('Henry', 30, true);


//Default parameters
function salute(person: string = 'Stranger'){
  return `Hi there, ${person}!`;
}
