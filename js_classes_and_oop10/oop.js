const user={
    username:"ambuj",
    loginCount:8,
    signedIn:true,

    getUserDetail:function(){
        // console.log("get user details from database")
        // console.log(`Username: ${this.username}`)
        // console.log(this)// here this represent current context
    }
}

// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this)


// Constructor
function User(username,loginCount,isLOggedin){
  this.username=username
  this.loginCount=loginCount
  this.isLOggedin=isLOggedin

  this.greeting= function(){
    console.log(`welcome ${this.username}`)
  }

  return this
}

const userOne =new  User("ambuj",12,true)
const userTwo=new  User("chai aur Code",12,false)
//what happen when we use new keyword-
//1. it creates a new object whic known as an instance
//2.a constructor function is called 
//3.these all info get injected into this keyword
//4.we get these from function

console.log(userOne.constructor);
// console.log(userTwo);
