a =[1,3,2,3,244]

// classical for loop

for (let index = 0; index < a.length; index++) 
    {
    const element = a[index];
    console.log(element)
}

// o/p
// 1
// 3
// 2
// 3
// 244

// forEach loop

a.forEach((value,index,arr) => {
    console.log(value,index,arr)
});

// o/p
// 1 0 (5) [1, 3, 2, 3, 244]
// 3 1 (5) [1, 3, 2, 3, 244]
// 2 2 (5) [1, 3, 2, 3, 244]
// 3 3 (5) [1, 3, 2, 3, 244]
// 244 4 (5) [1, 3, 2, 3, 244]

// forin loop

let obj = {
    a : 1,
    b : 2,
    c : 3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
}

// o/p:
// a 1
// b 2
// c 3

for (const ab of a) {
    console.log(ab)
}

// o/p:
// 1
// 3
// 2
// 3
// 244