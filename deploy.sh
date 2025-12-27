#!/bin/bash

# 🚀 PUGMEM - Script de Deploy Automático
# Uso: ./deploy.sh [plataforma]
# Plataformas suportadas: netlify, vercel, github

set -e

echo "🚀 Iniciando deploy da PUGMEM..."

# Verificar se há arquivos essenciais
if [ ! -f "index.html" ]; then
    echo "❌ Arquivo index.html não encontrado!"
    exit 1
fi

if [ ! -f "styles-web3.css" ]; then
    echo "❌ Arquivo styles-web3.css não encontrado!"
    exit 1
fi

if [ ! -f "script.js" ]; then
    echo "❌ Arquivo script.js não encontrado!"
    exit 1
fi

echo "✅ Arquivos essenciais verificados"

# Verificar se Google Analytics está configurado
if grep -q "YOUR_GA4_MEASUREMENT_ID" index.html; then
    echo "⚠️  AVISO: Google Analytics ainda usa placeholder!"
    echo "   Configure o ID real antes do deploy."
fi

# Função de deploy para Netlify
deploy_netlify() {
    echo "🌐 Deploying para Netlify..."

    if ! command -v netlify &> /dev/null; then
        echo "❌ Netlify CLI não instalado. Instale com: npm install -g netlify-cli"
        exit 1
    fi

    # Login se necessário
    netlify login

    # Deploy
    netlify deploy --prod --dir=.

    echo "✅ Deploy Netlify concluído!"
}

# Função de deploy para Vercel
deploy_vercel() {
    echo "⚡ Deploying para Vercel..."

    if ! command -v vercel &> /dev/null; then
        echo "❌ Vercel CLI não instalado. Instale com: npm install -g vercel"
        exit 1
    fi

    # Deploy
    vercel --prod

    echo "✅ Deploy Vercel concluído!"
}

# Função de deploy para GitHub Pages
deploy_github() {
    echo "🐙 Preparando para GitHub Pages..."

    # Verificar se é um repositório git
    if [ ! -d ".git" ]; then
        echo "❌ Não é um repositório Git. Inicialize com: git init"
        exit 1
    fi

    # Commit e push
    git add .
    git commit -m "🚀 Deploy PUGMEM v$(date +%Y%m%d_%H%M%S)"
    git push origin main

    echo "✅ Código enviado para GitHub!"
    echo "📝 Ative GitHub Pages nas configurações do repositório"
}

# Menu de opções
case "${1:-help}" in
    "netlify")
        deploy_netlify
        ;;
    "vercel")
        deploy_vercel
        ;;
    "github")
        deploy_github
        ;;
    "help"|*)
        echo "📋 Uso: ./deploy.sh [plataforma]"
        echo ""
        echo "Plataformas disponíveis:"
        echo "  netlify  - Deploy para Netlify (recomendado)"
        echo "  vercel   - Deploy para Vercel"
        echo "  github   - Deploy para GitHub Pages"
        echo ""
        echo "Exemplos:"
        echo "  ./deploy.sh netlify"
        echo "  ./deploy.sh vercel"
        echo "  ./deploy.sh github"
        ;;
esac

echo ""
echo "🎉 Deploy process completed!"
echo "📊 Monitore o Google Analytics em 24-48h"
echo "🔗 Verifique se HTTPS está funcionando"</content>
<parameter name="filePath">c:\Users\earle\husky\deploy.sh