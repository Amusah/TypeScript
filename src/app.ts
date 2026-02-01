interface Person {
  readonly id: number;
  name: string;
  age: number;
  nickname?: string;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  id: +crypto.randomUUID().split("-")[0],
  name: "Henry Amusah",
  age: 30,

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet("Hey y'all! this is");

/****************** Using Interface with Classes******************/
interface Greetable {
  readonly id: number;
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string){
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user2: Greetable;

user2 = new Person('Max');

user2.greet("Hey y'all! this is");
