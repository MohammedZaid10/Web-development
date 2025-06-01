let obj1 = {
    1: "crazy",
    2: "amazing",
    3: "fire"
}

let obj2 = {
    1: "engine",
    2: "food",
    3: "garment"
}

let obj3 = {
    1: "bro",
    2: "limited",
    3 : "hub"
}

let ran1 = Math.floor(Math.random() * 3) + 1;
let ran2 = Math.floor(Math.random() * 3) + 1;
let ran3 = Math.floor(Math.random() * 3) + 1;

console.log(obj1[ran1]+ " " + obj2[ran2] + " " + obj3[ran3])