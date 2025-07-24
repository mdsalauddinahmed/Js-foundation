// Json

const student = {

    name:'amir khan',
    age:34,
    movies:['king khan','alif laila']
}


const studentJson =JSON.stringify(student);
console.log(studentJson);
console.log(student);

const studentobj = JSON.parse(studentJson);

// console.log(studentobj)

// Fetch
// fetch('url')
// .then(res=>res.json())
// .then(data =>console.log(data))

const keys= Object.keys(student);
const values = Object.values(student);


// console.log(keys)

const num=[ 45,23,2,34,54,22,32]
const ecNum=num.forEach(p=>console.log(p));
// console.log(ecNum);

const products=[
    {name:'laptop',price:12000, brand:'len',color:'silver'},
    {name:'pc',price:98000, brand:'len',color:'sred'},
    {name:'phone',price:13000, brand:'len',color:'green'},
    {name:'mbile',price:32000, brand:'len',color:'gold'},
    {name:'Iphn',price:120000, brand:'len',color:'white'},
];

const eachproduct= products.forEach(p=>console.log(p.name));
const newProduct = {name:'webcam',price:700,brand:'lenevo'};

const newProducts= [...products,newProduct];
// console.log(newProducts)

const filter =newProducts.filter(p=>p.name !=='phone');
console.log(filter);