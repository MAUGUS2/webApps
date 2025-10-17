/**
 * 🧭 SISTEMA DE NAVEGAÇÃO GLOBAL
 * Aplicações Web e Móveis
 */

// 📚 Estrutura completa do curso
const COURSE_STRUCTURE = {
  title: "Aplicações Web e Móveis",
  lessons: [
    {
      id: "16_01-HTML",
      title: "HTML - Conceitos Iniciais",
      icon: "🏗️",
      theme: "html",
      status: "completed",
      topics: [
        { id: "01-conceitos-iniciais", title: "Conceitos Iniciais", file: "01-conceitos-iniciais.html" },
        { id: "02-ambiente-desenvolvimento", title: "Ambiente de Desenvolvimento", file: "02-ambiente-desenvolvimento.html" },
        { id: "03-estrutura-html", title: "Estrutura HTML", file: "03-estrutura-html.html" },
        { id: "04-textos-listas", title: "Textos e Listas", file: "04-textos-listas.html" },
        { id: "05-links", title: "Links", file: "05-links.html" },
        { id: "06-imagens", title: "Imagens", file: "06-imagens.html" },
        { id: "07-tabelas", title: "Tabelas", file: "07-tabelas.html" },
        { id: "08-formularios", title: "Formulários", file: "08-formularios.html" },
        { id: "09-acessibilidade", title: "Acessibilidade", file: "09-acessibilidade.html" }
      ]
    },
    {
      id: "16_02-CSS",
      title: "CSS - Conceitos Iniciais",
      icon: "🎨",
      theme: "css",
      status: "completed",
      topics: [
        { id: "01-css-basico", title: "CSS Básico", file: "01-css-basico.html" },
        { id: "02-cores-background", title: "Cores e Background", file: "02-cores-background.html" },
        { id: "03-dimensoes-texto", title: "Dimensões e Texto", file: "03-dimensoes-texto.html" },
        { id: "04-float-block-inline", title: "Float, Block e Inline", file: "04-float-block-inline.html" },
        { id: "05-display-position", title: "Display e Position", file: "05-display-position.html" }
      ]
    },
    {
      id: "16_03-CSS-Parte-2",
      title: "CSS - Parte 2",
      icon: "🚀",
      theme: "css",
      status: "completed",
      topics: [
        { id: "01-dom-arvore", title: "Árvore do Documento", file: "01-dom-arvore.html" },
        { id: "02-pseudoclasses-pseudoelementos", title: "Pseudoclasses e Pseudoelementos", file: "02-pseudoclasses-pseudoelementos.html" },
        { id: "03-barra-navegacao", title: "Barra de Navegação", file: "03-barra-navegacao.html" },
        { id: "04-outras-formatacoes", title: "Outras Formatações", file: "04-outras-formatacoes.html" },
        { id: "05-movimentos-css", title: "Movimentos CSS", file: "05-movimentos-css.html" }
      ]
    },
    {
      id: "16_04-HTML_Semantico_e_CSS",
      title: "HTML Semântico e CSS",
      icon: "🧭",
      theme: "semantic",
      status: "completed",
      topics: [
        { id: "01-html-semantico", title: "HTML Semântico", file: "01-html-semantico.html" },
        { id: "02-tags-semanticas", title: "Tags Semânticas", file: "02-tags-semanticas.html" },
        { id: "03-acessibilidade", title: "Acessibilidade", file: "03-acessibilidade.html" },
        { id: "04-css-html-semantico", title: "CSS com HTML Semântico", file: "04-css-html-semantico.html" },
        { id: "05-conclusao-praticas", title: "Conclusão e Práticas", file: "05-conclusao-praticas.html" }
      ]
    },
    {
      id: "16_05-JAVASCRIPT_1",
      title: "JavaScript - Parte 1",
      icon: "⚡",
      theme: "javascript",
      status: "completed",
      topics: [
        { id: "01-fundamentos-javascript", title: "Fundamentos do JavaScript", file: "01-fundamentos-javascript.html" },
        { id: "02-tipos-estruturas", title: "Tipos e Estruturas", file: "02-tipos-estruturas.html" },
        { id: "03-funcoes-eventos", title: "Funções e Eventos", file: "03-funcoes-eventos.html" },
        { id: "04-ambiente-pratica", title: "Ambiente e Prática", file: "04-ambiente-pratica.html" }
      ]
    },
    {
      id: "16_06-JAVASCRIPT_2",
      title: "JavaScript - Parte 2",
      icon: "⚙️",
      theme: "javascript",
      status: "current",
      topics: [
        { id: "01-tipos-dados", title: "Tipos de Dados", file: "01-tipos-dados.html" },
        { id: "02-funcoes", title: "Funções", file: "02-funcoes.html" },
        { id: "03-bom", title: "BOM - Browser Object Model", file: "03-bom.html" },
        { id: "04-dom", title: "DOM - Document Object Model", file: "04-dom.html" },
        { id: "05-eventos", title: "Eventos", file: "05-eventos.html" }
      ]
    }
  ]
};

