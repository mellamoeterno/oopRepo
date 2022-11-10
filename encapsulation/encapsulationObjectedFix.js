
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

//three properties



function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate); 
}
//base salary
//overtime and rate


let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() { //function with no parameters 
        return this.baseSalary + (this.overtime * this.rate);
    }
};
//and method getWage
employee.getWage();