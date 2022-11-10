//three variables

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate); //function to calculate the wage on employee
}

//we refer to this implementation as procedural

//we have variables on one side, and functions on the other side

//objected way to solve this problem on file: objectedFix.js