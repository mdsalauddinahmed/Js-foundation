// 1
// function makeTea(typeofTea){
//   console.log(`making a tea which name is ${typeofTea}`)
// }

// makeTea("green tea")


// 2

function orderTea(teaType){

  function confirmOrder(tea) {
    console.log(`order confirm for ${tea}`)
}
confirmOrder(teaType);
}
orderTea( "green tea");

//3
function calculateTatal(price,quantity){
    let totalPrice=price*quantity;
    console.log(totalPrice);
}

calculateTatal(10,10);


// arrow function

const calculateTeaPrice=(price,q)=>{ return price*q;}

// let totalPrice=calculateTatal(30,3);
// console.log(totalPrice);




const makeTea = (madetea)=>{
        console.log(`Making ${madetea}`);}


const processTeaOrder = (data)=>{
    // const teaTypes = ['green tea', 'black tea', 'herbal tea'];
    // const selectedTeas = [];

    // for (const tea of teaTypes) {
    //     if (tea === 'herbal tea') {
    //         continue; // Skip herbal tea
    //     }
    //     selectedTeas.push(tea);
    // }
    // console.log("Selected teas: ", selectedTeas);


 return data("earl grey tea")

     
    }
// console.log(processTeaOrder(makeTea))

function createDrinkMaker() {
  return function(drinkType) {
    return `Making ${drinkType}`;
  };
}

let drinkMaker = createDrinkMaker();
console.log(drinkMaker("black coffee"));  

//  function createTeaMaker() {
//   function maketeas(teaType) {
//     return `Making tea ${teaType}`;
//   }
//   return maketeas(teatype); // return the result
// }

// let teamaker = createTeaMaker("green tea");
// console.log(teamaker); // Making tea green tea

// its higher order function
function createTeaMaker(name) {
  return function(teaType) {
    return `Making ${teaType}  ${name}`;
  };
}

let teaMaker = createTeaMaker("amir khan");
console.log(teaMaker("green tea"));

