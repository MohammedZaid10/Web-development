// console.log('Zaid');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5){
        reject("No random number was not supporting you")
    }
    else{
        setTimeout(() => {
        console.log("yes i am done")
        resolve("Done")
    }, 1000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5){
        reject("No random number 2 was not supporting you")
    }
    else{
        setTimeout(() => {
        console.log("yes i am done 2")
        resolve("Done 2")
    }, 3000);
    }
})

// prom1.then((b) => {
//     console.log(b)
// }).catch((err) => {
//   console.log(err);
// }
// )

// Chain of then can also be used

// let p3 = Promise.all(prom1, prom2)

// p3.then((a) => {
//   console.log(a);
// }).catch(err =>{
//     console.log(err);
// })

// let p3 = Promise.allSettled([prom1, prom2])

// p3.then((a) => {
//   console.log(a);
// }).catch(err =>{
//     console.log(err);
// })

// let p3 = Promise.race([prom1, prom2])

// p3.then((a) => {
//   console.log(a);
// }).catch(err =>{
//     console.log(err);
// })

let p3 = Promise.any([prom1, prom2])

p3.then((a) => {
  console.log(a);
}).catch(err =>{
    console.log(err);
})