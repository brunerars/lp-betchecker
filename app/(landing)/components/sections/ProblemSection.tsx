import { Clock, BarChart3, Target, AlertTriangle } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

export default function ProblemSection() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          O problema de apostar sem análise
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16 max-w-2xl mx-auto">
          A maioria perde dinheiro porque aposta no &quot;feeling&quot;, sem dados concretos.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Clock}
            title="Falta de Tempo"
            description="Analisar manualmente histórico de cada dupla em todas as modalidades leva horas que você não tem."
            iconColor="text-amber-400"
          />

          <FeatureCard
            icon={BarChart3}
            title="Dados Dispersos"
            description="Informações espalhadas em sites diferentes, sem comparação direta entre jogadores e modalidades."
            iconColor="text-amber-400"
          />

          <FeatureCard
            icon={Target}
            title="Forma Semanal"
            description="Histórico antigo não importa. Você precisa saber quem está jogando bem NAS ÚLTIMAS SEMANAS."
            iconColor="text-amber-400"
          />

          <FeatureCard
            icon={AlertTriangle}
            title="Manipulação?"
            description="Esoccer pode ter manipulação. Mas apostar SEM dados é pior. BetChecker mostra padrões reais."
            iconColor="text-amber-400"
          />
        </div>
      </div>
    </section>
  );
}
