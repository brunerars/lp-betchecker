import CTAButton from '../ui/CTAButton';

interface CTASectionProps {
  whatsappLink: string;
}

export default function CTASection({ whatsappLink }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Pronto para profissionalizar suas análises?
        </h2>

        <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto">
          Junte-se aos apostadores que tomam decisões baseadas em dados, não em sorte.
        </p>

        <div className="flex flex-col items-center gap-6">
          <CTAButton
            href={whatsappLink}
            variant="white"
            size="lg"
            showWhatsAppIcon
          >
            Assinar Agora - R$ 79/mês
          </CTAButton>

          <p className="text-sm text-green-100">
            Teste 3 dias grátis (sob consulta) • Garantia 7 dias • Preço fixo early adopters
          </p>

          {/* Badges de confiança */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-sm text-green-100">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Teste 3 dias (solicite)
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Devolução em 7 dias
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Suporte via WhatsApp
            </span>
          </div>
        </div>

        <p className="text-sm text-green-50 mt-10 opacity-80">
          Ferramenta de análise estatística • Jogo responsável +18
        </p>
      </div>
    </section>
  );
}
