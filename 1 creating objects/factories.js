//Object literal syntax is not a good way of creating an object and duplicate it
//because of the copying pasting of its methods.
//Object literal syntax is only a problem only if the object has behavior 

//As about: if the object have one or more methods; it is said that the object has 'behavior'
//like a person that can do many things.

//The solution to duplicate it is to use a factory or a constructor function.
//The following is a factory function:

//Define the function:

function createCircle(radius){
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

//call the function to create a new circle:

const circle = createCircle(1);
circle.draw();

//this is called factory function



