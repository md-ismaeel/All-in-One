const obj = {
    name: "ismail",
    age: 24,
    city: "mumbai",
    address: {
        street: "abc",
        city: "pune",
        state: "maharashtra",
        ext: {
            a: 1,
            b: 2
        }
    }
}

const shallow = { ...obj };

// shallow.name = "sahil";
// console.log("shallow", shallow);
// console.log("obj", obj);

const deep = JSON.parse(JSON.stringify(obj));

deep.name = "sumit";
console.log("obj", obj);
console.log("deep", deep);

// console.log(window.Object);
