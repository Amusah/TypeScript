/*
  they're similare to type aliases and serves almost the same purpose 
  with slight difference in syntax. they're mainly used for objects
*/

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 223 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
}

const runner: Person = {
  id: 777,
  first: "Eliud",
  last: "Kipchoge",
  nickname: "Decoy",
};
