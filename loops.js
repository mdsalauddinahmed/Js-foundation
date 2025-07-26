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
// console.log(countdown); // Output: 5, 4, 3, 2, 1, 0


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
   
// console.log("Total sum is: " + total); // Output: 6


let multiplicationTable = [];
let numbers=[2,4,6];
for(let t=0;t<numbers.length;t++){
    let mul=numbers[t]*2;
    multiplicationTable.push(mul); // This adds the multiplication result to the table
    
}
// console.log(multiplicationTable);

const citiess= ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi"];
let cityList = [];

for (let j = 0; j < citiess.length; j++) {
    // cityList.push(citiess[j]); // This adds each city to the cityList
    // cityList[j] = citiess[j]; // This assigns each city to the corresponding index in cityList
    // cityList.unshift(citiess[j]); // This adds each city to the beginning of cityList
    // cityList.shift(citiess[j]); // This removes the first element and adds each city to the beginning of cityList
    // cityList.splice(j, 1, citiess[j]); // This inserts each city at the current index in cityList
}
// console.log( cityList ); // Output: List of cities

//Loops Chalanges
const SumOfN=()=>{
    const numbers=[1,2,3,4,5,6,7,8,9,10];
    let sum=0;
    for(const n of numbers){
        sum=sum+n;
    }
    return sum;
}
console.log(SumOfN())



// const printMultiplicationTable=n=>{
//     for(let i of n){
//         let result=i* i;
//         console.log( `${i} * ${i} =  ${result} `);
//     }
    
// }
// printMultiplicationTable([2,3,4,5,6]);

const printMultiplicationTable=n=>{
    let table=[];
    for(let i=1;i<=10;i++){
        let result=n* i;
        table.push( `${n} * ${i} =  ${result} `);
    }
    console.log(table)
    
}
printMultiplicationTable(2);





//Count Vowel and consonents from a sentence

function countVowels(n){
   let VowelCoun=0;
   let totalConsonet=0;
    for(let i=0; i<n.length;i++){
        
        if(n[i]=='a' || n[i]=="A"|| n[i]=='e' || n[i]=="E"||n[i]=='i' || n[i]=="I"||n[i]=='o' || n[i]=="O"||n[i]=='u' || n[i]=="U"){
          VowelCoun=VowelCoun+1;
          
        }else{
            totalConsonet=totalConsonet+1;
            
        }
       
    }
    console.log(`total vowels are ${VowelCoun}`)
    console.log(`Total Consonents are ${totalConsonet}`)
}
// countVowels('this is your last day at this college')