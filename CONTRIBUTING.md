# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o projeto **Aplicações Web e Móveis**! Este documento fornece diretrizes para contribuir de forma efetiva.

---

## 📋 Índice

- [Como Contribuir](#-como-contribuir)
- [Código de Conduta](#-código-de-conduta)
- [Reportando Bugs](#-reportando-bugs)
- [Sugerindo Melhorias](#-sugerindo-melhorias)
- [Pull Requests](#-pull-requests)
- [Padrões de Código](#-padrões-de-código)
- [Estrutura de Commits](#-estrutura-de-commits)

---

## 🚀 Como Contribuir

Existem várias formas de contribuir com este projeto:

### 1. 🐛 Reportando Bugs
Encontrou um erro? Ajude-nos a corrigi-lo!

### 2. ✨ Sugerindo Novas Features
Tem uma ideia para melhorar o curso?

### 3. 📝 Melhorando a Documentação
Documentação clara é essencial para o aprendizado.

### 4. 🎨 Aprimorando o Design
Sugestões de UI/UX são sempre bem-vindas.

### 5. 🧪 Adicionando Exercícios
Mais prática = mais aprendizado!

### 6. 🌍 Traduzindo
Ajude a tornar o conteúdo acessível em outros idiomas.

---

## 📜 Código de Conduta

Este projeto segue um código de conduta para garantir um ambiente acolhedor e inclusivo:

- ✅ Seja respeitoso e inclusivo
- ✅ Aceite críticas construtivas
- ✅ Foque no que é melhor para a comunidade
- ✅ Mostre empatia com outros membros
- ❌ Não use linguagem ofensiva
- ❌ Não faça ataques pessoais
- ❌ Não assédio ou trolling

---

## 🐛 Reportando Bugs

Antes de reportar um bug:

1. ✅ Verifique se o bug já não foi reportado nas [Issues](https://github.com/MAUGUS2/webApps/issues)
2. ✅ Teste na versão mais recente do projeto
3. ✅ Verifique se é realmente um bug e não um erro de uso

### Template para Reportar Bugs

```markdown
**Descrição do Bug**
Uma descrição clara e concisa do bug.

**Como Reproduzir**
Passos para reproduzir o comportamento:
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
 - OS: [ex: macOS 14.0]
 - Navegador: [ex: Chrome 120]
 - Versão do Projeto: [ex: 1.0.0]

**Contexto Adicional**
Qualquer outra informação relevante.
```

---

## ✨ Sugerindo Melhorias

Adoramos receber sugestões! Para sugerir uma melhoria:

1. ✅ Verifique se a sugestão já não existe nas [Issues](https://github.com/MAUGUS2/webApps/issues)
2. ✅ Abra uma nova Issue com o label `enhancement`
3. ✅ Descreva detalhadamente sua sugestão

### Template para Sugestões

```markdown
**A sugestão está relacionada a um problema?**
Ex: Fico frustrado quando [...]

**Descreva a solução que você gostaria**
Uma descrição clara do que você quer que aconteça.

**Descreva alternativas consideradas**
Outras soluções ou features que você considerou.

**Contexto Adicional**
Screenshots, mockups, ou exemplos de outros projetos.
```

---

## 🔀 Pull Requests

### Processo para Pull Requests

1. **Fork o projeto**
   ```bash
   git clone https://github.com/MAUGUS2/webApps.git
   ```

2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/minha-feature
   ```
   ou
   ```bash
   git checkout -b fix/meu-bug-fix
   ```

3. **Faça suas alterações**
   - Siga os [Padrões de Código](#-padrões-de-código)
   - Teste suas mudanças
   - Adicione documentação se necessário

4. **Commit suas mudanças**
   ```bash
   git commit -m "feat: adiciona nova funcionalidade X"
   ```
   Veja a [Estrutura de Commits](#-estrutura-de-commits)

5. **Push para sua branch**
   ```bash
   git push origin feature/minha-feature
   ```

6. **Abra um Pull Request**
   - Use um título claro e descritivo
   - Descreva suas mudanças em detalhes
   - Referencie issues relacionadas

### Checklist para Pull Requests

- [ ] Meu código segue os padrões do projeto
- [ ] Testei minhas mudanças localmente
- [ ] Adicionei comentários em código complexo
- [ ] Atualizei a documentação se necessário
- [ ] Minhas mudanças não geram novos warnings
- [ ] Verifiquei que não há conflitos

---

## 💻 Padrões de Código

### HTML
```html
<!-- ✅ BOM: Indentação de 4 espaços, tags semânticas -->
<section class="lesson-card">
    <h2>Título da Seção</h2>
    <p>Conteúdo descritivo.</p>
</section>

<!-- ❌ RUIM: Sem indentação, tags não semânticas -->
<div>
<div>Título</div>
<div>Conteúdo</div>
</div>
```

### CSS
```css
/* ✅ BOM: Variáveis CSS, nomes descritivos */
.lesson-card {
    background: var(--ultra-card);
    padding: var(--spacing-4);
    border-radius: var(--border-radius-md);
}

/* ❌ RUIM: Valores hardcoded, nomes genéricos */
.box {
    background: #111;
    padding: 16px;
}
```

### JavaScript
```javascript
// ✅ BOM: ES6+, nomes descritivos, comentários
const calculateProgress = (completed, total) => {
    // Calcula a porcentagem de progresso
    return (completed / total) * 100;
};

// ❌ RUIM: ES5, nomes curtos, sem comentários
function calc(c, t) {
    return c / t * 100;
}
```

### Princípios Gerais
- ✅ Use nomes descritivos e em português
- ✅ Mantenha funções pequenas e focadas
- ✅ Comente código complexo
- ✅ Siga o padrão mobile-first
- ✅ Priorize acessibilidade (ARIA labels, alt text)
- ✅ Use variáveis CSS para valores reutilizáveis

---

## 📝 Estrutura de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/) para manter um histórico limpo:

### Tipos de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Mudanças na documentação
- `style:` Formatação, ponto e vírgula faltando, etc
- `refactor:` Refatoração de código
- `test:` Adicionar ou modificar testes
- `chore:` Tarefas de build, configuração, etc

### Exemplos

```bash
# Nova feature
git commit -m "feat: adiciona exercício de CSS Grid na Aula 3"

# Correção de bug
git commit -m "fix: corrige link quebrado no índice principal"

# Documentação
git commit -m "docs: atualiza README com instruções de setup"

# Estilo/formatação
git commit -m "style: padroniza indentação em todos os arquivos HTML"

# Refatoração
git commit -m "refactor: simplifica lógica de navegação entre aulas"

# Chore
git commit -m "chore: adiciona .gitignore para arquivos temporários"
```

### Boas Práticas
- ✅ Use verbos no imperativo: "adiciona" não "adicionado"
- ✅ Não capitalize a primeira letra
- ✅ Sem ponto final no final da mensagem
- ✅ Limite a primeira linha a 50 caracteres
- ✅ Use o corpo do commit para explicar "o quê" e "por quê"

---

## 🎨 Guidelines de Design

- **Paleta de Cores:** Use as variáveis CSS definidas em `:root`
- **Tipografia:** Inter (weight: 300-500)
- **Espaçamento:** Use a escala de spacing (--spacing-*)
- **Responsividade:** Mobile-first (min-width media queries)
- **Acessibilidade:** Contraste mínimo 4.5:1, ARIA labels

---

## 🧪 Testando Suas Mudanças

Antes de submeter um PR:

1. ✅ Teste em diferentes navegadores:
   - Chrome/Edge
   - Firefox
   - Safari

2. ✅ Teste em diferentes tamanhos de tela:
   - Mobile (< 768px)
   - Tablet (768px - 1024px)
   - Desktop (> 1024px)

3. ✅ Verifique acessibilidade:
   - Navegação por teclado
   - Screen readers
   - Contraste de cores

4. ✅ Valide seu código:
   - [HTML Validator](https://validator.w3.org/)
   - [CSS Validator](https://jigsaw.w3.org/css-validator/)

---

## 🌍 Traduções

Quer traduzir o conteúdo para outro idioma?

1. Crie uma pasta: `i18n/[código-idioma]/`
2. Traduza os arquivos mantendo a estrutura
3. Atualize o README com link para a nova versão
4. Abra um PR com o label `translation`

**Idiomas Desejados:**
- 🇺🇸 Inglês (English)
- 🇪🇸 Espanhol (Español)
- 🇫🇷 Francês (Français)

---

## ❓ Dúvidas?

Se tiver dúvidas sobre como contribuir:

- 💬 Abra uma [Discussion](https://github.com/MAUGUS2/webApps/discussions)
- 📧 Envie um email para [maugus.lco@gmail.com](mailto:maugus.lco@gmail.com)
- 🐛 Abra uma Issue com a tag `question`

---

## 🙏 Agradecimentos

Obrigado por dedicar seu tempo para contribuir! Cada contribuição, por menor que seja, é valiosa e ajuda a melhorar a experiência de aprendizado de muitas pessoas.

**Principais Contribuidores:**
<!-- Será atualizado automaticamente -->

---

<div align="center">

**Vamos juntos construir o melhor curso de desenvolvimento web! 🚀**

</div>
