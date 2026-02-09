import StepItem from '../ui/StepItem';

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-850 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Como funciona o BetChecker
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
          Ferramenta profissional que automatiza análise estatística com transparência total.
        </p>

        <div className="space-y-24">
          <StepItem
            number={1}
            title="Veja todos os jogos disponíveis"
            description="Acesse 'Próximos Jogos' e veja análises completas das próximas 48h. Todas as duplas com estatísticas calculadas automaticamente. Sem precisar favoritar nada."
            imageSrc="/images/grade-auto.png"
            imageAlt="Grade Automática"
          />

          <StepItem
            number={2}
            title="Análise em TODAS as modalidades"
            description="BetChecker analisa automaticamente 6min, 8min, 10min e 12min. Mostra o histórico das últimas partidas da dupla e calcula probabilidades. Considera se jogador está em casa ou fora."
            imageSrc="/images/calculator.png"
            imageAlt="Calculadora de Probabilidades"
          />

          <StepItem
            number={3}
            title="Monte sua grade (oficial ou teste)"
            description="Adicione jogos à grade com 1 clique. Use a Grade Oficial para apostas reais. Use a Grade Teste para experimentar estratégias sem risco. Tudo separado e organizado."
            imageSrc="/images/minha-grade.png"
            imageAlt="Minha Grade"
          />
        </div>
      </div>
    </section>
  );
}
