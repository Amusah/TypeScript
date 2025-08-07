/****************Object Types****************/
// Object type annotations //

type Point = {
  x: number;
  y: number;
};

//-- parameters
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: "Thomas", last: "Sankara" });

//--object as variables type
let coordinate: Point = { x: 34, y: 2 };

//--return type annotation
const randomCoordinate = (): Point => {
  return { x: Math.random(), y: Math.random() };
};

/********************Excess Properties**********************/
//printName({ first: "Henry", last: "Amusah", age: 30 });
/* 
  in the code above, the third arguement would have 
  been ignored in Js but not TS however 
  the approach below works...
  it will just check and select the ones 
  important
*/
const singer = { first: "Henry", last: "Jagger", age: 30 };
printName(singer);

/*************** Creating Type Aliases ****************/
// making reusable types
function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}
