# 🏗️ Arquitetura do Projeto

Este documento descreve a estrutura e organização do projeto **Aplicações Web e Móveis**.

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Estrutura de Diretórios](#-estrutura-de-diretórios)
- [Diagrama de Navegação](#-diagrama-de-navegação)
- [Padrões de Design](#-padrões-de-design)
- [Fluxo de Dados](#-fluxo-de-dados)
- [Convenções de Nomenclatura](#-convenções-de-nomenclatura)

---

## 🎯 Visão Geral

Este é um **curso educacional estático** construído com:
- **HTML5** - Estrutura e conteúdo semântico
- **CSS3** - Estilização e design responsivo
- **JavaScript (Vanilla)** - Interatividade e lógica

**Características:**
- ✅ Zero dependências externas
- ✅ Funciona offline (após primeiro carregamento)
- ✅ 100% estático (sem backend)
- ✅ Hospedado via GitHub Pages
- ✅ Design system consistente

---

## 📁 Estrutura de Diretórios

```
📚 webApps/
│
├── 📄 indice-geral.html          # Página inicial - Hub do curso
├── 📄 index.html                 # Redirect para indice-geral.html
├── 📄 README.md                  # Documentação principal
├── 📄 LICENSE                    # Licença MIT
├── 📄 CONTRIBUTING.md            # Guia de contribuição
├── 📄 ARCHITECTURE.md            # Este arquivo
├── 📄 CODE_OF_CONDUCT.md         # Código de conduta
├── 📄 .gitignore                 # Arquivos ignorados pelo git
│
├── 📁 .github/                   # Configurações GitHub
│   ├── workflows/
│   │   └── deploy.yml            # GitHub Actions para deploy automático
│   ├── ISSUE_TEMPLATE/           # Templates de issues
│   └── PULL_REQUEST_TEMPLATE.md  # Template de PR
│
├── 📁 shared/                    # Recursos compartilhados (futuro)
│   ├── css/                      # Estilos globais
│   ├── js/                       # Scripts globais
│   └── images/                   # Imagens compartilhadas
│
├── 📁 16_01-HTML/                # 🌐 Aula 1: HTML Fundamental
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
├── 📁 16_02-CSS/                 # 🎨 Aula 2: CSS Completo
│   ├── index.html
│   ├── 01-css-basico.html
│   ├── 02-cores-background.html
│   ├── 03-dimensoes-texto.html
│   ├── 04-float-block-inline.html
│   ├── 05-display-position.html
│   └── README.md
│
├── 📁 16_03-CSS-Parte-2/         # 🚀 Aula 3: CSS Avançado
│   ├── index.html
│   ├── 01-dom-arvore.html
│   ├── 02-pseudoclasses-pseudoelementos.html
│   ├── 03-barra-navegacao.html
│   ├── 04-outras-formatacoes.html
│   ├── 05-movimentos-css.html
│   └── README.md
│
├── 📁 16_04-HTML_Semantico_e_CSS/ # 🏗️ Aula 4: HTML Semântico
│   ├── index.html
│   ├── 01-html-semantico.html
│   ├── 02-tags-semanticas.html
│   ├── 03-acessibilidade.html
│   ├── 04-css-html-semantico.html
│   ├── 05-conclusao-praticas.html
│   └── README.md
│
├── 📁 16_05-JAVASCRIPT_1/        # ⚡ Aula 5: JavaScript Fundamentos
│   ├── index.html
│   ├── 01-fundamentos-javascript.html
│   ├── 02-tipos-estruturas.html
│   ├── 03-funcoes-eventos.html
│   ├── 04-ambiente-pratica.html
│   └── README.md
│
└── 📁 16_06-JAVASCRIPT_2/        # 🚀 Aula 6: JavaScript Avançado
    ├── index.html
    ├── 01-tipos-dados.html
    ├── 02-funcoes.html
    ├── 03-bom.html
    ├── 04-dom.html
    ├── 05-eventos.html
    └── README.md
```

---

## 🗺️ Diagrama de Navegação

### Fluxo Principal

```
┌─────────────────────────────────────────────────────────────┐
│                    indice-geral.html                        │
│                   (Página Inicial)                          │
└──────────────┬──────────────────────────────────────────────┘
               │
               ├──► [Aula 1: HTML]
               │    └──► 9 tópicos (conceitos, estrutura, etc.)
               │
               ├──► [Aula 2: CSS]
               │    └──► 5 tópicos (sintaxe, cores, layout, etc.)
               │
               ├──► [Aula 3: CSS Avançado]
               │    └──► 5 tópicos (DOM, pseudo, navegação, etc.)
               │
               ├──► [Aula 4: HTML Semântico]
               │    └──► 5 tópicos (semântica, tags, a11y, etc.)
               │
               ├──► [Aula 5: JavaScript 1]
               │    └──► 4 módulos (fundamentos, tipos, funções, etc.)
               │
               └──► [Aula 6: JavaScript 2]
                    └──► 5 tópicos (dados, funções, BOM, DOM, eventos)
```

### Navegação Entre Aulas

```
[Índice Geral]
      ↕
┌─────────────────────────────────────────────────────────────┐
│  [Aula 1]  →  [Aula 2]  →  [Aula 3]  →  [Aula 4]  →  ...   │
│     ↑            ↕           ↕           ↕                   │
│     │         Anterior    Anterior    Anterior               │
│     │         Início      Início      Início                 │
│     │         Próxima     Próxima     Próxima                │
│     │                                                         │
│     └─────────────────────────────────────────────────────────┘
│
│  Primeira aula:     🏠 Início | Próxima Aula →
│  Aulas intermediárias: ← Aula Anterior | 🏠 Início | Próxima Aula →
│  Última aula:       ← Aula Anterior | 🏠 Início
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Padrões de Design

### Design System

Cada aula utiliza um **design system consistente** com:

#### Variáveis CSS (`:root`)

```css
:root {
    /* Cores */
    --primary-color: #...;
    --secondary-color: #...;
    --bg-color: #...;
    --text-color: #...;

    /* Espaçamento */
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-4: 1rem;
    --spacing-6: 1.5rem;
    --spacing-8: 2rem;

    /* Tipografia */
    --font-family: 'Inter', sans-serif;
    --font-mono: 'Fira Code', monospace;

    /* Border Radius */
    --border-radius-sm: 0.25rem;
    --border-radius-md: 0.375rem;
    --border-radius-lg: 0.5rem;
}
```

#### Componentes Reutilizáveis

1. **Card de Tópico**
   - Usado em páginas index de aulas
   - Hover effect consistente
   - Progress bar integrada

2. **Header**
   - Layout consistente
   - Título + subtítulo
   - Sempre no topo

3. **Navigation**
   - Footer de navegação
   - Links para anterior/início/próximo
   - Responsivo

### Temas por Aula

Cada aula tem seu próprio tema visual:

| Aula | Cor Principal | Gradiente |
|------|---------------|-----------|
| Aula 1 | Azul (`#1e3c72`) | Azul escuro → Azul claro |
| Aula 2 | Roxo/Rosa (`#454158`) | Roxo escuro → Rosa |
| Aula 3 | Roxo (`#667eea`) | Roxo → Roxo claro |
| Aula 4 | Verde (`#4CAF50`) | Verde escuro → Verde claro |
| Aula 5 | Amarelo (`#f39c12`) | Amarelo → Laranja |
| Aula 6 | Dark (`#0a0a0a`) | Ultra dark minimalista |

---

## 💾 Fluxo de Dados

### LocalStorage - Progresso do Usuário

```javascript
// Estrutura de dados armazenada
{
  // Aula 5 - JavaScript 1
  "js-course-bookmarked": "true",
  "dark-mode": "false",
  "completed-modules": ["fundamentos", "tipos"],

  // Aula 6 - JavaScript 2
  "js2-tipos-dados-progress": "75",
  "js2-funcoes-progress": "50",
  "js2-bom-progress": "100",
  "js2-dom-progress": "25",
  "js2-eventos-progress": "0"
}
```

### Fluxo de Progresso

```
┌─────────────────┐
│ Usuário visita  │
│     página      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  loadProgress() │
│ ← localStorage  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Atualiza UI com │
│  progress bars  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Usuário interage│
│   (completa)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ saveProgress()  │
│ → localStorage  │
└─────────────────┘
```

---

## 📝 Convenções de Nomenclatura

### Arquivos

- **Páginas principais:** `index.html` (sempre minúsculo)
- **Tópicos numerados:** `01-nome-do-topico.html`
- **Documentação:** `UPPERCASE.md` (ex: README.md)
- **Diretórios:** `16_XX-Nome-Descritivo/`

### CSS

```css
/* Classes: kebab-case */
.topic-card { }
.lesson-header { }
.nav-button { }

/* IDs: kebab-case */
#overall-progress { }
#sidebar-overlay { }

/* Variáveis CSS: kebab-case com prefixo */
--ultra-bg: #0a0a0a;
--spacing-4: 1rem;
--accent-primary: #8b7cf8;
```

### JavaScript

```javascript
// Funções: camelCase
function loadProgress() { }
function updateOverallProgress() { }

// Constantes: camelCase (ou UPPER_SNAKE_CASE para constantes globais)
const menuToggle = document.getElementById('menu-toggle');
const API_URL = 'https://...';

// Classes: PascalCase (se usar)
class CourseManager { }
```

---

## 🔄 Workflow de Contribuição

```
┌──────────────┐
│   Fork do    │
│  Repositório │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│     Clone    │
│     Local    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Cria Branch  │
│  feature/*   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Edita e    │
│    Testa     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    Commit    │
│(Conventional)│
└──────┬───────┘
       │
       ▼
┌──────────────┐
│     Push     │
│  to Origin   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│     Abre     │
│      PR      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    Review    │
│  & Approve   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    Merge     │
│   to Main    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│GitHub Actions│
│    Deploy    │
└──────────────┘
```

---

## 🚀 Deployment

### GitHub Actions Pipeline

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    steps:
      1. Checkout código
      2. Upload artifact
      3. Deploy to GitHub Pages
```

**URL de Produção:** https://maugus2.github.io/webApps/

---

## 🔮 Futuras Melhorias (Roadmap)

### Funcionalidades Planejadas

- [ ] **Sistema de busca** - Buscar conteúdo entre aulas
- [ ] **Dark mode global** - Tema escuro em todo site
- [ ] **Progress tracking backend** - Salvar progresso na nuvem
- [ ] **Certificado de conclusão** - Gerar PDF ao completar curso
- [ ] **Quizzes interativos** - Testar conhecimento
- [ ] **Fórum de dúvidas** - Integração com Discussions
- [ ] **Versão PWA** - Funcionar offline completamente
- [ ] **Internacionalização** - Suporte a múltiplos idiomas

### Melhorias Técnicas

- [ ] **Shared CSS** - Mover estilos comuns para `/shared/css/`
- [ ] **Component library** - Criar biblioteca de componentes
- [ ] **Build process** - Adicionar minificação/bundling
- [ ] **Service Worker** - Cache estratégico para PWA
- [ ] **Analytics** - Rastreamento de progresso (privacy-first)

---

## 📚 Referências e Recursos

### Tecnologias Utilizadas

- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript ES6+](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Actions](https://github.com/features/actions)

### Padrões e Convenções

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/) - Acessibilidade
- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

---

## 🤝 Contribuindo para a Arquitetura

Quer sugerir melhorias na arquitetura?

1. 💬 Abra uma [Discussion](https://github.com/MAUGUS2/webApps/discussions)
2. 🐛 Crie uma Issue com label `architecture`
3. 📧 Envie sugestões para [maugus.lco@gmail.com](mailto:maugus.lco@gmail.com)

---

<div align="center">

**Documentação mantida por [Maugus](https://github.com/MAUGUS2)**

[⬆ Voltar ao topo](#-arquitetura-do-projeto)

</div>
