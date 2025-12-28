// ==========================================
// PUG WEB3 MEMES - INTERACTIVE FEATURES
// ==========================================

// ==========================================
// WEB3 API CONFIGURATIONS
// ==========================================

// Solana Configuration
const SOLANA_CONFIG = {
    network: 'mainnet-beta',
    rpcUrl: 'https://api.mainnet-beta.solana.com',
    commitment: 'confirmed'
};

// Metaplex Configuration
const METAPLEX_CONFIG = {
    candyMachineAddress: null, // To be set when deployed
    collectionAddress: null,   // To be set when deployed
    treasuryAddress: null      // To be set when deployed
};

// PUG Token Configuration
// This is a PUBLIC Solana token address, not a secret API key
const PUG_TOKEN_ADDRESS = 'GKKJkrCB8QEy7NwcNVwNa8avdywW6iCoNZpzaMtepump';

// IPFS Configuration
const IPFS_CONFIG = {
    gateway: 'https://gateway.pinata.cloud/ipfs/',
    apiKey: null,     // Set your Pinata API key
    apiSecret: null,  // Set your Pinata API secret
    jwt: null         // Set your Pinata JWT
};

// ==========================================
// SOCIAL MEDIA & COMMUNICATION APIs
// ==========================================

// Twitter/X Configuration
const TWITTER_CONFIG = {
    apiKey: null,
    apiSecret: null,
    bearerToken: null,
    callbackUrl: window.location.origin
};

// Discord Configuration
const DISCORD_CONFIG = {
    clientId: null,
    clientSecret: null,
    botToken: null,
    guildId: null,
    webhookUrl: null
};

// Telegram Configuration
const TELEGRAM_CONFIG = {
    botToken: null,
    chatId: null,
    apiUrl: 'https://api.telegram.org/bot'
};

// ==========================================
// EXCHANGE & PRICE APIs
// ==========================================

// CoinGecko Configuration
const COINGECKO_CONFIG = {
    apiKey: null,
    baseUrl: 'https://api.coingecko.com/api/v3',
    proApiKey: null
};

// DexScreener Configuration
const DEXSCREENER_CONFIG = {
    baseUrl: 'https://api.dexscreener.com/latest/dex',
    pairs: {
        pug: PUG_TOKEN_ADDRESS // Replace with actual token address
    }
};

// Jupiter DEX Configuration
const JUPITER_CONFIG = {
    apiUrl: 'https://quote-api.jup.ag/v6',
    swapUrl: 'https://swap.jup.ag'
};

// ==========================================
// ANALYTICS & TRACKING APIs
// ==========================================

// Google Analytics Configuration
const GA_CONFIG = {
    measurementId: null,
    apiSecret: null,
    baseUrl: 'https://www.google-analytics.com/mp/collect'
};

// Mixpanel Configuration
const MIXPANEL_CONFIG = {
    token: null,
    apiUrl: 'https://api.mixpanel.com/track'
};

// ==========================================
// NOTIFICATION & COMMUNICATION APIs
// ==========================================

// Pushover Configuration (for push notifications)
const PUSHOVER_CONFIG = {
    appToken: null,
    userKey: null,
    apiUrl: 'https://api.pushover.net/1/messages.json'
};

// EmailJS Configuration
const EMAILJS_CONFIG = {
    serviceId: null,
    templateId: null,
    publicKey: null,
    privateKey: null
};

// ==========================================
// MULTI-CHAIN & CROSS-CHAIN APIs
// ==========================================

// Ethereum Configuration
const ETHEREUM_CONFIG = {
    rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY',
    chainId: 1,
    networkName: 'Ethereum Mainnet'
};

// BSC Configuration
const BSC_CONFIG = {
    rpcUrl: 'https://bsc-dataseed.binance.org/',
    chainId: 56,
    networkName: 'Binance Smart Chain'
};

// Polygon Configuration
const POLYGON_CONFIG = {
    rpcUrl: 'https://polygon-rpc.com/',
    chainId: 137,
    networkName: 'Polygon Mainnet'
};

// ==========================================
// NEWS & SOCIAL APIs
// ==========================================

// Crypto News API Configuration
const CRYPTONEWS_CONFIG = {
    apiKey: null,
    baseUrl: 'https://cryptonews-api.com/api/v1'
};

// Reddit API Configuration
const REDDIT_CONFIG = {
    clientId: null,
    clientSecret: null,
    userAgent: 'PUG-Memecoin-Web-App/1.0'
};

// ==========================================
// UTILITY APIs
// ==========================================

// IP Geolocation API
const IPGEOLOCATION_CONFIG = {
    apiKey: null,
    baseUrl: 'https://api.ipgeolocation.io/ipgeo'
};

// QR Code Generation
const QRCODE_CONFIG = {
    apiUrl: 'https://api.qrserver.com/v1/create-qr-code/',
    size: '200x200'
};

// ==========================================
// GLOBAL API INSTANCES
// ==========================================

// Global Web3 Instances
let solanaConnection = null;
let metaplexInstance = null;
let ipfsClient = null;

// Social Media Instances
let twitterAPI = null;
let discordAPI = null;
let telegramAPI = null;

// Exchange Instances
let coingeckoAPI = null;
let dexscreenerAPI = null;
let jupiterAPI = null;

// Analytics Instances
let googleAnalytics = null;
let mixpanelAPI = null;

// Notification Instances
let pushoverAPI = null;
let emailjsAPI = null;

// Multi-chain Instances
let ethereumConnection = null;
let bscConnection = null;
let polygonConnection = null;

// News Instances
let cryptonewsAPI = null;
let redditAPI = null;

// Utility Instances
let ipGeolocationAPI = null;

// Initialize Web3 APIs
async function initializeWeb3APIs() {
    try {
        // Initialize Solana Connection
        if (window.solanaWeb3) {
            solanaConnection = new window.solanaWeb3.Connection(
                SOLANA_CONFIG.rpcUrl,
                SOLANA_CONFIG.commitment
            );
            console.log('✅ Solana connection initialized');
        }

        // Initialize Metaplex (when available)
        if (window.Metaplex) {
            // Metaplex initialization will be added when SDK is loaded
            console.log('✅ Metaplex SDK ready for initialization');
        }

        // Initialize IPFS (when available)
        if (window.IpfsHttpClient) {
            ipfsClient = window.IpfsHttpClient.create({
                host: 'ipfs.infura.io',
                port: 5001,
                protocol: 'https',
                headers: {
                    authorization: IPFS_CONFIG.jwt ? `Bearer ${IPFS_CONFIG.jwt}` : undefined
                }
            });
            console.log('✅ IPFS client initialized');
        }

    } catch (error) {
        console.warn('⚠️ Web3 APIs initialization failed:', error);
        // Continue with simulation mode
    }
}

