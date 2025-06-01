function nice(name) {
    console.log( name + " is awesome");
    console.log( name + " is great");
    console.log( name + " is nice");
    console.log( name + " is good");
}

nice("Zaid")
nice("Rohan")

// ==========================================

function sum(a, b){
    console.log(a+b)
}

sum(3,7)

// ==========================================

function sum1(a, b){
    return (a+b)
}

result1 = sum1(3,7)
result2 = sum1(4,5)
result3 = sum1(46,5)

console.log("The sum is " + result1)
console.log("The sum is " + result2)
console.log("The sum is " + result3)

// ==========================================

function sum2(a, b, c=10){
    console.log (a,b,c)
    return a + b + c
}

result1 = sum2(3)
result2 = sum2(4,5)
result3 = sum2(46,5,5)

console.log("The sum is " + result1)
console.log("The sum is " + result2)
console.log("The sum is " + result3)

// ==========================================

// O/P:
// Zaid is awesome
// Zaid is great
// Zaid is nice
// Zaid is good
// Rohan is awesome
// Rohan is great
// Rohan is nice
// Rohan is good
// 10
// The sum is 10
// The sum is 9
// The sum is 51
// 3 undefined 10
// 4 5 10
// 46 5 5
// The sum is NaN
// The sum is 19
// The sum is 56

// ==========================================

// Arrow Function

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(3423);
func1(34234);

// O/P
// I am an arrow function 34
// I am an arrow function 3423
// I am an arrow function 34234
