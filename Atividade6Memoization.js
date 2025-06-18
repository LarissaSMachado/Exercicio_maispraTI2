// Função que faz cache dos resultados anteriores (memoization)
function memoize(fn) {
  const cache = {}; // Armazena resultados por argumento

  return function (...args) {
    const chave = JSON.stringify(args); // Converte os argumentos em uma chave única

    // Se já tiver no cache, retorna direto
    if (cache[chave]) {
      console.log("Resultado vindo do cache!");
      return cache[chave];
    }

    // Caso contrário, calcula, guarda no cache e retorna
    const resultado = fn.apply(this, args);
    cache[chave] = resultado;
    return resultado;
  };
}

// Exemplo com fatorial
const fatorialMemo = memoize(function(n) {
  if (n === 0) return 1;
  return n * fatorialMemo(n - 1);
});

console.log(fatorialMemo(5)); // Calcula e guarda
console.log(fatorialMemo(5)); // Vem do cache
