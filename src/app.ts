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

user1.greet('Hey y\'all! this is');
