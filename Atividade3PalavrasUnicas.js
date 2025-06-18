// Função que recebe uma frase e retorna apenas as palavras únicas
function palavrasUnicas(frase) {
  const palavras = frase.toLowerCase().split(" "); // separa a frase em palavras
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];
    // Conta quantas vezes a palavra aparece
    let contador = 0;

    for (let j = 0; j < palavras.length; j++) {
      if (palavras[j] === palavra) {
        contador++;
      }
    }

    // Se apareceu só uma vez, adiciona ao array de únicas
    if (contador === 1) {
      unicas.push(palavra);
    }
  }

  return unicas;
}

// Exemplo
console.log(palavrasUnicas("olá olá mundo mundo teste")); // ['teste']
