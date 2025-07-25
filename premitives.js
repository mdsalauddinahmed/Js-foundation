// Number

let balance = 120;

console.log(typeof balance);

let anotherBalance = new Number(120);

// console.log(anotherBalance.valueOf());


// boolean

let isActive =true;

let isReallyActive = new Boolean(true);
// console.log(typeof isActive);


// null and undefined
let firstName = null;
let lastName;

console.log(firstName);
console.log(lastName);

//string
let firstName1="Md Salauddin";
let lastName1 ="hola";

let userName =firstName1+ " " + lastName1;
console.log(userName); // Md Salauddin hola
let greeting = `Hello ${userName}`;

console.log(greeting); // Hello Md Salauddin hola

//Symbol
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // false

console.log(sym1);