var c = 300    
let a = 300

// {}   ===> this is a block scope...print value will not work after block scope
// outside {} will be global scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a);
    
}



console.log(a);
console.log(b);
console.log(c);  // value will be change to 300 to 30


function one(){   // function inside fum=nction is called nested function
    const username = "deepak"  

    function two(){
        const website = "youtube"
        console.log(username);  // child function can acess parent function but parent function can't like icecream story

    }
    // console.log(website); ==> will through error because ypu are printing outside of block

     two()

}

// one()

if (true) {
    const username = "deepak"
    if (username === "deepak") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  ==> will not print coz out of the scope
}

// console.log(username);    ==> will not print coz out of the scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // will return value i.e 6 because we only declare function , we didn't hold that function in any variable

function addone(num){
    return num + 1
}



addTwo(5)  // will through error coz function is stored in variable and we are putting value before declaring variable
const addTwo = function(num){
    return num + 2
}