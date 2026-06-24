/*
    Q.1 How to find duplicate elements in given array?
*/

const arr1 = [1, 2, 3, 4, 5, 3,5];
// console.log(arr1);

function findDuplicateArray(arr) {
  const element = [...new Set(arr)];
  const elem = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
    if (!elem.includes(arr[i])) {
        elem.push(arr[i]);
      }
    }
  }

  const duplicates = arr.filter((ele, index) => arr.indexOf(ele) === index);
  return elem;
}

// console.log("duplicate", findDuplicateArray(arr1));

/*
    Q.2 How to find max and min value in given array
*/
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function findMaxAndMinValue(arr) {
  let max = 0;
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else {
      max = arr[i];
    }
  }
  return [min, max];

  const maxVal = arr.reduce((acc, curr) => (acc > curr ? acc : curr));
  const minVal = arr.reduce((acc, curr) => (acc < curr ? acc : curr));
  //   return [maxVal, minVal];
}

// console.log(findMaxAndMinValue(arr2));

/*
    Q.3. what is the difference between == and === ?
    => Both Are comparison operator !
    => The difference between both the operators is that,"==" is used to compare values whereas, "===" is used to compare both value and types !)
*/

/*
    Q.4 How to find second largest value and remove first largest value from the an array
*/

const arr3 = [1, 2, 3, 4, 30, 90];

function findSecondLargestElement(arr) {
  const fistLargestElem = Math.max(...arr);
  const idx = arr.indexOf(fistLargestElem);
  arr.splice(idx, 1);
  const secondLargest = Math.max(...arr);

  return secondLargest;
}

// console.log(findSecondLargestElement(arr3));

/*
    Q.5 What is Difference Between Filter() and Find() Method in javascript?
        => filter() method returns the matched values in an array from the collection!
        => find() method returns the first value that matches from the collection Once it matches the value in findings, it will not check the remaining values in the arr collection!
*/

const arr4 = ["ismail", "rashid", "max", "john", "doe"];
const findMethod = arr4.find((ele) => ele === "max");
const filters = arr3.filter((elem) => elem < 10);
// console.log(filters, findMethod);

/*
    Q.6 How to find missing element in array
*/

const arr5 = [0, 1, 3, 4, 5, 10];

function findMissingNumbers(arr) {
  let missing = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    if (diff > 1) {
      for (let j = 1; j < diff; j++) {
        missing.push(arr[i] + j);
      }
    }
  }
  return missing;
}

console.log(findMissingNumbers(arr5)); // Output: [2, 6]


/*
    Q.7 How to find een and odd number from given array
*/

const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findEvenAndOddNumber(arr) {
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return {even,odd};
}
console.log(findEvenAndOddNumber(arr6));

/*
    Q.8 Find Some of all element in array
*/

const arr7 = [1, 2, 3, 4, 5, 5, 6, 7, 10];
const someOfElement = (arr) => {
  const someOfValues = arr.reduce((acc, curr) => acc + curr, 0);
  return someOfValues;
};

// console.log(someOfElement(arr7));

/*
    Q.9 How to find factorial(n!) of the given array
*/

function findTheFactorialOfn(n) {
  let factorial = 1;
  let i = 1;
  while (i <= n) {
    factorial *= i;
    i++;
  }

  return factorial;
}
// console.log(findTheFactorialOfn(5));

/*
    Q.10 How to find prime number 
*/

function isPrimeNumber(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrimeNumber(53));

/*
    Q.11 How to find vowel from a string?
*/

const string = "IsmAIl Khan";

function findVowel(string) {
  // console.log(string);

  let str = string.toLowerCase();
  let vowel = "";
  for (let i = 0; i < str.length; i++) {
    let later = str[i];
    if (
      later === "a" ||
      later === "e" ||
      later === "i" ||
      later === "o" ||
      later === "u"
    ) {
      vowel += str[i];
    }
  }
  return vowel;
}

// console.log(findVowel(string));

/*
    Q.12 how to reverse a string
*/

function reverseString(str) {
  let ans = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
  }
  return ans;
}

// console.log(reverseString(string));

/*
    Q.13 how to reverse a string in place
*/

function reverseStringInPlace(str) {
  const splitedString = str.split(" ");

  const reversedInplace = splitedString
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

  return reversedInplace;
}
// console.log(reverseStringInPlace("I Am Ismail From India!"));

/*
    Q.14 How to find palindrome
*/

function isPalindrome(str) {
  // const
  if (!str.length) {
    return false;
  }

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  // console.log(str, reversed);

  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i] !== str[i]) {
      return false;
    }
  }
  return true;
}
// console.log(isPalindrome("max"));

/*
    Q.15 how to to swap variable without using 3rd variable
*/

// using 3rd variable
let a = 10;
let b = 20;
// let temp = a;
// a = b;
// b = temp

// without using 3rd variable
[a, b] = [b, a];
// console.log(a, b);

/*
    Q.16 How to merge 2 array 
*/

