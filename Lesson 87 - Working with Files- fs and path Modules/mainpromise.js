import fs from "fs/promises"

let a = await fs.readFile("harry2.txt")

// let b = await fs.writeFile("harry2.txt", "\n He is also an idiot")

let b = await fs.appendFile("harry2.txt", "\n He is also an idiot")


console.log(a.toString(), b);