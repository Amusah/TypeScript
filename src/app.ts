type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Henry',
  privileges: ['create-server'],
  startDate: new Date()
}

type combinable = string | number;
type Numeric  = number | boolean;

type Universal = combinable & Numeric;