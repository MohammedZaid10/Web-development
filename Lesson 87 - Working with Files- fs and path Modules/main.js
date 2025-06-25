const fs = require("fs") // way to import in esx
// const fs = require("fs/promises") waqy to import in commonjs

// console.log(fs)

console.log('starting');

// fs.writeFileSync("harry.txt", "Harry is a good boy")

// fs.writeFile("harry3.txt", " harry is a good boy2", () =>{
//     console.log("done")
//     fs.readFile("harry3.txt", (error, data)=>{
//         console.log(error, data.toString())
//     })
// })

fs.appendFile("harry2.txt", "\n He is naught also", (e,d) => {
    console.log(d)
})

console.log('ending');