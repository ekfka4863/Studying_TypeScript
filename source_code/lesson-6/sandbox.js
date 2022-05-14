var age = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);
var mixed = []; // cf. array mixed can contain any type of values
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);
var ninja; // cf. inside of an object called ninja any type of values can be bound to 'name' - and 'age' property
ninja = { name: 'yoshi', age: 25 };
console.log(ninja);
ninja = { name: 25, age: 'yoshi' };
console.log(ninja);
