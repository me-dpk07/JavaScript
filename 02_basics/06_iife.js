// Immediately Invoked Function Expressions (IIFE)

// jo immediately invoked ho jaye , global scope ke pollution se jo problem hoti hai to global scopes k pollutions , variables ko htane k liye use krte


(function chai(){                   // named IIFE,  chai is the name 
    console.log(`DB CONNECTED`);
})();    // ==> wrap in () () as execution and use ; to end this funcn 

( (name) => {        
    console.log(`DB CONNECTED TWO ${name}`);   // if you want to put variable then put it and define above 
} )('deepak')     //  deepak will be execution
