function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value;
  var aviso = document.getElementById('aviso');
  
  
  if (filmeFavorito.endsWith('.png') || filmeFavorito.endsWith('.jpg') || filmeFavorito.endsWith('.jpeg')) {
  var elementoListaFilmes = document.getElementById('listaFilmes');
  var trailerFilme = document.getElementById('trailer').value;
  var nomeFilme = document.getElementById('nomeFilme').value;
  
    
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + `<div class="itensJS"><a href="${trailerFilme} target="_blank" style="text-decoration: none"><img src="${filmeFavorito}"><p>${nomeFilme}</p></a>`;
  document.getElementById('filme').value = "";
  document.getElementById('trailer').value = "";
  document.getElementById('nomeFilme').value = "";
  } 
  }