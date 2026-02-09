import { LANDING_CONFIG } from '../../config';

export default function FooterSection() {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">BetChecker</h3>
          <p className="text-slate-400 mb-6">
            Análise profissional para eSoccer
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 mb-8">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href={`mailto:${LANDING_CONFIG.email}`} className="hover:text-white transition-colors">
              Contato
            </a>
            <a href={LANDING_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>

          {/* Disclaimer Completo */}
          <div className="text-slate-500 text-sm space-y-3 max-w-3xl mx-auto">
            <p className="font-semibold text-slate-400">
              BetChecker © 2025 - Ferramenta de análise estatística para eSoccer
            </p>
            <p className="leading-relaxed">
              <strong className="text-slate-400">Aviso importante:</strong> Apostas envolvem risco financeiro.
              BetChecker é uma ferramenta de análise de dados baseada em histórico semanal e não garante lucros.
              Os resultados passados não garantem resultados futuros. Jogue com responsabilidade e apenas com
              valores que você pode perder. Apenas para maiores de 18 anos.
            </p>
            <p className="text-xs">
              Contato: {LANDING_CONFIG.email} | WhatsApp: +55 11 5304-5420
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
