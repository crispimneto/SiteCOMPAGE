// COMPAGE - comportamento do site

// Abre/fecha o menu no celular
const botaoMenu = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');

botaoMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', aberto);
});

// Fecha o menu ao clicar em um link
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('aberto');
    botaoMenu.setAttribute('aria-expanded', false);
  });
});

// Ano automático no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();
