var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
var resposta = prompt("Deseja começar o jogo de adivinhação? (ss/nn)")
var tentativas = 0; 

  while (chute != numeroSecreto) {
    if (resposta == 'ss') {
      var chute = prompt("Digite um outro número de 1 a 1000 até acertar o número secreto: ");
      tentativas += 1;
      if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}. Tentativas: ${tentativas}`);
      } else if (chute < numeroSecreto) {
        alert(`O número secreto é maior que ${chute}. Tentativas: ${tentativas}`);
      }else if (chute == numeroSecreto) {
        alert(`Parabéns! você acertou o número secreto ${chute} com ${tentativas} tentativas.`);
      }
    } else if (resposta == 'nn') {
      break;
    } 
  }