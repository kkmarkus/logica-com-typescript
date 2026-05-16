// ======================================
// LAÇO DE REPETIÇÃO: WHILE
// ======================================

// Usado quando não sabemos quantas vezes o laço irá repetir
// Continua executando enquanto a condição for verdadeira

let contador = 0

// ======================================
// WHILE -> analisa a condição antes de executar
// ======================================

while (contador <= 10) {
  console.log(contador)
  contador++
}

// ======================================
// DO...WHILE -> executa pelo menos uma vez, depois analisa
// ======================================

contador = 10

do {
  console.log(contador)
  contador--
} while (contador >= 0)

