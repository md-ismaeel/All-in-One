// duplicate

const arr = [1, 2, 4, "ismail", 90, "ismail", 90]

const frequency = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {})

// console.log(frequency);

for (let frq in frequency) {
    if (frequency[frq] > 2) {
        console.log(frq);
    }
}
// const double = Object.entries(frequency).filter(([key, value]) => value > 1)
// console.log(double);

// let frequencies = {}

// for (let i = 0; i < arr.length; i++) {
//     if (frequencies[arr[i]]) {
//         frequencies[arr[i]]++
//     } else {
//         frequencies[arr[i]] = 1
//     }
// }

// let frequency2 = {}
// arr.forEach((item) => {
//     if (frequency2[item]) {
//         frequency2[item]++
//     } else {
//         frequency2[item] = 1
//     }
// })

// console.log(frequency);


const flated = [1, 2, [3, 4, [5, 6, [7, 8, 9], 10]], 12].flat(2);
// console.log(flated);

const flatten = (arr, num) => {
    let result = [];

    function flat(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && num > 0) {
                flat(arr[i], num - 1)
            } else {
                result.push(arr[i])
            }
        }
    }
    flat(arr, num)
    return result
}
const array = [1, 2, [3, 4, [5, 6, [7, 8, 9], 10]], 12]
// console.log(flatten(arr, 1));


const trap = (height) => {
    // Initialize pointers for the left and right ends of the array
    let left = 0;
    let right = height.length - 1;

    // Initialize the maximum heights seen from the left and right ends
    let leftMax = height[left];
    let rightMax = height[right];

    // Variable to keep track of the total amount of trapped water
    let water = 0;

    // Loop while the left pointer is less than the right pointer
    while (left < right) {
        // If the height at the left pointer is less than the height at the right pointer
        if (leftMax < rightMax) {
            // Move the left pointer to the right
            left++;

            // Update the maximum height seen from the left
            leftMax = Math.max(leftMax, height[left]);

            // Calculate the trapped water at the current position
            water += leftMax - height[left];
        } else {
            // Move the right pointer to the left
            right--;

            // Update the maximum height seen from the right
            rightMax = Math.max(rightMax, height[right]);

            // Calculate the trapped water at the current position
            water += rightMax - height[right];
        }
    }
    // Return the total amount of trapped water
    return water;
};
