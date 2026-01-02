const score=400

const balance=new Number(100)
// here 'balance' is NUmber object here.

// console.log(balance);
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const otherNumber=1123.67576
// console.log(otherNumber.toPrecision(5));

const hundreds=1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++Maths+++++++++++//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.65))
console.log(Math.ceil(4.4))
console.log(Math.floor(4.4))
console.log(Math.min(2,4,3,-1,0))

console.log((Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min +1)) + min);