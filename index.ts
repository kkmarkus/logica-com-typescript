const tela = require('readline-sync')
const nome:string = tela.question('Qual é o seu nome? ')
const anoNascimento:number = tela.question('Qual o seu ano de nascimento? ')
const idade:number = 2026 - anoNascimento

console.log("Olá,", nome)
console.log("A sua idade é ", idade, "anos")

