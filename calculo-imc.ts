import readline = require("readline-sync")
console.clear()

let loop:boolean = true

while(loop){

	// Coletando informacoes
	const nome:string = readline.question("Informe seu nome: ")
	const peso:number = Number(readline.question("Informe seu peso(kg): "))
	const altura:number = Number(readline.question("Informe sua altura(m): "))

	// Calculando IMC
	const imc:number = peso / altura**2

	// Classificacao
	let classificacao:string = ""

	if (imc < 18.5){
		classificacao = "Baixo peso"
	} else if (imc >= 18.5 && imc < 25){
		classificacao = "Peso normal"
	} else if (imc >= 25 && imc < 30){
		classificacao = "Excesso de peso"
	} else if (imc >= 30 && imc < 35){
		classificacao = "Obesidade de classe 1"
	} else if (imc >= 35 && imc < 40){
		classificacao = "Obesidade de classe 2"
	} else {
		classificacao = "Obesidade de classe 3"
	}

	console.log(`\nOlá ${nome} \nPeso: ${peso}kg \nAltura: ${altura}m \nIMC(${imc}) classificado em: ${classificacao}`) 
	
	let continuar:string = readline.question("Deseja continua? S - Sim | N - Não\n")
	if (continuar.toUpperCase() === "N"){
		loop = false
	}
}

