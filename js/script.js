// =========================================================
// COMPAGE - menu, rodapé e comportamento do site
// O MENU e o RODAPÉ ficam SÓ AQUI e aparecem em todas as páginas.
// Para incluir/remover uma página do menu, edite a lista "paginas".
// =========================================================

const paginas = [
  { arquivo: 'index.html',         nome: 'Início' },
  { arquivo: 'sobre.html',         nome: 'Sobre' },
  { arquivo: 'servicos.html',      nome: 'Serviços' },
  { arquivo: 'colaboradores.html', nome: 'Colaboradores' },
  { arquivo: 'parceiros.html',     nome: 'Parceiros' },
  { arquivo: 'contato.html',       nome: 'Contato' }
];

// Dados de contato (usados no rodapé e no botão do WhatsApp)
const contato = {
  whatsappTexto: '(99) 98408-6587',
  whatsappLink:  'https://wa.me/5599984086587',
  email:         'contato@compage.com.br',
  instagram:     '@compageassessoria',
  instagramLink: 'https://www.instagram.com/compageassessoria/',
  endereco:      'Rua Maranhão Sobrinho, <span class="sem-quebra">nº 809</span> - Sala 10<br>Galeria Blitz - Centro<br>Bacabal - MA<br><span class="sem-quebra">CEP 65700-000</span>'
};

// Descobre em qual página estamos (para destacar no menu)
const paginaAtual = location.pathname.split('/').pop() || 'index.html';

// ---------- Monta o cabeçalho ----------
const topo = document.getElementById('topo');
if (topo) {
  const links = paginas.map(p =>
    `<a href="${p.arquivo}"${p.arquivo === paginaAtual ? ' class="ativo"' : ''}>${p.nome}</a>`
  ).join('');

  topo.innerHTML = `
    <div class="container topo-conteudo">
      <a href="index.html" class="logo">COMPAGE<small>Consultoria &amp; Assessoria Financeira</small></a>
      <!-- Quando o logo chegar: <a href="index.html" class="logo"><img src="img/logo.svg" alt="COMPAGE"></a> -->
      <button class="menu-botao" aria-label="Abrir menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="menu">${links}</nav>
    </div>`;

  const botaoMenu = topo.querySelector('.menu-botao');
  const menu = topo.querySelector('.menu');
  botaoMenu.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    botaoMenu.setAttribute('aria-expanded', aberto);
  });
}

// ---------- Monta o rodapé ----------
const rodape = document.getElementById('rodape');
if (rodape) {
  rodape.innerHTML = `
    <div class="container rodape-grid">
      <div>
        <strong class="rodape-marca">COMPAGE</strong>
        <p class="rodape-slogan">Consultoria &amp; Assessoria Financeira</p>
        <p>BPO Financeiro para empresas que querem um financeiro organizado sem montar um departamento.</p>
      </div>
      <div>
        <strong>Contato</strong>
        <p><a href="${contato.whatsappLink}" target="_blank" rel="noopener">WhatsApp: ${contato.whatsappTexto}</a></p>
        <p><a href="mailto:${contato.email}">${contato.email}</a></p>
        <p><a href="${contato.instagramLink}" target="_blank" rel="noopener">Instagram: ${contato.instagram}</a></p>
      </div>
      <div>
        <strong>Endereço</strong>
        <p>${contato.endereco}</p>
      </div>
    </div>
    <p class="rodape-copy">&copy; ${new Date().getFullYear()} COMPAGE - Consultoria &amp; Assessoria Financeira. Todos os direitos reservados.</p>`;

  // Botão flutuante do WhatsApp
  const zap = document.createElement('a');
  zap.href = contato.whatsappLink;
  zap.target = '_blank';
  zap.rel = 'noopener';
  zap.className = 'whatsapp-flutuante';
  zap.setAttribute('aria-label', 'Fale pelo WhatsApp');
  zap.textContent = 'WhatsApp';
  document.body.appendChild(zap);
}
