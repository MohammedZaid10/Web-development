console.log("Hello World")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red";

// document.getElementById("red box").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "red"; // selects only the first box and colors it

// console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").forEach(e => {
//     e.style.bacgroundColor = "green";
// });
// we will have to iterate over the boxes even tho we are using quueryselector all if we want to color all the boxes

let a = document.getElementsByTagName("div")
console.log("a = ", a)

let b = a[4].matches("#red box")
console.log("b = ", b)

let c = a[4].closest("container")
console.log(c)

