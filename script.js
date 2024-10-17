// botão dicas para novos adotantes (novos-adotantes) com click que mostra e esconde o conteúdo //

const botaoDicas = document.getElementById('botao-dicas');
const dicasCards = document.getElementById('dicas-cards');

botaoDicas.addEventListener('click', function() {
    if (dicasCards.classList.contains('active')) { // vê se o card está ativo //
        dicasCards.classList.remove('active'); // esconde o card caso ativo //
        dicasCards.style.maxHeight = null; // remove altura máxima //
    } else {
        dicasCards.classList.add('active');
        dicasCards.style.maxHeight = dicasCards.scrollHeight + "px";
    }
});


// footer preso na parte debaixo da tela (propriedade sticky não funcionava) //
window.addEventListener('resize', function() {
    adjustFooter();
});

function adjustFooter() {
    const footer = document.getElementById('footer');
    const content = document.querySelector('.content');
    const footerHeight = footer.offsetHeight;

    content.style.minHeight = `calc(600px - ${footerHeight}px)`; // altura fixa de 600px - altura do footer //
}

adjustFooter();