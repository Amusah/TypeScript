class Department {
  // public name: string; // default tho
  // private readonly id: string;
  // private employees: string[] = [];
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
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

class ITDepartment extends Department {
  public admins: string[] = [];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}
const IT = new ITDepartment("d2", ["Henry"]);

console.log(IT);
IT.description();

// IT.employees[0] = 'Selassie';
IT.addEmployee("Henry");
IT.printEmployeeInformation();

// const accountingClone = { name: 'Henry', description: accounting.description }
// accountingClone.description();

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  addEmployee(name: string) {
    if (name === "Henry") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    console.log(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d1", []);
console.log(accounting);
accounting.description();

accounting.mostRecentReport = "end of year report";

accounting.addReport("we made it");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Henry");
accounting.addEmployee("Barbara");

// accounting.employees[0] = 'Selassie';
accounting.addEmployee("Henry");
accounting.printEmployeeInformation();

// const accountingClone = { name: 'Henry', description: accounting.description }
// accountingClone.description();
