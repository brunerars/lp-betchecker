import { XCircle, CheckCircle, X, Check } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Sem vs Com BetChecker
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sem BetChecker */}
          <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-8 rounded-xl border-2 border-red-900/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-900/50 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Sem BetChecker</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span>Analisar manualmente cada modalidade (6, 8, 10, 12min)</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span>Anotar tudo em planilhas desorganizadas</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span>Perder jogos por falta de tempo</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span>Apostar sem saber forma semanal dos jogadores</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span>Dados dispersos em vários sites</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span>Confundir estratégias por desorganização</span>
              </li>
            </ul>
          </div>

          {/* Com BetChecker */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-8 rounded-xl border-2 border-green-900/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Com BetChecker</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Análise automática em TODAS as modalidades</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Dashboard organizado e visual</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Veja TODOS os jogos disponíveis em um lugar</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Decisão baseada em forma semanal atual</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Transparência total: você vê DE ONDE vêm os números</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Grade teste separada para experimentar estratégias</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
