import readline = require("readline-sync")
console.clear()

// Valide uma senha pré-definida no código
while(true){
	let user:string = readline.question("Insira seu usuário: ")
	let senha:string = readline.question("Insira sua senha: ")

	if(user === "admin" && senha === "admin123"){
		console.log("Usuário logado ")
		break
	} else {
		console.log("Acesso negado\n")
	}
}

