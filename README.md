# COMPAGE - Consultoria & Assessoria Financeira

Site institucional da **COMPAGE**, empresa de **BPO Financeiro** para empresas que não possuem um departamento financeiro estruturado.

📍 Rua Maranhão Sobrinho, nº 809 - Sala 10 - Galeria Blitz - Centro - Bacabal - MA - CEP 65700-000

🌐 **Site (versão de testes):** https://crispimneto.github.io/SiteCOMPAGE/

---

## Sobre o projeto

- Site **estático**: apenas HTML, CSS e JavaScript. Não precisa de banco de dados nem de servidor especial.
- Publicado provisoriamente no **GitHub Pages**. Depois será migrado para a hospedagem definitiva, bastando copiar os arquivos.
- Funciona no computador, tablet e celular (layout responsivo).
- Identidade visual baseada no **Manual de Identidade Visual da COMPAGE**.

## Páginas

| Arquivo              | Página        | Conteúdo                                         |
|----------------------|---------------|--------------------------------------------------|
| `index.html`         | Início        | Apresentação, vantagens e chamada para contato   |
| `sobre.html`         | Sobre         | Quem somos, Missão, Visão e Valores              |
| `servicos.html`      | Serviços      | Serviços de BPO Financeiro                       |
| `colaboradores.html` | Colaboradores | Equipe da COMPAGE                                |
| `parceiros.html`     | Parceiros     | REVIT Contabilidade, PP Diniz, Conta Azul, Omie  |
| `contato.html`       | Contato       | WhatsApp, e-mail, Instagram e endereço           |

## Estrutura de pastas

```
SiteCOMPAGE/
├── index.html, sobre.html, servicos.html,
│   colaboradores.html, parceiros.html, contato.html
├── favicon.svg            ícone da aba do navegador
├── README.md              este arquivo
├── css/
│   └── style.css          cores, fontes e aparência de todo o site
├── js/
│   └── script.js          menu, rodapé, botão do WhatsApp e dados de contato
└── img/
    ├── logo/              logos da COMPAGE em SVG (normal e negativo)
    ├── equipe/            fotos dos colaboradores (.jpeg)
    └── parceiros/         logos dos parceiros (.png)
```

## Como fazer as manutenções mais comuns

### Mudar telefone, e-mail, Instagram ou endereço
Abra `js/script.js` e edite o bloco **`contato`** no início do arquivo. A mudança vale para o rodapé de todas as páginas e para o botão flutuante do WhatsApp.
> A página `contato.html` tem os dados escritos diretamente. Atualize lá também.

### Incluir ou remover uma página do menu
Em `js/script.js`, edite a lista **`paginas`**. O menu de todas as páginas é montado a partir dela.
Para uma página nova, copie uma página existente (ex.: `sobre.html`), renomeie e troque o conteúdo dentro de `<main>`.

### Mudar as cores
Abra `css/style.css` e altere apenas as variáveis no início do arquivo:

| Variável           | Cor       | Uso                                     |
|--------------------|-----------|-----------------------------------------|
| `--cor-primaria`   | `#020659` | Azul escuro institucional (fundos, títulos) |
| `--cor-secundaria` | `#212AE8` | Azul institucional (menu ativo, destaque do mouse) |
| `--cor-destaque`   | `#FF7001` | Laranja institucional (botões e bordas) |

### Trocar fotos da equipe ou logos dos parceiros
Substitua o arquivo na pasta mantendo **exatamente o mesmo nome e extensão**.
- Equipe: `img/equipe/raissa.jpeg`, `efraim.jpeg`, `jessica.jpeg`
- Parceiros: `img/parceiros/revit.png`, `ppdiniz.png`, `contaazul.png`, `omie.png`

> ⚠️ O GitHub Pages diferencia **maiúsculas e minúsculas** e **.jpg de .jpeg**. `Raissa.JPG` não é o mesmo que `raissa.jpeg`.

## Identidade visual

- **Cores:** azul escuro `#020659`, azul `#212AE8`, laranja `#FF7001`
- **Fontes:** *Ysabeau Office* nos títulos (carregada do Google Fonts) e *Verdana* nos textos
- **Logos disponíveis** em `img/logo/` (todos em SVG, com versão `-negativo` para fundo escuro):
  - `logo-horizontal`: usado no cabeçalho
  - `logo-vertical`: usado no rodapé (versão negativa)
  - `logo-texto-lateral`, `logotipo`, `logotipo-subtitulo`, `simbolo`

## Como publicar uma atualização

1. Salve os arquivos alterados na pasta `SiteCOMPAGE`.
2. No **GitHub Desktop**, escreva um resumo da mudança → **Commit to main** → **Push origin**.
3. Acompanhe a publicação na aba **Actions** do repositório (verde = publicado).
4. Recarregue o site com **Ctrl+F5**.

> Se a publicação falhar com *"Erro interno do servidor"*, é instabilidade do GitHub: abra a execução em **Actions** e use **Re-run failed jobs**.

## Pendências

- [ ] Textos de Missão, Visão e Valores (página Sobre)
- [ ] Logos com melhor qualidade da REVIT Contabilidade e da PP Diniz
- [ ] Confirmar endereço do site da PP Diniz Consultoria
- [ ] Migrar para a hospedagem definitiva

---

© COMPAGE - Consultoria & Assessoria Financeira
