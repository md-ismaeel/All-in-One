const num = [10, 20, 40, 20, 30, 30, 40, 50, 40];
// const freq = {}

// for (let i = 0; i < num.length; i++) {
//     freq[num[i]] = (freq[num[i]] || 0) + 1;
// }

// console.log(freq);

// for(let fr in freq){
//     if(freq[fr]>2){
//         console.log(fr);

//     }
// }

//removing duplicate from of string

const users = ["ismail", "rajesh", "sandeep", "ismail", "sandeep", "sandeep"];
const uniqUsers1 = [...new Set(users)];

const countProperty = Object.entries(users).length;
console.log("countProperty",countProperty);


console.log(uniqUsers1);

const uniqUsers2 = users.filter((user, index) => users.indexOf(user) === index);
const uniqUsers3 = users.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

const frequency = users.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(frequency);

// for (let key in frequency) {
//     if (frequency[i] > 2) {
//         console.log(i);
//     }
// }

const freq = {};

for (const i of num) {
  freq[i] = (freq[i] || 0) + 1
}

console.log(freq);

const result = []
const filtered = num.filter((num)=> freq[num] === 2)
console.log(filtered);