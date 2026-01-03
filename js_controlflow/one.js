//if

const isLoggedIn=true
if(isLoggedIn){

}

//comparison 
//<,>,<=,>=,==,!=,===

///switch conditions

const month=3

switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;

    default:
        console.log("default case match")
        break;
}


//falsy values

//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},function(){}



//Nullish Coalescing Operator(??) : null undefined

let val1;
val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15
// val1=null ?? 10 ?? 15

console.log(val1)


//Terniary operator

//condition ? true : false

const iceTeaPrice =100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")