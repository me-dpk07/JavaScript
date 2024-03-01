const name = "deepak"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   // ${}  ==> used to denote varriables inside ``

const gameName = new String('deepak-hc-com')

// console.log(gameName[0]);  ==> used to get key value of string
// console.log(gameName.__proto__);  


/*String.prototype[@@iterator]()
String.prototype.anchor()
String.prototype.at()
String.prototype.big()
String.prototype.blink()
String.prototype.bold()
String.prototype.charAt()
String.prototype.charCodeAt()
String.prototype.codePointAt()
String.prototype.concat()
String.prototype.endsWith()
String.prototype.fixed()
String.prototype.fontcolor()
String.prototype.fontsize()
String.fromCharCode()
String.fromCodePoint()
String.prototype.includes()
String.prototype.indexOf()
String.prototype.isWellFormed()
String.prototype.italics()
String.prototype.lastIndexOf()
String.prototype.link()
String.prototype.localeCompare()
String.prototype.match()
String.prototype.matchAll()
String.prototype.normalize()
String.prototype.padEnd()
String.prototype.padStart()
String.raw()
String.prototype.repeat()
String.prototype.replace()
String.prototype.replaceAll()
String.prototype.search()
String.prototype.slice()
String.prototype.small()
String.prototype.split()
String.prototype.startsWith()
String.prototype.strike()
String.prototype.sub()
String.prototype.substr()
String.prototype.substring()
String.prototype.sup()
String.prototype.toLocaleLowerCase()
String.prototype.toLocaleUpperCase()
String.prototype.toLowerCase()
String.prototype.toString()
String.prototype.toUpperCase()
String.prototype.toWellFormed()
String.prototype.trim()
String.prototype.trimEnd()
String.prototype.trimStart()
String.prototype.valueOf()*/

//==> .methods can be accesed e.g. gamName.toUpperCase
console.log(gameName.length);       // .length is used to get length of the character       
console.log(gameName.toUpperCase());     // .toUpperCase is used to get all letters in capital
console.log(gameName.charAt(2));    // denote 2nd position of character 
console.log(gameName.indexOf('t'));       // denotes position of the character

const newString = gameName.substring(0, 4)   // chracter from 0th index to 3rd index , 4th is not included 
console.log(`${newString}`);


const anotherString = gameName.slice(-8, 4)  // .slice is just like .substring but we can give negative value in this  and it will work reverse
console.log(`${anotherString}`);

const newStringOne = "   Deepak    "
console.log(`${newStringOne}`);
console.log(`${newStringOne}`.trim());    // .trim is used to remove whitespaces 

const url = "https://deepak.com/deepak%20prasad"  
console.log(url.replace('%20', '-'))   // .replace is used to replace the values


console.log(url.includes('sundar'))   // gives true or false whether the given value is declared or not above

console.log(gameName.split('-') );    // splits the words