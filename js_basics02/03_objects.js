//sinleton

//object literals 

// these are the two methods to create the objects

//object literals object creation 

const mySym=Symbol("key1")

const JsUser={
    name:"ambuj",
    [mySym]:"mykey1",//decleration of symbol in object
    "full name":"Ambuj Yadav",
    age:20,
    location:"ballia",
    isLoggedIn:false,
    email:"ambuj@gmail.com",
    lastLogindays:["Monday","Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])

JsUser.email="ambuj@rampur.com"
// Object.freeze(JsUser)
JsUser.email="ambuj@barauli.com"
console.log(JsUser)


JsUser.greeting=function(){
    console.log(`hello JS User,${this.name}`);
}
JsUser.greeting2=function(){
    console.log("hello JS User");
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());