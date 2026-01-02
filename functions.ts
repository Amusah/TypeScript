 function add(n1: number, n2: number): number{
  return n1 + n2;
 }

 function printResult(num: number){
  console.log('Result: ' + num);
 } 

 function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
  const result = n1 + n2;
  cb(result);
 }

 printResult(add(5, 12));

 let combineValues: (a: number, b: number) => number;
 combineValues = add;

 console.log(combineValues(10, 10));

 addAndHandle(10, 12, (result) => {
  console.log(result);
 });