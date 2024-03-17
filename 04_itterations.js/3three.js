// for of

// ["", "", ""]     ==> string in array
// [{}, {}, {}]    ==> objects in array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
  console.log(`Each char is ${greet}`)
}

// Maps     ==> The Map object holds key-value pairs and remembers the original order of value



const map = new Map()   
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

// Loop in map

for (const [key, value] of map) {   // ===> agr key value of array k format me nhi lana hai to [] ye use krenge and key value put kr denge 
    console.log(key, ':-', value);     //===> used to print keys and value 
}


// loop in object 

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {        =======>   this method will not work object have seperate value to itterate
//     console.log(key, ':-', value); 
    
// }