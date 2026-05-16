// ======================================
// ENTRADA DE DADOS
// ======================================

// readline-sync permite capturar dados digitados pelo usuário no terminal
import readline = require('readline-sync')

// ======================================
// LENDO VALORES DO USUÁRIO
// ======================================

// Number() converte o texto digitado para número
const num1: number = Number(readline.question("Informe o primeiro valor: "))
const num2: number = Number(readline.question("Informe o segundo valor: "))

// ======================================
// REALIZANDO O CÁLCULO
// ======================================

const resultado: number = num1 + num2

console.log("A soma de " + num1 + " + " + num2 + " = " + resultado)

// ======================================
// LENDO DADOS DO USUÁRIO
// ======================================

// Pergunta o nome da pessoa
const nome: string = readline.question('Qual é o seu nome? ')

// Pergunta o ano em que nasceu e converte para número
const anoNascimento: number = Number(readline.question('Qual o seu ano de nascimento? '))

// ======================================
// CALCULANDO E EXIBINDO O RESULTADO
// ======================================

// Calcula a idade subtraindo o ano de nascimento do ano atual
const idade = 2026 - anoNascimento

console.log("Olá,", nome)
console.log("A sua idade é", idade, "anos")

