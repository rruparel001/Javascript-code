/////////////////////////////
// Function constructor
/*

var john = {
    name: 'john',
    yearOfBirth: 1998,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
    
}

Person.prototype.calculateAge = function(){
        console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('john', 1998, 'teacher');

var Jane = new Person('Jane', 1997, 'designer');

var Mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
Jane.calculateAge();
Mark.calculateAge();

console.log(john.lastName);
console.log(Jane.lastName);
console.log(Mark.lastName);
*/


///////////////////
//Object.create
/*
var personProto = {
    calculateAge: function(){
    console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var Jane = Object.create(personProto, {
    name: { value : 'jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
});

*/
/////////////////////////////
// Primitives vs objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//objects

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//function
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change (age, obj);

console.log(age);
console.log(obj.city);

*/

/////////////////////////////
// Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc (arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc (ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log (ages);
console.log(fullAges);
console.log(rates);
*/

/////////////////////////////
// Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher'){
        return function(name) {
            console.log('What subject do you teach , ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('john');
designerQuestion('john');

interviewQuestion('teacher')('mark');
*/

// IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}) ();


(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
}) (5);

*/

//closures 

/*

function interviewQuestions(job) {
    return function(name){
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher'){
            console.log('what subject do you teach, ' + name+ '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}


interviewQuestions('teacher')('John');

*/
//bind ,call and apply

/*

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if (style === 'formal') {
            console.log('Good'+ timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a' + this.job + 'and I\'m ' + this.age + 'years old.'); 
        
         } else if (style === 'friendly'){
             console.log ('Hey!! I\'m ' + this.name + ', I\'m a' + this.job + 'and I\'m ' + this.age + 'years old. Have a nice' + timeOfDay + '.');
         }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};


john.presentation('formal', 'morning');

john.presentation.call(emily,'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john,'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind (emily, 'formal');
emilyFormal('afternoon');



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc (arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

*/

