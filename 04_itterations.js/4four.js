//callback funcn:- function ko name nhi denge to callback func ho jayega 
//for each loop ==> preferly used for array 

const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (val){      // ==> yha function ko name nhi diya gya yani callback funcn lga h andr me jo value ka name dena chahe de skte aur use print kra skte
    console.log(val);  
} )

// or

coding.forEach( (item) => {      // ==> same yha bhi funcn ko name nhi diya gya yani callback funcn lga h 
    console.log(item);
} )

// function printMe(item){   ==> can print for normal funcn as well
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {     // ==> jruri nhi kewal item ya value jo de rhe name whi print kre index aur array itself ko bhi print krwa skte 
    console.log(item, index, arr);
} )

// most imp - array k andr object pr loop lgana

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);   // jo print krana hai object ka usko access kr denge 
} )