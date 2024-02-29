//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100       // will give number datatype
const scoreValue = 100.3            // will give number dtatype

const isLoggedIn = false        //  boolean     


const outsideTemp = null  
console.log(typeof outsideTemp);      // null always give object datatype


let userEmail;   // will show undefined

const id = Symbol('123')        // symbol will show symbol datatype
const anotherId = Symbol('123')   // both symbol is unique even there value is symbol that's what symbol gives you uniqueness

console.log(id === anotherId);   // will return false

const bigNumber = 3456543576654356754n  // bigint use to store large numbers & return bigInt 



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); // to know the datatype

// to learn which datatype what returs :-
//  https://262.ecma-international.org/5.1/#sec-11.4.3