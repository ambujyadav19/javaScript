//Promise is an object
// here promiseOne is an instance of object Promise

const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography ,network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()//resolve is used in a Promise to tell JavaScript:

// “My async work is finished successfully. Here is the result.”
    },1000)

})

// .then is used to associate with attribute 'resolve' in promise object

promiseOne.then(function(){
    console.log("Promise consumed")
})


new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log("Async tsk 2");
    resolve()
   },1000)
}).then(function(){
    console.log("Async 2 resolved")
})


const promisethree = new Promise(function(resolve,reject){
   setTimeout(function(){
    resolve({username:"chai",email:"chai@gmail.com"})
   },1000)
})

promisethree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false;
        if(!error){
            resolve({username:"ambuj",passward:"1232@12"})
        }
        else{
            reject('Error: something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
   console.log(username)
})
.catch(function(err){
    console.log(err);
}).finally(()=>console.log("the promise is resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
      let error =true;
        if(!error){
            resolve({username:"Javascript",passward:"92@33"})
        }
        else{
            reject('Error: JS went wrong')
        }
    },1000)
});

//async await can not handle the error directly
async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
    
   } catch (error) {
    console.log(error)
   }
    
}
consumePromiseFive()


// async function getAllUsers(){
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("E: ",error)
//    }
// }

// getAllUsers()


fetch(' https://api.github.com/users/ambujyadav19').then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))
    