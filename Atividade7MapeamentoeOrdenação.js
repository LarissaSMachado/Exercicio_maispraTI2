// Lista de produtos com nome e preço
const produtos = [
  { nome: "Celular", preco: 1200 },
  { nome: "Notebook", preco: 3500 },
  { nome: "Fone de Ouvido", preco: 200 },
  { nome: "Monitor", preco: 800 }
];

// Função que retorna um array só com os nomes, ordenados por preço crescente
function nomesOrdenadosPorPreco(produtos) {
  // Primeiro, ordena os produtos com base no preço (menor para maior)
  const ordenados = produtos.sort((a, b) => a.preco - b.preco);

  // Depois, usa map pra retornar só os nomes
  const nomes = ordenados.map(produto => produto.nome);

  return nomes;
}

// Exemplo de uso:
console.log(nomesOrdenadosPorPreco(produtos));
// Saída esperada: ["Fone de Ouvido", "Monitor", "Celular", "Notebook"]
