// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {     ===> not imp
//     //console.log(item);
//     return item
// } )

// console.log(values);

//filter method

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {    // use return in scope,filter is used to filter out the given conditional values
    return num > 4
} )

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"    // return will be added when scope is there,here two conditions are checking
})
  console.log(userBooks);

  //maps method

  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

//chaining method - map k andr map or map k andr filter
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1) // 1 will added to the values jo 10 se multiplied hote h
                .filter( (num) => num >= 40)

console.log(newNums);