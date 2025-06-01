let arr = [2,3,9,6,22]
// let newarr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

// console.log(newarr)

// same aboive lines of code can be written using below map function to make things simpler

// map() function usage:

let newarr = arr.map((e, index, array)=>{
    return e**2
})

console.log(newarr)

// ========================================

// filter() usage:

const greaterthanseven = x=>{
    if (x>7){
        return true
    }
    return false
}

console.log(arr.filter(greaterthanseven))

// (or)

console.log(arr.filter((x)=>{
    if (x>7){
        return true
    }
    return false
}))

// ========================================

//reduce()

let arr2 = [1,2,3,4,5]

const red = (x,y) => {
    return x*y
}

console.log(arr2.reduce(red))

// ========================================

let arr3 = Array.from("Harry")
console.log(arr3)
// o/p:
// (5) ['H', 'a', 'r', 'r', 'y']

// ========================================