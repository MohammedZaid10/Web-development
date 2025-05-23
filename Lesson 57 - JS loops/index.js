console.log("i am a developer")

let a = 1;

for (let a = 0; a < 100; a++) 
    {
    console.log(a);
    }

let obj = {
    'name' : 'Zaid',
    'Age' : 25
}

for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
    }

for (const ha of 'harry') {
    console.log(ha)
}

let i =7;

while (i < 10) {
    console.log(i)
    i++;
}

do{
    console.log(i);
    i++;
}while(i > 10)
