# 🚀 Guia de Deploy - GitHub Pages

Este documento fornece instruções passo a passo para publicar o curso no GitHub Pages gratuitamente.

---

## 📋 Pré-requisitos

- Conta no GitHub (gratuita)
- Git instalado no seu computador
- Projeto já configurado (você já tem tudo pronto!)

---

## 🎯 Deploy no GitHub Pages (Gratuito)

### Passo 1: Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em **"New repository"** (botão verde)
3. Configure o repositório:
   - **Repository name:** `webApps` (ou outro nome de sua preferência)
   - **Description:** "Curso completo de Aplicações Web e Móveis - HTML, CSS e JavaScript"
   - **Visibility:** Public (para usar GitHub Pages gratuito)
   - **NÃO** marque "Initialize this repository with a README"
4. Clique em **"Create repository"**

### Passo 2: Conectar Repositório Local ao GitHub

Abra o terminal na pasta do projeto e execute:

```bash
cd /Users/maugus/Projects/edu/webApps

# Adicionar todos os arquivos
git add .

# Criar primeiro commit
git commit -m "🎉 Commit inicial: Curso completo de Aplicações Web"

# Adicionar repositório remoto (substitua MAUGUS2 pelo seu username)
git remote add origin https://github.com/MAUGUS2/webApps.git

# Renomear branch para main (se necessário)
git branch -M main

# Enviar para GitHub
git push -u origin main
```

### Passo 3: Configurar GitHub Pages

1. No GitHub, vá para o seu repositório
2. Clique em **"Settings"** (Configurações)
3. No menu lateral, clique em **"Pages"**
4. Em **"Source"**, selecione:
   - **Source:** GitHub Actions
5. Aguarde alguns segundos até aparecer a mensagem de sucesso

### Passo 4: Verificar Deploy

1. Vá para a aba **"Actions"** no seu repositório
2. Você verá o workflow **"Deploy to GitHub Pages"** rodando
3. Aguarde o workflow completar (geralmente leva 1-2 minutos)
4. Quando o deploy finalizar, seu site estará disponível em:
   ```
   https://MAUGUS2.github.io/webApps/indice-geral.html
   ```

---

## 🔄 Atualizando o Conteúdo

Sempre que você fizer alterações no curso:

```bash
# Adicionar alterações
git add .

# Criar commit descritivo
git commit -m "docs: adiciona novo exercício de JavaScript"

# Enviar para GitHub
git push
```

O GitHub Actions fará o deploy automático! ✨

---

## ⚙️ Configurações Opcionais

### Personalizar URL (Domínio Customizado)

Se você tem um domínio próprio:

1. Vá em **Settings → Pages**
2. Em **"Custom domain"**, adicione seu domínio
3. Configure DNS no seu provedor:
   - Tipo: CNAME
   - Host: www (ou @)
   - Valor: MAUGUS2.github.io

### Adicionar Badge no README

Adicione este badge no README.md para mostrar o status do deploy:

```markdown
![Deploy](https://github.com/MAUGUS2/webApps/actions/workflows/deploy.yml/badge.svg)
```

---

## 📊 Alternativas de Hospedagem Gratuita

Além do GitHub Pages, você pode usar:

### 1. **Netlify** (Recomendado)
   - ✅ Deploy automático via Git
   - ✅ HTTPS gratuito
   - ✅ CDN global
   - ✅ Domínio customizado gratuito
   - 📍 https://www.netlify.com

**Como fazer:**
1. Acesse [Netlify](https://www.netlify.com)
2. Clique em "Add new site" → "Import an existing project"
3. Conecte seu repositório GitHub
4. Deploy automático! 🎉

### 2. **Vercel**
   - ✅ Mesmo criador do Next.js
   - ✅ Deploy instantâneo
   - ✅ Preview de PRs
   - 📍 https://vercel.com

### 3. **Cloudflare Pages**
   - ✅ CDN super rápido
   - ✅ Builds ilimitados
   - ✅ Analytics gratuito
   - 📍 https://pages.cloudflare.com

### 4. **Surge.sh**
   - ✅ Deploy via CLI super simples
   - ✅ Domínio gratuito (.surge.sh)
   - 📍 https://surge.sh

```bash
# Instalar
npm install -g surge

# Deploy
cd /Users/maugus/Projects/edu/webApps
surge
```

---

## 🐛 Troubleshooting

### Deploy falhou no GitHub Actions

1. Verifique a aba **"Actions"** para ver o erro
2. Certifique-se de que:
   - O repositório é público
   - GitHub Pages está ativado em Settings
   - O arquivo `.github/workflows/deploy.yml` existe

### Página mostra 404

1. Aguarde 5-10 minutos após o primeiro deploy
2. Verifique se o arquivo `indice-geral.html` está na raiz do projeto
3. Acesse com `/indice-geral.html` no final da URL

### Links quebrados

Se os links internos não funcionarem:
1. Use caminhos relativos (já está configurado!)
2. Evite links absolutos como `/pagina.html`
3. Prefira `./pagina.html` ou `pagina.html`

---

## 📧 Suporte

Problemas com o deploy?
- 📖 [Documentação GitHub Pages](https://docs.github.com/pages)
- 💬 [Abrir Issue](https://github.com/MAUGUS2/webApps/issues)
- 📧 Email: maugus.lco@gmail.com

---

## ✅ Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Código enviado para o repositório
- [ ] GitHub Pages configurado
- [ ] Workflow de deploy executado com sucesso
- [ ] Site acessível via URL pública
- [ ] Links testados e funcionando
- [ ] README atualizado com link do site ao vivo
- [ ] Compartilhado com a comunidade! 🎉

---

<div align="center">

**Seu curso agora está online e acessível para o mundo! 🌍**

**Compartilhe o link e ajude outras pessoas a aprender! 🚀**

</div>
