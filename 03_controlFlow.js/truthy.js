// turthy or falsy ==> bina condition check kiya man lena wo true hoga ya false


// falsy values

// false, 0, -0, BigInt 0n, "" => empty string, null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const userEmail = []   // ==> because array return true value

if (userEmail) {
    console.log("Got user email");  //
} else {
    console.log("Don't have user email");
}


// if (userEmail.length === 0) {                => right way to check an array is empty or not
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {    // to check object is empty or not
    console.log("Object is empty");
}

