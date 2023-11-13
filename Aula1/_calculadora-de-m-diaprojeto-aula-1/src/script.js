alert("Vamos converter dolar para o real!");
var dolar = prompt("Digite o valor em dolar: ");

var cotacaoDolar = 5.32;
var valorReal = cotacaoDolar * dolar;
valorReal = valorReal.toFixed(2);
alert(`O valor em dolar equivale a R$ ${valorReal}`);
