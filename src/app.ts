class Department {
  name: string;


  constructor(n: string) {
    this.name = n;
  }

  description(this: Department) {
    console.log(`Department: ${this.name}`);
  }



}

const accounting = new Department("Finance");
console.log(accounting);
accounting.description();


const accountingClone = { name: 'Henry', description: accounting.description }
accountingClone.description();
