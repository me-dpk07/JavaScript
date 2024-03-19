//reduce method

const myNums = [1, 2, 3]

//method I

// const myTotal = myNums.reduce(function (acc, currval) { // acc --> accomodator  , currval -> currentvalue 
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// method 2

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // u have to define a accomodator , current value and intial value jha se reduce method lgna start hoga which is 0 here 

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);