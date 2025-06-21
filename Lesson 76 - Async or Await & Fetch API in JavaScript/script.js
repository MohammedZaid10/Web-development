function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 2000);
    })
}

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