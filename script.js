function toggleDropdown() {
    document.getElementById("dicas-dropdown").classList.toggle("mostrar");
}

window.onclick = function(event) {
    if (!event.target.matches('.botao-drop-adotei')) {
        var dropdowns = document.getElementsByClassName("conteudo-drop-adotei");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('mostrar')) {
                openDropdown.classList.remove('mostrar');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.conteudo-drop-adotei a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelectorAll('.card-informacao').forEach(card => {
                card.classList.remove('active');
            });
            
            // Abre o card correspondente
            const targetSection = this.getAttribute('data-section');
            const targetCard = document.getElementById(`${targetSection}-card`);
            if (targetCard) {
                targetCard.classList.add('active');
            }
            
            // Fecha o dropdown
            document.getElementById("dicas-dropdown").classList.remove("mostrar");
        });
    });

    // Adicionar event listeners para os botões de fechar
    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.classList.remove('active');
        });
    });
});

// Ajustar o footer e o espaço para o conteúdo
function adjustLayout() {
    const footer = document.querySelector('footer');
    const content = document.querySelector('.container');
    const cardContainer = document.querySelector('.card-container');
    
    if (footer && content && cardContainer) {
        const footerHeight = footer.offsetHeight;
        cardContainer.style.marginBottom = `${footerHeight + 30}px`;
    }
}

window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);
