@echo off
REM Script de inicialização do Curso de Aplicações Web e Móveis
REM Autor: Mauricio Augusto
REM Descrição: Inicia um servidor local para visualizar o curso (Windows)

title Curso de Aplicações Web e Móveis

echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║                                                           ║
echo ║     📚 Curso de Aplicações Web e Móveis                  ║
echo ║     🚀 Iniciando servidor local...                       ║
echo ║                                                           ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

set PORT=8000

REM Verificar se Python está instalado
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Python encontrado
    echo.
    echo 🌐 Servidor rodando em: http://localhost:%PORT%
    echo 📄 Página inicial: http://localhost:%PORT%/indice-geral.html
    echo.
    echo ⌨️  Pressione Ctrl+C para parar o servidor
    echo.

    REM Abrir navegador
    timeout /t 2 /nobreak >nul
    start http://localhost:%PORT%/indice-geral.html

    REM Iniciar servidor
    python -m http.server %PORT%
) else (
    echo ✗ Python não encontrado!
    echo.
    echo Alternativas:
    echo.
    echo 1. Instalar Python:
    echo    - Baixe em: https://www.python.org/downloads/
    echo    - Marque "Add Python to PATH" durante a instalação
    echo.
    echo 2. Usar Node.js ^(se instalado^):
    echo    npx http-server -p %PORT%
    echo.
    echo 3. Abrir diretamente no navegador:
    echo    Dê duplo-clique no arquivo indice-geral.html
    echo.
    pause
)
