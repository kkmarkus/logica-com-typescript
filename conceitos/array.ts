// ======================================
// ARRAYS (LISTAS)
// ======================================

// Declarando um array com tipagem
let frutas: string[] = ["Morango", "Banana", "Pera", "Uva", "Abacaxi"]

// ======================================
// ACESSANDO ELEMENTOS
// ======================================

console.log("Frutas:", frutas)
console.log("Frutas[1]:", frutas[1])                // acessa pelo índice (começa em 0)
console.log("Tamanho do array:", frutas.length)     // quantidade de elementos
console.log("Ultimo elemento:", frutas[frutas.length - 1], '\n')

// ======================================
// ORDENAÇÃO
// ======================================

// Ordem alfabetica
// frutas.sort()

// Inverter a ordem da lista
// frutas.reverse()

// ======================================
// MODIFICANDO ELEMENTOS
// ======================================

// Trocando item pelo índice
frutas[2] = "Melancia"

// Adicionando itens
frutas.push("Limão")    // adiciona no final da lista
frutas.unshift("Melão") // adiciona no início da lista

// Removendo itens
// frutas.pop()   // remove o último elemento
// frutas.shift() // remove o primeiro elemento

// ======================================
// PERCORRENDO O ARRAY
// ======================================

// Exibindo todos os elementos com for
for (let i = 0; i < frutas.length; i++) {
  console.log(`${i + 1} - ${frutas[i]}`)
}

