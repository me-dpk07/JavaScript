// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);   // to access the element of array i.e 1st element = 0 here

// Array methods

// myArr.push()   ===> to add elements in the array at last 
// myArr.push(7) ===> to add elements in the array at last i.e 7 will be added here
// myArr.pop()   ===> to remove elements in the array at last 

// myArr.unshift(9)   ==> to add an element in starting
// myArr.shift()   ==> to remove an element in starting

// console.log(myArr.includes(9));    ==> includes is used to get the value is existing or not in the given a
// console.log(myArr.indexOf(3));       ==> if the value is exist then it will give existing value otherwise it will will return -1

// const newArr = myArr.join()   => it will convert an array into string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)  
console.log(myn1);  //  ==>  will print only 1 2 , 3 will not be included

console.log("B ", myArr);   
const myn2 = myArr.splice(1, 3)  // ==> will print 1 2 3
console.log(myn2); 

console.log("C", myArr); // splice manipulates the original array 1 2 3 will be extracted when we use splice 


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   ==> will add array in array and 2nd whole array will be a single element
// its a bad practice 

console.log(marvel_heros);
console.log(marvel_heros[3][1]);  //==> will access 1st of 3rd element which is flash here

const allHeros = marvel_heros.concat(dc_heros) // .concate will add both the array and return new array
console.log(allHeros);

// better way than concate is spread (spreading all elements of arrays by putting ... before an array)

const all_new_heros = [...marvel_heros, ...dc_heros]  //  spread method
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // to organise all subarrays into single array
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))   //  to check whether is array or not, gives boolean value
console.log(Array.from("DEEPAK"))   // create array of single single element of the value like D E E P A K
console.log(Array.from({name: "Deepak"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // creating array from given variables