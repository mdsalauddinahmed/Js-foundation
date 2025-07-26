 let teaItems = ["Green Tea", "Black Tea", "Herbal Tea", "Chai Tea","chai"];
 const selectedtea=[];

 for (let i = 0; i < teaItems.length; i++) {

    if(teaItems[i]==="chai") {
      
       break;
          
      }
    selectedtea.push(teaItems[i]);
         
 }
// console.log(selectedtea);

const allCities =['Dhaka', 'Chittagong', 'Sylhet', 'Khulna', 'Rajshahi', 'Barisal', 'Rangpur'];
// const selectedCities = allCities.filter(city => city.startsWith('Barisal'));
// console.log(selectedCities);  
// const selectedCities = [];
// for(let i = 0; i < allCities.length; i++) {
//    if( allCities[i]!="Barisal"){
//          selectedCities.push(allCities[i]);
         
//    }  
// }
// console.log(selectedCities);

let visitedCity=[];

for(let i=0; i<allCities.length;i++){
    if(allCities[i] === "Barisal"){
        continue
    }
    visitedCity.push(allCities[i]);
}
// console.log(visitedCity)



let numbers = [1, 2, 3, 4, 5];
const smallNumbers = [];

let num;

for(num of numbers){
    if(num ===4){
        break;
    }
   smallNumbers.push(num)

 
}
// console.log(smallNumbers);  


let teaTypes = ['cha','green tea','herbal tea','black tea'];
let preferredTeas = [];

for (const tea of teaTypes){
    if(tea === 'herbal tea'){
        continue
    }
    preferredTeas.push(tea);
}
// console.log(preferredTeas)


// for in loop which is used to iterate over the properties of an object

const CitiesPopulation = {
    Dhaka: 8906039,
    Chittagong: 4470000,
    sylhet:5000000,
    khulna: 2500000


}
const CitiesNewPopulation = {};
const largeCities = [];
for (const city in CitiesPopulation){

    // if (city === 'sylhet') {
    //     break; // Skip the city 'sylhet'
    // }

    // if (city === 'khulna') {
    //     continue; // Skip the city 'khulna'
    // }
    

    CitiesNewPopulation[city] = CitiesPopulation[city] * 2;  

    if(CitiesNewPopulation[city]>10000000){
        largeCities.push(city)
    }



}
// console.log(largeCities)



//forEach loop which is used to iterate over arrays or collections


let teaFlavors = ['Green Tea', 'Black Tea', 'Oolong Tea', 'White Tea', 'Herbal Tea'];
const availableTeas =[];

teaFlavors.forEach((tea) => {
    
    if(tea ==="White Tea"){
       return;  
    }
    availableTeas.push(tea);
  
});
// console.log(availableTeas);



let cities = ['Dhaka', 'Chittagong', 'Sylhet', 'Khulna', 'Rajshahi'];
let travelledcities =[];

cities.forEach((city) => {
    if(city === "Khulna"){
        return;  
    }
    travelledcities.push(city);
})
// console.log(travelledcities); 




let num2=[2,5,7,9];

let doubleNumbers=[];

for(let i=0;i<num2.length;i++){
    if(num2[i]===7){
        continue;
    }
    doubleNumbers.push(num2[i]*2)
}
// console.log(doubleNumbers);

let teaItem=["cha","green tea", "black tea","jasmine tea","herbal tea"]
let smallName=[];

for(const tea of teaItem){
    if(tea.length>10){
        continue;
    }
    smallName.push(tea);
}
console.log(smallName);
