// ===== Map Cheat Sheet =====

// 1. Create a Map
const map = new Map();

// 2. set(key, value) - Add key-value pair
map.set("name", "Alice");
map.set("age", 25);
map.set("isActive", true);
map.set(1, "numberKey"); // keys can be any type
console.log("After set():", map);

// 3. get(key) - Get value for a key
console.log('get("name"):', map.get("name"));      // Alice
console.log('get("age"):', map.get("age"));        // 25
console.log('get("unknown"):', map.get("unknown")); // undefined if key not exist

// 4. has(key) - Check if a key exists
console.log('has("name"):', map.has("name"));     // true
console.log('has("gender"):', map.has("gender")); // false

// 5. delete(key) - Remove a key-value pair
map.delete(1);
console.log("After delete(1):", map);

// 6. clear() - Remove all entries
// map.clear();
// console.log("After clear():", map); // Map(0) {}

// 7. size - Number of entries
console.log("size:", map.size);

// 8. keys() - Iterator of keys
console.log("keys():");
for (const key of map.keys()) {
  console.log(key);
}

// 9. values() - Iterator of values
console.log("values():");
for (const value of map.values()) {
  console.log(value);
}

// 10. entries() - Iterator of [key, value] pairs
console.log("entries():");
for (const [key, value] of map.entries()) {
  console.log(key, value);
}

// 11. forEach() - Loop through map
console.log("forEach():");
map.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

// 12. Convert Map <-> Array
const arr = [...map]; // Map to array of [key, value]
console.log("Map to Array:", arr);

const newMap = new Map(arr); // Array to Map
console.log("Array to Map:", newMap);

// 13. Using Object/Array as key
const objKey = { id: 1 };
const arrKey = [1, 2, 3];
map.set(objKey, "objectValue");
map.set(arrKey, "arrayValue");
console.log(map.get(objKey)); // objectValue
console.log(map.get(arrKey)); // arrayValue

// 14. Frequency counter example (common in DSA)
const nums = [1, 2, 2, 3, 3, 3];
const freq = new Map();
for (const num of nums) {
  freq.set(num, (freq.get(num) || 0) + 1);
}
console.log("Frequency Map:", freq);

// 15. WeakMap (Optional)
// Keys must be objects only, values can be anything
const weakMap = new WeakMap();
const obj = { name: "Alice" };
weakMap.set(obj, "data");
console.log(weakMap.get(obj)); // data

// ===== End of Map Cheat Sheet =====
