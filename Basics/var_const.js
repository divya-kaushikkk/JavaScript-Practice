const rollNumber = 232390 //the value that is declared in const will not be changed later.

let stuName = "XYZ" // use let and const in modern js.

var stuClass = "BCA" //usually avoid var as it has functional and block scope.

coreSubject = "Operating System" // not a good way to declare variables.

let studentAge; // if no value is assigned, it will show undefined.
 
//For example we will try to change the value of rollNumber.

// rollNumber = 232391
// console.log(rollNumber); -> This is not allowed.

console.log(rollNumber);   // 232390
console.log(stuName);      // XYZ
console.log(stuClass);     // BCA
console.log(coreSubject);  // Operating System

//instead of writing 4 lines, we can use console.table() to avoid rewriting.

console.table([rollNumber, stuName, stuClass, coreSubject, studentAge]); // Output will be in tabular form.