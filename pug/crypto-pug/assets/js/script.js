// Este arquivo contém o código JavaScript que gerencia a interação do usuário, animações, efeitos de rolagem suave e outras funcionalidades dinâmicas do site.

class CryptoPugSystem {
    constructor() {
        this.init();
    }

    init() {
        this.setupWalletConnection();
        this.createTokenChart();
        this.animateStats();
        this.setupScrollEffects();
        this.setupHoverEffects();
        this.setupVideoEffects();
    }

    setupWalletConnection() {
        // Lógica para conectar a carteira
    }

    simulateConnection() {
        // Simulação de conexão com a carteira
    }

    createTokenChart() {
        // Lógica para criar o gráfico de tokenomics
    }

    animateStats() {
        // Lógica para animações de estatísticas
    }

    setupScrollEffects() {
        // Lógica para efeitos de rolagem suave
    }

    setupHoverEffects() {
        // Lógica para efeitos de hover
    }

    setupVideoEffects() {
        // Lógica para efeitos de vídeo
    }
}

// Inicializa o sistema quando o DOM é carregado
document.addEventListener('DOMContentLoaded', () => {
    const cryptoPug = new CryptoPugSystem();

    // Adiciona efeito de digitação ao subtítulo do herói
    const subtitle = document.querySelector('.hero-subtitle');
    const originalText = subtitle.textContent;
    subtitle.textContent = '';

    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            subtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    // Inicia a digitação após 1 segundo
    setTimeout(typeWriter, 1000);

    // Adiciona efeitos de partículas aleatórias
    setInterval(() => {
        // Lógica para animação de partículas
    }, 100);
});

// Rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});