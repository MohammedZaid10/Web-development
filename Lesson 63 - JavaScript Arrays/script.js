let arr = [1,2,3,4,5]

console.log(arr)
console.log(arr.length)

console.log(arr[0], typeof arr)
console.log(arr[5])
console.log(arr[3])

arr[0] = 5666;

console.log(arr)

console.log(arr.toString())

console.log(arr.join(" and "))

let a = [1,2,34,4,5,6]
console.log(a)
a.pop()
console.log(a)

a.push('harry', 100)
console.log(a)

a.shift()
console.log(a)
a.unshift('jack')
console.log(a)
delete a[4]
console.log(a)

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
let a4 = a1.concat(a2,a3)
console.log(a4)

let c=[1,2,3,4,5,6,7]
console.log(c)
c.splice(1,4, 233,333,433,533,633)
console.log(c)

let b= [1,2,3,4,5]
d = b.slice(1,3)
console.log(b)
console.log(d)