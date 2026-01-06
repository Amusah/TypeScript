class Department {
  // public name: string; // default tho
  // private readonly id: string;
  private employees: string[] = [];

  constructor(public name: string, private readonly id: string) {
    // this.name = n;
  }

  description(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'd2'
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Finance");
console.log(accounting);
accounting.description();

// accounting.employees[0] = 'Selassie';
accounting.addEmployee("Henry");
accounting.printEmployeeInformation();

// const accountingClone = { name: 'Henry', description: accounting.description }
// accountingClone.description();
