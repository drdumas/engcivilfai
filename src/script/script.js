const tabClicked = (tab) => {
    const contents = document.querySelectorAll('.content'); // Seleciona todos os conteúdos
    contents.forEach(content => content.classList.remove('content-show')); // Esconde todos os conteúdos

    const tabs = document.querySelectorAll('.tab-btn'); // Seleciona todos os botões de aba
    tabs.forEach(t => t.classList.remove('active')); // Remove a classe 'active' de todos os botões

    const contentId = tab.getAttribute('content-id'); // Obtém o ID do conteúdo da aba clicada
    const content = document.getElementById(contentId); // Seleciona o conteúdo correspondente
    if (content) {
        content.classList.add('content-show'); // Exibe o conteúdo ativo
        tab.classList.add('active'); // Destaca a aba ativa
    } else {
        console.log(`Conteúdo com ID ${contentId} não encontrado.`);
    }
};

// Seleciona todos os botões de aba e adiciona o evento de click
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

// Exibir a aba "Home" por padrão ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const defaultTab = document.querySelector('.tab-btn'); // Pega a primeira aba (Home)
    if (defaultTab) {
        tabClicked(defaultTab);
    }
});
