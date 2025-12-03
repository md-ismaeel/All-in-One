// const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana', 'ismail'];
// Output: { apple: 2, banana: 3, orange: 2 }

// const frequency = {};

// for (let i = 0; i < fruits.length; i++) {
//     if (frequency[fruits[i]]) {
//         frequency[fruits[i]]++
//     } else {
//         frequency[fruits[i]] = 1
//     }
// }
// console.log(frequency);

// for (const fruit of fruits) {
//     frequency[fruit] = (frequency[fruit] || 0) + 1
// }

// const frequency = fruits.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1
//     return acc
// }, {})
// console.log(frequency);

// console.log(filteredData);

let newStr = "i am ismail from ind";

// let splitedStr = newStr.split(" ");
// console.log(splitedStr);

// const mapped = splitedStr.map((e) => e[0].toUpperCase() + e.slice(1))
// console.log(mapped);
// let ans = ""
// for (let i = 0; i < splitedStr.length; i++) {
//     let word = splitedStr[i].toUpperCase();
//     // console.log(word);
//     let capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase() + " "
//     ans += capitalized
// }

// console.log(ans);

let splited = newStr.split(" ")
// console.log(splited);

// const capitalized = splited.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
// console.log(capitalized);


let ans = ""
for (const str of splited) {
    let word = str[0].toUpperCase();
    let capitalized = word + str.slice(1)
    ans += capitalized + " "
}
// console.log(ans);



// const string = "i am an actor".split("")

// // for(const str of string){

// // }

// const freq = string.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1
//     return acc
// }, {})

// for (const fr of freq) {
//     if (freq[fr] === 1) {
//         console.log(fr);
//         return
//     }

// }

// console.log(freq);

const string = "i am an actor".split("");

const freq = string.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1; // Increment the frequency count
    return acc;
}, {});

// Loop through the original string to maintain order
for (const char of string) {
    if (freq[char] === 1) { // Check if the character count is 1
        // console.log(char); // Output the first non-repeating character
        break; // Exit the loop after finding the first non-repeating character
    }
}


// Reverse the words Inplace
// Output: I ma eht doog yob
let input = "I am the good boy"

const splited1 = input.split(" ");
// console.log(splited1);

const map = splited1.map((item) => item.split("").reverse().join("")).join(" ")
// console.log(map);
let result = ""
for (let i = 0; i < splited1.length; i++) {
    let word = splited1[i].split("").reverse().join("")
    // console.log(word);
    result += word + " "
}

// console.log(result);


// const word = splited.reverse()
// console.log(word);

// const reverseWord = splited1.map((item) => item.split("").reverse().join("")).join(" ")

let ans1 = "";

for (const word of splited1) {
    let newWord = word.split("").reverse().join("")
    // console.log(newWord);
    ans1 += newWord + " "
    // return newWord
}
// console.log(ans1);

function margeFun(a, b) {
    const arr = [...a, ...b]
    let newArray = []
    // console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    for (let x = 0; x < arr.length; x++) {
        if (arr[x] !== arr[x + 1]) {
            newArray.push(arr[x])
        }
    }
    // return newArray
    return arr

}

let a = [1, 2, 3, 45, 6, 7];
let b = [7, 67, 67, 89, 8, 0];

// margeFun(a, b)
// console.log(margeFun(a, b));


// const frequencies = fruits.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1
//     return acc
// }, {})

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana', 'ismail'];
const frequencies = {};

// for (let i = 0; i < fruits.length; i++) {
//     if (frequencies[fruits[i]]) {
//         frequencies[fruits[i]]++
//     } else {
//         frequencies[fruits[i]] = 1
//     }
// }


for (let fruit of fruits) {
    if (frequencies[fruit]) {
        frequencies[fruit]++
    } else {
        frequencies[fruit] = 1
    }
}

// console.log(frequencies);

// const maxVal = Object.entries(frequencies).map((item) => item)
const maxVal = Object.values(frequencies)
console.log(maxVal);

