/*Rest_Spread_Operator_ExercisesRest / Spread Operator Exercises
In this exercise, you’ll refactor some ES5 code into ES2015.

Given this function:
*/

// Refactor it to use the rest operator & an arrow function:
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

const filterOutOdds = (...nums) => {
  return nums.filter(num => num % 2 === 0)
}


// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

const findMin = (nums) => Math.min(...nums);
findMin([3,4,67,87,20])

// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.


const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}


// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.>

// function doubleArgs() {
//   let arrayFromArguments = [].slice.call(arguments)
//   return arrayFromArguments.map(function(arg){
//     return arg * 2
//   })
// }

// doubleArgs(1,2)

const doubleAndReturnArgs = (arr, ...val) => [...arr, ...val.map(num => num * 2)];

doubleAndReturnArgs([1,2,3],4,4);


// Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

const removeRandom = items => {
  let randomNum = Math.floor(Math.random() * items.length);
  return [...items.slice(randomNum, 1), ...items.slice(randomNum + 1)]
}


/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {return [...array1, array2]};


/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }

const addKeyVal = (obj,key,val) => {
let newObj = {...obj};
newObj[key] = val;
return newObj 
}



/** Return a new object with a key removed. */

// function removeKey(obj, key) {

// }

const removeKey = (obj, key) => {
  let newObj = {...obj}
  delete newObj[key] 
  return newObj
} 


/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {

// }

const combine = (obj1, obj2) => {return {...obj1, ...obj2}};


/** Return a new object with a modified key and value. */

// function update(obj, key, val) {

// }


const update = (obj, key, val) => {
 let newObj = {...obj}
  newObj[key] = val;
  return newObj
}


