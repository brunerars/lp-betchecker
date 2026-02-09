import { Calendar, Layers, Home, CheckSquare, FlaskConical, Search } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Recursos profissionais incluídos
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16 max-w-2xl mx-auto">
          Tudo que você precisa para apostar com inteligência em um único plano.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Calendar}
            title="Próximos Jogos"
            description="Veja todos os jogos disponíveis para as próximas 48h com análise completa de probabilidade."
          />

          <FeatureCard
            icon={Layers}
            title="Multi-Modalidade"
            description="Análise automática em 6min, 8min, 10min e 12min. Todas as modalidades de eSoccer cobertas."
          />

          <FeatureCard
            icon={Home}
            title="Home/Away"
            description="Sistema considera se jogador está em casa ou fora para análise mais precisa."
          />

          <FeatureCard
            icon={CheckSquare}
            title="Grade Oficial"
            description="Organize os jogos que você realmente vai acompanhar na sua grade principal."
          />

          <FeatureCard
            icon={FlaskConical}
            title="Grade Teste"
            description="Experimente novas estratégias separadamente sem bagunçar sua grade oficial."
          />

          <FeatureCard
            icon={Search}
            title="Filtros Avançados"
            description="Filtre por liga, período do dia, tipo de grade, modalidade ou apenas favoritos."
          />
        </div>
      </div>
    </section>
  );
}
