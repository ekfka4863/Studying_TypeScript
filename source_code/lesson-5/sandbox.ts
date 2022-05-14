let character: string = 'mario';
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;
// console.log(age);

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];   // cf. when declaring the type of ninjas, initializing can be done as well at the same time

ninjas.push('ryu');
ninjas.push('chun-li');
console.log(ninjas);

// union types
let mixed: (string|number|boolean)[] = [];  // cf. variable mixed can be either an array of string -, number -, or boolean values. This is called 'union types' -> e.g. ['hello', 20, false]
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);

let uid: string|number; 
uid = '123';
uid = 123;
// uid = false; // error 

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};
// ninjaTwo = { name: 'ken', age: 20, skills: [] };  // error -> array ninjaTwo should be exactly same as it is declared initially
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };