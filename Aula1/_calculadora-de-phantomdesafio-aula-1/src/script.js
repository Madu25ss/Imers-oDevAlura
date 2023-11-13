alert("Bem vindo ao conversor de Phantom!");
var nome = prompt("Digite seu nome para começarmos: ");
var valorReal = prompt(
  "Digite um valor em real para convertermos em Phantom: "
);

var cotacaoPhantom = 0.00622409;
var valorPhantom = valorReal * cotacaoPhantom;
valorPhantom = valorPhantom.toFixed(5);

alert(
  `Oi ${nome}!, convertendo o valor em real ficamos com ${valorPhantom} phantom's.`
);
