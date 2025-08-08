const activeUsers: string[] = [];
activeUsers.push("Tony");
// activeUsers.push(12)

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
// ageList[0] = 'as'

/**************Alternate Arrya type declaration********************/
const boolList: Array<boolean> = [];
const bools: boolean[] = [];

// bools.push()

//custome type
type Points = {
  x: number;
  y: number;
};

const coords: Points[] = [];
coords.push({ x: 90, y: 77 });


/**************** MULTIDIMENSIONAL ARRAYS ***************/
const board: string[][] = [
  ["X", "Y", "Z"],
  ["X", "Y", "Z"],
];

const boards: string[][][] = [
  [["X", "Y", "Z"]],
  [["X", "Y", "Z"]],
];



/**************************** EXCERCISE ****************************/

// PART 1
const ages: number[] = [];


// Part 2
const gameBoard: string[][] = [['Nerd', 'Go', 'Rust']];

// Part 3
type Product = {
  name: string;
  price: number;
};

const getTotal = (products : Product[]): number => {
  // return product.reduce((acc, cur) => {acc.price + cur.price})

  let total = 0;
  for(let product of products){
    total += product.price;
  }
  return total;
}