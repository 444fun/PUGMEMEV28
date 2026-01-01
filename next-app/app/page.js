export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      background: '#0b0f1a',
      color: '#e5e7eb',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      padding: '32px'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>$PUGMEM · Next Preview</h1>
      <p style={{ maxWidth: 640, textAlign: 'center', lineHeight: 1.6 }}>
        Esta é uma versão mínima em Next.js para habilitar o Vercel Speed Insights.
        A página principal continua em HTML estático; use esta rota apenas para testar
        o coletor de métricas da Vercel.
      </p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="/" style={linkStyle}>Ir para o site estático</a>
        <a href="https://vercel.com/docs/speed-insights" target="_blank" rel="noreferrer" style={linkStyle}>
          Docs Speed Insights
        </a>
      </div>
    </main>
  );
}

const linkStyle = {
  padding: '10px 16px',
  borderRadius: 10,
  background: 'linear-gradient(135deg, #9945ff, #14f195)',
  color: '#0b0f1a',
  fontWeight: 700,
  textDecoration: 'none',
  boxShadow: '0 10px 30px rgba(0,0,0,0.35)'
};
