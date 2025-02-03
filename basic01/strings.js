const name = "tarun"
const repoCount = 20

// console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);  //*** follow this step//

const gameName = new String('tarun-nagar')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('6'));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 3)
console.log(newString);


const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne = "  tarun "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "hitesh://tarun.com/tarun%20nagar"

console.log(url.replace('%20', '-'))

console.log(url.includes('ayushi'))

console.log(gameName.split('-'))