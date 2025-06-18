// Função debounce que só executa a função original se o tempo entre chamadas for respeitado
function debounce(fn, delay) {
  let timeoutId;

  // Retorna uma nova função controlada
  return function (...args) {
    // Cancela o timeout anterior, se existir
    clearTimeout(timeoutId);

    // Define um novo timeout
    timeoutId = setTimeout(() => {
      fn.apply(this, args); // Executa a função original com os mesmos argumentos
    }, delay);
  };
}

// Exemplo de uso:
function buscar() {
  console.log("Função executada!");
}

// Cria uma função com debounce de 500ms
const buscarComControle = debounce(buscar, 500);

// Simula várias chamadas rápidas
buscarComControle(); // Ignorado
buscarComControle(); // Ignorado
setTimeout(buscarComControle, 600); // Executa depois de 600ms
