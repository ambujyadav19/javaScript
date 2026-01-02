//1.primitive data types=>(these all are call by value)
    //7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3

const islogged=false
const outsideTemp=null

const Id=Symbol('123')
const anotherId=Symbol('123')

console.log(Id===anotherId);
//here Id and anotherId are not same because the return type of both is different because of 'Symbol'

const bigNumber=384653195136063876n
// console.log(typeof bigNumber)

//2.Reference type or Non premitive=>
    //Arrays,Objects,Finctions
//array 
const heros=["shaktiman","naagraj","doga"];


//object
let myObj={
     name:"ambuj",
     age:22,
}

//function
const myFunction=function(){
    console.log("hello world");
}

console.log(typeof heros)


//++++++++++++++++++++
//two type of memory in JS 
//1.stack memory =>copy hi milta hai
//2.Heap memory=>isme change original value me hi hota hai
//Stack(primitive data types)=>copy of original memory , 
//  Heap(non primitive)=> reference of originam memory

let vill_name="rampur"
let another ="barauli"

another ="ballia"

console.log(another)
console.log(vill_name)

let userOne={
    email:"user@google.com",
    upi:"67574324@abl"
}
 usertwo=userOne
 usertwo.email="ambuj@google.com"

console.log(userOne)
console.log(usertwo)
