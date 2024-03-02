// Dates

let myDate = new Date()
console.log(myDate.toString());     //==> used to get the readable value
console.log(myDate.toDateString());   //   ==> only date will be appear rather than toString where date and time both appears
console.log(myDate.toLocaleString());   //     ==> will show you DD/MM/YY , time 
console.log(typeof myDate);             // date is object datatype

//let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // YY/MM/DD format , in array format 0 considered as 1 month
//let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date("2023-01-14") // YY/MM/DD format , in string 01 is the 1st month
//let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()    // will give value in millisecond

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());  //will give value in millisecond too
console.log(Math.floor(Date.now()/1000));  // to get lower num 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  // to get month only
console.log(newDate.getDay());    //to get the day only 

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {    // adding new methods to localestring & will use as an object
    weekday: "long",
    
})
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

