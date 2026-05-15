import readline = require("readline-sync")
console.clear()

// Exibir a tabuada de 1 a 10 de um número informado
while(true){

	let num:number = Number(readline.question("Informe um número: "))
	let op:string = readline.question("Informe uma operação: \n").toLowerCase()

	if(op === "adicao" || op === "+"){
		for(let i = 1; i <= 10; i++){
			console.log(`${num} + ${i} = ${num + i}`)
		}
		break	
	} else if(op === "subtracao" || op === "-"){
        	for(let i = 1; i <= 10; i++){
                	console.log(`${num} - ${i} = ${num - i}`)
        	}
		break
	} else if(op === "multiplicacao" || op === "*"){
        	for(let i = 1; i <= 10; i++){
                	console.log(`${num} * ${i} = ${num * i}`)
        	}
		break
	} else if(op === "divisao" || op == "/"){
        	for(let i = 1; i <= 10; i++){
                	console.log(`${num} / ${i} = ${(num / i).toFixed(2)}`)
        	} 
		break
	} else {
		console.log("Operação inválida\n")
	}
}

