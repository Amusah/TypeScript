class Department {
  public name: string; // default tho
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  description(this: Department) {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Finance");
console.log(accounting);
accounting.description();

// accounting.employees[0] = 'Selassie';
accounting.addEmployee('Henry');
accounting.printEmployeeInformation();


// const accountingClone = { name: 'Henry', description: accounting.description }
// accountingClone.description();
