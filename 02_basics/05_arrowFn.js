const user = {
    username: "deepak",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this is used for current context which is scope here, it is only used inside of object , sirf username na likh k this.username likhenge taki future me koi change kre to kr ske 
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()  ==> value will be changed


// function chai(){
//     let username = "deepak"
//     console.log(this.username);   ==> will show undefined because this is only used in object
// }

// chai()

// const chai = function () {
//     let username = "deepak"
//     console.log(this.username);    ==> will show undefined
// }

const chai =  () => {
    let username = "deepak"
    console.log(this);    // will show {} => empty 
}


// METHOD I

const addNum = (num1, num2) => {
    return num1 + num2         //  ==> jab {} use hoga then return use krna h
}
console.log(addNum(4,8));

// METHOD II

const addThis = (num1, num2) =>  num1 + num2
console.log(addThis(3, 4))

//OR

const addTwo = (num1, num2) => ( num1 + num2 )
console.log(addTwo(3, 4))

//METHOD III

const add2 = (num1, num2) => ({username: "hitesh"}) // if you want to return an object then you nhave to wrap object in paranthesis



// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()