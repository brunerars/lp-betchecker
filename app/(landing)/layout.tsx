import { Metadata } from 'next';
import Script from 'next/script';
import { LANDING_CONFIG } from './config';

export const metadata: Metadata = {
  metadataBase: new URL(LANDING_CONFIG.productUrl),
  title: 'BetChecker - Análise Profissional para eSoccer | Multi-Modalidade',
  description: 'Análise automática em TODAS as modalidades (6, 8, 10, 12min). Grade oficial e teste. R$ 79/mês.',
  keywords: ['esoccer', 'análise', 'apostas', 'fifa', 'grades', 'estatísticas', 'multi-modalidade'],
  openGraph: {
    title: 'BetChecker - Análise Profissional para eSoccer',
    description: 'Análise automática em todas as modalidades. Grade oficial e teste.',
    images: ['/images/og-image.png'],
    type: 'website',
    url: LANDING_CONFIG.productUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BetChecker - Análise Profissional para eSoccer',
    description: 'Análise automática em todas as modalidades. Grade oficial e teste.',
    images: ['/images/og-image.png'],
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Facebook Pixel */}
      {LANDING_CONFIG.pixelId && (
        <>
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${LANDING_CONFIG.pixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${LANDING_CONFIG.pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Lead tracking para todos os CTAs */}
      <Script id="track-cta" strategy="afterInteractive">
        {`
          document.addEventListener('DOMContentLoaded', function() {
            const ctaButtons = document.querySelectorAll('a[href*="wa.me"]');
            ctaButtons.forEach(btn => {
              btn.addEventListener('click', function() {
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'Lead', {
                    content_name: 'WhatsApp CTA Click',
                    value: ${LANDING_CONFIG.price},
                    currency: '${LANDING_CONFIG.currency}'
                  });
                }
              });
            });
          });
        `}
      </Script>

      {children}
    </>
  );
}
