import readline = require("readline-sync")
console.clear()

// Calcular o fatorial(n!) de um número
let num:number = Number(readline.question("Digite um número: "))
let total:number = 1

for(let i = num; i >= 1; i--){
	total *= i
}

console.log(`Fatorial de ${num} = ${total}`)

