//arrays

const myArray=[0,1,2,3,4,5]
const myHeros=["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4,5)

console.log(myArray[4]);

//Arrays Methods

// myArray.push(6)
// myArray.pop()

// myArray.unshift(9)// add 9 at the first
// myArray.shift()// remove 9 from the first


// console.log(myArray.includes(9));
// console.log(myArray.indexOf(4));

// const newArr= myArray.join()

// console.log(myArray);
// console.log(typeof newArr)

//slice and splice

console.log("A",myArray);

const myn1=myArray.slice(1,3)

console.log(myn1);
console.log("B",myArray);

const myn2=myArray.splice(1,3)
console.log("C",myArray);
console.log(myn2)

// splice includes the first index and give the slice and also manipulate the original array 
//but slice do not manipulate the original array . 