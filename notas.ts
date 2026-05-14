import readline = require("readline-sync")

// Limpar a tela
console.clear()

// Formulario de captura de informacoes
const nomeAluno:string = readline.question("Insira o nome do aluno: ")
const n1:number = Number(readline.question("Insira a primeira nota: "))
const n2:number = Number(readline.question("Insira a segunda nota: "))
const n3:number = Number(readline.question("Insira a terceira nota: "))
const nFaltas:number = Number(readline.question("Insira a quantidade de faltas: "))
let situacao:string = ""

// Calcula a média das notas do aluno
const media:number = (n1 + n2 + n3) / 3

// Regra: média >= 7 e faltas < 5 para ser aprovado
// 	  média >= 5 e < 7 e faltas < 3, está de recuperação
if (media >= 7 && nFaltas < 5){
	situacao = "Aprovado"
} else if (media >= 5 && media < 7 && nFaltas < 3){
       	situacao = "de Recuperação"
} else {
	situacao = "Reprovado"
}

console.log(`Olá, ${nomeAluno}! Sua média é de ${media.toFixed(2)}, você teve um total de ${nFaltas} faltas e está ${situacao}.`)

