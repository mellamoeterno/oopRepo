//creating an object literal syntax

//add key value pairs
const circle = {
     radius: 1, //member
     location: { //member
        x:1,
        y:1
     },
     //add another key value pair
     //with the value of a function for drawing the circle
     draw: function() { //method
        console.log('draw');
     }
};

//This circle has 3 members: radius, location, and, draw.
//If a member is a function we we refer to that as a METHOD.
//
//In OOP properties and methods are fundamentally different, because properties use to hold
//value.
//A function or a method is used to define some logic.

//Now with the circle object we can access its properties with dot notation:

circle.draw(); //dot.notation
//^^Property accessors provide access to an object's properties by using the dot notation or the bracket notation.

//This will call the circle object and the draw method