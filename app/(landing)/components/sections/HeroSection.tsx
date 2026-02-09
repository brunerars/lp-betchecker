import CTAButton from '../ui/CTAButton';
import PlaceholderImage from '../ui/PlaceholderImage';

interface HeroSectionProps {
  whatsappLink: string;
}

export default function HeroSection({ whatsappLink }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-850 to-slate-800">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-32">
        {/* Logo/Brand */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">BetChecker</h1>
          <p className="text-green-400 text-lg">Análise profissional para eSoccer</p>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-4" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6 leading-tight max-w-4xl mx-auto">
          Dados reais. Decisões informadas.<br />
          Sem promessas milagrosas.
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-300 text-center max-w-3xl mx-auto mb-10">
          Análise automática em todas as modalidades de eSoccer. Veja os dados reais e decida com inteligência.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4">
          <CTAButton
            href={whatsappLink}
            variant="primary"
            size="lg"
            showWhatsAppIcon
          >
            Começar Agora - R$ 79/mês
          </CTAButton>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 mt-4">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Teste 3 dias (sob consulta)
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Garantia 7 dias
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Preço fixo early adopters
            </span>
          </div>
        </div>

        {/* Screenshot do Dashboard */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
          <PlaceholderImage
            src="/images/home.png"
            alt="Dashboard Home BetChecker"
            width={1200}
            height={700}
            className="w-full"
            priority
          />
        </div>
      </div>

      {/* Transição suave para próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-800" />
    </section>
  );
}
