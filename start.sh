#!/bin/bash

# Script de inicialização do Curso de Aplicações Web e Móveis
# Autor: Mauricio Augusto
# Descrição: Inicia um servidor local para visualizar o curso

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Banner
echo -e "${BLUE}"
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                                                           ║"
echo "║     📚 Curso de Aplicações Web e Móveis                  ║"
echo "║     🚀 Iniciando servidor local...                       ║"
echo "║                                                           ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Detectar porta disponível
PORT=8000
while lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1; do
    echo -e "${YELLOW}⚠️  Porta $PORT está em uso, tentando próxima...${NC}"
    PORT=$((PORT + 1))
done

echo -e "${GREEN}✓ Porta $PORT disponível${NC}"
echo ""

# Função para abrir no navegador
open_browser() {
    sleep 2
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        open "http://localhost:$PORT/indice-geral.html"
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        xdg-open "http://localhost:$PORT/indice-geral.html"
    else
        echo -e "${YELLOW}⚠️  Abra manualmente: http://localhost:$PORT/indice-geral.html${NC}"
    fi
}

# Verificar se Python está instalado
if command -v python3 &> /dev/null; then
    echo -e "${GREEN}✓ Python 3 encontrado${NC}"
    echo -e "${BLUE}🌐 Servidor rodando em: ${GREEN}http://localhost:$PORT${NC}"
    echo -e "${BLUE}📄 Página inicial: ${GREEN}http://localhost:$PORT/indice-geral.html${NC}"
    echo ""
    echo -e "${YELLOW}⌨️  Pressione Ctrl+C para parar o servidor${NC}"
    echo ""

    # Abrir navegador em background
    open_browser &

    # Iniciar servidor
    python3 -m http.server $PORT

elif command -v python &> /dev/null; then
    echo -e "${GREEN}✓ Python 2 encontrado${NC}"
    echo -e "${BLUE}🌐 Servidor rodando em: ${GREEN}http://localhost:$PORT${NC}"
    echo -e "${BLUE}📄 Página inicial: ${GREEN}http://localhost:$PORT/indice-geral.html${NC}"
    echo ""
    echo -e "${YELLOW}⌨️  Pressione Ctrl+C para parar o servidor${NC}"
    echo ""

    # Abrir navegador em background
    open_browser &

    # Iniciar servidor
    python -m SimpleHTTPServer $PORT

else
    echo -e "${RED}✗ Python não encontrado!${NC}"
    echo ""
    echo -e "${YELLOW}Alternativas:${NC}"
    echo ""
    echo "1. Instalar Python:"
    echo "   - macOS: brew install python3"
    echo "   - Linux: sudo apt-get install python3"
    echo ""
    echo "2. Usar Node.js (se instalado):"
    echo "   npx http-server -p $PORT"
    echo ""
    echo "3. Abrir diretamente no navegador:"
    echo "   Dê duplo-clique no arquivo indice-geral.html"
    echo ""
    exit 1
fi
