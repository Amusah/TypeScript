// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]
// } = {

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } = {
//   name: 'Henry',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// person.role[1] = 10
// person.role.push('admin');

let favoriteActivities: string[];
favoriteActivities = ['Sports']
favoriteActivities = ['Sports'];

console.log(person.name);
for (const hobby of person.hobbies){
  console.log(hobby);
}

/******************Enums****************/

enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
  name: "Henry",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};