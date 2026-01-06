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

class ITDepartment extends Department{
  public admins: string[] = [];
  constructor(id: string, admins: string[]){
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
  constructor(id: string, private reports: string[]){
    super(id, 'Accounting');
  }

  addEmployee(name: string) {
    if(name === 'Henry'){
      return;
    }
    this.employees.push(name)
  }

  addReport(text: string){
    this.reports.push('text');
    console.log(text)
  }

  printReports(){
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d1", []);
console.log(accounting);
accounting.description();
accounting.addReport('we made it');
accounting.addEmployee('Henry');
accounting.addEmployee('Barbara');

// accounting.employees[0] = 'Selassie';
accounting.addEmployee("Henry");
accounting.printEmployeeInformation();

// const accountingClone = { name: 'Henry', description: accounting.description }
// accountingClone.description();
