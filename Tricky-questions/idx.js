let principal = 1000;
let rate = 0.05; // 5% annual interest
let timesCompounded = 4; // Quarterly
let years = 10;
let amount = principal * Math.pow((1 + rate / timesCompounded), (timesCompounded * years));
console.log("Future value: ", amount.toFixed(2))

// Original object
const originalObject = {
    name: "Alice",
    age: 28,
    address: {
        city: "New York",
        zip: 10001
    },
    hobbies: ["reading", "music"]
};

// ====== SHALLOW COPIES ======

// Using spread operator
const shallowCopy1 = { ...originalObject };

// Using Object.assign
const shallowCopy2 = Object.assign({}, originalObject);

// Modify nested value in shallow copy
shallowCopy1.address.city = "Los Angeles";

console.log("Original after shallow copy change:");
console.log(originalObject.address.city); // "Los Angeles" ❌ → changed due to reference

// ====== DEEP COPIES ======

// Method 1: Using JSON (basic deep copy)
const deepCopy1 = JSON.parse(JSON.stringify(originalObject));
deepCopy1.address.city = "Chicago";

console.log("Original after JSON deep copy change:");
console.log(originalObject.address.city); // "Los Angeles" ✅ → unchanged

// Method 2: Using structuredClone (modern & accurate)
const deepCopy2 = structuredClone(originalObject);
deepCopy2.address.city = "Houston";

console.log("Original after structuredClone change:");
console.log(originalObject.address.city); // "Los Angeles" ✅

console.log("\n✅ Comparison Summary:");
console.log("Shallow Copy 1:", shallowCopy1);
console.log("Shallow Copy 2:", shallowCopy2);
console.log("Deep Copy 1 (JSON):", deepCopy1);
console.log("Deep Copy 2 (structuredClone):", deepCopy2);
