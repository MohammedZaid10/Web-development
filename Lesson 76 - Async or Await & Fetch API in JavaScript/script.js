// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 2000);
//     })
// }

async function getData() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // let data = await x.json()
    // // let data = await x.text()
    // console.log(data)   

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    return data
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

async function main(params) {
    console.log('Loading modules');
    console.log('Do something else');
    console.log('Load data');
    let data = await getData()
    console.log(data);
    console.log('Process data');
    console.log('Task 2');
}

main()


// data.then((v) => {
//     console.log(data);
//     console.log('Process data');
//     console.log('Task 2');
// })