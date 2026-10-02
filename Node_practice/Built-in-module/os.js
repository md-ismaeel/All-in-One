const os = require("os")
// console.log(os)

const user = os.userInfo()
console.log(user)

console.log(`system uptime ${os.uptime()}`)

const myMemory={
    type:os.type(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(myMemory)



