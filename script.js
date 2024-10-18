function enviarContatos() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !telefone || !assunto || !mensagem) {
        alert('Preencha todos os campos!');
    } else if (nome.length < 2){
        alert('O nome deve conter no mínimo 2 caracteres!')
    }

    else{
    alert(`Formulário enviado com sucesso!
        Nome: ${nome}
        Email: ${email}
        Telefone: ${telefone}
        Assunto: ${assunto}
        Mensagem: ${mensagem}
        `);
    }
}
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

function mostrarAnimalInfo(nome, idade, porte, sexo, vermifugacao, vacinacao, castracao) {
    alert(`Nome: ${nome}\nIdade: ${idade} meses\nPorte: ${porte}\nSexo: ${sexo}\nVermifugado: ${vermifugacao}\nVacinado: ${vacinacao}\nCastrado: ${castracao}`);
}
