let sum =0;
// for (let i = 1; i <= 10; i++) {
//     sum += i; // This adds the current value of i to sum
// }
// console.log("Sum of numbers from 1 to 10 is: " + sum); // Output: 55


// let a=5;
// while (a < 10) {

//     console.log("Current value of a is: " + a);
//     sum += a; // This adds the current value of a to sum
//     console.log("Sum of numbers from 5 to 9 is: " + sum);
//     a+=2; // Increment a by 1
// }
 // Output: 30
let countdown =[];
let i=5;
while (i >=1) {
    countdown.push(i); // This adds the current value of i to countdown
    i--; // Decrement i by 1
}
console.log(countdown); // Output: 5, 4, 3, 2, 1, 0


//do-while loop

let teaCollection =[];
let tea;
// do{
//     tea = prompt("Enter a type of tea (or 'exit' to stop):");
//     if (tea.toLowerCase() !== 'exit') {
//         teaCollection.push(tea); // This adds the entered tea to the collection
//     }
// }while (tea.toLowerCase() !== 'stop');

// console.log("Tea collection: " + teaCollection.join(", ")); // Output: List of entered teas



let total=0;
let k=1;

do{
     total += k; // This adds the current value of k to total
    k++; // Increment k by 1


}while (k <= 3) 
   
console.log("Total sum is: " + total); // Output: 6


let multiplicationTable = [];
let numbers=[2,4,6];
for(let t=0;t<numbers.length;t++){
    let mul=numbers[t]*2;
    multiplicationTable.push(mul); // This adds the multiplication result to the table
    
}
console.log(multiplicationTable);

const citiess= ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi"];
let cityList = [];

for (let j = 0; j < citiess.length; j++) {
    // cityList.push(citiess[j]); // This adds each city to the cityList
    // cityList[j] = citiess[j]; // This assigns each city to the corresponding index in cityList
    // cityList.unshift(citiess[j]); // This adds each city to the beginning of cityList
    // cityList.shift(citiess[j]); // This removes the first element and adds each city to the beginning of cityList
    // cityList.splice(j, 1, citiess[j]); // This inserts each city at the current index in cityList
}
console.log( cityList ); // Output: List of cities