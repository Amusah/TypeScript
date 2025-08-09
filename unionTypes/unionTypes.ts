let age: number | string = 21;
age = 23;
age = '24'


type Point = {
  x: number;
  y: number;
}

type Loc = {
  lat: number;
  lon: number;
}

let coordinates: Point | Loc = {x: 1, y: 34};
coordinates = {lat: 321.213, lon: 254.3565}