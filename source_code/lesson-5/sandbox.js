var character = 'mario';
var age;
var isLoggedIn;
// age = 'luigi';
age = 30;
// console.log(age);
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
var ninjas = []; // cf. when declaring the type of ninjas, initializing can be done as well at the same time
ninjas.push('ryu');
ninjas.push('chun-li');
console.log(ninjas);
// union types
var mixed = []; // cf. variable mixed can be either an array of string -, number -, or boolean values. This is called 'union types' -> e.g. ['hello', 20, false]
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// uid = false; // error 
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
// ninjaTwo = { name: 'ken', age: 20, skills: [] };  // error -> array ninjaTwo should be exactly same as it is declared initially
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };
