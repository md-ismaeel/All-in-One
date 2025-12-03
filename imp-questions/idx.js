/*
    1. what is data structure?
        => a data structure is a specific way to organizing,storing,accessing data!
    
    2. what is algorithm?
        => step-by-step solution of the problem called algorithm!
    
    3. Create an array with 5 students names, after that create a function which takes 2 parameters (allStudents & | studentName) iterate over all students and find that | specific user “studentName”. |
*/

const arr = ["ismail", "javed", "fazeel", "verma", "yadav"];
function specificStudentFind(arr, studentName) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === studentName) {
      return arr[i];
    }
  }
}
// console.log(specificStudentFind(arr, "yadav"));

/*
    Big O (big o notation)?
        => Big O notation helps us understand how long an algorithm will take to run or how much memory it will need as the amount of data it handles grows.
    
    O(n) ?
        => Signifies that the execution time of the algorithm | grows linearly in proportion to the size of the | input data (n). |
*/

const grocery = ["bread", "rice", "egg", "milk"];

//O(n)
function linearSearch(item) {
  for (let i = 0; i < grocery.length; i++) {
    if (grocery[i] === item) {
      return i;
    }
  }
}
// console.log(linearSearch("milk"));

/*
    O(1) ?
        =>taka constant time, signifies that the execution time of an algorithm remains constant regardless of the input size.
*/

const array = [1, 2, 3, 4, 5, 6];

// O(1)
const findElement = (arr, index) => arr[index];
// console.log(findElement(array, 0));

/*
    O(n^2) ?
        =>Indicates that the algorithm's execution time grows quadratically with the size of the input data (represented by n).
*/

//O(n^2)
const findPair = (arr, target) => {
  console.log("target", target);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      // console.log(`Pair ${arr[i]},${arr[j]}`);
      let ans = arr[i] + arr[j];
      if (ans === target) return `${arr[i]},${arr[j]}`;
    }
  }
  return "pair not found!!";
};
// console.log(findPair(array, 10));

/*
    O(log n)?
        =>O(log n) time complexity refers to an algorithm's runtime that grows logarithmically with the size of the input (represented by n). In simpler terms, as the input size increases, the time it takes for the algorithm to run increases slowly.

    Arrays Data Structure
        =>Data Structure array is an ordered collection of elements that can be accessed using a numerical index.

    How we can create own Array....?? 
*/

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    const lastElem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElem;
  }
  shift() {
    const fistElement = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return fistElement;
  }
  deleteByIndex(index) {
    const item = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}
const myNewArray = new myArray();
myNewArray.push("ismail");
myNewArray.push("xyz");
myNewArray.push("abc");
myNewArray.push("sdk");
// myNewArray.pop()
// console.log(myNewArray);
// console.log(myNewArray.shift());
// console.log(myNewArray.deleteByIndex(2));
// console.log(myNewArray);

/*
    Reverse String
        exp-1 => Hello & OlleH
        exp-2 => Apple # €lppA
*/

function reverseString(str) {
  const reversed = str.split("").reverse().join("");
  console.log(reversed);

  // let ans = "";
  // for (let i = splited.length - 1; i >= 0; i--) {
  //     ans += splited[i];
  // }
  return reversed;
}
// console.log(reverseString("hello"));

/*
    Palindromes | If the reverse string is equal to the original | one then that word is a palindrome
    cddc # cddc ¥ 
    abba # abba ¥ 
    Hello # olleH 
*/

function palindrome(str) {
  const reverseStr = str.split("").reverse().join("");

  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
// console.log("palindrome", palindrome("mama"));

/*
    Int Reversal
        exp-1 => 1234 & 4321
        exp-2 => 5678 4 8765
*/

const integerReversal = (int) => {
  const string = int.toString();
  const splited = string.split("");
  const reversed = splited.reverse().join("");
  const number = parseInt(reversed) * Math.sign(int);
  return number;
};
// console.log(integerReversal(-12345));

/*
    Sentence Capitalization
       => Hello world # Hello World
       => huxn webdev # HuXn WebDev
*/

const capitalizedFun = (str) => {
  const capitalized = str.split(" ");
  const maped = capitalized.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  return maped.join(" ");
};
console.log(capitalizedFun("hello world"));

/*
    FizzBuzz |
        1. Print numbers from 1to n |
        2. If number is divisible by 3, print "Fizz" |
        3. If number is divisible by 5, print "Buzz" |
        4. If number is divisible by 3 and 5, print "FizzBuzz"
        5. Else, print the number |
*/

const fizzBuzz = (num) => {
  let result = "";
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 === 0) {
      // console.log("Fizz Buzz");
      result += "Fizz Buzz ";
    } else if (i % 3 === 0) {
      // console.log("Fizz");
      result += "Fizz ";
    } else if (i % 5 === 0) {
      // console.log("Buzz");
      result += "Buzz ";
    } else {
      // console.log(i);
      result += i + " ";
    }
  }
  return result;
};

// console.log(fizzBuzz(50));

/*
    MaxProfit
        Imagine you're buying and selling stocks throughout the
        year. Your job is to find the biggest profit you could make
        by buying low and selling high only once.
        Here's what you're given:

        A list of stock prices for each day # [7,1, 5, 3, 6, 4]

        Here's what you need to find: | The difference between the cheapest price you could have bought | the stock and the most expensive price you could have sold it later | on;
*/

const maxProfitFun = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    console.log("currentPrice", currentPrice);

    minPrice = Math.min(minPrice, currentPrice);
    console.log("minPrice", minPrice);

    const potentialProfit = currentPrice - minPrice;
    console.log("potentialProfit", potentialProfit);
    maxProfit = Math.max(maxProfit, potentialProfit);
    console.log("maxProfit", maxProfit);
  }

  return maxProfit;
};
const prices = [7, 1, 5, 3, 6, 4];
// const profit = maxProfitFun(prices);
// console.log(`max profit : ${profit}`);

/*
    Array Chunk

        Write a function that takes an array and a chunk size as input.
        The function should return a new array where the original array
        is split into chunks of the specified size.

        chunk([1, 2, 3, 4,5, 6,78, 3) [[1,23]04,5611[78]]
        chunkArray([1, 2, 3, 4, 5], 2) // Output: [ [1, 2], [3, 4] ]

        1. Create an empty array to hold the chunks
        2. Set a starting index to keep track of where we are in the original array
        3. Loop through the original array as long as the index hasn't reached the end
        4. Extract a chunk of the desired size from the original array
        5. Add the extracted chunk to the ‘chunked’ array
        6. Move the index forward by the chunk size to get to the next chunk
        7. Return the final array of chunks
*/

const chunkArrayFun = (arr, size) => {
  const chunks = [];
  let index = 0;
  while (index < arr.length) {
    const chunked = arr.slice(index, index + size);
    console.log("----", chunked);
    chunks.push(chunked);
    index += size;
  }
  return chunks;
};

const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(chunkArrayFun(arrays, 3));

/*
    Two Sum |
        Imagine you have a list of numbers and a target number. Your |
        job is to find two numbers in that list that add up to the target |
        number. You also need to tell which positions (or indexes) those |
        two numbers are at in the list. |

        Example |
            if the list is [2, 7,11, 15] and the target is 9, then the answer would |
            be [0, 1] because 2 (at index 0) plus 7 (at index 1) equals 9.
*/

// this is not the batter solution..!!
const twoSum = (arr, targer) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targer) {
        return [i, j];
      }
    }
  }
  return -1;
};

// console.log(twoSum([7, 2, 11, 15], 26));

/*
    1. Stack
        a. push ( Challenge )
        b. pop ( Challenge )
        c. top ( Challenge )

    2. Queue
        a. enqueue ( Challenge)
        b. dequeue ( Challenge)    
    
    3. Interview Questions.
        a. Min Stack
        b. Valid Parenthesis
        c. Reverse String Using Stack


    STACK 
        => A stack is a linear data structure that follows LIFO, or ( Last In, First Out ) principle.
    
*/
// HOF
const firstOrderFunc = () => console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

//callback function

function callBackFunction(name) {
  console.log("hell" + name);
}

function outerFun(callBack) {
  const name = prompt("enter your name");
  callBack(name);
}

outerFun(callBackFunction);
