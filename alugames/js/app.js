let jogosAlugados = 0;
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    //o gameClicado acessa o título de cada game do html, por isso usei a template string. entretanto, eu tbm preciso acessar a imagem
    // e o botão de cada game. para isso, eu acesso as classes da imagem e do botão de cada game através do querySelector do gameClicado,
    // que corresponde ao 'título' e representa toda estrutura de cada game no HTML.
    //usa o ponto antes do dashboard pq ele é uma classe!
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    //alert(nomeJogo.innerHTML);
    // se no alert eu colocasse apenas a varíavel nomoeJogo, seria exibido toda a linha do HTML, e n apenas o texto (por isso o .innerHTML)

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.innerHTML}?`)) {
       imagem.classList.remove('dashboard__item__img--rented');
       botao.classList.remove('dashboard__item__button--return');
       botao.innerHTML = 'Alugar';
       
        }
        if(jogosAlugados > 0){
             jogosAlugados--;
        }
    }else {
       imagem.classList.add('dashboard__item__img--rented');
       botao.classList.add('dashboard__item__button--return');
       botao.innerHTML = 'Devolver';
       jogosAlugados++;
    }
      console.log(`Jogos alugados: ${jogosAlugados}`);
}
