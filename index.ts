import readline = require('readline-sync')

// pergunta o nome da pessoa
const nome:string = readline.question('Qual é o seu nome? ') 
// pergunta o ano em que nasceu
const anoNascimento:number = Number(readline.question('Qual o seu ano de nascimento? '))
// calcula a idade da pessoa
const idade = 2026 - anoNascimento

console.log("Olá,", nome)
console.log("A sua idade é ", idade, "anos")

