///////////////////////////////////////
//  Hoisting
/*
calculateAge(1990);

function calculateAge(year) {
    console.log(2016 - year);
    
}
//reteirment(1990);

var reteirment = function(year){
    console.log(65 -( 2016- year));
}

console.log(age);
var age = 23;

function foo(){
    var age = 65;
    console.log(age);
    
}
foo();
console.log(age);
*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
//  The this keyword
/* calculateAge(1985);
function calculateAge(year) {
    console.log (2016 - year);
    console.log(this);
}
*/

/*
var john = {
    name: 'john',
    yearOfBirth: 1998,
    calculateAge: function() {
        console.log(this);
        console.log(2016 -this.yearOfBirth);
        
        function innerfunction(){
            console.log(this);
        }
        innerfunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/


