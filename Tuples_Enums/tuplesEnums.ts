/******************TUPLES AND ENUMS***************/
/*
  tupples are special type that only exists in typeScript. 
  they're like array of fixed lengths and ordered with specific
  types - like super rigid arrays.
*/
const color: [number, number, number] = [255, 0, 45];


type HTTPResponse = [number, string];

const res: HTTPResponse = [200, 'OK'];