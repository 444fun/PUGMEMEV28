# PUGMEMEV28

Este é o repositório oficial do projeto PUGMEMEV28.

## Descrição

PUGMEMEV28 é um projeto inovador que combina tecnologia blockchain com diversão e comunidade.

## Características

- Tecnologia blockchain avançada
- Interface amigável
- Comunidade ativa e engajada
- Suporte multiplataforma

## Instalação

```bash
git clone https://github.com/444fun/PUGMEMEV28.git
cd PUGMEMEV28
npm install
```

## Uso

```bash
npm start
```

## Contribuindo

Contribuições são bem-vindas! Por favor, leia o arquivo CONTRIBUTING.md para mais detalhes.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para mais detalhes.

## Contato

Para mais informações, entre em contato através de [email@exemplo.com](mailto:email@exemplo.com)

## Roadmap

### Fase 1: Desenvolvimento Inicial
- [x] Configuração do repositório
- [x] Estrutura básica do projeto
- [x] Documentação inicial

### Fase 2: Implementação Core
- [x] Sistema de autenticação
- [x] Interface de usuário
- [x] Integração com blockchain

### Fase 3: Expansão
- [x] Features avançadas
- [x] Otimizações de performance
- [x] Testes automatizados

### Fase 4: Lançamento
- [x] Contract chip com endereço Solana (`EkPUWVb8ypF34YR9ncLMCmz8ttsXX2z8UMQefJhzpump`)
- [x] Integração com API do CoinGecko para preços em tempo real
- [ ] Marketing e divulgação
- [ ] Suporte pós-lançamento

## 💰 Preços em Tempo Real

O site integra com a API do CoinGecko para exibir dados reais do token $PUGMEME:

- **Preço atual** atualizado a cada 30 segundos
- **Market Cap** e **Volume 24h** em tempo real
- **Variação de preço** com indicadores visuais
- Fallback automático para simulação em caso de falha da API

### Endpoints utilizados:
- **CoinGecko**: `https://api.coingecko.com/api/v3/coins/solana/contract/EkPUWVb8ypF34YR9ncLMCmz8ttsXX2z8UMQefJhzpump`
- **DexScreener** (fallback): `https://api.dexscreener.com/latest/dex/tokens/{token_address}`
- **Pump.fun** (fallback): `https://frontend-api.pump.fun/coins/{token_address}`

### Configuração

A integração usa a API pública do CoinGecko sem necessidade de API key. O sistema tenta buscar dados do CoinGecko primeiro, e em caso de falha, utiliza fontes alternativas (DexScreener e Pump.fun) ou dados simulados.

**Notas importantes:**
- A API pública do CoinGecko tem rate limit de ~50 requests/minuto
- Para produção com alto volume, considere obter uma API key do CoinGecko
- O token precisa estar listado no CoinGecko para funcionar
- Implementa retry logic (3 tentativas) antes de falhar para fontes alternativas

## Agradecimentos

Agradecemos a todos que contribuíram para este projeto!
