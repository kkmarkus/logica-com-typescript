import readline = require("readline-sync")
console.clear()

let loop:boolean = true
let preco:number = 0
let valores:number[] = []

while(loop){
	console.log("Combo para o lanche")
	const opcoes = readline.questionInt("1 - Coca pet com Bomba \n2 - Guarana pet com Bomba \n3 - Bolo com Cafe \n4 - Somente Cafe \n")

	switch(opcoes) {
		case 1:
			console.log("O combo 1 custa R$10,50")
			preco = 10.5
			valores.push(preco)
		break
		case 2:
			console.log("O combo 2 custa R$10,00")
			preco = 10
			valores.push(preco)
		break
		case 3:
      console.log("O combo 3 custa R$7,50")
			preco = 7.5
			valores.push(preco)
    break
    case 4:
      console.log("O combo 4 custa R$2,50")
			preco = 2.5
			valores.push(preco)
	  break
		default:
			console.log("Ops! Opcao invalida. Informe uma opcao de 1 a 4")
		break	
	}

	const parar = readline.questionInt("Deseja algo a mais?\n1 - Sim | 2 - Não\n")
	loop = parar !== 2 ? true : false

	console.log("Valores:", valores)

}

let total = 0
for(let i = 0;i < valores.length; i++){
	total += valores[i]
}

console.log(`Voce selecionou ${valores.length} item(ns) seu total é de R$${total.toFixed(2)}`)

