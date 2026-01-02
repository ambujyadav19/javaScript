 const name="ambuj"
 const repoCount=50

//  console.log(name +repoCount+"value")=>not prefered way

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('ambuj-ydv')
//it is a string object not an primitive string

console.log(gameName[0])
console.log(gameName.__proto__)

//These are different methods associated with string object gameName.

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('v'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-7,4)
console.log(anotherString);

const newStringOne="   Ambuj "
console.log(newStringOne)
console.log(newStringOne.trim()
)

const url="https://ambuj.com/aryan%20yadav"

console.log(url.replace('%20','-'))

console.log(url.includes('ambuj'))

console.log(gameName.split('-'))