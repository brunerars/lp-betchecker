import { ShieldCheck } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-900/20 to-green-800/20 border-y border-green-900/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <ShieldCheck className="w-4 h-4" />
          GARANTIA DE 7 DIAS
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          E se eu não gostar?
        </h2>

        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Devolução TOTAL em 7 dias. Sem perguntas. Sem burocracia.
        </p>

        <div className="bg-slate-900/50 backdrop-blur rounded-xl p-8 border border-slate-700/50">
          <h3 className="text-xl font-bold text-white mb-8">Como funciona:</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <p className="text-slate-300 text-lg">
                Manda mensagem:<br />
                <strong className="text-white">&quot;Quero cancelar&quot;</strong>
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <p className="text-slate-300 text-lg">
                PIX de volta<br />
                <strong className="text-white">em até 24h</strong>
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <p className="text-slate-300 text-lg">
                Fim.<br />
                <strong className="text-white">Simples assim.</strong>
              </p>
            </div>
          </div>
        </div>

        <p className="text-slate-400 mt-8 italic text-lg">
          &quot;Porque confiamos que, se você testar de verdade, vai querer ficar.&quot;
        </p>
      </div>
    </section>
  );
}
