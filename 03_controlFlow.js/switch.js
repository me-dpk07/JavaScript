//syntax of switchcase

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "january"

switch (month) {
    case "jan":    // agr variable number me defined hota to case bhi number me hota yha string me defined hai
        console.log("January");
        break;     // jisse code match ho jayega wo print ho jayega yha january match hua to print ho jayega but agr break na lgaye to aage sare values print ho jayenge i.e feb,march,april except default wo nhi hoga 
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");   // agr kuch bhi match nhi hua to ye print hoga
        break;
}