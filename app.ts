// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]
// } = {

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]
} = {
  name: 'Henry',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

person.role.push('admin');

let favoriteActivities: string[];
favoriteActivities = ['Sports']
favoriteActivities = ['Sports'];

console.log(person.name);
for (const hobby of person.hobbies){
  console.log(hobby);
}