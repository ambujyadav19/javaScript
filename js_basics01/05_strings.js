 const name="ambuj"
 const repoCount=50

//  console.log(name +repoCount+"value")=>not prefered way

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('ambujydv')

console.log(gameName[0])
console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('v'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-7,4)
console.log(anotherString);
