# PUG Web3 Database Structure

## Visão Geral

Este projeto implementa uma estrutura completa de banco de dados local usando LocalStorage do navegador para armazenar dados do site PUG Web3 Memes. A estrutura é gerenciada pela classe `DatabaseManager` no arquivo `script.js`.

## Estrutura do Banco de Dados

### Tabelas/Collections

```javascript
db = {
  users: Map(), // Usuários registrados
  memes: Map(), // Memes da galeria
  nfts: Map(), // NFTs disponíveis
  transactions: Array(), // Histórico de transações
  settings: Object(), // Configurações do usuário
  favorites: Set(), // Itens favoritados
  wallet: Object(), // Dados da carteira conectada
  analytics: Object(), // Dados analíticos
};
```

## API do DatabaseManager

### Inicialização

```javascript
const dbManager = new DatabaseManager();
```

### Gerenciamento de Usuários

```javascript
// Criar usuário
const user = dbManager.createUser({
  name: "João Silva",
  email: "joao@email.com",
  avatar: "avatar.jpg",
});

// Buscar usuário
const user = dbManager.getUser("user_123");

// Atualizar usuário
dbManager.updateUser("user_123", {
  lastLogin: new Date().toISOString(),
  preferences: { theme: "light" },
});
```

### Gerenciamento de Memes

```javascript
// Adicionar meme
const meme = dbManager.addMeme({
  title: "PUG Master",
  image: "meme.jpg",
  category: "degen",
  tags: ["pug", "crypto", "funny"],
});

// Buscar meme
const meme = dbManager.getMeme("meme_123");

// Curtir meme
const likes = dbManager.likeMeme("meme_123");
```

### Gerenciamento de NFTs

```javascript
// Adicionar NFT
const nft = dbManager.addNFT({
  title: "Legendary Pug #001",
  image: "nft.jpg",
  price: 42.0,
  rarity: "Legendary",
  attributes: [
    { trait_type: "Background", value: "Cosmic" },
    { trait_type: "Eyes", value: "Laser" },
  ],
});

// Comprar NFT
const success = dbManager.purchaseNFT("nft_123", "wallet_address");
```

### Sistema de Favoritos

```javascript
// Adicionar aos favoritos
dbManager.addToFavorites("meme_123", "meme");

// Remover dos favoritos
dbManager.removeFromFavorites("meme_123", "meme");

// Verificar se é favorito
const isFav = dbManager.isFavorite("meme_123", "meme");

// Listar favoritos
const favorites = dbManager.getFavorites("meme"); // ou null para todos
```

### Gerenciamento de Carteira

```javascript
// Conectar carteira
dbManager.connectWallet("wallet_address");

// Desconectar carteira
dbManager.disconnectWallet();

// Atualizar saldo
dbManager.updateWalletBalance(100.5);
```

### Analytics e Interações

```javascript
// Rastrear interação
dbManager.trackInteraction("button_click", {
  button: "connect_wallet",
  page: "home",
});

// Incrementar visualizações de página
const views = dbManager.incrementPageViews();
```

### Utilitários

```javascript
// Exportar dados
const jsonData = dbManager.exportData();

// Importar dados
const success = dbManager.importData(jsonData);

// Reset do banco
dbManager.resetDatabase();

// Estatísticas
const stats = dbManager.getStats();
// Retorna: { users: 5, memes: 12, nfts: 8, transactions: 3, ... }
```

## Persistência de Dados

Os dados são automaticamente salvos no LocalStorage do navegador com a chave `pugWeb3DB`. Os dados persistem entre sessões do navegador.

### Estrutura de Armazenamento

```javascript
// Como os dados são salvos no LocalStorage
{
    "users": [["user_123", { id: "user_123", name: "João", ... }]],
    "memes": [["meme_456", { id: "meme_456", title: "PUG", ... }]],
    "nfts": [["nft_789", { id: "nft_789", title: "NFT", ... }]],
    "transactions": [{ id: "tx_123", type: "nft_purchase", ... }],
    "settings": { theme: "dark", notifications: true },
    "favorites": ["meme_meme_456", "nft_nft_789"],
    "wallet": { connected: true, address: "abc123...", balance: 50 },
    "analytics": { pageViews: 42, interactions: [...], sessionStart: 1234567890 }
}
```

## Integração com a Interface

O DatabaseManager está integrado com as funcionalidades existentes:

- **Conexão de Carteira**: Salva estado da carteira conectada
- **Botões de Like**: Persiste contadores de likes dos memes
- **Analytics**: Rastreia interações do usuário
- **Dados de Exemplo**: Carrega memes e NFTs de exemplo na primeira visita

## Debug e Desenvolvimento

### Console do Navegador

Abra o console do navegador (F12) e use:

```javascript
// Acessar o database manager
dbManager;

// Ver estatísticas
dbManager.getStats();

// Ver todos os memes
Array.from(dbManager.db.memes.values());

// Resetar banco de dados
dbManager.resetDatabase();
```

### Monitoramento

Os dados são automaticamente salvos sempre que modificados. Para debug, monitore o LocalStorage no painel Application > Local Storage do DevTools.

## Considerações de Segurança

- Dados são armazenados localmente no navegador
- Não há criptografia implementada
- Dados são vulneráveis a manipulação via console
- Recomendado para dados não sensíveis apenas

## Expansão Futura

A estrutura pode ser expandida para:

- **IndexedDB**: Para dados maiores e mais complexos
- **Sincronização**: Com backend/server
- **Criptografia**: Para dados sensíveis
- **Cache**: Para performance
- **Backup/Restore**: Funcionalidades avançadas

## Exemplo de Uso Completo

````javascript
// Inicializar
const db = new DatabaseManager();

// Criar usuário
const user = db.createUser({ name: 'Alice', email: 'alice@pug.com' });

// Adicionar meme
const meme = db.addMeme({
    title: 'PUG to the Moon',
    image: 'pug-moon.jpg',
    category: 'moon'
});

// Curtir meme
db.likeMeme(meme.id);

// Adicionar aos favoritos
db.addToFavorites(meme.id, 'meme');

// Conectar carteira
db.connectWallet('phantom_wallet_address');

// Rastrear interação
db.trackInteraction('meme_viewed', { memeId: meme.id });

// Ver estatísticas
console.log(db.getStats());
```</content>
<parameter name="filePath">c:\Users\earle\husky\DATABASE_README.md
````
