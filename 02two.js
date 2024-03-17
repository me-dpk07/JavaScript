// while Loop 

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// Do While loop    ==> rarely use 

let score = 1    // agar yha 10 se jyada rkhte hai to wo hi value print ho jayegi kyuki do while loop me phle print hota hai condition bad me check hoti h

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);