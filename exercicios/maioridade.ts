import readline = require("readline-sync")
console.clear()                                                                                                                                                                                                                         // Informe se a pessoa é maior ou menor de idade
const idade:number = Number(readline.question("Informe a sua idade: "))

if(idade >= 18){
        console.log("Você é maior de idade")
} else {
        console.log("Você é menor de idade")
}                    

