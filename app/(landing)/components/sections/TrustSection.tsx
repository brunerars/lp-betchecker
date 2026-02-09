import { XCircle, CheckCircle, X, Check } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-850">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          BetChecker não é dica. É ferramenta.
        </h2>
        <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
          Não prometemos lucro. Mostramos dados para VOCÊ decidir.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* O que NÃO somos */}
          <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-8 rounded-xl border-2 border-red-900/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-900/50 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">O que NÃO fazemos</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Prometemos &quot;lucro garantido&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Vendemos &quot;método secreto&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Damos &quot;dicas VIP&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Escondemos a metodologia</span>
              </li>
            </ul>
          </div>

          {/* O que somos */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-8 rounded-xl border-2 border-green-900/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">O que fazemos</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Mostramos dados concretos e atualizados</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Explicamos toda a metodologia</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Transparência total nos cálculos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Você decide. Sempre.</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-slate-400 mt-10 italic">
          &quot;Ferramenta de análise, não promessa de lucro.&quot;
        </p>
      </div>
    </section>
  );
}
