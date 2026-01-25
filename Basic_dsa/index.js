/* Q.1: Sum of all natural numbers*/

const sumOfAllNaturalNums = (n) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// console.log(sumOfAllNaturalNums(10));

/* Q.2: Sum of digits of a number*/
function sumOfDigits(num) {
    num = Math.abs(num); //-2878383
    let sum = 0;

    while (num > 0) {
        let rem = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }
    return sum;
}

// console.log("sumOfDigits", sumOfDigits(-2878383)); //

// Q.3: Count of digits of a number
function CountsOfNumberOfDigits(num) {
    num = Math.abs(num);
    let count = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }

    return count;
}

// console.log(CountsOfNumberOfDigits(-345674637473));

// Q.4: Reverse a number
function reverseNumber(num) {
    let rev = 0;
    while (num > 0) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return rev;
}

// console.log(reverseNumber("123"));

/* Q.4: Prime number*/
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(isPrime(7));

/* Q.6: Fibonacci series*/
function fibonacci(n) {
    let a = 0,
        b = 1,
        c;
    for (let i = 0; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return a;
}

// console.log(fibonacci(15));

/* Q.7: Palindrome number*/
function isPalindrome(num) {
    let temp = num;
    let rev = 0;
    while (temp > 0) {
        let rem = temp % 10;
        rev = rev * 10 + rem;
        temp = Math.floor(temp / 10);
    }
    return rev === num;
}

// console.log(isPalindrome(121));

/* Q.8: Armstrong number*/
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let rem = temp % 10;
        sum += rem * rem * rem;
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

// console.log(isArmstrong(153));

const obj1 = {
    name: "John",
    regularFunc: function () {
        console.log(this.name); // 'John'
    },
    arrowFunc: () => {
        console.log(this.name); // undefined (this refers to parent scope)
    },
};

// obj.regularFunc();
// obj.arrowFunc();

const obj = {
    name: "A",
    address: {
        city: "Hyderabad"
    }
};

const copyObj = { ...obj };
// copyObj.address.city = "Mumbai";

// console.log("obj", obj);
// console.log("copyObj",copyObj);

const deepCopy = JSON.parse(JSON.stringify(obj))
deepCopy.address.city = "Mumbai";
// console.log("obj", obj);
// console.log("deepCopy", deepCopy);

const structureCln = structuredClone(obj)
structureCln.address.city = "Hyd"
// console.log("obj",obj)
// console.assert(obj === structureCln)


// Rest with other parameters
function greet(greeting, ...names) {
    console.log(`${greeting} ${names.join(' and ')}`);
}

// greet('Hello', 'Alice', 'Bob',"ismail","Rdk"); // 'Hello Alice and Bob'

// ✅ PURE - No side effects
function calculateDiscount(price, discountPercent) {
    return price * (1-discountPercent / 100);
}

const originalPrice = 100;
console.log(calculateDiscount(originalPrice, 10)); // 90
console.log(originalPrice); // 100 (unchanged)
