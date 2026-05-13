import readline = require("readline-sync")

// Limpar a tela
console.clear()

// Formulario de captura de informacoes
const nomeAluno:string = readline.question("Insira o nome do aluno: ")
const n1:number = Number(readline.question("Insira a primeira nota: "))
const n2:number = Number(readline.question("Insira a segunda nota: "))
const n3:number = Number(readline.question("Insira a terceira nota: "))
let situacao:string = ""

// Calcula a média das notas do aluno
const media:number = (n1 + n2 + n3) / 3

if (media >= 7){
	situacao = "Aprovado"
} else {
	situacao = "Reprovado"
}

console.log(`Olá, ${nomeAluno}! Sua média é de ${media.toFixed(2)} e você está ${situacao}.`)

