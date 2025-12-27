# 🤖 Demo AI Gateway

Projeto de demonstração para testar integração com AI Gateway usando a biblioteca `ai` do Vercel.

## 🚀 Instalação

```bash
pnpm install
```

## ⚙️ Configuração

1. Crie um arquivo `.env` na raiz do projeto
2. Adicione sua chave de API do AI Gateway:

```env
AI_GATEWAY_API_KEY=sua_chave_aqui
```

## 🧪 Teste

Execute o teste de conexão com a IA:

```bash
pnpm test
```

Ou:

```bash
pnpm dev
```

## 📦 Dependências

- `ai` - Biblioteca de IA do Vercel
- `dotenv` - Carregamento de variáveis de ambiente
- `tsx` - Executor TypeScript
- `@types/node` - Tipos do Node.js

## 🎯 Funcionalidades

- ✅ Conexão com AI Gateway
- ✅ Geração de texto usando GPT-4o-mini
- ✅ Tratamento de erros
- ✅ Configuração via variáveis de ambiente

## 🔧 Estrutura do Projeto

```
demo/
├── .env              # Variáveis de ambiente (não commitar)
├── .gitignore        # Arquivos ignorados pelo git
├── package.json      # Configuração do projeto
├── test-ai.ts        # Script de teste da IA
└── README.md         # Este arquivo
```
