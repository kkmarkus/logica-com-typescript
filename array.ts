let frutas:string[] = ["Morango", "Banana", "Pera", "Uva", "Abacaxi"]

console.log("Frutas:", frutas)
console.log("Frutas[1]:", frutas[1])
console.log("Tamanho do array:", frutas.length)
console.log("Ultimo elemento:", frutas[frutas.length - 1], '\n')

// Ordem alfabetica
// frutas.sort()

// Inverter a ordem da lista
// frutas.reverse()

// Trocando item na lista
frutas[2] = "Melancia"

// Adicionando itens
frutas.push("Limão") // Final da lista
frutas.unshift("Melão") // Inicio da lista

// Removendo itens
// frutas.pop() // Remove o ultimo elemento
// frutas.shift() // Remove o primeiro elemento 

// Carregar a lista
for(let i = 0; i < frutas.length; i++){
        console.log(`${i + 1} - ${frutas[i]}`)
}


