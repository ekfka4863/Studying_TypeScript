let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character = 20;  // -> the type of the value can be changed
character = 'luigi'; 

// age = 'yoshi';  // -> the type of the value can be changed
age = 40;

// isBlackBelt = 'yes';  // -> the type of the value can be changed
isBlackBelt = true;

const circ = (diameter: number) => {  // the parameter 'diameter' should be number 
  return diameter * Math.PI;
};

// // console.log(area('hello'));
console.log(circ(7.5));  // 23.561944901923447
