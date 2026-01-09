// let myName="ambuj   "
// console.log(myName.length);
// console.log(myName.trueLength());


let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy poer is ${this.spiderman}`);
    }
}
// object me  nayi property 'ambuj' add kr di to jitne bhi log(array,string,function etc.) object se inherit huye hain sabme ye nayi proprty dikhegi

Object.prototype.ambuj=function(){
    console.log(`ambuj is present in all objects`)
}

//array me nayi  property 'heyambuj' add kr di to sare arreys me present rahegi but objects me nahi rahegi

Array.prototype.heyambuj=function(){
    console.log(`ambuj is present in all arrays`)
}

// heroPower.ambuj()
// myHeros.ambuj()
// myHeros.heyambuj()
// heroPower.heyambuj()


// Inheritance

const User={
    name:"chai",
    email:"chai@google.com"
}

const Teacher={
    makeVideos:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
   makeAssignment:"JS assighment",
   fullTime:true,
   __proto__:TeachingSupport//TASupport inherits properties from TeachingSupport.
// It sets TeachingSupport as the prototype of TASupport

}

Teacher.__proto__=User// Teacher is inheriting the properties oof User


// Modern syntax for inheritance
Object.setPrototypeOf(TeachingSupport,Teacher)//TeachingSupport can inherit the properties of Teacher


let anotherUsername="ChaiAurCode    "
 String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
 }

 anotherUsername.trueLength()
 "ambuj yadav   ".trueLength()
 "aryan".trueLength()