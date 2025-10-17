# 📚 Aplicações Web e Móveis - Curso Completo

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

![GitHub stars](https://img.shields.io/github/stars/MAUGUS2/webApps?style=social)
![GitHub forks](https://img.shields.io/github/forks/MAUGUS2/webApps?style=social)
![GitHub issues](https://img.shields.io/github/issues/MAUGUS2/webApps?style=flat-square)
![GitHub pull requests](https://img.shields.io/github/issues-pr/MAUGUS2/webApps?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/MAUGUS2/webApps?style=flat-square)

</div>

> **Curso completo e gratuito de desenvolvimento web**, do HTML básico ao JavaScript avançado. Material didático estruturado em 6 aulas progressivas, com exercícios práticos e exemplos reais.

<div align="center">

**[🌐 Acessar Curso Online](https://maugus2.github.io/webApps/)** |
**[📖 Documentação](ARCHITECTURE.md)** |
**[🤝 Contribuir](CONTRIBUTING.md)** |
**[📜 Código de Conduta](CODE_OF_CONDUCT.md)**

</div>

---

## 🎯 Sobre o Projeto

Este é um **curso completo de Aplicações Web e Móveis** desenvolvido para ensinar os fundamentos do desenvolvimento web moderno de forma didática e progressiva. O material cobre desde conceitos básicos de HTML até JavaScript avançado, com foco em práticas profissionais e código limpo.

### ✨ Características

- 📖 **6 Aulas Estruturadas** - Progressão lógica do básico ao avançado
- 💡 **100+ Exercícios Práticos** - Aprenda fazendo
- 🎨 **Design Moderno e Responsivo** - Interface dark profissional
- ♿ **Acessibilidade em Foco** - Boas práticas de A11Y
- 🚀 **Código Limpo** - Exemplos seguindo padrões modernos
- 📱 **Mobile First** - Totalmente responsivo
- 🆓 **100% Gratuito** - Conhecimento aberto para todos

---

## 📋 Conteúdo do Curso

### 🌐 Aula 1: HTML Fundamental
Fundamentos essenciais do HTML, estrutura semântica, formulários e acessibilidade.
- Conceitos Iniciais e Web
- Ambiente de Desenvolvimento
- Estrutura HTML Completa
- Textos, Listas e Links
- Imagens e Mídia
- Tabelas Estruturadas
- Formulários Interativos
- Acessibilidade e Inclusão

### 🎨 Aula 2: CSS Completo
Domine CSS desde sintaxe básica até posicionamento avançado.
- CSS Básico e Sintaxe
- Cores e Background
- Dimensões e Tipografia
- Float, Block e Inline
- Display e Posicionamento

### ⚡ Aula 3: CSS Avançado
Técnicas profissionais de estilização e animações.
- DOM e Árvore de Elementos
- Pseudo-classes e Pseudo-elementos
- Barras de Navegação
- Formatações Avançadas
- Movimentos e Animações CSS

### 🏗️ Aula 4: HTML Semântico
HTML5 moderno, acessibilidade avançada e integração profissional.
- HTML Semântico Moderno
- Tags Semânticas HTML5
- Acessibilidade Avançada
- CSS com HTML Semântico
- Práticas e Padrões

### ⚡ Aula 5: JavaScript Parte 1
Introdução ao JavaScript e fundamentos da programação.
- Fundamentos JavaScript
- Tipos e Estruturas de Dados
- Funções e Escopo
- Eventos Básicos

### 🚀 Aula 6: JavaScript Parte 2
JavaScript avançado e manipulação completa do DOM.
- Tipos de Dados Avançados
- Funções Avançadas
- Browser Object Model (BOM)
- Document Object Model (DOM)
- Eventos e Interatividade

---

## 🚀 Como Usar

### Opção 1: Abrir Diretamente no Navegador (Mais Simples)

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MAUGUS2/webApps.git
   cd webApps
   ```

2. **Abra o arquivo principal:**
   - No macOS: `open indice-geral.html`
   - No Linux: `xdg-open indice-geral.html`
   - No Windows: Dê duplo-clique em `indice-geral.html`

### Opção 2: Servidor Local (Recomendado)

#### Usando Python (pré-instalado na maioria dos sistemas):
```bash
python3 -m http.server 8000
```
Acesse: `http://localhost:8000/indice-geral.html`

#### Usando Node.js:
```bash
npx http-server -p 8000
```
Acesse: `http://localhost:8000/indice-geral.html`

#### Usando VS Code Live Server:
1. Instale a extensão "Live Server"
2. Clique com botão direito em `indice-geral.html`
3. Selecione "Open with Live Server"

### Opção 3: Script Automatizado
```bash
./start.sh  # Linux/macOS
start.bat   # Windows
```

---

## 📁 Estrutura do Projeto

```
📚 webApps/
│
├── 📄 indice-geral.html          # 🏠 Página inicial do curso
├── 📄 index.html                 # ↪️  Redirect para indice-geral.html
│
├── 📚 Documentação
├── 📄 README.md                   # Documentação principal
├── 📄 CONTRIBUTING.md             # Guia de contribuição
├── 📄 ARCHITECTURE.md             # Arquitetura e diagramas
├── 📄 CODE_OF_CONDUCT.md          # Código de conduta
├── 📄 DEPLOY.md                   # Instruções de deploy
├── 📄 LICENSE                     # Licença MIT
├── 📄 .gitignore                  # Arquivos ignorados
│
├── 🤖 GitHub
├── 📁 .github/
│   ├── workflows/
│   │   └── deploy.yml            # CI/CD - Deploy automático
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml        # Template de bug report
│   │   ├── feature_request.yml   # Template de feature request
│   │   ├── documentation.yml     # Template de documentação
│   │   └── config.yml            # Configuração dos templates
│   └── PULL_REQUEST_TEMPLATE.md  # Template de Pull Request
│
├── 🌐 Aula 1: HTML Fundamental
├── 📁 16_01-HTML/
│   ├── index.html                # Hub da aula
│   ├── 01-conceitos-iniciais.html
│   ├── 02-ambiente-desenvolvimento.html
│   ├── 03-estrutura-html.html
│   ├── 04-textos-listas.html
│   ├── 05-links.html
│   ├── 06-imagens.html
│   ├── 07-tabelas.html
│   ├── 08-formularios.html
│   ├── 09-acessibilidade.html
│   └── README.md
│
├── 🎨 Aula 2: CSS Completo
├── 📁 16_02-CSS/
│   ├── index.html
│   ├── 01-css-basico.html
│   ├── 02-cores-background.html
│   ├── 03-dimensoes-texto.html
│   ├── 04-float-block-inline.html
│   ├── 05-display-position.html
│   └── README.md
│
├── ⚡ Aula 3: CSS Avançado
├── 📁 16_03-CSS-Parte-2/
│   ├── index.html
│   ├── 01-dom-arvore.html
│   ├── 02-pseudoclasses-pseudoelementos.html
│   ├── 03-barra-navegacao.html
│   ├── 04-outras-formatacoes.html
│   ├── 05-movimentos-css.html
│   └── README.md
│
├── 🏗️ Aula 4: HTML Semântico
├── 📁 16_04-HTML_Semantico_e_CSS/
│   ├── index.html
│   ├── 01-html-semantico.html
│   ├── 02-tags-semanticas.html
│   ├── 03-acessibilidade.html
│   ├── 04-css-html-semantico.html
│   ├── 05-conclusao-praticas.html
│   └── README.md
│
├── ⚡ Aula 5: JavaScript Fundamentos
├── 📁 16_05-JAVASCRIPT_1/
│   ├── index.html
│   ├── 01-fundamentos-javascript.html
│   ├── 02-tipos-estruturas.html
│   ├── 03-funcoes-eventos.html
│   ├── 04-ambiente-pratica.html
│   └── README.md
│
└── 🚀 Aula 6: JavaScript Avançado
    └── 📁 16_06-JAVASCRIPT_2/
        ├── index.html
        ├── 01-tipos-dados.html
        ├── 02-funcoes.html
        ├── 03-bom.html
        ├── 04-dom.html
        ├── 05-eventos.html
        └── README.md
```

> 💡 **Dica:** Veja o [ARCHITECTURE.md](ARCHITECTURE.md) para diagramas detalhados de navegação e fluxo de dados.

---

## 🎓 Público-Alvo

- 🆕 Iniciantes em programação web
- 👨‍💻 Desenvolvedores que querem revisar fundamentos
- 👩‍🏫 Professores procurando material didático
- 📚 Estudantes de cursos de tecnologia
- 🔄 Profissionais em transição de carreira

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica moderna
- **CSS3** - Estilização avançada e animações
- **JavaScript (ES6+)** - Interatividade e lógica
- **Design System** - Componentes reutilizáveis
- **Responsivo** - Mobile-first design
- **Acessibilidade** - WCAG 2.1 Level AA

---

## 🤝 Como Contribuir

Este projeto é **100% open source** e adoramos receber contribuições da comunidade! ❤️

### 📖 Leia Antes de Contribuir

- **[📘 Guia de Contribuição](CONTRIBUTING.md)** - Processo completo passo-a-passo
- **[🏗️ Arquitetura do Projeto](ARCHITECTURE.md)** - Entenda a estrutura e diagramas
- **[📜 Código de Conduta](CODE_OF_CONDUCT.md)** - Nossas regras de convivência

### 🎯 Formas de Contribuir

| Tipo | Descrição | Como Começar |
|------|-----------|--------------|
| 🐛 **Bug Report** | Encontrou um erro? | [Reportar Bug](https://github.com/MAUGUS2/webApps/issues/new?template=bug_report.yml) |
| ✨ **Feature Request** | Tem uma ideia nova? | [Sugerir Feature](https://github.com/MAUGUS2/webApps/issues/new?template=feature_request.yml) |
| 📝 **Documentação** | Melhorar docs? | [Reportar Problema](https://github.com/MAUGUS2/webApps/issues/new?template=documentation.yml) |
| 🎨 **Design/UI** | Aprimorar visual? | Abra uma Issue ou PR |
| 🧪 **Exercícios** | Adicionar prática? | Fork e envie um PR |
| 🌍 **Tradução** | Traduzir conteúdo? | Veja [CONTRIBUTING.md](CONTRIBUTING.md#-traduções) |
| 💬 **Dúvidas** | Perguntas gerais? | [Discussions](https://github.com/MAUGUS2/webApps/discussions) |

### 🚀 Quick Start para Contribuidores

```bash
# 1. Fork o projeto no GitHub

# 2. Clone seu fork
git clone https://github.com/SEU-USUARIO/webApps.git
cd webApps

# 3. Crie uma branch para sua contribuição
git checkout -b feature/minha-contribuicao

# 4. Faça suas alterações e teste localmente
python3 -m http.server 8000

# 5. Commit suas mudanças (use Conventional Commits)
git commit -m "feat: adiciona novo exercício de CSS Grid"

# 6. Push para seu fork
git push origin feature/minha-contribuicao

# 7. Abra um Pull Request no GitHub
```

### 🎖️ Principais Contribuidores

<!-- Será atualizado automaticamente com GitHub Contributors -->
[![Contributors](https://contrib.rocks/image?repo=MAUGUS2/webApps)](https://github.com/MAUGUS2/webApps/graphs/contributors)

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

**Em resumo:** Você pode usar, copiar, modificar e distribuir este material livremente, inclusive para fins comerciais, desde que mantenha a atribuição original.

---

## 👨‍💻 Autor

**Mauricio Augusto (Maugus)**
- 📧 Email: [maugus.lco@gmail.com](mailto:maugus.lco@gmail.com)
- 🔗 GitHub: [@MAUGUS2](https://github.com/MAUGUS2)
- 💼 LinkedIn: [Maugus LCO](https://linkedin.com/in/maugus-lco-11a739366)

---

## 🌟 Apoie o Projeto

Se este material foi útil para você, considere:
- ⭐ Dar uma estrela no repositório
- 🔗 Compartilhar com amigos e colegas
- 🐛 Reportar bugs ou sugerir melhorias
- 💡 Contribuir com novos conteúdos
- 🤝 Conectar no LinkedIn para networking

---

## 📊 Estatísticas

- **6** Aulas Completas
- **35+** Tópicos Abordados
- **100+** Exercícios Práticos
- **∞** Possibilidades de Aprendizado

---

## 📞 Suporte

Encontrou algum problema ou tem dúvidas?

1. 🔍 Verifique as [Issues existentes](https://github.com/MAUGUS2/webApps/issues)
2. 💬 Abra uma [Nova Issue](https://github.com/MAUGUS2/webApps/issues/new)
3. 📧 Entre em contato por email

---

## 🗺️ Roadmap

- [x] Estrutura básica do curso
- [x] 6 Aulas completas
- [x] Design system unificado
- [ ] Adicionar mais exercícios práticos
- [ ] Criar vídeo-aulas complementares
- [ ] Adicionar quizzes interativos
- [ ] Versão em inglês
- [ ] Aplicativo mobile companion
- [ ] Certificado de conclusão

---

## 💖 Agradecimentos

Agradecimento especial a todos que contribuíram e apoiaram este projeto educacional.

---

<div align="center">

**[⬆ Voltar ao topo](#-aplicações-web-e-móveis---curso-completo)**

Built by Maugus | Free knowledge, no bullshit 💻

**Compartilhe o conhecimento! 🚀**

</div>
