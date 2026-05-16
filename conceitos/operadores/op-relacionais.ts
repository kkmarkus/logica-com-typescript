// ======================================
// OPERADORES RELACIONAIS
// ======================================

// Usados para comparar valores — sempre retornam true ou false
// Operadores: > (maior), >= (maior ou igual), < (menor), <= (menor ou igual)
//             == (igual em valor), === (igual em valor e tipo)
//             != (diferente em valor), !== (diferente em valor ou tipo)

const a: number = 10
const b: number = 5
const c: number = 15

// ======================================
// COMPARAÇÕES SIMPLES
// ======================================

console.log("A > B: ", a > b)    // true  (10 maior que 5)
console.log("C < A: ", c < a)    // false (15 não é menor que 10)
console.log("B = C: ", b === c)  // false (5 não é igual a 15)

// ======================================
// OPERADORES LÓGICOS: && (AND) e || (OR)
// ======================================

// AND (&&) -> verdadeiro somente se AMBAS as condições forem verdadeiras
// V && V = V
// V && F = F
// F && V = F
// F && F = F

// OR (||) -> verdadeiro se PELO MENOS UMA condição for verdadeira
// V || V = V
// V || F = V
// F || V = V
// F || F = F

console.log("\n")

console.log("A > B AND C > A: ", a > b && c > a)  // true  && true  = true
console.log("B = C AND C < A: ", b === c && c < a) // false && false = false

console.log("A > B OR C > A: ", a > b || c > a)   // true  || true  = true
console.log("B = C OR C < A: ", b === c || c < a)  // false || false = false

