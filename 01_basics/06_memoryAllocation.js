// stack menmory ==> (used in primitive datatypes) and if we change the value of that we will get copy of the reference 

let myName = "Deepak"
let anotherName = myName
anotherName = "pratik"

console.log(anotherName)
console.log(myName)

// both is showing different result because stack memory always gives you copy of the reference old value will return old 


// Heap memory ==> ( used for non primitive datatype ) changes makes in original value , didn't give you a copy 

let userOne = {
    name : "Deepak",
    email: "deepak@gmaildotcom"
}

 userTwo = userOne
 userTwo.email = "boy@gmail.com"

 console.log(userTwo.email)
 console.log(userOne.email)

 // both is giving same value because reference is changed in original value 
