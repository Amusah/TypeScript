let age: number | string = 21;
age = 23;
age = "24";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  lon: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, lon: 254.3565 };

/*************** Type Narrowing union type with functions****************/

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}
printAge(23);
printAge("77");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  } else {
    price * tax;
  }
}

const stuff: (number | string)[] = [1, 2, 3, "henry"];

const coord: (Point | Loc)[] = [];

/********************** Literal Types *******************/
let zero: 0 = 0;
// zero = 2;

let hi: "hi" = "hi";
// hi = 'koo'

let mood: "Happy" | "Sad" | "Mesmerized";
mood = "Sad";
// mood = 'angry'

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thusrday"
  | "Friday"
  | "Saturday"
  | "Sunday";

// let today: DayOfWeek = 'weds'




