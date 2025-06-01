// Four ways to find factorial of a number

let arr2 = [1,2,3,4,5]

const red = (x,y) => {
    return x*y
}
console.log(arr2.reduce(red))

let fact = 1;
arr2.forEach((value,index) => {
    fact = fact * value
});
console.log(fact)

let fact2 = 1;
for (const ab of arr2) {
    fact2 = fact2 * ab;
}
console.log(fact2)

fact3 = 1;
for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    fact3 = fact3 * element;
}
console.log(fact3)