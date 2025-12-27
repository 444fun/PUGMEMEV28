#!/bin/bash

# 🔍 PUGMEM - Script de Verificação Pré-Deploy
# Executa verificações automatizadas antes do deploy

echo "🔍 Verificando PUGMEM para deploy..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Array para armazenar erros
errors=()

# Função para verificar arquivos essenciais
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✅ $1 encontrado${NC}"
    else
        echo -e "${RED}❌ $1 não encontrado${NC}"
        errors+=("$1 não encontrado")
    fi
}

# Função para verificar conteúdo em arquivos
check_content() {
    if grep -q "$2" "$1"; then
        echo -e "${GREEN}✅ $3${NC}"
    else
        echo -e "${RED}❌ $3${NC}"
        errors+=("$3")
    fi
}

echo ""
echo "📁 Verificando arquivos essenciais..."
check_file "index.html"
check_file "styles-web3.css"
check_file "script.js"
check_file "README.md"

echo ""
echo "🔧 Verificando configurações críticas..."

# Verificar Google Analytics
if grep -q "G-4Q7LXSL53E" index.html; then
    echo -e "${GREEN}✅ Google Analytics configurado corretamente${NC}"
else
    echo -e "${RED}❌ Google Analytics não configurado${NC}"
    errors+=("Google Analytics ID incorreto")
fi

# Verificar meta tags SEO
if grep -q "og:title" index.html && grep -q "og:description" index.html; then
    echo -e "${GREEN}✅ Meta tags Open Graph presentes${NC}"
else
    echo -e "${RED}❌ Meta tags Open Graph incompletas${NC}"
    errors+=("Meta tags Open Graph incompletas")
fi

# Verificar HTTPS em links externos
if grep -q "http://" index.html; then
    echo -e "${YELLOW}⚠️  Links HTTP encontrados (considere HTTPS)${NC}"
else
    echo -e "${GREEN}✅ Todos os links usam HTTPS${NC}"
fi

# Verificar scripts externos
if grep -q "unpkg.com" index.html; then
    echo -e "${GREEN}✅ Scripts externos do Solana carregados${NC}"
else
    echo -e "${RED}❌ Scripts do Solana não encontrados${NC}"
    errors+=("Scripts Web3 não carregados")
fi

# Verificar funcionalidades críticas
check_content "script.js" "connectWallet" "Função connectWallet implementada"
check_content "index.html" "contractChip" "Contract chip presente"
check_content "index.html" "social-btn" "Botões sociais presentes"

echo ""
echo "🎨 Verificando design e UX..."

# Verificar responsividade
if grep -q "@media.*max-width" styles-web3.css; then
    echo -e "${GREEN}✅ Media queries responsivas implementadas${NC}"
else
    echo -e "${RED}❌ Media queries não encontradas${NC}"
    errors+=("Design não responsivo")
fi

# Verificar acessibilidade
if grep -q "aria-" index.html || grep -q "alt=" index.html; then
    echo -e "${GREEN}✅ Atributos de acessibilidade presentes${NC}"
else
    echo -e "${RED}❌ Atributos de acessibilidade ausentes${NC}"
    errors+=("Acessibilidade inadequada")
fi

echo ""
echo "📊 Verificando analytics e tracking..."

# Verificar se há placeholders não substituídos
if grep -q "YOUR_GA4_MEASUREMENT_ID" index.html; then
    echo -e "${RED}❌ Placeholder do GA4 não substituído${NC}"
    errors+=("GA4 placeholder não configurado")
else
    echo -e "${GREEN}✅ Google Analytics totalmente configurado${NC}"
fi

echo ""
echo "🔒 Verificando segurança..."

# Verificar se não há dados sensíveis hardcoded
if grep -q "password\|secret\|key.*123" index.html script.js; then
    echo -e "${RED}❌ Dados sensíveis encontrados no código${NC}"
    errors+=("Dados sensíveis no código")
else
    echo -e "${GREEN}✅ Nenhum dado sensível encontrado${NC}"
fi

echo ""
echo "📋 RESULTADO DA VERIFICAÇÃO:"

if [ ${#errors[@]} -eq 0 ]; then
    echo -e "${GREEN}🎉 TODAS AS VERIFICAÇÕES APROVADAS!${NC}"
    echo -e "${GREEN}🚀 PRONTO PARA DEPLOY EM PRODUÇÃO${NC}"
    echo ""
    echo "📝 Próximos passos:"
    echo "1. Execute: ./deploy.sh [netlify|vercel|github]"
    echo "2. Configure domínio com HTTPS"
    echo "3. Aguarde 24-48h para dados do GA4"
    echo "4. Configure Goals no Google Analytics"
    echo "5. Monitore dashboards de engajamento"
    exit 0
else
    echo -e "${RED}❌ VERIFICAÇÃO FALHADA${NC}"
    echo -e "${RED}Problemas encontrados:${NC}"
    for error in "${errors[@]}"; do
        echo -e "${RED}  - $error${NC}"
    done
    echo ""
    echo -e "${YELLOW}🔧 Corrija os problemas antes do deploy${NC}"
    exit 1
fi</content>
<parameter name="filePath">c:\Users\earle\husky\pre-deploy-check.sh