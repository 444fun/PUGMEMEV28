# 📊 PUGMEM - Configuração de Goals no Google Analytics 4

## 🎯 Goals Recomendados para $PUGMEM

### **Goal 1: Wallet Connection (Mais Importante)**

```
Nome: Wallet Connected
Tipo: Custom Event
Parâmetros:
- Event Name: wallet_connect
- Category: wallet
- Action: connect
- Label: (qualquer valor)
```

### **Goal 2: Buy Button Engagement**

```
Nome: Buy Button Clicked
Tipo: Custom Event
Parâmetros:
- Event Name: buy_click
- Category: purchase
- Action: button_click
- Label: pugmem_buy
```

### **Goal 3: Contract Interaction**

```
Nome: Contract Copied
Tipo: Custom Event
Parâmetros:
- Event Name: contract_copy
- Category: contract
- Action: copy
- Label: solana_address
```

### **Goal 4: Social Media Engagement**

```
Nome: Social Media Clicked
Tipo: Custom Event
Parâmetros:
- Event Name: social_click
- Category: social
- Action: click
- Label: x_twitter | telegram
```

### **Goal 5: Content Engagement**

```
Nome: NFT/Meme Viewed
Tipo: Custom Event
Parâmetros:
- Event Name: content_view
- Category: content
- Action: view
- Label: nft | meme
```

---

## 📈 Dashboards Recomendados

### **Dashboard 1: Community Engagement**

```
Widgets:
1. Real-Time Users (últimas 30 min)
2. Top Pages (principais seções)
3. User Acquisition (fontes de tráfego)
4. Goal Completions (conversões)
5. Geographic Map (localização)
6. Device Category (desktop/mobile)
```

### **Dashboard 2: Web3 Metrics**

```
Widgets:
1. Wallet Connection Rate
2. Contract Interaction Rate
3. Social Media CTR
4. Content Engagement Rate
5. Session Duration
6. Bounce Rate
```

### **Dashboard 3: Performance**

```
Widgets:
1. Page Load Time
2. Core Web Vitals
3. Error Rate
4. Uptime Monitoring
5. Conversion Funnel
6. Cohort Analysis
```

---

## 🔧 Como Configurar Goals no GA4

### **Passo a Passo:**

1. **Acesse Google Analytics**

   - Vá para [analytics.google.com](https://analytics.google.com)
   - Selecione sua propriedade PUGMEM

2. **Configure Goals**

   - Admin → Events → Create Custom Event
   - Ou Admin → Goals → Create Goal

3. **Para Custom Events:**

   - Event Name: nome do evento (ex: wallet_connect)
   - Parameters: adicionar parâmetros customizados
   - Conditions: definir condições de trigger

4. **Teste os Goals**
   - Vá para Real-Time → Conversions
   - Execute ações na página (conectar wallet, etc.)
   - Deve aparecer como conversão em tempo real

---

## 📊 Eventos Automáticos Rastreados

O código já rastreia automaticamente:

- `page_view` - Visualizações de página
- `wallet_connect` - Conexões de carteira
- `contract_copy` - Cópia de endereço
- `explorer_click` - Cliques no explorer
- `social_click` - Cliques em redes sociais
- `buy_click` - Cliques no botão comprar
- `content_view` - Visualizações de NFT/memes
- `oracle_consult` - Consultas ao oracle

---

## 🎯 Métricas de Sucesso

### **KPIs Principais:**

- **Wallet Connection Rate**: >5% dos visitantes
- **Social Media CTR**: >10% dos cliques
- **Contract Copy Rate**: >15% dos visitantes
- **Session Duration**: >2 minutos
- **Bounce Rate**: <40%

### **Alertas Recomendados:**

- Tráfego anormal (aumento/diminuição >50%)
- Conversões caindo >20%
- Page load time >3s
- Error rate >5%

---

## 📱 Relatórios Customizados

### **Relatório Semanal:**

```
- Usuários ativos por dia
- Top países
- Conversões por fonte
- Engajamento por dispositivo
- Performance por página
```

### **Relatório Mensal:**

```
- Crescimento da comunidade
- Taxas de conversão
- ROI de marketing
- Análise de cohort
- Previsões futuras
```

---

**💡 Dica:** Configure alertas automáticos para ser notificado sobre mudanças importantes no engajamento da comunidade PUGMEM!</content>
<parameter name="filePath">c:\Users\earle\husky\ANALYTICS_SETUP.md
