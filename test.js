const info = {
    name:"Bob",
    age: 20,
    status:"ok"
}

let newInfo = {
    ...info,
    age:25
}
console.log(newInfo)