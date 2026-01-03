const user={
    username:"ambuj",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username="ambuj"
//     console.log(this.username)/// this context is used only in object not in functions
// }

// const chai=function(){
//     let username="ambuj"
//     console.log(this.username)/// this context is used only in object not in functions
// }

// const chai=() => {/// arrow function
//     let username="ambuj"
//     console.log(this.username)
// }
// chai()



// ++++++++++ arrow function ++++++

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }


// const addTwo=(num1,num2) => num1+num2    ///another way of delering arrow function

// const addTwo=(num1,num2) => (num1+num2)// in this case it is called implicit return 


//returning object
const addTwo=(num1,num2) => ({username:"aryan"})

console.log(addTwo(3,4))