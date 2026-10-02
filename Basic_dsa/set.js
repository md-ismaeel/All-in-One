// ===== Set Cheat Sheet =====

// 1. Create a new Set
const set = new Set();

// 2. add(value) - Add elements (duplicates are ignored)
set.add(1);
set.add(2);
set.add('hello');
set.add(1); // Duplicate ignored
console.log('After add():', set); // Set(3) {1, 2, "hello"}

// 3. has(value) - Check if value exists
console.log('has(1):', set.has(1));   // true
console.log('has(3):', set.has(3));   // false

// 4. delete(value) - Remove a value
set.delete(2);
console.log('After delete(2):', set); // Set(2) {1, "hello"}

// 5. size - Number of elements
console.log('size:', set.size); // 2

// 6. values() - Iterator of values
console.log('values():');
for (const value of set.values()) {
  console.log(value);
}

// 7. keys() - Same as values() for Set
console.log('keys():');
for (const key of set.keys()) {
  console.log(key);
}

// 8. entries() - [value, value] pairs (Map-compatible)
console.log('entries():');
for (const [key, value] of set.entries()) {
  console.log(key, value); // key === value
}

// 9. forEach() - Loop through set
console.log('forEach():');
set.forEach((value) => {
  console.log(value);
});

// 10. clear() - Remove all elements
set.clear();
console.log('After clear():', set); // Set(0) {}

// 11. Convert Set <-> Array (useful in DSA)
const arr = [1, 2, 2, 3];
const s = new Set(arr); // Remove duplicates
console.log('Set from Array:', s); // Set(3) {1, 2, 3}

const arrayFromSet = [...s]; // Convert back to array
console.log('Array from Set:', arrayFromSet); // [1, 2, 3]

// 12. Common DSA use cases
// a) Remove duplicates
const nums = [1,2,2,3,3,3,4];
const unique = [...new Set(nums)];
console.log('Unique:', unique); // [1,2,3,4]

// b) Check existence
const setDSA = new Set(nums);
console.log(setDSA.has(3)); // true

// c) Intersection / Union
const a = new Set([1,2,3]);
const b = new Set([2,3,4]);

const union = new Set([...a, ...b]);           // Union
console.log('Union:', union); // Set {1,2,3,4}

const intersection = new Set([...a].filter(x => b.has(x))); // Intersection
console.log('Intersection:', intersection); // Set {2,3}

// ===== End of Set Cheat Sheet =====
