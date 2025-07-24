// '',0,false,null,undefine

// "amir",4,true,{},[]

let mu=9;

if(!mu){
    mu=mu*9;
}else{
    mu=0;
}
console.log(mu);

const money=120;

let food;

// if(money>100){
//     food='biriany';
// }else{
//     food='simple food';
// }
// console.log(food);

// let food1= money> ? 'fcook' : 'ruti';

let place=200;

let food1= (money>110 && place>200)? 'jamdani':'pakistani';
console.log(food1);


//  number to string

const input = 320;
const str=input+'';
// console.log(str);

// string to number

const str1='450';
const num3=+str1;
// console.log(num3);


const isActive = false;
const showUser = ()=>console.log("display user");
const hideUser = ()=>console.log("hide user");

// isActive? showUser():hideUser();

// isActive && showUser();
isActive || hideUser();
