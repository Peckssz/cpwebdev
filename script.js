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