import { BarChart3, XCircle, Check, X } from 'lucide-react';

export default function TransparencySection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Cada número tem uma fonte. Sempre.
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
          Quando mostramos probabilidades, você vê o histórico real que gerou esse número.
        </p>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10">
            {/* O que você vê */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                </div>
                O que você vê no BetChecker:
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Todas as modalidades:</strong> 6min, 8min, 10min e 12min analisadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Histórico visível:</strong> Últimas 7 partidas da dupla</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Confrontos diretos:</strong> Jogos entre os mesmos jogadores</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Probabilidades:</strong> Calculadas com base no histórico real</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Home/Away:</strong> Considera posição de cada jogador</span>
                </li>
              </ul>
            </div>

            {/* O que você NÃO vê em outras plataformas */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-900/50 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                Outras plataformas:
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Só mostram porcentagem sem contexto</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Não explicam quais modalidades foram usadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Não mostram histórico de partidas</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>&quot;Algoritmo secreto&quot; (caixa-preta)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Sem acesso aos dados brutos</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-10 border-t border-slate-700/50">
            <p className="text-center text-lg text-slate-300">
              <strong className="text-white text-xl">Sem segredos. Sem &quot;algoritmo mágico&quot;.</strong><br />
              Só matemática transparente aplicada ao histórico real de cada dupla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
