'use client';

const faqs = [
  {
    question: "BetChecker garante lucro?",
    answer: `NÃO. Nenhuma ferramenta garante lucro em apostas.

BetChecker mostra probabilidades baseadas em histórico real. Mas:
• Não controlamos o resultado dos jogos
• Não temos "método secreto"
• Estatística não é certeza

O que BetChecker GARANTE:
• Dados precisos e atualizados
• Cálculos estatísticos corretos
• Transparência total na metodologia
• Informação para VOCÊ decidir melhor

Aposte com responsabilidade. Só arrisque o que pode perder.`
  },
  {
    question: "Como funciona a análise multi-modalidade?",
    answer: `BetChecker analisa automaticamente a dupla em 4 modalidades:
• 6 minutos
• 8 minutos
• 10 minutos
• 12 minutos

Todas as modalidades são consideradas na análise.

Você vê o histórico das últimas partidas e as probabilidades calculadas.

Transparência total.`
  },
  {
    question: "Como funciona o teste grátis de 3 dias?",
    answer: `O teste de 3 dias está disponível SOB DEMANDA.

Como solicitar:
1. Manda mensagem no WhatsApp: +55 11 5304-5420
2. Pedimos seu email
3. Liberamos acesso COMPLETO por 3 dias
4. Você testa TUDO: grades, análises, filtros
5. Decide se quer assinar

Sem cartão de crédito.
Sem renovação automática.

Após 3 dias, se quiser continuar, é só avisar e fazemos a cobrança.`
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: `Sim, sem fidelidade.

Funcionamento:
• Assinatura mensal (R$ 79/mês)
• Se não renovar, acesso é desativado no próximo mês
• Sem multa, sem burocracia

GARANTIA DE 7 DIAS:
Se você assinar e não gostar, devolvemos 100% do valor em até 24h.
Só mandar: "Quero cancelar".

Risco zero.`
  },
  {
    question: "Qual a diferença entre Grade Oficial e Teste?",
    answer: `GRADE OFICIAL:
Para jogos que você realmente vai apostar. Organiza suas apostas ativas.

GRADE TESTE:
Para experimentar estratégias SEM risco.
Você testa duplas, filtros e períodos antes de apostar dinheiro real.

Ambas são completamente independentes.
Você pode usar filtros diferentes em cada uma.

Exemplo prático:
• Grade Oficial: Apostas confirmadas do dia
• Grade Teste: Testando novas estratégias`
  },
  {
    question: "A plataforma é segura?",
    answer: `Sim! Garantimos:

• Conexão segura (HTTPS)
• Seus dados protegidos
• Sem compartilhamento com terceiros

SUPORTE:
• WhatsApp: +55 11 5304-5420
• Email: suporte@betchecker.com.br
• Resposta: até 24h`
  },
  {
    question: "Como os jogos são analisados?",
    answer: `METODOLOGIA:

1. COLETA DE DADOS
• Buscamos partidas oficiais de eSoccer
• Todas as modalidades: 6, 8, 10 e 12min

2. FILTRAGEM
• Isolamos confrontos diretos entre a dupla
• Consideramos se jogador está em casa ou fora

3. CÁLCULO DE PROBABILIDADES
• Empate: (total empates / total jogos) × 100
• Vitória P1/P2: calculado da mesma forma

4. HISTÓRICO VISÍVEL
• Últimas 7 partidas da dupla aparecem no sistema
• Você vê os resultados reais

Sem segredos. Só matemática transparente.`
  },
  {
    question: "O que diferencia o BetChecker de outras plataformas?",
    answer: `DIFERENCIAIS:

TRANSPARÊNCIA
• Você vê o histórico real das partidas
• Nada de "caixa-preta"

MULTI-MODALIDADE
• Analisa 6, 8, 10 e 12min automaticamente
• Outras plataformas: só uma modalidade

GRADE TESTE
• Experimente estratégias sem risco
• Outras plataformas: não existe

HONESTIDADE
• NUNCA prometemos lucro
• Ferramenta de análise, não venda de sonho

EM RESUMO:
BetChecker é ferramenta PROFISSIONAL.`
  },
  {
    question: "E se eu não gostar?",
    answer: `GARANTIA DE 7 DIAS (devolução total):

Se você assinar e não gostar, devolvemos 100% do valor dentro de 7 dias.

COMO FUNCIONA:
1. Manda mensagem: "Quero cancelar"
2. PIX de volta em até 24h
3. Fim. Simples assim.

Sem perguntas.
Sem burocracia.

POR QUÊ?
Porque confiamos que, se você testar de verdade, vai querer ficar.
E se não ficar, não tem problema.

Risco ZERO.
Teste sem medo.

WhatsApp: +55 11 5304-5420`
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Perguntas frequentes
        </h2>
        <p className="text-xl text-slate-300 text-center mb-12">
          Tudo que você precisa saber antes de começar
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-slate-900/50 backdrop-blur p-6 rounded-xl border border-slate-700/50 group"
            >
              <summary className="font-semibold text-white cursor-pointer text-lg flex items-center justify-between">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-slate-300 whitespace-pre-line">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
