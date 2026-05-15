import readline = require("readline-sync")
console.clear()
let loop:boolean = true

// Receber um número e dizer se ele é par ou ímpar
while(loop){

	const num:number = Number(readline.question("\nDigite um número: "))
	
	if (num % 2 === 0){
		console.log("O número digitado é PAR")
	} else {
		console.log("O número digitado é ÍMPAR")
	}	
	
	// Loop de validação
	let continuar:string
	while(true){

		continuar = readline.question("\nDeseja continuar? \nS - Sim | N - Não ").toLowerCase()

		if(continuar === "n" || continuar === "s"){
			break
		}
		console.log("Operação inválida")
	}

	if(continuar === "n"){
		loop = false
	}
}

