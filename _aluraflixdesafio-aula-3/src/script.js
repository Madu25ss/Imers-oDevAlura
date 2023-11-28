
var filmes = [
"https://mir-s3-cdn-cf.behance.net/project_modules/hd/cda393149570703.62e9f09e23d41.png",
"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00062597-tgjpnvpghw-portrait.jpg",
"https://i.pinimg.com/originals/a8/dc/79/a8dc791b1fb3956c423e60e9267edddc.jpg",
"https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_.jpg",
"https://br.web.img3.acsta.net/medias/nmedia/18/35/91/74/19253715.jpg",
"https://m.media-amazon.com/images/I/51MoRdaHI8L._AC_UF894,1000_QL80_.jpg",
"https://m.media-amazon.com/images/M/MV5BMjA4MzU5NzQxNV5BMl5BanBnXkFtZTgwOTg3MDA5NzM@._V1_QL75_UX190_CR0,0,190,281_.jpg",
"https://br.web.img3.acsta.net/r_1280_720/img/d5/d6/d5d675697a5c90b783c1bdf789788a68.jpg",
"https://m.media-amazon.com/images/I/61T487fKVdS.jpg",
"https://m.media-amazon.com/images/I/81RvCuMq9iL.jpg"
];

var links = [
"https://www.imdb.com/title/tt18925334/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_pear",
"https://www.imdb.com/title/tt5104604/?ref_=vp_close",
"https://www.imdb.com/title/tt5726616/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_call%2520me%2520",
"https://www.imdb.com/title/tt3890160/?ref_=nv_sr_srsg_2_tt_7_nm_1_q_baby%2520dr",
"https://www.imdb.com/title/tt0118789/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_buffalo",
"https://www.imdb.com/title/tt2872718/?ref_=fn_al_tt_1",
"https://www.imdb.com/title/tt5687612/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_fleab",
"https://www.imdb.com/title/tt0432283/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_fantastic%2520mr",
"https://www.imdb.com/title/tt2267998/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_garota",
 "https://www.imdb.com/title/tt2359704/?ref_=nv_sr_srsg_0_tt_4_nm_4_q_jojos%2520bi"
];


var nomes = [
'Pearl (2022)', 'Ilha dos Cachorros (2018)', 'Me Chame Pelo Seu Nome (2017)', 'Em Ritmo de Fuga (2017)',
  'Buffalo 66 (1998)', 'O Abutre (2014)', 'Fleabag (2016)', 'O Fantástico Sr.Raposo (2009)', 'Garota Exemplar (2014)', 'Jojos Bizarre Adventure (2012)'
];

document.write('<div class="container_filmes">')

var i = 0;

while(i<filmes.length) {
  if (filmes[i].endsWith('.jpg') || filmes[i].endsWith('.png')) {
    document.write('<div class="container_itens">');
    document.write('<a style="text-decoration: none;" href=' + links[i] + '>');
    document.write('<img src=' + filmes[i] + '>');
    document.write('<p>' + nomes[i] + '</p>');
    document.write('</div>');
  }else {
    document.write('<p> A imagem ' + i + ' não tem formato jpg ou png </p>');
  }
  i++
}
document.write('</div>');
