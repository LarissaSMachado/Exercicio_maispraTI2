// Lista de vendas feitas por diferentes clientes
const vendas = [
  { cliente: "João", total: 100 },
  { cliente: "Maria", total: 200 },
  { cliente: "João", total: 50 },
  { cliente: "Ana", total: 300 },
  { cliente: "Maria", total: 100 }
];

// Função que agrupa os totais por cliente
function agruparVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    // Se o cliente ainda não existir no objeto acumulador, inicia com 0
    if (!acumulador[venda.cliente]) {
      acumulador[venda.cliente] = 0;
    }

    // Soma o valor da venda ao total do cliente
    acumulador[venda.cliente] += venda.total;

    return acumulador;
  }, {}); // Objeto inicial vazio
}

// Exemplo de uso:
console.log(agruparVendasPorCliente(vendas));
// Saída esperada: { João: 150, Maria: 300, Ana: 300 }
