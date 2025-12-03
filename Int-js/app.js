// let count = 1;
// for (var i = 1; i < 10; i++) {
//     count += 1;
// }

// console.log(count);
// console.log(i);

let string = 'hello world'

// let ans = "";

// for (let i = string.length - 1; i >= 0; i--) {
//     ans += string[i]
// }
// console.log(ans);

function reverse(str) {
    let x = ""
    for (let i = str.length - 1; i >= 0; i--) {
        x += str[i]
    }
    return x;
}
// console.log(reverse(string));

let arr1 = ["hello", "hello", "ab", "cb", "ab"]
let arr = [1, 1, 1, 2, 3, 4, 5, 5, 55, 6, 77, 77, 8, 0, 10]

let sets = [...new Set(arr1)]

// console.log(sets);

let results = [];

for (let i = 0; i < arr1.length; i++) {
    if (!results.includes(arr1[i])) {
        results.push(arr1[i])
    }
}

// console.log("results", results);


let a = 10;

{
    let a = 20;
    {
        console.log("a => 20", a);
        let a = 30;
        console.log("a => 30", 30);
    }
}

console.log("a=>10", a);