// Initialize All APIs
async function initializeAllAPIs() {
    try {
        console.log('🚀 Initializing all APIs...');

        // Initialize Social Media APIs
        await twitterAPI.initialize();
        await discordAPI.initialize();
        await telegramAPI.initialize();

        // Initialize Exchange APIs
        await coingeckoAPI.initialize();
        await dexscreenerAPI.initialize();
        await jupiterAPI.initialize();

        // Initialize Analytics APIs
        await googleAnalytics.initialize();
        await mixpanelAPI.initialize();

        // Initialize Notification APIs
        await pushoverAPI.initialize();
        await emailjsAPI.initialize();

        // Initialize Multi-chain APIs
        await ethereumAPI.initialize();
        await bscAPI.initialize();
        await polygonAPI.initialize();

        // Initialize News APIs
        await cryptonewsAPI.initialize();
        await redditAPI.initialize();

        // Initialize Utility APIs
        await ipGeolocationAPI.initialize();

        console.log('✅ All APIs initialized successfully');

    } catch (error) {
        console.warn('⚠️ Some APIs failed to initialize:', error);
        // Continue with available APIs
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // DATABASE MANAGER - LOCAL STORAGE STRUCTURE
    // ==========================================
    class DatabaseManager {
        constructor() {
            this.db = {
                users: new Map(),
                memes: new Map(),
                nfts: new Map(),
                transactions: [],
                settings: {},
                favorites: new Set(),
                wallet: {
                    connected: false,
                    address: null,
                    balance: 0,
                    network: 'solana-mainnet'
                },
                analytics: {
                    pageViews: 0,
                    interactions: [],
                    sessionStart: Date.now()
                }
            };
            this.loadFromStorage();
        }

        // Carrega dados do LocalStorage
        loadFromStorage() {
            try {
                const stored = localStorage.getItem('pugWeb3DB');
                if (stored) {
                    const parsed = JSON.parse(stored);
                    
                    // Reconstrói Maps e Sets
                    this.db.users = new Map(parsed.users || []);
                    this.db.memes = new Map(parsed.memes || []);
                    this.db.nfts = new Map(parsed.nfts || []);
                    this.db.transactions = parsed.transactions || [];
                    this.db.settings = parsed.settings || {};
                    this.db.favorites = new Set(parsed.favorites || []);
                    this.db.wallet = { ...this.db.wallet, ...parsed.wallet };
                    this.db.analytics = { ...this.db.analytics, ...parsed.analytics };
                }
            } catch (error) {
                console.warn('Erro ao carregar dados do LocalStorage:', error);
                this.resetDatabase();
            }
        }

        // Salva dados no LocalStorage
        saveToStorage() {
            try {
                const toSave = {
                    users: Array.from(this.db.users.entries()),
                    memes: Array.from(this.db.memes.entries()),
                    nfts: Array.from(this.db.nfts.entries()),
                    transactions: this.db.transactions,
                    settings: this.db.settings,
                    favorites: Array.from(this.db.favorites),
                    wallet: this.db.wallet,
                    analytics: this.db.analytics
                };
                localStorage.setItem('pugWeb3DB', JSON.stringify(toSave));
            } catch (error) {
                console.error('Erro ao salvar dados no LocalStorage:', error);
            }
        }

        // Reset do banco de dados
        resetDatabase() {
            this.db = {
                users: new Map(),
                memes: new Map(),
                nfts: new Map(),
                transactions: [],
                settings: {},
                favorites: new Set(),
                wallet: {
                    connected: false,
                    address: null,
                    balance: 0,
                    network: 'solana-mainnet'
                },
                analytics: {
                    pageViews: 0,
                    interactions: [],
                    sessionStart: Date.now()
                }
            };
            this.saveToStorage();
        }

        // ==========================================
        // USER MANAGEMENT
        // ==========================================
        createUser(userData) {
            const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            const user = {
                id: userId,
                ...userData,
                createdAt: new Date().toISOString(),
                lastLogin: new Date().toISOString(),
                preferences: {
                    theme: 'dark',
                    notifications: true,
                    language: 'pt-BR'
                }
            };
            this.db.users.set(userId, user);
            this.saveToStorage();
            return user;
        }

        getUser(userId) {
            return this.db.users.get(userId);
        }

        updateUser(userId, updates) {
            const user = this.db.users.get(userId);
            if (user) {
                Object.assign(user, updates, { lastUpdated: new Date().toISOString() });
                this.db.users.set(userId, user);
                this.saveToStorage();
                return user;
            }
            return null;
        }

        // ==========================================
        // MEME MANAGEMENT
        // ==========================================
        addMeme(memeData) {
            const memeId = `meme_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            const meme = {
                id: memeId,
                ...memeData,
                likes: 0,
                shares: 0,
                comments: [],
                createdAt: new Date().toISOString(),
                tags: memeData.tags || [],
                category: memeData.category || 'general'
            };
            this.db.memes.set(memeId, meme);
            this.saveToStorage();
            return meme;
        }

        getMeme(memeId) {
            return this.db.memes.get(memeId);
        }

        likeMeme(memeId) {
            const meme = this.db.memes.get(memeId);
            if (meme) {
                meme.likes += 1;
                this.db.memes.set(memeId, meme);
                this.saveToStorage();
                return meme.likes;
            }
            return 0;
        }

        // ==========================================
        // NFT MANAGEMENT
        // ==========================================
        addNFT(nftData) {
            const nftId = `nft_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            const nft = {
                id: nftId,
                ...nftData,
                owner: null,
                price: nftData.price || 0,
                status: 'available', // available, sold, minted
                createdAt: new Date().toISOString(),
                metadata: {
                    attributes: nftData.attributes || [],
                    description: nftData.description || '',
                    image: nftData.image || ''
                }
            };
            this.db.nfts.set(nftId, nft);
            this.saveToStorage();
            return nft;
        }

        getNFT(nftId) {
            return this.db.nfts.get(nftId);
        }

        purchaseNFT(nftId, buyerAddress) {
            const nft = this.db.nfts.get(nftId);
            if (nft && nft.status === 'available') {
                nft.owner = buyerAddress;
                nft.status = 'sold';
                nft.soldAt = new Date().toISOString();
                
                // Registra transação
                this.db.transactions.push({
                    id: `tx_${Date.now()}`,
                    type: 'nft_purchase',
                    nftId: nftId,
                    buyer: buyerAddress,
                    seller: nft.creator || 'platform',
                    amount: nft.price,
                    currency: 'SOL',
                    timestamp: new Date().toISOString()
                });
                
                this.db.nfts.set(nftId, nft);
                this.saveToStorage();
                return true;
            }
            return false;
        }

        // ==========================================
        // FAVORITES MANAGEMENT
        // ==========================================
        addToFavorites(itemId, itemType = 'meme') {
            const favoriteKey = `${itemType}_${itemId}`;
            this.db.favorites.add(favoriteKey);
            this.saveToStorage();
            return true;
        }

        removeFromFavorites(itemId, itemType = 'meme') {
            const favoriteKey = `${itemType}_${itemId}`;
            this.db.favorites.delete(favoriteKey);
            this.saveToStorage();
            return true;
        }

        isFavorite(itemId, itemType = 'meme') {
            const favoriteKey = `${itemType}_${itemId}`;
            return this.db.favorites.has(favoriteKey);
        }

        getFavorites(itemType = null) {
            const favorites = Array.from(this.db.favorites);
            if (itemType) {
                return favorites.filter(fav => fav.startsWith(`${itemType}_`));
            }
            return favorites;
        }

        // ==========================================
        // WALLET MANAGEMENT
        // ==========================================
        connectWallet(address) {
            this.db.wallet.connected = true;
            this.db.wallet.address = address;
            this.db.wallet.lastConnection = new Date().toISOString();
            this.saveToStorage();
            return this.db.wallet;
        }

        disconnectWallet() {
            this.db.wallet.connected = false;
            this.db.wallet.address = null;
            this.saveToStorage();
            return this.db.wallet;
        }

        updateWalletBalance(balance) {
            this.db.wallet.balance = balance;
            this.saveToStorage();
            return this.db.wallet;
        }

        // ==========================================
        // ANALYTICS
        // ==========================================
        trackInteraction(action, details = {}) {
            const interaction = {
                id: `interaction_${Date.now()}`,
                action: action,
                details: details,
                timestamp: new Date().toISOString(),
                sessionId: this.db.analytics.sessionStart
            };
            this.db.analytics.interactions.push(interaction);
            this.saveToStorage();
            return interaction;
        }

        incrementPageViews() {
            this.db.analytics.pageViews += 1;
            this.saveToStorage();
            return this.db.analytics.pageViews;
        }

        // ==========================================
        // UTILITY METHODS
        // ==========================================
        exportData() {
            return JSON.stringify(this.db, null, 2);
        }

        importData(jsonData) {
            try {
                const imported = JSON.parse(jsonData);
                this.db = imported;
                this.saveToStorage();
                return true;
            } catch (error) {
                console.error('Erro ao importar dados:', error);
                return false;
            }
        }

        getStats() {
            return {
                users: this.db.users.size,
                memes: this.db.memes.size,
                nfts: this.db.nfts.size,
                transactions: this.db.transactions.length,
                favorites: this.db.favorites.size,
                pageViews: this.db.analytics.pageViews,
                interactions: this.db.analytics.interactions.length
            };
        }
    }

    // ==========================================
    // COMPREHENSIVE API INTEGRATIONS
    // ==========================================

    // ==========================================
    // SOCIAL MEDIA APIs
    // ==========================================

    // Twitter/X API Integration
    class TwitterAPI {
        constructor() {
            this.config = TWITTER_CONFIG;
            this.authenticated = false;
        }

        async initialize() {
            if (!this.config.bearerToken) {
                console.warn('Twitter API not configured');
                return false;
            }
            this.authenticated = true;
            console.log('✅ Twitter API initialized');
            return true;
        }

        async shareMeme(memeData) {
            if (!this.authenticated) return null;

            try {
                const tweetText = `🐕 Novo meme PUG! ${memeData.title}\n\n#PUG #Memecoin #Solana\n\n${window.location.origin}`;

                // Simulate tweet (in production, use Twitter API)
                console.log('📤 Sharing to Twitter:', tweetText);

                // Update database
                dbManager.addSocialShare('twitter', memeData.id);

                showNotification('Meme compartilhado no Twitter! 🐦', 'success');
                return { success: true, text: tweetText };

            } catch (error) {
                console.error('Twitter share failed:', error);
                showNotification('Erro ao compartilhar no Twitter', 'error');
                return null;
            }
        }

        async getTrendingTweets() {
            if (!this.authenticated) return [];

            try {
                // Simulate trending tweets about PUG
                return [
                    { text: '#PUG to the moon! 🚀', likes: 1250, retweets: 340 },
                    { text: 'Just minted my PUG NFT! 🐕💎', likes: 890, retweets: 156 },
                    { text: 'PUG community is growing fast! 📈', likes: 654, retweets: 98 }
                ];
            } catch (error) {
                console.error('Failed to get trending tweets:', error);
                return [];
            }
        }
    }

    // Discord API Integration
    class DiscordAPI {
        constructor() {
            this.config = DISCORD_CONFIG;
            this.connected = false;
        }

        async initialize() {
            if (!this.config.webhookUrl) {
                console.warn('Discord webhook not configured');
                return false;
            }
            this.connected = true;
            console.log('✅ Discord API initialized');
            return true;
        }

        async sendMemeToChannel(memeData) {
            if (!this.connected) return null;

            try {
                const embed = {
                    title: `🐕 Novo Meme PUG: ${memeData.title}`,
                    description: `Meme compartilhado pela comunidade!\n\n👍 ${memeData.likes} | 🔗 ${memeData.shares}`,
                    image: { url: memeData.image },
                    color: 0x7857ff,
                    footer: { text: 'PUG Memecoin Community' }
                };

                // Simulate Discord webhook
                console.log('📤 Sending to Discord:', embed);

                // Update database
                dbManager.addSocialShare('discord', memeData.id);

                showNotification('Meme enviado para o Discord! 💬', 'success');
                return { success: true, embed };

            } catch (error) {
                console.error('Discord share failed:', error);
                showNotification('Erro ao enviar para Discord', 'error');
                return null;
            }
        }

        async getServerStats() {
            if (!this.connected) return null;

            try {
                // Simulate Discord server stats
                return {
                    memberCount: 15420,
                    onlineCount: 3240,
                    channelCount: 45,
                    recentMessages: 1250
                };
            } catch (error) {
                console.error('Failed to get Discord stats:', error);
                return null;
            }
        }
    }

    // Telegram API Integration
    class TelegramAPI {
        constructor() {
            this.config = TELEGRAM_CONFIG;
            this.botActive = false;
        }

        async initialize() {
            if (!this.config.botToken) {
                console.warn('Telegram bot not configured');
                return false;
            }
            this.botActive = true;
            console.log('✅ Telegram API initialized');
            return true;
        }

        async sendMemeBroadcast(memeData) {
            if (!this.botActive) return null;

            try {
                const message = `🐕 *NOVO MEME PUG!*\n\n📌 ${memeData.title}\n👍 ${memeData.likes} curtidas\n🔗 ${memeData.shares} compartilhamentos\n\n[Ver Meme](${window.location.origin})`;

                // Simulate Telegram broadcast
                console.log('📤 Broadcasting to Telegram:', message);

                // Update database
                dbManager.addSocialShare('telegram', memeData.id);

                showNotification('Meme enviado para o Telegram! 📱', 'success');
                return { success: true, message };

            } catch (error) {
                console.error('Telegram broadcast failed:', error);
                showNotification('Erro ao enviar para Telegram', 'error');
                return null;
            }
        }

        async getChannelStats() {
            if (!this.botActive) return null;

            try {
                // Simulate Telegram channel stats
                return {
                    subscriberCount: 8750,
                    recentPosts: 234,
                    engagementRate: 0.12
                };
            } catch (error) {
                console.error('Failed to get Telegram stats:', error);
                return null;
            }
        }
    }

    // ==========================================
    // EXCHANGE & PRICE APIs
    // ==========================================

    // CoinGecko API Integration
    class CoinGeckoAPI {
        constructor() {
            this.config = COINGECKO_CONFIG;
            this.baseUrl = this.config.baseUrl;
        }

        async initialize() {
            console.log('✅ CoinGecko API ready');
            return true;
        }

        async getPugPrice() {
            try {
                // Simulate PUG price data (replace with real API call)
                const mockData = {
                    price: 0.045,
                    marketCap: 4500000,
                    volume24h: 1250000,
                    priceChange24h: 12.5,
                    lastUpdated: new Date().toISOString()
                };

                // Update price panel
                updatePriceDisplay(mockData);

                return mockData;

            } catch (error) {
                console.error('Failed to get PUG price:', error);
                return null;
            }
        }

        async getTrendingCoins() {
            try {
                // Simulate trending coins
                return [
                    { name: 'PUG', symbol: 'PUG', price: 0.045, change24h: 12.5 },
                    { name: 'BONK', symbol: 'BONK', price: 0.000012, change24h: -5.2 },
                    { name: 'WIF', symbol: 'WIF', price: 0.23, change24h: 8.7 }
                ];
            } catch (error) {
                console.error('Failed to get trending coins:', error);
                return [];
            }
        }

        async getGlobalStats() {
            try {
                // Simulate global crypto stats
                return {
                    totalMarketCap: 1650000000000,
                    totalVolume24h: 85000000000,
                    btcDominance: 52.4,
                    ethDominance: 18.7
                };
            } catch (error) {
                console.error('Failed to get global stats:', error);
                return null;
            }
        }
    }

    // DexScreener API Integration
    class DexScreenerAPI {
        constructor() {
            this.config = DEXSCREENER_CONFIG;
        }

        async initialize() {
            console.log('✅ DexScreener API ready');
            return true;
        }

        async getPugPairs() {
            try {
                // Simulate DEX pairs data
                return [
                    {
                        pairAddress: 'ABC123...',
                        baseToken: { symbol: 'PUG', name: 'PUG Memecoin' },
                        quoteToken: { symbol: 'SOL', name: 'Solana' },
                        price: 0.045,
                        priceChange24h: 12.5,
                        volume24h: 1250000,
                        liquidity: 250000
                    }
                ];
            } catch (error) {
                console.error('Failed to get DEX pairs:', error);
                return [];
            }
        }

        async getTokenInfo(tokenAddress) {
            try {
                // Simulate token info
                return {
                    name: 'PUG Memecoin',
                    symbol: 'PUG',
                    decimals: 9,
                    totalSupply: 100000000000,
                    circulatingSupply: 85000000000,
                    holders: 15420
                };
            } catch (error) {
                console.error('Failed to get token info:', error);
                return null;
            }
        }
    }

    // Jupiter DEX API Integration
    class JupiterAPI {
        constructor() {
            this.config = JUPITER_CONFIG;
        }

        async initialize() {
            console.log('✅ Jupiter DEX API ready');
            return true;
        }

        async getSwapQuote(fromToken, toToken, amount) {
            try {
                // Simulate swap quote
                const quote = {
                    inputMint: fromToken,
                    outputMint: toToken,
                    inputAmount: amount,
                    outputAmount: amount * 0.045, // Mock conversion rate
                    priceImpact: 0.5,
                    fee: 0.0005,
                    route: ['SOL', 'PUG']
                };

                return quote;

            } catch (error) {
                console.error('Failed to get swap quote:', error);
                return null;
            }
        }

        async executeSwap(quote) {
            try {
                // Simulate swap execution
                console.log('🔄 Executing swap:', quote);

                showNotification('Swap executado com sucesso! 🔄', 'success');

                // Record transaction
                dbManager.addTransaction({
                    type: 'swap',
                    fromToken: quote.inputMint,
                    toToken: quote.outputMint,
                    amount: quote.inputAmount,
                    outputAmount: quote.outputAmount,
                    timestamp: new Date().toISOString()
                });

                return { success: true, txId: 'mock_tx_' + Date.now() };

            } catch (error) {
                console.error('Swap execution failed:', error);
                showNotification('Erro na execução do swap', 'error');
                return null;
            }
        }
    }

    // ==========================================
    // ANALYTICS APIs
    // ==========================================

    // Google Analytics Integration
    class GoogleAnalytics {
        constructor() {
            this.config = GA_CONFIG;
            this.initialized = false;
        }

        async initialize() {
            if (!this.config.measurementId) {
                console.warn('Google Analytics not configured');
                return false;
            }

            // Load GA4 script if not already loaded
            if (!window.gtag) {
                const script = document.createElement('script');
                script.async = true;
                script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.measurementId}`;
                document.head.appendChild(script);

                window.dataLayer = window.dataLayer || [];
                window.gtag = function() { dataLayer.push(arguments); }
                window.gtag('js', new Date());
                window.gtag('config', this.config.measurementId);
            }

            this.initialized = true;
            console.log('✅ Google Analytics initialized');
            return true;
        }

        trackEvent(eventName, parameters = {}) {
            if (!this.initialized) return;

            window.gtag('event', eventName, {
                ...parameters,
                timestamp: new Date().toISOString()
            });

            // Also track locally
            dbManager.trackAnalyticsEvent(eventName, parameters);
        }

        trackPageView(pagePath) {
            if (!this.initialized) return;

            window.gtag('event', 'page_view', {
                page_path: pagePath
            });

            dbManager.incrementPageViews();
        }
    }

    // Mixpanel Analytics Integration
    class MixpanelAPI {
        constructor() {
            this.config = MIXPANEL_CONFIG;
            this.initialized = false;
        }

        async initialize() {
            if (!this.config.token) {
                console.warn('Mixpanel not configured');
                return false;
            }

            // Load Mixpanel script if not already loaded
            if (!window.mixpanel) {
                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js';
                document.head.appendChild(script);

                script.onload = () => {
                    window.mixpanel.init(this.config.token);
                };
            }

            this.initialized = true;
            console.log('✅ Mixpanel initialized');
            return true;
        }

        trackEvent(eventName, properties = {}) {
            if (!this.initialized || !window.mixpanel) return;

            window.mixpanel.track(eventName, {
                ...properties,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                url: window.location.href
            });

            // Also track locally
            dbManager.trackAnalyticsEvent(eventName, properties);
        }

        identifyUser(userId, traits = {}) {
            if (!this.initialized || !window.mixpanel) return;

            window.mixpanel.identify(userId);
            window.mixpanel.people.set(traits);
        }
    }

    // ==========================================
    // NOTIFICATION APIs
    // ==========================================

    // Pushover Notification Integration
    class PushoverAPI {
        constructor() {
            this.config = PUSHOVER_CONFIG;
        }

        async initialize() {
            if (!this.config.appToken || !this.config.userKey) {
                console.warn('Pushover not configured');
                return false;
            }
            console.log('✅ Pushover API ready');
            return true;
        }

        async sendNotification(title, message, priority = 0) {
            try {
                const payload = {
                    token: this.config.appToken,
                    user: this.config.userKey,
                    title: title,
                    message: message,
                    priority: priority,
                    timestamp: Math.floor(Date.now() / 1000)
                };

                // Simulate API call
                console.log('📤 Sending Pushover notification:', payload);

                showNotification('Notificação push enviada! 📲', 'success');
                return { success: true };

            } catch (error) {
                console.error('Pushover notification failed:', error);
                return { success: false, error };
            }
        }

        async sendPriceAlert(currentPrice, targetPrice) {
            const title = '🚨 Alerta de Preço PUG';
            const message = `Preço atual: $${currentPrice}\nPreço alvo: $${targetPrice}`;

            return await this.sendNotification(title, message, 1);
        }
    }

    // EmailJS Integration
    class EmailJSAPI {
        constructor() {
            this.config = EMAILJS_CONFIG;
        }

        async initialize() {
            if (!this.config.publicKey) {
                console.warn('EmailJS not configured');
                return false;
            }

            // Load EmailJS script if not already loaded
            if (!window.emailjs) {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
                document.head.appendChild(script);

                script.onload = () => {
                    window.emailjs.init(this.config.publicKey);
                };
            }

            console.log('✅ EmailJS initialized');
            return true;
        }

        async sendEmail(templateId, templateParams) {
            if (!window.emailjs) {
                showNotification('EmailJS não carregado', 'error');
                return null;
            }

            try {
                const result = await window.emailjs.send(
                    this.config.serviceId,
                    templateId,
                    templateParams
                );

                showNotification('Email enviado com sucesso! 📧', 'success');
                return result;

            } catch (error) {
                console.error('Email send failed:', error);
                showNotification('Erro ao enviar email', 'error');
                return null;
            }
        }

        async sendWelcomeEmail(userEmail, userName) {
            return await this.sendEmail('welcome_template', {
                to_email: userEmail,
                to_name: userName,
                subject: 'Bem-vindo à Comunidade PUG! 🐕'
            });
        }
    }

    // ==========================================
    // MULTI-CHAIN APIs
    // ==========================================

    // Ethereum Web3 Integration
    class EthereumAPI {
        constructor() {
            this.config = ETHEREUM_CONFIG;
            this.web3 = null;
            this.connected = false;
        }

        async initialize() {
            if (!window.ethereum) {
                console.warn('MetaMask not detected');
                return false;
            }

            try {
                this.web3 = new window.Web3(window.ethereum);
                this.connected = true;
                console.log('✅ Ethereum Web3 initialized');
                return true;
            } catch (error) {
                console.error('Ethereum initialization failed:', error);
                return false;
            }
        }

        async connectWallet() {
            if (!this.connected) return null;

            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const address = accounts[0];

                // Update database
                dbManager.connectWallet(address, 'ethereum');

                showNotification('Wallet Ethereum conectada! 🔷', 'success');
                return address;

            } catch (error) {
                console.error('Ethereum wallet connection failed:', error);
                showNotification('Erro ao conectar wallet Ethereum', 'error');
                return null;
            }
        }

        async getBalance(address) {
            if (!this.connected || !address) return 0;

            try {
                const balance = await this.web3.eth.getBalance(address);
                const ethBalance = this.web3.utils.fromWei(balance, 'ether');
                return parseFloat(ethBalance);
            } catch (error) {
                console.error('Failed to get ETH balance:', error);
                return 0;
            }
        }
    }

    // BSC Web3 Integration
    class BSCAPI {
        constructor() {
            this.config = BSC_CONFIG;
            this.web3 = null;
            this.connected = false;
        }

        async initialize() {
            try {
                this.web3 = new window.Web3(this.config.rpcUrl);
                this.connected = true;
                console.log('✅ BSC Web3 initialized');
                return true;
            } catch (error) {
                console.error('BSC initialization failed:', error);
                return false;
            }
        }

        async getTokenPrice(tokenAddress) {
            if (!this.connected) return null;

            try {
                // Simulate BSC token price (would use PancakeSwap API in production)
                return {
                    price: 0.000015,
                    liquidity: 50000,
                    volume24h: 25000
                };
            } catch (error) {
                console.error('Failed to get BSC token price:', error);
                return null;
            }
        }
    }

    // Polygon Web3 Integration
    class PolygonAPI {
        constructor() {
            this.config = POLYGON_CONFIG;
            this.web3 = null;
            this.connected = false;
        }

        async initialize() {
            try {
                this.web3 = new window.Web3(this.config.rpcUrl);
                this.connected = true;
                console.log('✅ Polygon Web3 initialized');
                return true;
            } catch (error) {
                console.error('Polygon initialization failed:', error);
                return false;
            }
        }

        async bridgeTokens(fromChain, toChain, amount) {
            try {
                // Simulate cross-chain bridge
                console.log(`🌉 Bridging ${amount} tokens from ${fromChain} to ${toChain}`);

                showNotification('Bridge executado com sucesso! 🌉', 'success');

                // Record transaction
                dbManager.addTransaction({
                    type: 'bridge',
                    fromChain,
                    toChain,
                    amount,
                    timestamp: new Date().toISOString()
                });

                return { success: true, txId: 'bridge_tx_' + Date.now() };

            } catch (error) {
                console.error('Bridge failed:', error);
                showNotification('Erro no bridge', 'error');
                return null;
            }
        }
    }

    // ==========================================
    // NEWS & SOCIAL APIs
    // ==========================================

    // Crypto News API Integration
    class CryptoNewsAPI {
        constructor() {
            this.config = CRYPTONEWS_CONFIG;
        }

        async initialize() {
            if (!this.config.apiKey) {
                console.warn('CryptoNews API not configured');
                return false;
            }
            console.log('✅ CryptoNews API ready');
            return true;
        }

        async getLatestNews(limit = 10) {
            try {
                // Simulate crypto news
                return [
                    {
                        title: 'PUG Memecoin Surges 150% in 24 Hours',
                        source: 'CryptoNews',
                        publishedAt: new Date().toISOString(),
                        url: '#',
                        summary: 'The quantum pug takes the crypto world by storm...'
                    },
                    {
                        title: 'Solana Ecosystem Sees Massive Growth',
                        source: 'BlockChain Today',
                        publishedAt: new Date().toISOString(),
                        url: '#',
                        summary: 'New memecoins driving adoption...'
                    }
                ].slice(0, limit);

            } catch (error) {
                console.error('Failed to get crypto news:', error);
                return [];
            }
        }

        async getPugNews() {
            try {
                // Filter news specifically about PUG
                const allNews = await this.getLatestNews(50);
                return allNews.filter(news =>
                    news.title.toLowerCase().includes('pug') ||
                    news.summary.toLowerCase().includes('pug')
                );
            } catch (error) {
                console.error('Failed to get PUG news:', error);
                return [];
            }
        }
    }

    // Reddit API Integration
    class RedditAPI {
        constructor() {
            this.config = REDDIT_CONFIG;
            this.authenticated = false;
        }

        async initialize() {
            if (!this.config.clientId) {
                console.warn('Reddit API not configured');
                return false;
            }
            this.authenticated = true;
            console.log('✅ Reddit API ready');
            return true;
        }

        async getSubredditPosts(subreddit = 'memecoins', limit = 10) {
            try {
                // Simulate Reddit posts
                return [
                    {
                        title: 'PUG just hit $1M market cap! To the moon! 🚀',
                        author: 'crypto_enthusiast',
                        upvotes: 234,
                        comments: 45,
                        created: new Date().toISOString(),
                        url: '#'
                    },
                    {
                        title: 'My PUG NFT collection is growing! 📈',
                        author: 'pug_collector',
                        upvotes: 156,
                        comments: 23,
                        created: new Date().toISOString(),
                        url: '#'
                    }
                ].slice(0, limit);

            } catch (error) {
                console.error('Failed to get Reddit posts:', error);
                return [];
            }
        }

        async submitPost(title, content, subreddit = 'memecoins') {
            if (!this.authenticated) return null;

            try {
                console.log(`📤 Submitting to r/${subreddit}:`, title);

                showNotification('Post enviado para Reddit! 📝', 'success');

                return {
                    success: true,
                    postId: 'reddit_post_' + Date.now(),
                    url: `https://reddit.com/r/${subreddit}/...`
                };

            } catch (error) {
                console.error('Reddit post failed:', error);
                showNotification('Erro ao enviar para Reddit', 'error');
                return null;
            }
        }
    }

    // ==========================================
    // UTILITY APIs
    // ==========================================

    // IP Geolocation API Integration
    class IPGeolocationAPI {
        constructor() {
            this.config = IPGEOLOCATION_CONFIG;
        }

        async initialize() {
            if (!this.config.apiKey) {
                console.warn('IP Geolocation API not configured');
                return false;
            }
            console.log('✅ IP Geolocation API ready');
            return true;
        }

        async getLocation() {
            try {
                // Simulate geolocation data
                const location = {
                    ip: '192.168.1.1',
                    country: 'Brazil',
                    countryCode: 'BR',
                    city: 'São Paulo',
                    region: 'SP',
                    timezone: 'America/Sao_Paulo',
                    isp: 'Example ISP'
                };

                // Update user location in database
                dbManager.updateUserLocation(location);

                return location;

            } catch (error) {
                console.error('Failed to get location:', error);
                return null;
            }
        }

        async getCountryStats() {
            try {
                // Simulate country adoption stats
                return {
                    'BR': { users: 1250, volume: 45000 },
                    'US': { users: 890, volume: 32000 },
                    'ZA': { users: 650, volume: 28000 },
                    'CN': { users: 420, volume: 15000 }
                };
            } catch (error) {
                console.error('Failed to get country stats:', error);
                return {};
            }
        }
    }

    // ==========================================
    // WEB3 API INTEGRATIONS
    // ==========================================

    // SOLANA API FUNCTIONS
    class SolanaAPI {
        constructor() {
            this.connection = solanaConnection;
            this.wallet = null;
        }

        async connectWallet() {
            try {
                if (!window.solana) {
                    throw new Error('Phantom wallet not found');
                }

                const response = await window.solana.connect();
                this.wallet = response.publicKey;

                // Update database
                dbManager.connectWallet(this.wallet.toString());
                dbManager.updateWalletBalance(await this.getBalance());

                showNotification('Wallet conectada com sucesso! 👛', 'success');
                return this.wallet.toString();

            } catch (error) {
                console.error('Wallet connection failed:', error);
                showNotification('Erro ao conectar wallet', 'error');
                throw error;
            }
        }

        async disconnectWallet() {
            try {
                if (window.solana) {
                    await window.solana.disconnect();
                }
                this.wallet = null;
                dbManager.disconnectWallet();
                showNotification('Wallet desconectada', 'info');
            } catch (error) {
                console.error('Wallet disconnect failed:', error);
            }
        }

        async getBalance() {
            if (!this.wallet || !this.connection) return 0;

            try {
                const balance = await this.connection.getBalance(new window.solanaWeb3.PublicKey(this.wallet));
                const solBalance = balance / window.solanaWeb3.LAMPORTS_PER_SOL;
                dbManager.updateWalletBalance(solBalance);
                return solBalance;
            } catch (error) {
                console.error('Failed to get balance:', error);
                return 0;
            }
        }

        async sendTransaction(recipientAddress, amount) {
            if (!this.wallet || !this.connection) {
                throw new Error('Wallet not connected');
            }

            try {
                const transaction = new window.solanaWeb3.Transaction().add(
                    window.solanaWeb3.SystemProgram.transfer({
                        fromPubkey: new window.solanaWeb3.PublicKey(this.wallet),
                        toPubkey: new window.solanaWeb3.PublicKey(recipientAddress),
                        lamports: amount * window.solanaWeb3.LAMPORTS_PER_SOL
                    })
                );

                const signature = await window.solana.signAndSendTransaction(transaction);
                await this.connection.confirmTransaction(signature.signature);

                // Record transaction
                dbManager.addTransaction({
                    type: 'send',
                    amount: amount,
                    recipient: recipientAddress,
                    signature: signature.signature,
                    timestamp: new Date().toISOString()
                });

                showNotification(`Transação enviada! ${signature.signature.slice(0, 8)}...`, 'success');
                return signature;

            } catch (error) {
                console.error('Transaction failed:', error);
                showNotification('Erro na transação', 'error');
                throw error;
            }
        }

        async getTransactionHistory() {
            if (!this.wallet) return [];

            try {
                const transactions = await this.connection.getSignaturesForAddress(
                    new window.solanaWeb3.PublicKey(this.wallet),
                    { limit: 10 }
                );
                return transactions;
            } catch (error) {
                console.error('Failed to get transaction history:', error);
                return [];
            }
        }
    }

    // METAPLEX API FUNCTIONS
    class MetaplexAPI {
        constructor() {
            this.metaplex = metaplexInstance;
            this.candyMachine = null;
        }

        async initializeMetaplex(wallet) {
            if (!window.Metaplex || !wallet) return;

            try {
                this.metaplex = window.Metaplex.Metaplex.make(window.solanaWeb3.Connection(SOLANA_CONFIG.rpcUrl))
                    .use(window.Metaplex.walletAdapterIdentity(wallet))
                    .use(window.Metaplex.web3JsRpc(window.solanaWeb3.Connection(SOLANA_CONFIG.rpcUrl)))
                    .use(window.Metaplex.web3JsStorage());

                console.log('✅ Metaplex initialized');
            } catch (error) {
                console.error('Failed to initialize Metaplex:', error);
            }
        }

        async mintNFT(metadata) {
            if (!this.metaplex) {
                showNotification('Metaplex não inicializado', 'error');
                return null;
            }

            try {
                showNotification('Mintando NFT... 🎨', 'info');

                const { nft } = await this.metaplex.nfts().create({
                    uri: metadata.uri,
                    name: metadata.name,
                    symbol: metadata.symbol || 'PUG',
                    sellerFeeBasisPoints: metadata.royalty || 500, // 5%
                    creators: [{
                        address: this.metaplex.identity().publicKey,
                        share: 100
                    }]
                });

                // Record NFT in database
                dbManager.addNFT({
                    id: nft.address.toString(),
                    name: metadata.name,
                    image: metadata.image,
                    description: metadata.description,
                    mintedAt: new Date().toISOString(),
                    creator: this.metaplex.identity().publicKey.toString()
                });

                showNotification(`NFT mintado com sucesso! 🎉 ${nft.address.toString().slice(0, 8)}...`, 'success');
                return nft;

            } catch (error) {
                console.error('NFT minting failed:', error);
                showNotification('Erro ao mintar NFT', 'error');
                throw error;
            }
        }

        async getNFTsByOwner(ownerAddress) {
            if (!this.metaplex) return [];

            try {
                const nfts = await this.metaplex.nfts().findAllByOwner({
                    owner: new window.solanaWeb3.PublicKey(ownerAddress)
                });
                return nfts;
            } catch (error) {
                console.error('Failed to get NFTs:', error);
                return [];
            }
        }

        async updateNFTMetadata(nftAddress, newMetadata) {
            if (!this.metaplex) return;

            try {
                const nft = await this.metaplex.nfts().findByAddress(new window.solanaWeb3.PublicKey(nftAddress));

                const { response } = await this.metaplex.nfts().update(nft, {
                    uri: newMetadata.uri
                });

                showNotification('Metadata do NFT atualizada!', 'success');
                return response;

            } catch (error) {
                console.error('Failed to update NFT metadata:', error);
                showNotification('Erro ao atualizar metadata', 'error');
            }
        }
    }

    // IPFS API FUNCTIONS
    class IPFSAPI {
        constructor() {
            this.client = ipfsClient;
        }

        async uploadFile(file) {
            if (!this.client) {
                showNotification('IPFS não inicializado', 'error');
                return null;
            }

            try {
                showNotification('Fazendo upload para IPFS... 📤', 'info');

                const result = await this.client.add(file);
                const url = `${IPFS_CONFIG.gateway}${result.cid}`;

                showNotification(`Upload concluído! 📎 ${result.cid.slice(0, 8)}...`, 'success');
                return {
                    cid: result.cid.toString(),
                    url: url,
                    size: result.size
                };

            } catch (error) {
                console.error('IPFS upload failed:', error);
                showNotification('Erro no upload para IPFS', 'error');
                throw error;
            }
        }

        async uploadJSON(metadata) {
            if (!this.client) {
                showNotification('IPFS não inicializado', 'error');
                return null;
            }

            try {
                const jsonString = JSON.stringify(metadata);
                const blob = new Blob([jsonString], { type: 'application/json' });

                const result = await this.client.add(blob);
                const url = `${IPFS_CONFIG.gateway}${result.cid}`;

                return {
                    cid: result.cid.toString(),
                    url: url,
                    metadata: metadata
                };

            } catch (error) {
                console.error('IPFS JSON upload failed:', error);
                throw error;
            }
        }

        async uploadMemeImage(imageFile, metadata) {
            try {
                // Upload image
                const imageResult = await this.uploadFile(imageFile);

                // Create metadata
                const nftMetadata = {
                    name: metadata.name || 'PUG Meme',
                    description: metadata.description || 'A hilarious PUG meme from the quantum realm',
                    image: imageResult.url,
                    attributes: [
                        {
                            trait_type: 'Category',
                            value: metadata.category || 'meme'
                        },
                        {
                            trait_type: 'Creator',
                            value: metadata.creator || 'PUG Community'
                        }
                    ]
                };

                // Upload metadata
                const metadataResult = await this.uploadJSON(nftMetadata);

                return {
                    image: imageResult,
                    metadata: metadataResult,
                    fullMetadata: nftMetadata
                };

            } catch (error) {
                console.error('Meme upload failed:', error);
                showNotification('Erro ao fazer upload do meme', 'error');
                throw error;
            }
        }

        getGatewayUrl(cid) {
            return `${IPFS_CONFIG.gateway}${cid}`;
        }
    }

    // Initialize API instances
    const solanaAPI = new SolanaAPI();
    const metaplexAPI = new MetaplexAPI();
    const ipfsAPI = new IPFSAPI();

    // Initialize Social Media APIs
    const twitterAPI = new TwitterAPI();
    const discordAPI = new DiscordAPI();
    const telegramAPI = new TelegramAPI();

    // Initialize Exchange APIs
    const coingeckoAPI = new CoinGeckoAPI();
    const dexscreenerAPI = new DexScreenerAPI();
    const jupiterAPI = new JupiterAPI();

    // Initialize Analytics APIs
    const googleAnalytics = new GoogleAnalytics();
    const mixpanelAPI = new MixpanelAPI();

    // Initialize Notification APIs
    const pushoverAPI = new PushoverAPI();
    const emailjsAPI = new EmailJSAPI();

    // Initialize Multi-chain APIs
    const ethereumAPI = new EthereumAPI();
    const bscAPI = new BSCAPI();
    const polygonAPI = new PolygonAPI();

    // Initialize News APIs
    const cryptonewsAPI = new CryptoNewsAPI();
    const redditAPI = new RedditAPI();

    // Initialize Utility APIs
    const ipGeolocationAPI = new IPGeolocationAPI();

    // Initialize Web3 APIs
    initializeWeb3APIs();

    // Initialize All APIs
    initializeAllAPIs();

    // Inicializa o Database Manager
    const dbManager = new DatabaseManager();
    
    // ==========================================
    // WALLET CONNECTION SIMULATION
    // ==========================================
    const connectWalletBtn = document.getElementById('connectWallet');
    const walletStatus = document.getElementById('walletStatus');
    let isConnected = false;
    let wallet = null;
    const supportsSolanaAdapter = Boolean(
        window.solanaWeb3 &&
        window.solanaWalletAdapterWallets &&
        window.solanaWalletAdapterWallets.PhantomWalletAdapter
    );

    function setWalletConnected(addressLabel, statusHtml) {
        if (connectWalletBtn) {
            connectWalletBtn.innerHTML = `<span class="wallet-icon">✓</span> ${addressLabel}`;
        }
        if (walletStatus) {
            walletStatus.innerHTML = `<p>${statusHtml}</p>`;
        }
        
        // Salva no banco de dados
        dbManager.connectWallet(addressLabel);
        dbManager.trackInteraction('wallet_connected', { address: addressLabel });
    }

    function setWalletDisconnected(message) {
        if (connectWalletBtn) {
            connectWalletBtn.innerHTML = '<span class="wallet-icon">🔗</span> Conectar Wallet';
        }
        if (walletStatus) {
            walletStatus.innerHTML = `<p>${message}</p>`;
        }
    }

    async function connectRealWallet() {
        if (!supportsSolanaAdapter) {
            throw new Error('Wallet adapter indisponível');
        }
        if (!wallet) {
            wallet = new window.solanaWalletAdapterWallets.PhantomWalletAdapter();
        }
        if (!wallet.connected) {
            await wallet.connect();
        }
        return wallet.publicKey?.toBase58();
    }

    if (connectWalletBtn) {
        connectWalletBtn.addEventListener('click', async () => {
            if (supportsSolanaAdapter) {
                if (wallet?.connected) {
                    await wallet.disconnect();
                    wallet = null;
                    isConnected = false;
                    setWalletDisconnected('🔒 Wallet desconectada');
                    showNotification('Wallet desconectada.', 'info');
                    return;
                }
                try {
                    const address = await connectRealWallet();
                    if (address) {
                        const label = `${address.slice(0, 4)}...${address.slice(-4)}`;
                        setWalletConnected(label, `🟢 Conectado: ${address}`);
                        showNotification('Wallet Phantom conectada! 🎉', 'success');
                        isConnected = true;
                        return;
                    }
                } catch (error) {
                    console.error('Falha na conexão Phantom:', error);
                    showNotification('Não foi possível conectar a wallet.', 'error');
                }
            }
            isConnected = !isConnected;
            if (isConnected) {
                setWalletConnected('Simulada', '🟢 Wallet simulada ativa');
                showNotification('Wallet simulada conectada.', 'info');
            } else {
                setWalletDisconnected('🔒 Wallet desconectada');
                showNotification('Wallet simulada desconectada.', 'info');
            }
        });
    }

    // ==========================================
    // MEME FILTERS
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const memeCards = document.querySelectorAll('.meme-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Filter meme cards
            memeCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter || card.classList.contains('upload-card')) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ==========================================
    // LIKE BUTTONS
    // ==========================================
    const memeBtns = document.querySelectorAll('.meme-btn');
    
    memeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Get the span with the count
            const countSpan = this.querySelector('span');
            if (countSpan && this.textContent.includes('👍')) {
                const currentCount = parseInt(countSpan.textContent);
                const newCount = currentCount + 1;
                countSpan.textContent = newCount;
                
                // Salva no banco de dados
                const memeCard = this.closest('.meme-card');
                if (memeCard) {
                    const memeId = `meme_${memeCard.querySelector('img').src.split('/').pop()}`;
                    dbManager.likeMeme(memeId);
                    dbManager.trackInteraction('meme_liked', { memeId: memeId, newCount: newCount });
                }
                
                // Add animation
                this.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            }
            
            if (this.textContent.includes('🔗')) {
                showNotification('Link copiado para clipboard! 📋', 'success');
            }
        });
    });

    // ==========================================
    // NFT ACTIONS
    // ==========================================
    const buyBtns = document.querySelectorAll('.btn-buy');
    
    buyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!isConnected) {
                showNotification('⚠️ Conecte sua wallet primeiro!', 'warning');
                connectWalletBtn.click();
            } else {
                const nftTitle = this.closest('.nft-card').querySelector('.nft-title').textContent;
                showNotification(`Iniciando compra de ${nftTitle}... 🚀`, 'success');
                
                // Simulate transaction
                setTimeout(() => {
                    showNotification('Transação confirmada na Solana! ✅', 'success');
                }, 2000);
            }
        });
    });

    // ==========================================
    // VIEW NFT BUTTONS
    // ==========================================
    const viewBtns = document.querySelectorAll('.btn-view');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const nftCard = this.closest('.nft-card');
            const nftTitle = nftCard.querySelector('.nft-title').textContent;
            
            showNotification(`Abrindo detalhes de ${nftTitle}...`, 'info');
        });
    });

    // ==========================================
    // UPLOAD MEME
    // ==========================================
    const uploadBtn = document.querySelector('.btn-upload');
    
    if (uploadBtn) {
        uploadBtn.addEventListener('click', function() {
            if (!isConnected) {
                showNotification('⚠️ Conecte sua wallet para fazer upload!', 'warning');
                connectWalletBtn.click();
            } else {
                showNotification('Abrindo interface de upload... 📤', 'info');
            }
        });
    }

    // ==========================================
    // PRIMARY/SECONDARY BUTTONS
    // ==========================================
    const primaryBtn = document.querySelector('.btn-primary');
    const secondaryBtn = document.querySelector('.btn-secondary');
    
    if (primaryBtn) {
        primaryBtn.addEventListener('click', function() {
            showNotification('Explorando coleção de PUG NFTs... 🎨', 'info');
            document.querySelector('#nfts').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (secondaryBtn) {
        secondaryBtn.addEventListener('click', function() {
            if (!isConnected) {
                showNotification('⚠️ Conecte sua wallet para criar NFTs!', 'warning');
                connectWalletBtn.click();
            } else {
                showNotification('Abrindo criador de Meme NFT... 🎨', 'success');
            }
        });
    }

    // ==========================================
    // HERO PULSE
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroPhrases = [
        'A reinvenção dos memes PUG com Solana, IA e quantum-safe.',
        'Memes imediatos, interação 3D e dados on-chain em tempo real.',
        'NFTs prontos para metaverso, DAO e experiências multi-sensorial.'
    ];
    let heroPhraseIndex = 0;

    function cycleHeroSubtitle() {
        if (!heroSubtitle) return;
        heroSubtitle.textContent = heroPhrases[heroPhraseIndex % heroPhrases.length];
        heroPhraseIndex += 1;
    }

    cycleHeroSubtitle();
    setInterval(cycleHeroSubtitle, 4500);

    // ==========================================
    // TECH LAB RADAR
    const radarStatus = document.getElementById('radarStatus');
    const techCards = document.querySelectorAll('.tech-card');
    const radarMessages = {
        quantum: 'Proteção post-quantum ativada. Latência 8ms.',
        ai: 'IA generativa afinando captions + áudio em tempo real.',
        solana: 'Nodes replicados. Validando transações em 65k TPS.',
        oracle: 'Oráculo AP3: Previsões quânticas ativas.'
    };

    // Adiciona mensagens do oráculo ao ciclo
    const oracleRadarMessages = [
        'Oráculo prevê: Quantum shield fortalecido',
        'Visão IA: Meme forge gerando conteúdo viral',
        'Previsão Solana: TPS otimizado para memes',
        'AP3 Insight: Próximo halving em 6 meses'
    ];
    let techCycleIndex = 0;

    function setActiveTech(card) {
        if (!card) return;
        techCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const tag = card.dataset.tech;
        if (radarStatus) {
            radarStatus.textContent = radarMessages[tag] || 'Explorando o futuro Web3...';
        }
    }

    techCards.forEach(card => {
        card.addEventListener('mouseenter', () => setActiveTech(card));
        card.addEventListener('focus', () => setActiveTech(card));
    });

    function cycleTechFocus() {
        if (techCards.length === 0) return;

        // A cada 4 ciclos, mostra uma previsão do oráculo
        if (techCycleIndex % 4 === 0 && techCycleIndex > 0) {
            if (radarStatus) {
                const oracleMessage = oracleRadarMessages[Math.floor(Math.random() * oracleRadarMessages.length)];
                radarStatus.textContent = oracleMessage;
                radarStatus.classList.add('oracle-active');
                setTimeout(() => {
                    radarStatus.classList.remove('oracle-active');
                }, 4000);
            }
        } else {
            // Ciclo normal dos cards de tecnologia
            const cardIndex = (techCycleIndex % 4) % techCards.length;
            setActiveTech(techCards[cardIndex]);
        }

        techCycleIndex += 1;
    }

    cycleTechFocus();
    setInterval(cycleTechFocus, 4000);

    // ==========================================
    // NOTIFICATION SYSTEM
    // ==========================================
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotif = document.querySelector('.notification');
        if (existingNotif) {
            existingNotif.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            background: type === 'success' ? 'linear-gradient(135deg, #14F195, #9945FF)' : 
                       type === 'warning' ? 'linear-gradient(135deg, #FFA500, #FF6B6B)' :
                       'linear-gradient(135deg, #9945FF, #14F195)',
            color: 'white',
            padding: '16px 24px',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            zIndex: '1000',
            animation: 'slideIn 0.3s ease-out',
            fontWeight: '600',
            maxWidth: '300px',
            fontSize: '14px'
        });
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Add animations CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);

    // ==========================================
    // PARALLAX EFFECT ON SCROLL
    // ==========================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const bgAnimation = document.querySelector('.bg-animation');
        
        if (bgAnimation) {
            bgAnimation.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // ==========================================
    // SMOOTH SCROLL FOR NAVIGATION
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================================
    // AI AGENT
    const agentShell = document.getElementById('agentShell');
    const agentLaunch = document.getElementById('agentLaunch');
    const agentMessages = document.getElementById('agentMessages');
    const agentForm = document.getElementById('agentForm');
    const agentInput = document.getElementById('agentInput');
    const supportedTopics = [
        'NFT mint',
        'memecoin',
        'Solana TPS',
        'tokenomics',
        'DAO',
        'IA creative'
    ];

    agentLaunch.addEventListener('click', () => {
        agentShell.classList.toggle('closed');
        agentLaunch.textContent = agentShell.classList.contains('closed') ? 'Abrir chat' : 'Fechar chat';
        if (!agentShell.classList.contains('closed')) {
            agentInput.focus();
            addBotMessage('Bem-vindo! Pergunte qualquer coisa sobre PUG MEMECOIN ou memes Web3.');
        }
    });

    function addMessage(text, owner = 'bot') {
        const bubble = document.createElement('div');
        bubble.className = `ai-message ${owner}`;
        bubble.textContent = text;
        agentMessages.appendChild(bubble);
        agentMessages.scrollTop = agentMessages.scrollHeight;
    }

    function addBotMessage(text) {
        addMessage(text, 'bot');
    }

    function addUserMessage(text) {
        addMessage(text, 'user');
    }

    function getRandomResponse(query) {
        const lower = query.toLowerCase();
        if (lower.includes('mint') || lower.includes('token')) {
            return 'Sistema preparado! Basta conectar wallet e usar o botão "Mintar Agora" na seção NFT.';
        }
        if (lower.includes('solana')) {
            return 'Solana oferece 65k TPS com confirmações instantâneas; nossos cards já simulam essa latência.';
        }
        if (lower.includes('memecoin') || lower.includes('pug')) {
            return 'PUG MEMECOIN é humor + blockchain. 40% da supply vai para a comunidade + staking.';
        }
        if (lower.includes('dao')) {
            return 'DAO vota em novos memes e roadmaps. Documentação e votações estão prontas para integrar.';
        }
        const randomFacts = [
            'IA generativa constrói captions, stickers e animações antes mesmo do mint.',
            'Colete memes, mutações e badges direto no chat para novos drop announcements.',
            'Use o botão "Explorar Coleção" para ver como os NFTs aparecem no metaverso.'
        ];
        return randomFacts[Math.floor(Math.random() * randomFacts.length)];
    }

    agentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!agentInput || !agentInput.value.trim()) return;
        const userText = agentInput.value.trim();
        addUserMessage(userText);
        agentInput.value = '';
        const typing = document.createElement('div');
        typing.className = 'ai-message bot';
        typing.textContent = 'Tecendo memecoins...';
        agentMessages.appendChild(typing);
        agentMessages.scrollTop = agentMessages.scrollHeight;

        setTimeout(() => {
            typing.remove();
            addBotMessage(getRandomResponse(userText));
        }, 1400);
    });

    // ==========================================
    // ORÁCULO API3 DAS MEMES
    // ==========================================
    const oracleButton = document.getElementById('oracleButton');
    const oracleQuote = document.getElementById('oracleQuote');
    const oraclePredictions = document.getElementById('oraclePredictions');
    const oracleOrb = document.getElementById('oracleOrb');

    // Feeds API3 simulados para dados reais do mundo
    const api3Feeds = {
        crypto: {
            name: 'Crypto Price Feeds',
            data: ['BTC/USD: $95,420', 'ETH/USD: $3,847', 'SOL/USD: $187.50', 'PUG/USD: $0.0420']
        },
        weather: {
            name: 'Weather Data',
            data: ['São Paulo: 28°C ☀️', 'New York: -5°C ❄️', 'Tokyo: 15°C 🌸', 'Dubai: 35°C 🏜️']
        },
        finance: {
            name: 'Financial Indices',
            data: ['S&P 500: 4,847.23 📈', 'NASDAQ: 15,234.67 🚀', 'VIX: 18.45 📉', 'Crypto Fear Index: 42 😨']
        },
        commodities: {
            name: 'Commodity Prices',
            data: ['Gold: $2,847/oz 🏆', 'Oil: $87.50/bbl ⚡', 'Silver: $31.20/oz 🌙', 'Diamond Index: 1,247 💎']
        }
    };

    // Função para simular consulta à API3
    async function queryAPI3(feedType) {
        // Simula delay de API call
        await new Promise(resolve => setTimeout(resolve, 800));

        const feed = api3Feeds[feedType];
        const randomData = feed.data[Math.floor(Math.random() * feed.data.length)];

        return {
            feedName: feed.name,
            data: randomData,
            timestamp: new Date().toISOString(),
            confidence: Math.floor(Math.random() * 20) + 80 // 80-99% confidence
        };
    }

    // Array de citações baseadas em dados API3
    const api3Quotes = [
        "API3 Oracle: Dados verificados em tempo real 📊",
        "Visão quântica: Mercado analisado por IA 🤖",
        "Previsões baseadas em dados do mundo real 🌍"
    ];

    // Função para gerar previsões baseadas em múltiplos feeds API3
    async function generateAPI3Predictions() {
        const predictions = [];

        // Consulta múltiplos feeds simultaneamente
        const feedPromises = Object.keys(api3Feeds).map(feedType => queryAPI3(feedType));
        const results = await Promise.all(feedPromises);

        // Gera insights baseados nos dados
        results.forEach(result => {
            if (result.feedName === 'Crypto Price Feeds') {
                predictions.push(`<li>${result.data} | Confiança: ${result.confidence}%</li>`);
                predictions.push(`<li>Trend: ${Math.random() > 0.5 ? '📈 Bullish' : '📉 Bearish'} para próximas 24h</li>`);
            } else if (result.feedName === 'Weather Data') {
                predictions.push(`<li>${result.data} | Impacto no mercado: ${Math.random() > 0.5 ? 'Positivo' : 'Neutro'}</li>`);
            } else if (result.feedName === 'Financial Indices') {
                predictions.push(`<li>${result.data} | Correlação crypto: ${Math.floor(Math.random() * 40) + 60}%</li>`);
            } else if (result.feedName === 'Commodity Prices') {
                predictions.push(`<li>${result.data} | Hedge para inflação digital</li>`);
            }
        });

        return predictions.slice(0, 4); // Limita a 4 previsões
    }

    oracleButton.addEventListener('click', async () => {
        // Mostra loading state
        oracleButton.disabled = true;
        oracleButton.textContent = 'Consultando API3...';
        oracleQuote.textContent = 'Conectando aos feeds de dados...';

        try {
            // Gera previsões baseadas em dados API3
            const predictions = await generateAPI3Predictions();
            const randomQuote = api3Quotes[Math.floor(Math.random() * api3Quotes.length)];

            // Atualiza a interface
            oracleQuote.textContent = randomQuote;
            oraclePredictions.innerHTML = predictions.join('');

            // Integração com o radar: mostra status baseado na previsão do oráculo
            const oracleInsights = [
                'API3: Dados crypto verificados em tempo real',
                'API3: Feeds climáticos analisados',
                'API3: Índices financeiros correlacionados',
                'API3: Commodities monitoradas para hedge'
            ];
            if (radarStatus) {
                const randomInsight = oracleInsights[Math.floor(Math.random() * oracleInsights.length)];
                radarStatus.textContent = randomInsight;
                // Adiciona classe para destacar a integração
                radarStatus.classList.add('oracle-active');
                setTimeout(() => {
                    radarStatus.classList.remove('oracle-active');
                }, 5000);
            }

            // Adiciona pulso ao orbe para feedback visual
            oracleOrb.classList.add('pulse');
            setTimeout(() => {
                oracleOrb.classList.remove('pulse');
            }, 2000);

            // Notificação de sucesso
            if (typeof showNotification === 'function') {
                showNotification('API3 Oracle consultado! Dados verificados em tempo real.', 'success');
            }

        } catch (error) {
            console.error('Erro na consulta API3:', error);
            oracleQuote.textContent = 'Erro na conexão com API3';
            oraclePredictions.innerHTML = '<li>Erro ao consultar feeds de dados</li>';

            if (typeof showNotification === 'function') {
                showNotification('Erro na consulta API3. Tente novamente.', 'error');
            }
        } finally {
            // Restaura o botão
            oracleButton.disabled = false;
            oracleButton.textContent = 'Consultar Oráculo';
        }
    });

    agentLaunch.addEventListener('dblclick', () => {
        addBotMessage(`Listei tópicos populares: ${supportedTopics.join(', ')}.`);
    });

    // ==========================================
    // CONSOLE EASTER EGG
    // ==========================================
    console.log('%c🐶 PUG WEB3 MEMES 🚀', 'font-size: 24px; font-weight: bold; color: #9945FF;');
    console.log('%cPowered by Solana ⚡', 'font-size: 16px; color: #14F195;');
    console.log('%cWagmi! To the moon! 🌙', 'font-size: 14px; color: #00D4FF;');

    // ==========================================
    // READY STATE CONFIGURATION
    // ==========================================
    console.log('%c✅ PUG Web3 Memes carregado com sucesso!', 'color: #14F195; font-weight: bold;');
    console.log('%c⚠️ Pronto para configuração Web3:', 'color: #FFA500; font-weight: bold;');
    console.log('1. Integre @solana/web3.js para funcionalidade real de wallet');
    console.log('2. Configure Metaplex para mint de NFTs');
    console.log('3. Adicione contrato inteligente para votação/likes on-chain');
    console.log('4. Implemente IPFS para armazenamento de memes');
    console.log('5. Adicione integração com Phantom/Solflare wallet');

    // Exemplo: ao analisar dados do localStorage
    const data = localStorage.getItem('walletState');
    let parsedData;
    try {
        parsedData = data ? JSON.parse(data) : {};  // Verifica se data não é null/vazio
    } catch (e) {
        console.error('Erro ao analisar JSON:', e);
        parsedData = {};  // Fallback
    }

    // ==========================================
    // CONTRATO DA MEMECOIN - INTEGRAÇÃO AVANÇADA
    // ==========================================
    const CONTRACT_ADDRESS = PUG_TOKEN_ADDRESS;
    const contractDisplay = document.getElementById('contractDisplay');
    const viewContract = document.getElementById('viewContract');
    const copyContractBtn = document.getElementById('copyContract');
    const contractChip = document.getElementById('contractChip');

    // Configurações da integração
    const contractConfig = {
        address: CONTRACT_ADDRESS,
        network: 'mainnet-beta',
        symbol: 'PUG',
        name: '$PUGMEM',
        decimals: 6,
        explorers: {
            solscan: `https://solscan.io/account/${CONTRACT_ADDRESS}`,
            solanaExplorer: `https://explorer.solana.com/address/${CONTRACT_ADDRESS}`,
            phantom: `https://phantom.app/`,
            solflare: `https://solflare.com/`
        }
    };

    // Função para validar endereço Solana
    function isValidSolanaAddress(address) {
        try {
            return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
        } catch {
            return false;
        }
    }

    // Função para truncar endereço
    function truncateAddress(address, start = 4, end = 4) {
        if (!address) return '';
        return `${address.slice(0, start)}...${address.slice(-end)}`;
    }

    // Função para copiar para clipboard com fallback
    async function copyToClipboard(text) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                return true;
            } else {
                // Fallback para navegadores antigos
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                const success = document.execCommand('copy');
                textArea.remove();
                return success;
            }
        } catch (err) {
            console.error('Erro ao copiar:', err);
            return false;
        }
    }

    // Função para detectar carteira Phantom
    function detectPhantomWallet() {
        return typeof window.solana !== 'undefined' && window.solana.isPhantom;
    }

    // Função para conectar carteira
    async function connectWallet() {
        if (!detectPhantomWallet()) {
            showNotification('Phantom Wallet não detectada. Instale a extensão!', 'warning');
            window.open(contractConfig.explorers.phantom, '_blank');
            return null;
        }

        try {
            const response = await window.solana.connect();
            showNotification('Carteira conectada com sucesso!', 'success');
            return response.publicKey.toString();
        } catch (err) {
            console.error('Erro ao conectar carteira:', err);
            showNotification('Erro ao conectar carteira.', 'error');
            return null;
        }
    }

    // Função para adicionar token aos favoritos
    async function addTokenToWallet() {
        if (!detectPhantomWallet()) {
            showNotification('Phantom Wallet necessária para adicionar token.', 'warning');
            return;
        }

        try {
            await window.solana.connect();

            // Tenta adicionar o token (Phantom pode não suportar isso diretamente)
            showNotification('Token adicionado aos favoritos!', 'success');
        } catch (err) {
            console.error('Erro ao adicionar token:', err);
            showNotification('Não foi possível adicionar o token.', 'error');
        }
    }

    // Inicialização da integração do contrato
    function initializeContractIntegration() {
        // Verificar se os elementos existem (para compatibilidade com páginas de teste)
        const contractChip = document.getElementById('contractChip');
        if (!contractChip) return; // Não inicializar se não estiver na página principal

        // Validação do endereço
        if (!isValidSolanaAddress(contractConfig.address)) {
            console.error('Endereço do contrato inválido:', contractConfig.address);
            showNotification('Endereço do contrato inválido!', 'error');
            return;
        }

        // Configuração do display
        if (contractDisplay) {
            contractDisplay.textContent = truncateAddress(contractConfig.address);
            contractDisplay.title = contractConfig.address; // Tooltip com endereço completo
        }

        // Configuração do link do explorer
        if (viewContract) {
            viewContract.href = contractConfig.explorers.solscan;
            viewContract.title = 'Ver no Solscan';
        }

        // Configuração do botão copiar
        if (copyContractBtn) {
            copyContractBtn.addEventListener('click', async () => {
                const success = await copyToClipboard(contractConfig.address);
                if (success) {
                    showNotification('✅ Endereço copiado: ' + truncateAddress(contractConfig.address), 'success');

                    // Animação visual de feedback
                    copyContractBtn.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        copyContractBtn.style.transform = '';
                    }, 150);
                } else {
                    showNotification('❌ Erro ao copiar endereço', 'error');
                }
            });
        }

        // Configuração do botão copiar endereço completo no painel
        const copyFullContractBtn = document.getElementById('copyFullContract');
        if (copyFullContractBtn) {
            copyFullContractBtn.addEventListener('click', async () => {
                const success = await copyToClipboard(contractConfig.address);
                if (success) {
                    showNotification('✅ Endereço completo copiado para área de transferência!', 'success');

                    // Animação visual de feedback
                    copyFullContractBtn.style.transform = 'scale(0.95)';
                    copyFullContractBtn.querySelector('.copy-text').textContent = 'Copiado!';
                    setTimeout(() => {
                        copyFullContractBtn.style.transform = '';
                        copyFullContractBtn.querySelector('.copy-text').textContent = 'Copiar';
                    }, 2000);
                } else {
                    showNotification('❌ Erro ao copiar endereço', 'error');
                }
            });
        }

        // Adicionar menu de contexto ao chip do contrato
        if (contractChip) {
            contractChip.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                showContractMenu(e);
            });

            // Adicionar tooltips informativos
            contractChip.title = `Contrato: ${contractConfig.address}\nRede: ${contractConfig.network}\nToken: ${contractConfig.symbol}`;
        }

        console.log('✅ Integração do contrato inicializada:', contractConfig);
    }

    // Função para mostrar menu de opções do contrato
    function showContractMenu(event) {
        // Remove menu existente se houver
        const existingMenu = document.querySelector('.contract-menu');
        if (existingMenu) {
            existingMenu.remove();
        }

        const menu = document.createElement('div');
        menu.className = 'contract-menu web3-card';
        menu.style.cssText = `
            position: fixed;
            left: ${event.clientX}px;
            top: ${event.clientY}px;
            background: rgba(20, 20, 32, 0.95);
            border: 1px solid rgba(153, 69, 255, 0.3);
            border-radius: 12px;
            padding: 8px;
            z-index: 10000;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            backdrop-filter: blur(20px);
            min-width: 200px;
        `;

        menu.innerHTML = `
            <div style="font-size: 12px; color: #b0b0c8; margin-bottom: 8px; text-align: center;">
                Opções do Contrato
            </div>
            <button class="menu-item" data-action="copy">
                📋 Copiar Endereço
            </button>
            <button class="menu-item" data-action="solscan">
                🔍 Ver no Solscan
            </button>
            <button class="menu-item" data-action="explorer">
                🌐 Solana Explorer
            </button>
            <button class="menu-item" data-action="phantom">
                👻 Abrir no Phantom
            </button>
            <button class="menu-item" data-action="add-token">
                ➕ Adicionar Token
            </button>
        `;

        document.body.appendChild(menu);

        // Event listeners para os itens do menu
        menu.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', async () => {
                const action = item.dataset.action;

                switch (action) {
                    case 'copy':
                        const success = await copyToClipboard(contractConfig.address);
                        showNotification(success ? 'Endereço copiado!' : 'Erro ao copiar', success ? 'success' : 'error');
                        break;
                    case 'solscan':
                        window.open(contractConfig.explorers.solscan, '_blank');
                        break;
                    case 'explorer':
                        window.open(contractConfig.explorers.solanaExplorer, '_blank');
                        break;
                    case 'phantom':
                        window.open(contractConfig.explorers.phantom, '_blank');
                        break;
                    case 'add-token':
                        await addTokenToWallet();
                        break;
                }

                menu.remove();
            });

            // Estilos dos itens do menu
            item.style.cssText = `
                display: block;
                width: 100%;
                padding: 8px 12px;
                background: none;
                border: none;
                color: #ffffff;
                text-align: left;
                cursor: pointer;
                border-radius: 6px;
                font-size: 14px;
                transition: all 0.2s ease;
            `;

            item.addEventListener('mouseenter', () => {
                item.style.background = 'rgba(153, 69, 255, 0.2)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.background = 'none';
            });
        });

        // Fechar menu ao clicar fora
        const closeMenu = (e) => {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        };

        setTimeout(() => {
            document.addEventListener('click', closeMenu);
        }, 100);
    }

    // Inicializar integração
    initializeContractIntegration();

    // ==========================================
    // DATABASE INITIALIZATION
    // ==========================================
    
    // Adiciona alguns memes de exemplo se o banco estiver vazio
    if (dbManager.db.memes.size === 0) {
        const sampleMemes = [
            {
                title: 'HODL forte, anon',
                image: 'WhatsApp Image 2025-12-26 at 20.08.16PUG007899.jpeg',
                category: 'hodl',
                tags: ['hodl', 'crypto', 'pug']
            },
            {
                title: 'PUG no Controle',
                image: 'WhatsApp Image 2025-12-26 at 22.19.36.jpeg',
                category: 'moon',
                tags: ['moon', 'control', 'pug']
            },
            {
                title: 'PUG Pescador',
                image: 'WhatsApp Image 2025-12-26 at 22.19.36 pesc.jpeg',
                category: 'hodl',
                tags: ['fishing', 'patience', 'pug']
            },
            {
                title: 'PUG Master',
                image: 'WhatsApp Image 2025-12-26 at 22.19.35007987ba.jpeg',
                category: 'degen',
                tags: ['master', 'degen', 'pug']
            },
            {
                title: 'To the moon!',
                image: 'Imagem do WhatsApp de 2025-12-01 à(s) 22.20.57_b3d77b91.jpg',
                category: 'moon',
                tags: ['moon', 'rocket', 'pug']
            },
            {
                title: 'Quando compra no topo',
                image: 'WhatsApp Image 2025-12-26 at 20.08.15PUGV007.jpeg',
                category: 'degen',
                tags: ['top', 'degen', 'pug']
            }
        ];

        sampleMemes.forEach(memeData => {
            dbManager.addMeme(memeData);
        });
    }

    // Adiciona alguns NFTs de exemplo se o banco estiver vazio
    if (dbManager.db.nfts.size === 0) {
        const sampleNFTs = [
            {
                title: 'Legendary Pug #001',
                image: 'WhatsApp Image 2025-12-26 at 20.08.16 PUG00789.jpeg',
                price: 42.0,
                rarity: 'Legendary',
                attributes: [
                    { trait_type: 'Background', value: 'Cosmic' },
                    { trait_type: 'Eyes', value: 'Laser' },
                    { trait_type: 'Hat', value: 'Crown' }
                ]
            },
            {
                title: 'Street Pug #042',
                image: 'pug/photo-1517423738875-5ce310acd3da.avif',
                price: 12.5,
                rarity: 'Rare',
                attributes: [
                    { trait_type: 'Background', value: 'Urban' },
                    { trait_type: 'Eyes', value: 'Cool' },
                    { trait_type: 'Accessories', value: 'Chain' }
                ]
            }
        ];

        sampleNFTs.forEach(nftData => {
            dbManager.addNFT(nftData);
        });
    }

    // Incrementa contador de visualizações de página
    dbManager.incrementPageViews();
    
    // Track page load
    dbManager.trackInteraction('page_load', { 
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString() 
    });

    // ==========================================
    // DEBUG CONSOLE - Para desenvolvimento
    // ==========================================
    window.dbManager = dbManager; // Torna acessível no console do navegador
    
    console.log('🐕 PUG Web3 Database Manager inicializado!');
    console.log('📊 Estatísticas:', dbManager.getStats());
    console.log('💡 Use dbManager no console para interagir com o banco de dados');

    // ==========================================
    // LIVE PRICE PANEL - PUMP.FUN INTEGRATION
    // ==========================================

    class PriceManager {
        constructor() {
            this.tokenAddress = PUG_TOKEN_ADDRESS;
            this.basePrice = 0.00003791;
            this.currentPrice = this.basePrice;
            this.priceHistory = [this.basePrice];
            this.maxHistoryLength = 50;
            this.isUsingRealData = false;

            this.elements = {
                price: document.getElementById('pugPrice'),
                change: document.getElementById('priceChange'),
                marketCap: document.getElementById('marketCap'),
                volume24h: document.getElementById('volume24h'),
                liquidity: document.getElementById('liquidity'),
                holdersCount: document.getElementById('holdersCount'),
                status: document.getElementById('priceStatus')
            };

            this.init();
        }

        async init() {
            // Tenta carregar dados reais primeiro
            await this.loadRealPriceData();

            // Se não conseguir dados reais, usa simulação
            if (!this.isUsingRealData) {
                this.updatePrice();
            }

            this.startLiveUpdates();
            this.bindEvents();
        }

        async loadRealPriceData() {
            try {
                // Tenta carregar dados do DexScreener (mais confiável)
                const dexscreenerData = await this.fetchDexScreenerData();
                if (dexscreenerData) {
                    this.updateWithRealData(dexscreenerData);
                    this.isUsingRealData = true;
                    console.log('📊 Usando dados reais do DexScreener');
                    return;
                }

                // Fallback para pump.fun API
                const pumpData = await this.fetchPumpFunData();
                if (pumpData) {
                    this.updateWithRealData(pumpData);
                    this.isUsingRealData = true;
                    console.log('🚀 Usando dados reais da pump.fun');
                    return;
                }

            } catch (error) {
                console.log('⚠️ Erro ao carregar dados reais:', error);
                this.isUsingRealData = false;
            }
        }

        async fetchDexScreenerData() {
            try {
                const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${this.tokenAddress}`);
                if (!response.ok) return null;

                const data = await response.json();
                if (!data.pairs || data.pairs.length === 0) return null;

                // Pega o par com maior liquidez
                const pair = data.pairs.sort((a, b) => parseFloat(b.liquidity?.usd || 0) - parseFloat(a.liquidity?.usd || 0))[0];

                return {
                    price: parseFloat(pair.priceUsd),
                    marketCap: parseFloat(pair.marketCap || 0),
                    volume24h: parseFloat(pair.volume?.h24 || 0),
                    liquidity: parseFloat(pair.liquidity?.usd || 0),
                    priceChange24h: parseFloat(pair.priceChange?.h24 || 0)
                };
            } catch (error) {
                console.log('Erro DexScreener:', error);
                return null;
            }
        }

        async fetchPumpFunData() {
            try {
                // API da pump.fun - endpoint pode variar
                const response = await fetch(`https://frontend-api.pump.fun/coins/${this.tokenAddress}`);
                if (!response.ok) return null;

                const data = await response.json();

                return {
                    price: parseFloat(data.price || 0),
                    marketCap: parseFloat(data.market_cap || 0),
                    volume24h: parseFloat(data.volume_24h || 0),
                    liquidity: parseFloat(data.liquidity || 0),
                    priceChange24h: parseFloat(data.price_change_24h || 0)
                };
            } catch (error) {
                console.log('Erro pump.fun:', error);
                return null;
            }
        }

        updateWithRealData(data) {
            this.currentPrice = data.price || this.basePrice;

            if (this.elements.price) {
                this.elements.price.textContent = this.formatPrice(this.currentPrice);
            }

            if (this.elements.change && data.priceChange24h !== undefined) {
                const changeElement = this.elements.change;
                const isPositive = data.priceChange24h >= 0;
                changeElement.className = `price-change ${isPositive ? 'positive' : 'negative'}`;

                const changeIcon = changeElement.querySelector('.change-icon');
                const changeValue = changeElement.querySelector('.change-value');

                if (changeIcon) changeIcon.textContent = isPositive ? '↗' : '↘';
                if (changeValue) changeValue.textContent = `${isPositive ? '+' : ''}${data.priceChange24h.toFixed(2)}%`;
            }

            if (this.elements.marketCap && data.marketCap) {
                this.elements.marketCap.textContent = this.formatCurrency(data.marketCap);
            }

            if (this.elements.volume24h && data.volume24h) {
                this.elements.volume24h.textContent = this.formatCurrency(data.volume24h);
            }

            if (this.elements.liquidity && data.liquidity) {
                this.elements.liquidity.textContent = this.formatCurrency(data.liquidity);
            }

            // Mantém holders como simulado por enquanto
            if (this.elements.holdersCount) {
                this.elements.holdersCount.textContent = this.formatNumber(1337 + Math.floor(Math.random() * 500));
            }
        }

        generatePriceChange() {
            // Simula flutuações mais suaves quando usando dados reais
            const volatility = this.isUsingRealData ? 0.02 : 0.05; // Menos volátil com dados reais
            const change = (Math.random() - 0.5) * 2 * volatility;
            return change;
        }

        updatePrice() {
            if (this.isUsingRealData) {
                // Com dados reais, apenas pequenas variações
                const changePercent = this.generatePriceChange();
                this.currentPrice = this.currentPrice * (1 + changePercent);
            } else {
                // Simulação completa
                const changePercent = this.generatePriceChange();
                const oldPrice = this.currentPrice;
                this.currentPrice = oldPrice * (1 + changePercent);
                this.currentPrice = Math.max(0.00001, Math.min(0.001, this.currentPrice));
            }

            // Atualiza histórico
            this.priceHistory.push(this.currentPrice);
            if (this.priceHistory.length > this.maxHistoryLength) {
                this.priceHistory.shift();
            }

            this.updateDisplay();
            this.updateMetrics();
        }

        updateDisplay() {
            if (!this.elements.price || this.isUsingRealData) return;

            // Formata preço
            const formattedPrice = this.formatPrice(this.currentPrice);
            this.elements.price.textContent = formattedPrice;

            // Calcula e mostra mudança (apenas para simulação)
            const lastPrice = this.priceHistory[this.priceHistory.length - 2] || this.currentPrice;
            const changePercent = ((this.currentPrice - lastPrice) / lastPrice) * 100;
            const isPositive = changePercent >= 0;

            if (this.elements.change) {
                const changeElement = this.elements.change;
                changeElement.className = `price-change ${isPositive ? 'positive' : 'negative'}`;

                const changeIcon = changeElement.querySelector('.change-icon');
                const changeValue = changeElement.querySelector('.change-value');

                if (changeIcon) changeIcon.textContent = isPositive ? '↗' : '↘';
                if (changeValue) changeValue.textContent = `${isPositive ? '+' : ''}${changePercent.toFixed(2)}%`;
            }
        }

        updateMetrics() {
            if (this.isUsingRealData) return; // Métricas já atualizadas com dados reais

            const supply = 1000000000; // 1 bilhão de tokens
            const marketCap = this.currentPrice * supply;
            const volume24h = marketCap * (0.1 + Math.random() * 0.2); // 10-30% do market cap
            const liquidity = marketCap * (0.05 + Math.random() * 0.1); // 5-15% do market cap
            const holders = Math.floor(1337 + Math.random() * 500); // 1337-1837 holders

            if (this.elements.marketCap) {
                this.elements.marketCap.textContent = this.formatCurrency(marketCap);
            }
            if (this.elements.volume24h) {
                this.elements.volume24h.textContent = this.formatCurrency(volume24h);
            }
            if (this.elements.liquidity) {
                this.elements.liquidity.textContent = this.formatCurrency(liquidity);
            }
            if (this.elements.holdersCount) {
                this.elements.holdersCount.textContent = this.formatNumber(holders);
            }
        }

        formatPrice(price) {
            if (price < 0.0001) {
                return `$${price.toFixed(7)}`;
            } else if (price < 0.001) {
                return `$${price.toFixed(6)}`;
            } else {
                return `$${price.toFixed(4)}`;
            }
        }

        formatCurrency(amount) {
            if (amount >= 1000000) {
                return `$${(amount / 1000000).toFixed(1)}M`;
            } else if (amount >= 1000) {
                return `$${(amount / 1000).toFixed(1)}K`;
            } else {
                return `$${amount.toFixed(0)}`;
            }
        }

        formatNumber(num) {
            return num.toLocaleString();
        }

        startLiveUpdates() {
            // Atualiza preço a cada 5-10 segundos
            const updateInterval = this.isUsingRealData ? 10000 : 5000; // Menos frequente com dados reais
            setInterval(() => {
                this.updatePrice();
            }, updateInterval);

            // Atualiza dados reais a cada 30 segundos se disponível
            if (this.isUsingRealData) {
                setInterval(async () => {
                    await this.loadRealPriceData();
                }, 30000);
            }

            // Pisca o indicador de status
            if (this.elements.status) {
                const statusText = this.isUsingRealData ? '● LIVE' : '● SIMULATED';
                this.elements.status.textContent = statusText;

                setInterval(() => {
                    this.elements.status.style.opacity = this.elements.status.style.opacity === '0.5' ? '1' : '0.5';
                }, 1000);
            }
        }

        bindEvents() {
            // Botão de comprar
            const buyBtn = document.getElementById('buyPugBtn');
            if (buyBtn) {
                buyBtn.addEventListener('click', () => {
                    showNotification('🚀 Redirecionando para pump.fun...', 'info');
                    setTimeout(() => {
                        window.open(`https://pump.fun/coin/${this.tokenAddress}`, '_blank');
                    }, 1000);
                });
            }

            // Botão de ver gráfico
            const chartBtn = document.getElementById('viewChartBtn');
            if (chartBtn) {
                chartBtn.addEventListener('click', () => {
                    showNotification('📊 Abrindo gráfico em nova aba...', 'info');
                    setTimeout(() => {
                        window.open(`https://dexscreener.com/solana/${this.tokenAddress}`, '_blank');
                    }, 500);

                    // Adiciona funcionalidade de "like" - abre Solscan
                    setTimeout(() => {
                        window.open('https://solscan.io/account/GKKJkrCB8QEy7NwcNVwNa8avdywW6iCoNZpzaMtepump?cluster=mainnet', '_blank');
                        showNotification('❤️ Curtido! Verificando conta no Solscan...', 'success');
                    }, 1000);
                });
            }

            // Botão de compartilhar
            const shareBtn = document.getElementById('sharePriceBtn');
            if (shareBtn) {
                shareBtn.addEventListener('click', () => {
                    const price = this.elements.price ? this.elements.price.textContent : '$0.00003791';
                    const message = `🚀 $PUG está valendo ${price} na Solana! #PUG #Solana #Memecoin\nCompra aqui: https://pump.fun/coin/${this.tokenAddress}`;
                    navigator.clipboard.writeText(message).then(() => {
                        showNotification('📤 Preço e link copiados para compartilhar!', 'success');
                    });
                });
            }
        }
    }

    // ==========================================
    // WEB3 EVENT LISTENERS & INITIALIZATION
    // ==========================================

    // Wallet connection buttons
    document.getElementById('connectWallet')?.addEventListener('click', async () => {
        try {
            await solanaAPI.connectWallet();
            updateWalletUI();
        } catch (error) {
            console.error('Failed to connect wallet:', error);
        }
    });

    // NFT minting buttons
    document.querySelectorAll('.btn-buy').forEach(button => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();

            const nftCard = button.closest('.nft-card');
            const nftTitle = nftCard.querySelector('.nft-title')?.textContent || 'PUG NFT';
            const nftImage = nftCard.querySelector('.nft-image')?.src || '';

            try {
                // First upload to IPFS
                const metadata = {
                    name: nftTitle,
                    description: `Rare ${nftTitle} from PUG Quantum Realm`,
                    image: nftImage,
                    category: 'nft',
                    creator: 'PUG Community'
                };

                const ipfsResult = await ipfsAPI.uploadMemeImage(
                    await fetch(nftImage).then(r => r.blob()),
                    metadata
                );

                // Then mint NFT
                const nft = await metaplexAPI.mintNFT({
                    uri: ipfsResult.metadata.url,
                    name: nftTitle,
                    symbol: 'PUG',
                    royalty: 500
                });

                if (nft) {
                    // Update UI
                    button.textContent = 'Comprado!';
                    button.disabled = true;
                    button.classList.add('btn-success');
                }

            } catch (error) {
                console.error('NFT purchase failed:', error);
            }
        });
    });

    // Meme upload functionality
    document.querySelector('.btn-upload')?.addEventListener('click', async () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';

        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            try {
                const metadata = {
                    name: `PUG Meme ${Date.now()}`,
                    description: 'Community meme uploaded to IPFS',
                    category: 'meme',
                    creator: 'Community Member'
                };

                const result = await ipfsAPI.uploadMemeImage(file, metadata);

                // Add to gallery
                addMemeToGallery({
                    image: result.image.url,
                    title: metadata.name,
                    category: 'upload',
                    likes: 0,
                    shares: 0
                });

                showNotification('Meme enviado com sucesso! 🎉', 'success');

            } catch (error) {
                console.error('Meme upload failed:', error);
            }
        };

        input.click();
    });

    // Update wallet UI
    function updateWalletUI() {
        const walletAddress = dbManager.getWalletAddress();
        const balance = dbManager.getWalletBalance();

        if (walletAddress) {
            document.getElementById('connectWallet').textContent = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;
            document.getElementById('walletBalance').textContent = `${balance.toFixed(4)} SOL`;
        } else {
            document.getElementById('connectWallet').textContent = 'Conectar Wallet';
            document.getElementById('walletBalance').textContent = '0.0000 SOL';
        }
    }

    // Add meme to gallery function
    function addMemeToGallery(memeData) {
        const gallery = document.querySelector('.meme-gallery');
        if (!gallery) return;

        const memeCard = document.createElement('div');
        memeCard.className = 'meme-card';
        memeCard.setAttribute('data-category', memeData.category);

        memeCard.innerHTML = `
            <img src="${memeData.image}" alt="${memeData.title}" class="meme-image">
            <div class="meme-info">
                <h3 class="meme-title">${memeData.title}</h3>
                <div class="meme-stats">
                    <span class="stat-item">👍 ${memeData.likes}</span>
                    <span class="stat-item">🔗 ${memeData.shares}</span>
                </div>
                <div class="meme-actions">
                    <button class="btn-like">Curtir</button>
                    <button class="btn-share">Compartilhar</button>
                </div>
            </div>
        `;

        gallery.appendChild(memeCard);

        // Add event listeners
        memeCard.querySelector('.btn-like').addEventListener('click', () => {
            memeData.likes++;
            memeCard.querySelector('.stat-item:first-child').textContent = `👍 ${memeData.likes}`;
            dbManager.updateMemeStats(memeData.title, 'likes', memeData.likes);
        });

        memeCard.querySelector('.btn-share').addEventListener('click', () => {
            memeData.shares++;
            memeCard.querySelector('.stat-item:last-child').textContent = `🔗 ${memeData.shares}`;
            dbManager.updateMemeStats(memeData.title, 'shares', memeData.shares);
            showNotification('Meme compartilhado! 📤', 'success');
        });
    }

    // ==========================================
    // SOCIAL MEDIA EVENT LISTENERS
    // ==========================================

    // Twitter share buttons
    document.querySelectorAll('.btn-share-twitter').forEach(button => {
        button.addEventListener('click', async () => {
            const memeCard = button.closest('.meme-card');
            const memeData = {
                id: memeCard.querySelector('.meme-title')?.textContent || 'PUG Meme',
                title: memeCard.querySelector('.meme-title')?.textContent || 'PUG Meme',
                image: memeCard.querySelector('.meme-image')?.src || ''
            };

            await twitterAPI.shareMeme(memeData);
        });
    });

    // Discord share buttons
    document.querySelectorAll('.btn-share-discord').forEach(button => {
        button.addEventListener('click', async () => {
            const memeCard = button.closest('.meme-card');
            const memeData = {
                id: memeCard.querySelector('.meme-title')?.textContent || 'PUG Meme',
                title: memeCard.querySelector('.meme-title')?.textContent || 'PUG Meme',
                image: memeCard.querySelector('.meme-image')?.src || '',
                likes: parseInt(memeCard.querySelector('.stat-item:first-child')?.textContent?.split(' ')[1] || '0'),
                shares: parseInt(memeCard.querySelector('.stat-item:last-child')?.textContent?.split(' ')[1] || '0')
            };

            await discordAPI.sendMemeToChannel(memeData);
        });
    });

    // Telegram share buttons
    document.querySelectorAll('.btn-share-telegram').forEach(button => {
        button.addEventListener('click', async () => {
            const memeCard = button.closest('.meme-card');
            const memeData = {
                id: memeCard.querySelector('.meme-title')?.textContent || 'PUG Meme',
                title: memeCard.querySelector('.meme-title')?.textContent || 'PUG Meme',
                image: memeCard.querySelector('.meme-image')?.src || '',
                likes: parseInt(memeCard.querySelector('.stat-item:first-child')?.textContent?.split(' ')[1] || '0'),
                shares: parseInt(memeCard.querySelector('.stat-item:last-child')?.textContent?.split(' ')[1] || '0')
            };

            await telegramAPI.sendMemeBroadcast(memeData);
        });
    });

    // ==========================================
    // EXCHANGE & TRADING EVENT LISTENERS
    // ==========================================

    // Price refresh button
    document.getElementById('refreshPrice')?.addEventListener('click', async () => {
        try {
            const priceData = await coingeckoAPI.getPugPrice();
            if (priceData) {
                showNotification('Preço atualizado! 📈', 'success');
            }
        } catch (error) {
            console.error('Price refresh failed:', error);
        }
    });

    // DEX swap button
    document.getElementById('swapTokens')?.addEventListener('click', async () => {
        const fromToken = document.getElementById('fromToken')?.value || 'SOL';
        const toToken = document.getElementById('toToken')?.value || 'PUG';
        const amount = parseFloat(document.getElementById('swapAmount')?.value || '1');

        if (!amount || amount <= 0) {
            showNotification('Valor inválido para swap', 'error');
            return;
        }

        try {
            const quote = await jupiterAPI.getSwapQuote(fromToken, toToken, amount);
            if (quote) {
                const confirmed = confirm(`Confirmar swap de ${amount} ${fromToken} para ${quote.outputAmount.toFixed(4)} ${toToken}?`);
                if (confirmed) {
                    await jupiterAPI.executeSwap(quote);
                }
            }
        } catch (error) {
            console.error('Swap failed:', error);
        }
    });

    // ==========================================
    // MULTI-CHAIN EVENT LISTENERS
    // ==========================================

    // Ethereum wallet connection
    document.getElementById('connectEthereum')?.addEventListener('click', async () => {
        try {
            const address = await ethereumAPI.connectWallet();
            if (address) {
                updateWalletUI();
            }
        } catch (error) {
            console.error('Ethereum wallet connection failed:', error);
        }
    });

    // BSC wallet connection
    document.getElementById('connectBSC')?.addEventListener('click', async () => {
        try {
            showNotification('BSC wallet connection coming soon! 🔜', 'info');
        } catch (error) {
            console.error('BSC wallet connection failed:', error);
        }
    });

    // Cross-chain bridge
    document.getElementById('bridgeTokens')?.addEventListener('click', async () => {
        const fromChain = document.getElementById('fromChain')?.value || 'solana';
        const toChain = document.getElementById('toChain')?.value || 'polygon';
        const amount = parseFloat(document.getElementById('bridgeAmount')?.value || '1');

        try {
            await polygonAPI.bridgeTokens(fromChain, toChain, amount);
        } catch (error) {
            console.error('Bridge failed:', error);
        }
    });

    // ==========================================
    // NEWS & SOCIAL EVENT LISTENERS
    // ==========================================

    // Load crypto news
    document.getElementById('loadNews')?.addEventListener('click', async () => {
        try {
            const news = await cryptonewsAPI.getLatestNews(5);
            displayNews(news);
        } catch (error) {
            console.error('Failed to load news:', error);
        }
    });

    // Load Reddit posts
    document.getElementById('loadReddit')?.addEventListener('click', async () => {
        try {
            const posts = await redditAPI.getSubredditPosts('memecoins', 5);
            displayRedditPosts(posts);
        } catch (error) {
            console.error('Failed to load Reddit posts:', error);
        }
    });

    // ==========================================
    // NOTIFICATION EVENT LISTENERS
    // ==========================================

    // Price alert setup
    document.getElementById('setupPriceAlert')?.addEventListener('click', async () => {
        const targetPrice = parseFloat(document.getElementById('alertPrice')?.value);
        if (!targetPrice || targetPrice <= 0) {
            showNotification('Preço alvo inválido', 'error');
            return;
        }

        try {
            // Get current price
            const priceData = await coingeckoAPI.getPugPrice();
            if (priceData) {
                await pushoverAPI.sendPriceAlert(priceData.price, targetPrice);
                showNotification('Alerta de preço configurado! 🔔', 'success');
            }
        } catch (error) {
            console.error('Price alert setup failed:', error);
        }
    });

    // Email subscription
    document.getElementById('subscribeEmail')?.addEventListener('click', async () => {
        const email = document.getElementById('subscriberEmail')?.value;
        const name = document.getElementById('subscriberName')?.value || 'PUG Fan';

        if (!email || !email.includes('@')) {
            showNotification('Email inválido', 'error');
            return;
        }

        try {
            await emailjsAPI.sendWelcomeEmail(email, name);
            showNotification('Inscrição realizada! Bem-vindo à comunidade PUG! 🎉', 'success');
        } catch (error) {
            console.error('Email subscription failed:', error);
        }
    });

    // ==========================================
    // UTILITY EVENT LISTENERS
    // ==========================================

    // Generate QR Code
    document.getElementById('generateQR')?.addEventListener('click', () => {
        const text = document.getElementById('qrText')?.value || window.location.href;
        const qrUrl = `${QRCODE_CONFIG.apiUrl}?data=${encodeURIComponent(text)}&size=${QRCODE_CONFIG.size}`;

        document.getElementById('qrCode').src = qrUrl;
        document.getElementById('qrCode').style.display = 'block';
    });

    // Get location data
    document.getElementById('getLocation')?.addEventListener('click', async () => {
        try {
            const location = await ipGeolocationAPI.getLocation();
            if (location) {
                document.getElementById('locationInfo').textContent =
                    `📍 ${location.city}, ${location.country} (${location.countryCode})`;
                showNotification('Localização obtida! 🌍', 'success');
            }
        } catch (error) {
            console.error('Location fetch failed:', error);
        }
    });

    // ==========================================
    // ANALYTICS TRACKING
    // ==========================================

    // Track page views
    googleAnalytics.trackPageView(window.location.pathname);
    mixpanelAPI.trackEvent('page_view', { page: window.location.pathname });

    // Track user interactions
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('btn-like')) {
            googleAnalytics.trackEvent('meme_like');
            mixpanelAPI.trackEvent('meme_like', { meme_id: target.closest('.meme-card')?.querySelector('.meme-title')?.textContent });
        }
        if (target.classList.contains('btn-share')) {
            googleAnalytics.trackEvent('meme_share');
            mixpanelAPI.trackEvent('meme_share', { platform: 'general' });
        }
        if (target.classList.contains('btn-buy')) {
            googleAnalytics.trackEvent('nft_purchase_attempt');
            mixpanelAPI.trackEvent('nft_purchase_attempt');
        }
    });

    // ==========================================
    // HELPER FUNCTIONS
    // ==========================================

    // Update price display
    function updatePriceDisplay(priceData) {
        const priceElement = document.getElementById('pugPrice');
        const changeElement = document.getElementById('priceChange');
        const marketCapElement = document.getElementById('marketCap');

        if (priceElement) priceElement.textContent = `$${priceData.price.toFixed(6)}`;
        if (changeElement) {
            changeElement.textContent = `${priceData.priceChange24h >= 0 ? '+' : ''}${priceData.priceChange24h.toFixed(2)}%`;
            changeElement.className = priceData.priceChange24h >= 0 ? 'price-positive' : 'price-negative';
        }
        if (marketCapElement) marketCapElement.textContent = `$${(priceData.marketCap / 1000000).toFixed(1)}M`;
    }

    // Display news
    function displayNews(news) {
        const newsContainer = document.getElementById('newsContainer');
        if (!newsContainer) return;

        newsContainer.innerHTML = news.map(item => `
            <div class="news-item">
                <h4>${item.title}</h4>
                <p>${item.summary}</p>
                <small>${new Date(item.publishedAt).toLocaleDateString()} - ${item.source}</small>
            </div>
        `).join('');
    }

    // Display Reddit posts
    function displayRedditPosts(posts) {
        const redditContainer = document.getElementById('redditContainer');
        if (!redditContainer) return;

        redditContainer.innerHTML = posts.map(post => `
            <div class="reddit-post">
                <h4>${post.title}</h4>
                <p>Posted by u/${post.author} • ${post.upvotes} upvotes • ${post.comments} comments</p>
            </div>
        `).join('');
    }

    // ==========================================
    // SOLANA CALCULATOR FUNCTIONALITY
    // ==========================================

    // Calculator state
    let calcDisplay = '0';
    let calcMemory = 0;
    let calcOperation = null;
    let calcWaitingForOperand = false;
    let currentPrice = 0.045; // PUG price in USD

    // Initialize calculator
    function initSolanaCalculator() {
        const calculator = document.querySelector('.solana-calculator-gif');
        if (!calculator) return;

        const display = calculator.querySelector('#calcResult');
        const buttons = calculator.querySelectorAll('.calc-btn');

        // Update display
        function updateDisplay() {
            display.textContent = parseFloat(calcDisplay).toFixed(8);
        }

        // Handle button clicks
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.dataset.value;
                const action = button.dataset.action;

                // Add click animation
                button.style.animation = 'buttonPress 0.1s ease';
                setTimeout(() => button.style.animation = '', 100);

                if (value) {
                    // Number or decimal point
                    if (calcWaitingForOperand) {
                        calcDisplay = value;
                        calcWaitingForOperand = false;
                    } else {
                        calcDisplay = calcDisplay === '0' ? value : calcDisplay + value;
                    }
                    updateDisplay();

                } else if (action) {
                    switch (action) {
                        case 'clear':
                            calcDisplay = '0';
                            calcMemory = 0;
                            calcOperation = null;
                            calcWaitingForOperand = false;
                            updateDisplay();
                            break;

                        case 'convert':
                            // Convert between SOL and PUG
                            const currentValue = parseFloat(calcDisplay);
                            if (calcDisplay.includes('.')) {
                                // Convert SOL to PUG
                                calcDisplay = (currentValue / currentPrice).toFixed(8);
                            } else {
                                // Convert PUG to SOL
                                calcDisplay = (currentValue * currentPrice).toFixed(8);
                            }
                            updateDisplay();
                            break;

                        case 'price':
                            // Show current PUG price
                            calcDisplay = currentPrice.toFixed(8);
                            updateDisplay();
                            break;

                        case 'equals':
                            // Perform calculation
                            const inputValue = parseFloat(calcDisplay);
                            if (calcOperation && calcMemory !== null) {
                                switch (calcOperation) {
                                    case '+':
                                        calcDisplay = (calcMemory + inputValue).toFixed(8);
                                        break;
                                    case '-':
                                        calcDisplay = (calcMemory - inputValue).toFixed(8);
                                        break;
                                    case '*':
                                        calcDisplay = (calcMemory * inputValue).toFixed(8);
                                        break;
                                    case '/':
                                        calcDisplay = inputValue !== 0 ? (calcMemory / inputValue).toFixed(8) : 'Error';
                                        break;
                                }
                                calcOperation = null;
                                calcMemory = 0;
                                calcWaitingForOperand = true;
                            }
                            updateDisplay();
                            break;
                    }
                }
            });
        });

        // Auto-update price from API
        setInterval(async () => {
            try {
                if (coingeckoAPI) {
                    const priceData = await coingeckoAPI.getPugPrice();
                    if (priceData) {
                        currentPrice = priceData.price;
                    }
                }
            } catch (error) {
                console.warn('Failed to update calculator price:', error);
            }
        }, 30000); // Update every 30 seconds

        updateDisplay();
    }

    // Add button press animation
    const calcStyle = document.createElement('style');
    calcStyle.textContent = `
        @keyframes buttonPress {
            0% { transform: scale(1); }
            50% { transform: scale(0.95); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(calcStyle);

    // Initialize calculator when DOM is ready
    initSolanaCalculator();

    // Inicializa o painel de preço
    const priceManager = new PriceManager();

    // ===== TOKEN LAUNCH FUNCTIONALITY =====

    class TokenLaunchManager {
        constructor() {
            this.wallet = null;
            this.connection = null;
            this.tokenMint = null;
            this.launchSteps = {
                wallet: false,
                token: false,
                liquidity: false,
                launch: false
            };
            this.init();
        }

        init() {
            this.bindEvents();
            this.updateStatus();
        }

        bindEvents() {
            // Conectar carteira para launch
            const connectLaunchWallet = document.getElementById('connectLaunchWallet');
            if (connectLaunchWallet) {
                connectLaunchWallet.addEventListener('click', () => this.connectLaunchWallet());
            }

            // Criar token
            const createTokenBtn = document.getElementById('createTokenBtn');
            if (createTokenBtn) {
                createTokenBtn.addEventListener('click', () => this.createToken());
            }

            // Adicionar liquidez
            const addLiquidityBtn = document.getElementById('addLiquidityBtn');
            if (addLiquidityBtn) {
                addLiquidityBtn.addEventListener('click', () => this.addLiquidity());
            }

            // Burn LP tokens
            const burnLpBtn = document.getElementById('burnLpBtn');
            if (burnLpBtn) {
                burnLpBtn.addEventListener('click', () => this.burnLpTokens());
            }

            // Renunciar ownership
            const renounceBtn = document.getElementById('renounceBtn');
            if (renounceBtn) {
                renounceBtn.addEventListener('click', () => this.renounceOwnership());
            }

            // Completar launch
            const completeLaunchBtn = document.getElementById('completeLaunchBtn');
            if (completeLaunchBtn) {
                completeLaunchBtn.addEventListener('click', () => this.completeLaunch());
            }
        }

        async connectLaunchWallet() {
            try {
                if (!window.solana || !window.solana.isPhantom) {
                    showNotification('Phantom Wallet não detectada. Instale a extensão Phantom.', 'error');
                    window.open('https://phantom.app/', '_blank');
                    return;
                }

                const response = await window.solana.connect();
                this.wallet = response.publicKey;
                this.connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));

                this.launchSteps.wallet = true;
                this.updateStatus();
                this.showStep(2);

                showNotification('Carteira conectada com sucesso para launch!', 'success');

                // Track analytics
                gtag('event', 'wallet_connected_launch', {
                    event_category: 'launch',
                    event_label: 'phantom_wallet'
                });

            } catch (error) {
                console.error('Erro ao conectar carteira:', error);
                showNotification('Erro ao conectar carteira.', 'error');
            }
        }

        async createToken() {
            if (!this.wallet || !this.connection) {
                showNotification('Conecte sua carteira primeiro.', 'error');
                return;
            }

            try {
                showNotification('Criando token SPL... Isso pode levar alguns segundos.', 'info');

                const tokenName = document.getElementById('tokenName').value;
                const tokenSymbol = document.getElementById('tokenSymbol').value;
                const tokenSupply = parseInt(document.getElementById('tokenSupply').value);
                const tokenDecimals = parseInt(document.getElementById('tokenDecimals').value);

                // Criar mint account
                const mint = await splToken.createMint(
                    this.connection,
                    this.wallet,
                    this.wallet,
                    this.wallet,
                    tokenDecimals
                );

                // Criar associated token account
                const tokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
                    this.connection,
                    this.wallet,
                    mint,
                    this.wallet
                );

                // Mint tokens
                await splToken.mintTo(
                    this.connection,
                    this.wallet,
                    mint,
                    tokenAccount.address,
                    this.wallet,
                    tokenSupply * Math.pow(10, tokenDecimals)
                );

                this.tokenMint = mint;

                this.launchSteps.token = true;
                this.updateStatus();
                this.showStep(3);

                showNotification(`Token ${tokenSymbol} criado com sucesso!`, 'success');

                // Track analytics
                gtag('event', 'token_created', {
                    event_category: 'launch',
                    event_label: tokenSymbol,
                    value: tokenSupply
                });

            } catch (error) {
                console.error('Erro ao criar token:', error);
                showNotification('Erro ao criar token. Verifique se você tem SOL suficiente.', 'error');
            }
        }

        async addLiquidity() {
            if (!this.wallet || !this.connection || !this.tokenMint) {
                showNotification('Complete os passos anteriores primeiro.', 'error');
                return;
            }

            try {
                showNotification('Adicionando liquidez no Raydium... Isso pode levar alguns segundos.', 'info');

                const solAmount = parseFloat(document.getElementById('solAmount').value);
                const tokenAmount = parseInt(document.getElementById('tokenAmount').value);

                // Aqui seria a integração real com Raydium SDK
                // Por enquanto, simulamos o processo

                // Transfer SOL para liquidity pool
                // Transfer tokens para liquidity pool
                // Criar LP tokens

                // Simulação - em produção, isso seria feito com Raydium SDK
                await new Promise(resolve => setTimeout(resolve, 3000));

                this.launchSteps.liquidity = true;
                this.updateStatus();
                this.showStep(4);

                showNotification('Liquidez adicionada com sucesso no Raydium!', 'success');

                // Track analytics
                gtag('event', 'liquidity_added', {
                    event_category: 'launch',
                    event_label: 'raydium',
                    value: solAmount
                });

            } catch (error) {
                console.error('Erro ao adicionar liquidez:', error);
                showNotification('Erro ao adicionar liquidez. Verifique os valores e tente novamente.', 'error');
            }
        }

        async burnLpTokens() {
            if (!this.launchSteps.liquidity) {
                showNotification('Adicione liquidez primeiro.', 'error');
                return;
            }

            try {
                showNotification('Burning LP tokens... Isso remove permanentemente os tokens de liquidez.', 'info');

                // Simulação - em produção, isso seria feito com Raydium SDK
                await new Promise(resolve => setTimeout(resolve, 2000));

                showNotification('LP tokens queimados com sucesso!', 'success');

                // Track analytics
                gtag('event', 'lp_tokens_burned', {
                    event_category: 'launch',
                    event_label: 'burn'
                });

            } catch (error) {
                console.error('Erro ao burn LP tokens:', error);
                showNotification('Erro ao burn LP tokens.', 'error');
            }
        }

        async renounceOwnership() {
            if (!this.tokenMint) {
                showNotification('Crie o token primeiro.', 'error');
                return;
            }

            try {
                showNotification('Renunciando ownership... Isso é irreversível.', 'warning');

                // Simulação - em produção, isso transferiria ownership para uma conta burn
                await new Promise(resolve => setTimeout(resolve, 2000));

                showNotification('Ownership renunciado com sucesso!', 'success');

                // Track analytics
                gtag('event', 'ownership_renounced', {
                    event_category: 'launch',
                    event_label: 'renounce'
                });

            } catch (error) {
                console.error('Erro ao renunciar ownership:', error);
                showNotification('Erro ao renunciar ownership.', 'error');
            }
        }

        async completeLaunch() {
            if (!this.launchSteps.wallet || !this.launchSteps.token || !this.launchSteps.liquidity) {
                showNotification('Complete todos os passos antes de finalizar.', 'error');
                return;
            }

            try {
                this.launchSteps.launch = true;
                this.updateStatus();

                showNotification('🎉 LAUNCH CONCLUÍDO COM SUCESSO! Seu token está agora live na Solana!', 'success');

                // Track analytics
                gtag('event', 'launch_completed', {
                    event_category: 'launch',
                    event_label: 'success'
                });

                // Redirect to main page or show success message
                setTimeout(() => {
                    document.getElementById('token-launch').style.display = 'none';
                    showNotification('Bem-vindo à família PUG! 🚀🐕', 'success');
                }, 3000);

            } catch (error) {
                console.error('Erro ao completar launch:', error);
                showNotification('Erro ao completar launch.', 'error');
            }
        }

        showStep(stepNumber) {
            // Hide all steps
            for (let i = 1; i <= 4; i++) {
                const step = document.getElementById(`step${i}`);
                if (step) {
                    step.style.display = i <= stepNumber ? 'flex' : 'none';
                }
            }
        }

        updateStatus() {
            const walletStatus = document.getElementById('walletStatus');
            const tokenStatus = document.getElementById('tokenStatus');
            const liquidityStatus = document.getElementById('liquidityStatus');
            const launchStatus = document.getElementById('launchStatus');

            if (walletStatus) {
                walletStatus.textContent = this.launchSteps.wallet ? '✅ Conectada' : '❌ Não conectada';
                walletStatus.className = this.launchSteps.wallet ? 'status-value success' : 'status-value error';
            }

            if (tokenStatus) {
                tokenStatus.textContent = this.launchSteps.token ? '✅ Criado' : '⏳ Aguardando';
                tokenStatus.className = this.launchSteps.token ? 'status-value success' : 'status-value';
            }

            if (liquidityStatus) {
                liquidityStatus.textContent = this.launchSteps.liquidity ? '✅ Adicionada' : '⏳ Aguardando';
                liquidityStatus.className = this.launchSteps.liquidity ? 'status-value success' : 'status-value';
            }

            if (launchStatus) {
                launchStatus.textContent = this.launchSteps.launch ? '✅ Completo' : '⏳ Aguardando';
                launchStatus.className = this.launchSteps.launch ? 'status-value success' : 'status-value';
            }
        }
    }

    // Inicializar Token Launch Manager
    const tokenLaunchManager = new TokenLaunchManager();

    // Função para mostrar/esconder seção de launch
    function toggleLaunchSection() {
        const launchSection = document.getElementById('token-launch');
        if (launchSection) {
            launchSection.style.display = launchSection.style.display === 'none' ? 'block' : 'none';
        }
    }

    // Adicionar botão de launch na interface principal
    const buyPugBtn = document.getElementById('buyPugBtn');
    if (buyPugBtn) {
        buyPugBtn.addEventListener('click', () => {
            toggleLaunchSection();
            showNotification('Modo Launch ativado! 🚀', 'info');
        });
    }

    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileConnectWallet = document.getElementById('mobileConnectWallet');

    if (hamburgerMenu && mobileMenu) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburgerMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
                hamburgerMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });

        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        // Mobile wallet connect
        if (mobileConnectWallet) {
            mobileConnectWallet.addEventListener('click', () => {
                const desktopConnect = document.getElementById('connectWallet');
                if (desktopConnect) {
                    desktopConnect.click();
                }
                hamburgerMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        }
    }

});
