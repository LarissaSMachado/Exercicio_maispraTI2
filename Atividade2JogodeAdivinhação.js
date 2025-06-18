// Este código roda no Node.js (terminal) usando o pacote 'readline' para entrada do usuário
const readline = require('readline');

// Criando interface para ler dados do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function jogar() {
  rl.question('Adivinhe o número entre 1 e 100: ', (resposta) => {
    const palpite = parseInt(resposta);
    tentativas++;

    if (palpite === numeroSecreto) {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
      rl.close(); // encerra a leitura
    } else if (palpite < numeroSecreto) {
      console.log('Mais alto!');
      jogar(); // chama de novo
    } else {
      console.log('Mais baixo!');
      jogar(); // chama de novo
    }
  });
}

jogar(); // Inicia o jogo
