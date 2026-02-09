import { getWhatsAppLink } from './config';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import TrustSection from './components/sections/TrustSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import TransparencySection from './components/sections/TransparencySection';
import ComparisonSection from './components/sections/ComparisonSection';
import FeaturesSection from './components/sections/FeaturesSection';
import FAQSection from './components/sections/FAQSection';
import GuaranteeSection from './components/sections/GuaranteeSection';
import CTASection from './components/sections/CTASection';
import FooterSection from './components/sections/FooterSection';

export default function LandingPage() {
  const whatsappLink = getWhatsAppLink();

  return (
    <main>
      <HeroSection whatsappLink={whatsappLink} />
      <ProblemSection />
      <TrustSection />
      <HowItWorksSection />
      <TransparencySection />
      <ComparisonSection />
      <FeaturesSection />
      <FAQSection />
      <GuaranteeSection />
      <CTASection whatsappLink={whatsappLink} />
      <FooterSection />
    </main>
  );
}
