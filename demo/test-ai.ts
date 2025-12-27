import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

const apiKey = process.env.AI_GATEWAY_API_KEY;

if (!apiKey) {
  console.error('❌ AI_GATEWAY_API_KEY não encontrada no arquivo .env');
  console.log('📝 Verifique se o arquivo .env existe e contém: AI_GATEWAY_API_KEY=sua_chave_aqui');
  process.exit(1);
}

console.log('🔑 Chave API encontrada:', apiKey.substring(0, 10) + '...');

// Definir a variável de ambiente para OpenAI
process.env.OPENAI_API_KEY = apiKey;

console.log('🤖 Testando conexão com AI Gateway...\n');

async function main() {
  try {
    const { text } = await generateText({
      model: openai('gpt-4o-mini'),
      prompt: 'Olá! Você é um assistente de IA. Me diga uma curiosidade interessante sobre tecnologia blockchain em uma frase.',
    });

    console.log('📝 Resposta da IA:');
    console.log(text);
    console.log('\n✅ Conexão com AI Gateway funcionando perfeitamente!');

  } catch (error: any) {
    console.error('❌ Erro ao conectar com AI Gateway:');
    console.error('Mensagem:', error.message);

    if (error.message.includes('401')) {
      console.log('💡 Dica: Verifique se a chave API está correta');
    } else if (error.message.includes('429')) {
      console.log('💡 Dica: Limite de requisições atingido');
    } else if (error.message.includes('network')) {
      console.log('💡 Dica: Verifique sua conexão com a internet');
    }

    process.exit(1);
  }
}

main();