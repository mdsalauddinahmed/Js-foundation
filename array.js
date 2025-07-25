// 1
let teaFlavors = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea", "Herbal Tea"];
let firstTea = teaFlavors[0];
// console.log(firstTea);


let teaFlavor=new Array("Green Tea", "Black Tea", "Oolong Tea", "White Tea", "Herbal Tea");

//2

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
let thirdCity = cities[2];
// console.log(thirdCity);
//3

let teaTypes = ["Green", "Black", "Oolong", "White", "Herbal"];
 teaTypes[1]="jasmine tea";
//  console.log(teaTypes);


// 4

let citiesVisited = ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi"];

citiesVisited.push("Barisal");
citiesVisited[citiesVisited.length] = "Rangpur"; // Replacing last element
// console.log(citiesVisited);


// 5

let teaOrders = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea", "Herbal Tea"];
teaOrders.pop();
teaOrders.shift(); 
teaOrders.unshift("Chamomile Tea"); // Adds "Chamomile Tea" at the beginning


// Removes the first element
console.log(teaOrders);


//6
//7


//8

let europeanCities = ["paris","Rome"];
let asianCities = ["Tokyo", "Seoul", "Beijing"];

let worldcities = europeanCities.concat(asianCities);
// console.log(worldcities);


//9

let teaMenu = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea", "Herbal Tea"];
let menulength = teaMenu.length;
console.log(menulength); // 5


//10

let cityBucketList = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
let ischicagoInList = cityBucketList.includes("Chicago");
console.log(ischicagoInList); // true