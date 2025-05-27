//primitive data types=>
    //7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3

const islogged=false
const outsideTemp=null

const Id=Symbol('123')
const anotherId=Symbol('123')

console.log(Id===anotherId);

// const bigNumber=384653195136063876n
console.log(typeof bigNumber)

//reference type or non premitive=>
    //Arrays,Objects,Finctions

const heros=["shaktiman","naagraj","doga"];

let myObj={
     name:"ambuj",
     age:22,
}
const myFunction=function(){
    console.log("hello world");
}

console.log(typeof myObj)