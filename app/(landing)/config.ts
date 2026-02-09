// app/(landing)/config.ts

export const LANDING_CONFIG = {
  // Contatos
  whatsappNumber: '5511530454320',
  whatsappMessage: encodeURIComponent('Quero assinar o BetChecker - R$79/mês'),
  email: 'suporte@betchecker.com.br',
  instagram: 'https://www.instagram.com/bet.checker/',
  instagramHandle: '@bet.checker',

  // Produto
  productName: 'BetChecker',
  productUrl: 'https://betchecker.com.br',
  version: 'V3',

  // Preço (ÚNICO PLANO)
  price: 79,
  currency: 'BRL',
  planName: 'BetChecker Pro',

  // Trial
  trialDays: 3,
  trialAvailability: 'Sob demanda (solicite via WhatsApp)',

  // Garantia
  guaranteeDays: 7,

  // Tracking
  pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',

  // Metodologia (V3)
  analysisMethod: {
    period: 'histórico semanal (até 2 semanas)',
    modalities: ['6min', '8min', '10min', '12min'],
    modalitiesText: '6min, 8min, 10min e 12min',
    dataSource: 'Análise acumulada de todas as modalidades'
  }
} as const;

// Helper: Link do WhatsApp
export const getWhatsAppLink = () =>
  `https://wa.me/message/FOWTJ5RK5F4KG1`;

// Helper: Preço formatado
export const getFormattedPrice = () =>
  `R$ ${LANDING_CONFIG.price}/mês`;
