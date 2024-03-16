// if
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 40");
} else {
    console.log("temperature is greater than 40");
}

// console.log("Execute");   ==> will execute because this is out of the scope 

// Comparison 
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);    ==> will show an error because power is not defined out of the scope inside scope defined variable stay inside is and can't use outside of scope


// const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");   ==> immature practise highly inreadble

//Nested conditional statement

// const balance = 1000
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {   // ==> && is and operators, all three condition will be checked 
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {    // ==> || is or operator , use pipe sign to check if any one of the statement is true then value should be printed
    console.log("User logged in");
}

// both && , || are logical operators

// Nullish Coalescing Operator (??): null undefined   ==> jb null ya undefined ki wjh se error aata hai usse bachne k liye use hota null ya undefined ki jgh uske baju wala value print hoga

let val1;
// val1 = 5 ?? 10   ==> 5 will print 
// val1 = null ?? 10     ==> 10 will print 
// val1 = undefined ?? 15   ==> 15 will print
val1 = null ?? 10 ?? 20    //   ==> 10 will print print it is coming just after null
console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")