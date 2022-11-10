// constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log(draw);
    }
}
const another = new Circle(1); //search on the class video later for why the 'Circle' with the first letter on high cap 
//instead of normal.

//The 'this.' function is a property of an execution context (global, 
//function or eval) that, in non–strict mode, is always a reference 
//to an object and in strict mode can be any value by default 'this.' 
//points to the global object.
//
//
//The 'new' operatorThe new operator lets developers create 
//an instance of a user-defined object type or of one of the built-in object 
//types that has a constructor function.

//FF: if running a code in the browser the global object is the window, if running inside node environment
//the global object is global. 
//
//and by running the above code with console.log and deleting the 'new.' the output will be something about the 
//pointing out:
//'this.' 
//window 
//{postMessage: f, blur:...}
//
//and this is not a very good sign as because 
//messing with global object in the browser, and
//thats a bad practice, as they're available everywhere in the application 
//it is possible that one function or another will modify the value of this variables
//accidentally creating bugs in the application.
//
//
//when using a new operator three things happen:
//
//first is the creation of a empty object,
//then it'll set the 'this.' to point to that object,
//and then return that object from the function, not needing to add a return statement.
//