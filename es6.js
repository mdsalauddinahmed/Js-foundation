const numbers = [4,6,7,4,3,5,6];

const student = {
    name:"Ammir khan",
    age:60,
    works:['king','game of thrones']
};

const about=` My name is ${student.name} age of ${student.age} has numbers ${numbers[3]} also liked movies ${student.works[0]}}`

console.log(about)
numbers.push(8);
console.log(numbers)