function stringToNumber(test){
    let num= Number(test);
 if(num){
    console.log("its a number")
 }else{
    console.log("Not a Number");
 }


}
// stringToNumber("234")

function flipBoolean(input){
    let a=true;
 
    if(a==input ){
        return false;
    }else return true;
}
// console.log(flipBoolean(0))

function whatAmI(str){
    if(typeof str === "string"){
        console.log(" I am a string")
    }else{
        console.log(" I am a number")
    }
}
// whatAmI(123)
// whatAmI("motherfucker")


function isItTruthy(input){
    if(input){
        console.log("it's thruthy");
    }else{
        console.log("It's falsey")
    }
}

isItTruthy("hello world")