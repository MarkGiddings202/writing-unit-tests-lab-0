const isRealPalindrome = (str) => {
  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
};
isRealPalindrome("Madam")

// Question 2

const runningTotal = (numbers) => {
  let results = []
  let total = 0;
  for(let i = 0; i < numbers.length; i++){
    total += numbers[i]
    results.push(total)
  }
  return results
};

// Question 3
const swap = (str) => {
let splitStr = str.split(' ')
for(let i = 0; i < splitStr.length; i++){
  // console.log(splitStr[i])
  if(splitStr[i].length > 1){
    splitStr[i] = splitStr[i][splitStr[i].length-1] + splitStr[i].substring(1, splitStr[i].length-1) + splitStr[i][0]
  }
}
return splitStr.join(' ')

};

// Question 4
const wordSizes = (s) => {
if(!s){
  return {}
}
let obj = {}
let splitStr = s.split(" ")
for(let i = 0; i < splitStr.length; i++){
  // console.log(splitStr[i].length)
  if(obj[splitStr[i].length]){
    obj[splitStr[i].length] += 1
  } else {
    obj[splitStr[i].length] = 1
  }
}
return obj
};

// wordSizes("Four score and seven.")

// Question 5
const union = (arr1, arr2) => {
  let mySet = new Set(arr1.concat(arr2))
  return [...mySet]
};

// Question 6
const firstRecurring = (s) => {
  let obj = {}
  for(let i = 0; i < s.length; i++){
    if(obj[s[i]]){
      obj[s[i]] += 1
    } else {
      obj[s[i]] = 1
    }
  }
  // console.log( obj )
  
  for(let key in obj){
    // console.log(obj[key])
    if(obj[key] > 1){
      return key
    }
  }

  return ""

};

// Question 7
const showMultiplicativeAverage = (arr) => {
  let product = arr.reduce((prev, current) => prev * current);
  return (product / arr.length).toFixed(3); // toFixed(3) is used to limit the decimal point to 3
};

// Quetsion 8
const multiplyList = (arr , arr2) => {
  let results = []
  for(let i= 0; i < arr.length; i++){
    results.push(arr[i] * arr2[i])
  }
  return results
};
// Question 9
const sequence = (n) => {
  let results = []
  for(let i = 1; i <= n ; i++){
    results.push(i)
  }
  return results
};

// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
};
