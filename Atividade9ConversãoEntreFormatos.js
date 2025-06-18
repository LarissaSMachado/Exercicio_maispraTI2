// Função que converte um array de pares para objeto
function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i];
    obj[chave] = valor;
  }
  return obj;
}

// Função que converte um objeto para array de pares
function objetoParaPares(obj) {
  const pares = [];
  for (let chave in obj) {
    pares.push([chave, obj[chave]]);
  }
  return pares;
}

// Exemplos de uso:
const pares = [["nome", "João"], ["idade", 30]];
const pares = [["produto", "Notebook"], ["preco", 3500]];

console.log(paresParaObjeto(pares)); 
console.log(objetoParaPares(obj));   
