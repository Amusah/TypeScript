/****************Object Types****************/
// Object type annotations //

// type alias
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
printName({ first: "Henry", last: "Amusah", age: 30 });
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

/***************** Nested Object Type Annotation *****************/
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

const mySong: Song = {
  title: "Adagio molto e cantabile",
  artist: "Beethoven",
  numStreams: 9773323,
  credits: {
    producer: "Henry Amusah",
    writer: "Ludwig Van Beethoven",
  },
};

function calculatePayout(song: Song) {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const earnings = calculatePayout(mySong);
console.log(earnings);

printSong(mySong);

type coorPoint = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: coorPoint = { x: 1, y: 3 };

// the ? symbol makes it optional

/*************** The readonly Modifier **************/
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 127849,
  username: "Henry",
};

console.log(user.id);
/* user.id = 83232 // invalid */

/**************** Intersection Types ***************/
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "Blue",
};

// Example 2 // adding on additional types
type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: 'Austrian Shepherd',
  age: 7
};



/********************** EXCERCISE **********************/
// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly

type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  }
}

const dune: Movie = {
  title: 'Dune',
  originalTitle: 'Dune Part One',
  director: 'Denis Villeneuve',
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327834,
    grossWorldwide: 99898953
  }
};

const cats: Movie = {
  title: 'Cats',
  director: 'Tom Nerdy',
  releaseYear: 2019,
  boxOffice: {
    budget: 9500000,
    grossUS: 89989834,
    grossWorldwide: 93434349,
  }
}

// Excercise 2
const getProfit = (movie : Movie): number => ( movie.boxOffice.grossWorldwide - movie.boxOffice.budget );