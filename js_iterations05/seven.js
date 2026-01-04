//Map

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map( (num) => num+10)

// chaining=> map after map,map after filter ,filter after map
const newNums=myNumbers
    .map((num)=>num*10)
    .map((num)=>num+1)
    .filter((num)=> num>=40)

console.log(newNums);