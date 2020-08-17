// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

const sentenceGenerator = (arr) => {
  // Break down problem into smaller chunks
  // ---1 Capitalize the names
  let capName = arr.map(value => {
    separatedName = value.name.split(" ")
    return separatedName.map(value => {
      // slice first letter off and rest of word in to 2 variables
      // toUpperCase first letter
      firstLetter = value.slice(0, 1).toUpperCase()
      restOfWord = value.slice(1)
      // interpolate them together into a new variable.
      return firstLetter + restOfWord
      // this .join method combines the Capitalized first and last name back together
    }).join(" ")
  })
  // ---2 Interpolate capitalized names with the corresponding occupation
  // Create a new array that will hold the final sentences.
  finalSentence = []
  // create a for loop using both the original array of objects and the array of capitalized names
  for (i = 0; i < arr.length; i++) {
    // interpolate a sentence that combines the capitalized names and occupations and push it into the finalSentence Array
    finalSentence.push(`${capName[i]} is a ${arr[i].occupation}.`)
  }
  // return finalSentence Array.
  return finalSentence
}
console.log(sentenceGenerator(people));


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// create a function
const remainderOf = (arr) => {
  // filters through array
  // Whenever I tried to use typeof == "number" to only return numbers, since 0 is a false-y value it refuses to get returned and so I found this new callback function that returns numerical values
  numArr = arr.filter(Number.isFinite)
  // we want to return a new array with the numbers % 3 to return the remainder of the numbers.
  return numArr.map(value => {
    return value % 3
  })
}

console.log(remainderOf(testingArray1));
console.log(remainderOf(testingArray2));
// I logged the typeof 0 b/c I wasn't getting it to return on my first attempt.
// console.log(typeof 0);




// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

// create a function that takes in two arrays as arguments
const noDupes = (arr1, arr2) => {
  // combines the two arrays into one using the spread operator.
  combArr = [...arr1, ...arr2]
  // filter through the array
  // using indexOf use the index of the first instance of a values, to prevent returning duplicates.
    // this works because when we call the indexOf a duplicate value it returns the first instance of that value, not the current index so it won't get returned.
  let noDupeArr = combArr.filter((value, index) => combArr.indexOf(value) === index)
  // return the array without duplicates.
  return noDupeArr
}

console.log(noDupes(testingArray3, testingArray4));