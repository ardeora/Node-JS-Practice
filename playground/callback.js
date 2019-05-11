console.log('Start');
const add = (a,b, callback) => {
    setTimeout(() => {
        callback(a,b)
    }, 2000)
}

add(1,4, (a,b) => {
    console.log(a+b);
})

console.log('Stop');