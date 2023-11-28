var listaDeJogadores = [];
var elementoTabela = document.getElementById("tabelaJogadores");

function exibirTela() {
  elementoTabela.innerHTML = "";
  listaDeJogadores.forEach((jogador, index) => {
    console.log(jogador);
    elementoTabela.innerHTML += `
     <tr>
          <td>${jogador.nome}</td>
          <td>${jogador.vitoria}</td>
          <td>${jogador.derrota}</td>
          <td>${jogador.pontos}</td>
          <td><button onClick="addVitoria(${index})">Vitória</button><br>
          <button onClick="addDerrota(${index})">Derrota</button></td>
          
          <td><button onClick="limpaRegistro(${index})">Limpar Registros</button><br>
          <button onClick="removeJogador(${index})">Remover Jogador</button></td>
        </tr>
    `;
  });
}

function criarJogador() {
  var novoJogador = document.getElementById("campoNovoJogador").value;
  listaDeJogadores.push({
    nome: novoJogador,
    vitoria: 0,
    derrota: 0,
    pontos: 0
  });
  document.getElementById("campoNovoJogador").value = "";
  exibirTela();
}

function addVitoria(index) {
  listaDeJogadores[index].vitoria++;
  listaDeJogadores[index].pontos = listaDeJogadores[index].pontos + 5;
  exibirTela();
}

function addDerrota(index) {
  listaDeJogadores[index].derrota++;
  listaDeJogadores[index].pontos = listaDeJogadores[index].pontos - 3;
  exibirTela();
}

function limpaRegistro(index) {
  listaDeJogadores[index].vitoria = 0;
  listaDeJogadores[index].derrota = 0;
  listaDeJogadores[index].pontos = 0;
  exibirTela();
}

function removeJogador(index) {
  listaDeJogadores.splice(index, 1);
  exibirTela();
}

function apagarJogadores() {
  listaDeJogadores = [];
  resultado2 = "";
  resultado = "";
  exibirTela();
}
