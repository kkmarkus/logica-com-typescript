// ======================================
// OPERADORES CONDICIONAIS
// ======================================

// Usados para tomar decisões no código com base em uma condição
// Operadores: if (se), else (senão), else if (senão se)

// ======================================
// IF / ELSE
// ======================================

// O bloco if só executa se a condição for verdadeira (true)
// O bloco else executa quando a condição for falsa (false)

if (true) {
  console.log("Valor verdadeiro")
} else {
  console.log("Valor falso")
}

// ======================================
// EXEMPLO COM VARIÁVEL
// ======================================

const hora: number = 14

if (hora < 12) {
  console.log("Bom dia!")
} else if (hora < 18) {
  console.log("Boa tarde!")
} else {
  console.log("Boa noite!")
}

