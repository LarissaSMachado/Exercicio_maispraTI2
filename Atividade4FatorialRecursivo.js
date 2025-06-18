// Função recursiva que calcula o fatorial de um número
function fatorial(n) {
  // Se o número for negativo, lança um erro
  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo!");
  }

  // Caso base: fatorial de 0 é 1
  if (n === 0) {
    return 1;
  }

  // Chamada recursiva: n * fatorial de (n - 1)
  return n * fatorial(n - 1);
}

// Exemplos de uso:
console.log(fatorial(5)); // 120 (5*4*3*2*1)
console.log(fatorial(0)); // 1 (caso base)