// 🎨 Temas das aulas
const THEMES = {
  html: { primary: '#e74c3c', light: '#fadbd8', dark: '#c0392b' },
  css: { primary: '#9b59b6', light: '#e8daef', dark: '#8e44ad' },
  javascript: { primary: '#f39c12', light: '#fdeaa7', dark: '#e67e22' },
  semantic: { primary: '#27ae60', light: '#d5f4e6', dark: '#229954' }
};

// 💾 Gerenciamento de localStorage
const Storage = {
  KEYS: {
    PROGRESS: 'course_progress',
    CURRENT_LESSON: 'current_lesson',
    CURRENT_TOPIC: 'current_topic',
    THEME: 'theme_preference',
    SIDEBAR_STATE: 'sidebar_collapsed'
  },

  get: (key) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  },

  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Storage failed:', error);
    }
  },

  getProgress: () => Storage.get(Storage.KEYS.PROGRESS) || {},
  
  setProgress: (lessonId, topicId, completed = true) => {
    const progress = Storage.getProgress();
    if (!progress[lessonId]) progress[lessonId] = {};
    progress[lessonId][topicId] = completed;
    Storage.set(Storage.KEYS.PROGRESS, progress);
  },

  getCompletionPercentage: () => {
    const progress = Storage.getProgress();
    let totalTopics = 0;
    let completedTopics = 0;

    COURSE_STRUCTURE.lessons.forEach(lesson => {
      lesson.topics.forEach(topic => {
        totalTopics++;
        if (progress[lesson.id] && progress[lesson.id][topic.id]) {
          completedTopics++;
        }
      });
    });

    return totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  }
};

// 🧭 Sistema de Navegação Global
const CourseNavigation = {
  // Estrutura do curso
  lessons: [
    { id: "16_01-HTML", title: "HTML - Conceitos Iniciais", icon: "🏗️" },
    { id: "16_02-CSS", title: "CSS - Conceitos Iniciais", icon: "🎨" },
    { id: "16_03-CSS-Parte-2", title: "CSS - Parte 2", icon: "🚀" },
    { id: "16_04-HTML_Semantico_e_CSS", title: "HTML Semântico e CSS", icon: "🧭" },
    { id: "16_05-JAVASCRIPT_1", title: "JavaScript - Parte 1", icon: "⚡" },
    { id: "16_06-JAVASCRIPT_2", title: "JavaScript - Parte 2", icon: "⚙️" }
  ],

  init() {
    this.createGlobalProgress();
    this.addNavigationLinks();
  },

  createGlobalProgress() {
    const progressHTML = `
      <div id="global-progress" class="global-progress">
        <div class="progress-info">
          <span>Progresso do Curso: <strong id="progress-percentage">0%</strong></span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" id="progress-fill" style="width: 0%"></div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', progressHTML);
  },

  addNavigationLinks() {
    const navHTML = `
      <nav class="course-nav">
        <div class="nav-lessons">
          ${this.lessons.map(lesson => `
            <a href="../${lesson.id}/index.html" class="nav-lesson">
              ${lesson.icon} ${lesson.title}
            </a>
          `).join('')}
        </div>
      </nav>
    `;
    
    document.body.insertAdjacentHTML('beforeend', navHTML);
  }
};

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  CourseNavigation.init();
});

// 🚀 Inicializar sistema
NavigationSystem.instance = null;

document.addEventListener('DOMContentLoaded', () => {
  NavigationSystem.instance = new NavigationSystem();
  NavigationSystem.instance.setupKeyboardNavigation();
});

// Exportar para uso global
window.NavigationSystem = NavigationSystem;
window.Storage = Storage;
window.COURSE_STRUCTURE = COURSE_STRUCTURE; 