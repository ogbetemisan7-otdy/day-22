// function myFunc(){
//     let data = "Data from function"
//     return data
// }
// myFunc()

// function getName(sName){
//     return `My name is ${sName}`
// }
// function sum(a, b){
//     a = Number(a)
//     b = Number(b)
//     let sum = a + b
//     return sum
// }
// sum(45, 78)
// console.log(`Sum of ${a} and ${b} is ${sum}`)

// const showDaya = () => {
//     console.log("Data from arrow function")
// }
//create a simple arrow function that returns a string variable to the browser and to the console

let message = "Hello, welcome to my website"
const greet = () => {
    return message
}
document.getElementById("result").innerHTML = greet();
console.log(greet());