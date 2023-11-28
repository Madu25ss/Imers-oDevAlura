var resposta = prompt("Gostaria de começar a conversão de moedas? (ss/nn)");

if (resposta == "ss") {
  alert("Bem vindo ao conversor de Stellar!");
  var nome = prompt("Digite seu nome para começarmos: ");
  var valorReal = prompt(
    "Digite um valor em real para convertermos em Stellar: "
  );

  var cotacaoStellar = 1.76;
  var valorStellar = valorReal * cotacaoStellar;
  valorStellar = valorStellar.toFixed(2);

  alert(`Oi ${nome}!, convertendo o valor ficamos com ${valorStellar} XLM.`);
}
