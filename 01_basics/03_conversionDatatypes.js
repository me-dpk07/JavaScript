// string to number :-


let score = "Deepak" 

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) // the datatype string i.e. "Deepak" will change in number
console.log(typeof valueInNumber);
console.log(valueInNumber);

// if we put below things in place of "Deepak" then :-
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


// string to boolean :-


let isLoggedIn = "Deepak"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true



//number to string:-



let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);~
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Deepak"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); ==> not a ggod way, should use paranthesis 
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);  ==> bad way to denote conversion better to use simple boolean i.e. t or f
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; // prefix & gameCounter++ will be postfix
console.log(gameCounter);

// link to study
// ://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversionhttps