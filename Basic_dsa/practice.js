// Sum of all number

const sumOfAllNaturalNums = (n) => {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
};

// console.log("sum of all number =>", sumOfAllNaturalNums(10));

function removeDuplicates(arr) {
  // const uniq = [...new Set(arr)];
  // return uniq;
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates([1, 1, 22, 2, 2, 4, 5, 5, 7]));
