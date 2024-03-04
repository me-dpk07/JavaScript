// singleton
// Object.create

// object literals

const mySym = Symbol("key1")    // symbol datatype syntax


const JsUser = {
    name: "Deepak",
    "full name": "Deepak Choudhary",
    [mySym]: "mykey1",   // to access symbol datatype
    age: 18,
    location: "Jaipur",
    email: "deepak@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   ==> wrong way to access an object 
// console.log(JsUser["email"])   ==> right way
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) ==> to access symbol 

JsUser.email = "deepak@chatgpt.com"  // change the value of an object
Object.freeze(JsUser) // ==> will not print further stop freezing
JsUser.email = "deepak@microsoft.com" 
console.log(JsUser); // will not print values because freeze is given  

JsUser.greeting = function(){  
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// const tinderUser = new Object() ==> singleton method for an object
const tinderUser = {}   // ==> non-singleton method

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

//object in object and in object 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)  ==> not so imp

const obj3 = {...obj1, ...obj2} // ==> better way
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // most important ==> access all keys of object will print in array & do work you want to do
console.log(Object.values(tinderUser));   // most important ==> access all values of key of object will print in array & do work you want to do
console.log(Object.entries(tinderUser));   // will print keys and values both in array format

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // to know whether its property exist or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


//Json Api

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
