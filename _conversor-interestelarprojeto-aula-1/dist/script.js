var resposta = window.prompt(
  "Gostaria de começar a conversão de anos luz para metros? (ss/nn)"
);

if (resposta == "ss") {
  alert("Vamos converter anos-luz em metros!");
  var anosLuz = parseFloat(
    prompt("Digite o valor em anos-luz que será convertido para metros: ")
  );

  var valorMetros = 9.461e15;
  var metros = valorMetros * anosLuz;
  alert(
    `O valor de ${anosLuz} anos-luz em metros equivale a aproximadamente ${metros.toExponential()} m.`
  );
}