import readline = require('readline-sync')

const num1:number = Number(readline.question("Informe o primeiro valor: "))
const num2:number = Number(readline.question("Informe o segundo valor: "))

const resultado:number = num1 + num2

console.log("A soma de " + num1 + " + "+ num2 + " = " + resultado)

