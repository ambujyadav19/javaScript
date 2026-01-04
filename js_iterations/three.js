//High order array loop

//for of loop
const arr=[1,2,3,4,5]

// for(const num of arr){
//     console.log(num)
// }

// const greeting="ambuj yadav"
// for(const greet of greeting){
//     console.log(greet)
// }


//Maps

const map =new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")
map.set('USA',"America")

// console.log(map)

// for(const [key,value] of map){
//     console.log(key, ':-',value)
// }


// const myObject ={
//     'game1':NFS,
//     'game2':Spiderman
// }
// for(const [key,value] of myObject){
//     console.log(key, ':-',value)
// }
//Unlike map , objects are not iteratable here 



/// for in loop
// by using for in loops we can iterate in objects 

const myObject={
    js: 'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

// for (const key in myObject) {
//      console.log(key)
// }

// for (const key in myObject) {
//      console.log(myObject[key])
// }


const programming=["js","rb","py","java","cpp"]

// for (const key in programming) {
//        console.log(programming[key])
    
// }



const newmap =new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")
map.set('USA',"America")

// for (const key in newmap) {
//        console.log(newmap[key])
    
// }// can not be iterated on maps using for in loop



// for each loop

const coding=["js","ruby","java","python","cpp"]

// coding.forEach(  function (value){//here this function is call back function which does not have it's name
//     console.log(value)
// }  )

// coding.forEach( (item) =>{
//     console.log(item)
// })


// function newfun(item){
//     console.log(item)
// }
// coding.forEach(newfun)


// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr)
// } )


/// array of object
const myCoding=[
    {
        languagename:"javascript",
        languageFileName:"js"
    },
    {
        languagename:"java",
        languageFileName:"java"
    },
    {
        languagename:"python",
        languageFileName:"py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languagename)
} )