const arr8 = [1, 2, 3, 4, 5, 60, 7, 80, 90];
const arr9 = [10, 20, 30, 40, 50];
const arr10 = [22, 34, 51, 15, 41, 35];

function mergeTwoArrays(arr1, arr2, arr3) {
  // const mergedArray = arr1.concat(arr2, arr3)
  const mergedArray = [...arr1, ...arr2, ...arr3];

  // console.log("=>", mergedArray);
  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {
      if (mergedArray[i] > mergedArray[j]) {
        // console.log(`${mergedArray[i]} > ${mergedArray[j]}`);
        // let temp = mergedArray[i];
        // mergedArray[i] = mergedArray[j];
        // mergedArray[j] = temp;
        [mergedArray[i], mergedArray[j]] = [mergedArray[j], mergedArray[i]];
      }
    }
  }

  return mergedArray;
}
// console.log(mergeTwoArrays(arr8, arr9, arr10));

/*
    Q.17 How to find factor of given integer
*/

function findFactorOfInteger(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
// findFactorOfInteger(20);

/*
    Q.18 How to compare 2 arrays is equal or not !!
*/

const arr11 = [2, 3, 4, 5, 11, 34, 21];
const arr12 = [2, 3, 4, 5, 11, 34, 21];

function isArraysAreEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
// console.log(isArraysAreEquals(arr11, arr12));

/*
    Q.19 How to find intersection of two array  
*/

const arr13 = [2, 3, 4, 5, 11, 34, 21, 100];
const arr14 = [24, 2, 84, 100, 11, 21, 300, 1];

function findIntersectionOfTwoArray(arr1, arr2) {
  const intersectionArrayValue = arr1.filter((value) => arr2.includes(value));
  return intersectionArrayValue;

  // let result = [];
  // for (let i = 0; i < arr1.length; i++) {
  //     if (arr2.includes(arr1[i])) {
  //         result.push(arr1[i])
  //     }
  // }
  // return result
}

// console.log(findIntersectionOfTwoArray(arr13, arr14));

/*
    Q.20 How to find uniq of two arrays/set
*/

const arr15 = [2, 3, 4, 5, 11, 34, 21, 100];
const arr16 = [24, 2, 84, 100, 11, 21, 300, 1];

// const sort = arr16.sort((a, b) => b - a);
// console.log("sort", sort);

function findUnionArrays(arr1, arr2) {
  const union = [...arr1, ...arr2];

  const result = [];
  for (let i = 0; i < union.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (union[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(union[i]);
    }
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        [result[i], result[j]] = [result[j], result[i]];
      }
    }
  }

  return result;

  // const newArray = [new Set(union)]
  // return union
}

console.log(findUnionArrays(arr15, arr16));

/*
    Q.21 How to find fibonacci sequence 
*/

function findFibonacciSequence() {
  let a = 0;
  let b = 1;

  const result = [];
  for (let i = 0; i < 15; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    result.push(temp);
  }

  return result;
}

// console.log("feb", findFibonacciSequence());

/*
    Q.22 How to find number of occurrence of character in string..?
*/

function findNumberOfOccurrenceCharacter(str, later) {
  later = later.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === later) {
      count++;
    }
  }
  return `${later.toUpperCase()}: ${count}`;
}
const string1 = "hell babe im ismail spt";
console.log(findNumberOfOccurrenceCharacter(string1, "a"));

/*
    Q.23 function to write code for any number table from user
*/

function table(n) {
  for (let i = 1; i <= 10; i++) {
    let number = n * i;
    console.log(`${n} * ${i} = ${number}`);
  }
  return "";
}
// console.log(table(23));

/*
    Q.24 function to write code to check is armstrong number or not
*/

const isArmstrong = (n) => {
  if (n < 0) return false;

  const str = n.toString();

  const reversed = str.split("").reverse().join("");

  if (str === reversed) {
    return true;
  } else {
    return false;
  }
};

// console.log(isArmstrong(1));

/*
    Q.22 start pattern questions
    *
    **
    ***
    ****
    *****
*/

// right angel
for (let i = 0; i <= 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  // console.log(row);
}

// Pyramid pattern
let n = 5;
for (let i = 1; i < n; i++) {
  let row = "";
  //for space
  for (let j = 1; j < n - i; j++) {
    row += " ";
  }
  // for start
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  // console.log(row);
}

/*
    diamond pattern
*/

// upper diamond
for (let i = 1; i < n; i++) {
  let row = "";
  //for space
  for (let j = 1; j < n - i; j++) {
    row += " ";
  }
  // for start
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  // console.log(row);
}

// lower diamond
for (let i = n - 2; i >= 1; i--) {
  let row = "";
  for (let j = 1; j < n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  // console.log(row);
}

var object = new Object();

function Person(name) {
    this.name = name;
    this.age = 21;
}
var object = new Person("Sudheer"); ``

console.log(object);

const arr = [1, 2, 3, 4, 5]
arr[100] = 6

// console.log(arr);
function outerFun(factor) {
    return function innerFun(num) {
        return num * factor
    }
}

const outerFunction = outerFun(6)
const result = outerFunction(5)
console.log(result);

