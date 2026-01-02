
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)


// const result=addTwoNumbers(3,5)
// console.log("result: ",result)



function addTwoNumbers(number1,number2){
    // let result=number1 + number2
    // return result

    return number1+number2
}
const result=addTwoNumbers(3,5)

// console.log("result: ",result)


function loginUserMessage(username="sam"){
    if(username===undefined){//if(!username)
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ambuj"))
console.log(loginUserMessage())

