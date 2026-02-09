# BetChecker Landing Page - Especificação Completa V3

## 🎯 VISÃO GERAL DO PROJETO

**URL:** https://betchecker.com.br  
**Versão Atual:** V3 (Grade automática + Grade Personalizada (oficial/teste)). 
**Stack:** Next.js 14+, TypeScript, Tailwind CSS  
**Objetivo:** Converter tráfego pago (Facebook Ads) em assinantes via WhatsApp

---

## 📊 INFORMAÇÕES DO PRODUTO (V3 - ATUALIZADO)

### Metodologia de Análise V3
```
BetChecker analisa histórico SEMANAL da dupla (máximo 2 semanas) em TODAS as modalidades de eSoccer.

Diferencial V3:
✅ Busca automática em 4 modalidades: 6min, 8min, 10min, 12min
✅ Análise ACUMULADA de todas as modalidades
✅ Histórico: últimas 1-2 semanas (quantidade varia por dupla)
✅ Transparência total: você vê quantos jogos de cada modalidade foram analisados
```

**Copy CORRETO para usar na LP:**
- ❌ EVITAR: "últimas 100 partidas"
- ❌ EVITAR: "2 semanas de dados"
- ✅ USAR: "histórico semanal completo (até 2 semanas)"
- ✅ USAR: "análise em TODAS as modalidades (6min, 8min, 10min, 12min)"
- ✅ USAR: "dados acumulados de todas as modalidades de eSoccer"

### Plano e Preço
```
💎 BETCHECKER PRO - R$ 79/mês

Incluído:
✅ Consultas ilimitadas
✅ Grade automática (oficial + teste)
✅ Análise em todas as modalidades (6, 8, 10, 12min)
✅ Sistema de favoritos
✅ Grade teste (backtesting de estratégias)
✅ Suporte prioritário via WhatsApp (até 24h)
✅ Garantia de preço: primeiros assinantes têm prioridade em aumentos futuros

🎁 TESTE GRÁTIS: 3 dias (sob demanda - controle manual)
📌 GARANTIA: Devolução total em 7 dias
```

**Importante para Copy:**
- SEM plano gratuito permanente (removido)
- Teste de 3 dias disponível mediante solicitação
- Preço promocional R$ 79/mês com garantia de prioridade em aumentos futuros
- Único plano: tudo incluído

### Contatos Oficiais
```
📱 WhatsApp: +55 11 5304-5420
📧 Email: suporte@betchecker.com.br
📸 Instagram: @bet.checker
🔗 Link: https://www.instagram.com/bet.checker/
🌐 Site: https://betchecker.com.br
```

---

## 🏗️ ESTRUTURA DA LANDING PAGE

### Arquitetura de Arquivos
```
app/(landing)/
├── page.tsx                          # Orquestrador principal
├── layout.tsx                        # Metadata + Facebook Pixel
├── config.ts                         # Configurações (WhatsApp, preço, etc)
└── components/
    ├── sections/
    │   ├── HeroSection.tsx           # 1. Hero com CTA principal
    │   ├── ProblemSection.tsx        # 2. Dores do público (4 cards)
    │   ├── TrustSection.tsx          # 3. O que NÃO somos vs O que somos
    │   ├── HowItWorksSection.tsx     # 4. Como funciona (4 steps)
    │   ├── TransparencySection.tsx   # 5. Metodologia transparente
    │   ├── ComparisonSection.tsx     # 6. Antes vs Depois
    │   ├── FeaturesSection.tsx       # 7. Recursos (6 features)
    │   ├── FAQSection.tsx            # 8. 10 perguntas frequentes
    │   ├── GuaranteeSection.tsx      # 9. Garantia 7 dias
    │   ├── CTASection.tsx            # 10. CTA final
    │   └── FooterSection.tsx         # 11. Footer + compliance
    └── ui/
        ├── CTAButton.tsx             # Botão reutilizável
        ├── FeatureCard.tsx           # Card de feature
        └── StepItem.tsx              # Item de passo (How It Works)
```

---

## 🎨 DESIGN SYSTEM

### Paleta de Cores
```css
/* Backgrounds */
--bg-primary: slate-900
--bg-secondary: slate-850  
--bg-tertiary: slate-800

/* CTAs */
--cta-primary: green-600
--cta-primary-hover: green-700
--cta-accent: green-500

/* Text */
--text-heading: white
--text-body: slate-300
--text-muted: slate-400

/* Borders & Cards */
--border: slate-700/50
--card-bg: slate-900/50 with backdrop-blur
--shadow-primary: shadow-lg shadow-green-900/50
```

### Tipografia
```css
/* Headings */
h1: text-5xl md:text-6xl font-bold leading-tight
h2: text-3xl md:text-4xl font-bold leading-tight
h3: text-xl md:text-2xl font-bold

/* Body */
p-large: text-xl text-slate-300
p-body: text-lg text-slate-300
p-small: text-sm text-slate-400
```

### Espaçamento
```css
/* Sections */
section-padding: py-20
section-gap: space-y-16

/* Components */
card-padding: p-6 md:p-8
grid-gap: gap-6 md:gap-8

/* Containers */
max-width: max-w-6xl
max-width-narrow: max-w-4xl
max-width-text: max-w-2xl
```

### Componentes Visuais
```css
/* Card Padrão */
.card {
  @apply bg-slate-900/50 backdrop-blur rounded-xl border border-slate-700/50;
}

/* Hover Interativo */
.interactive {
  @apply transition-all duration-300 hover:scale-105;
}

/* Gradiente Hero */
.gradient-hero {
  @apply bg-gradient-to-b from-slate-900 via-slate-850 to-slate-800;
}

/* Transição entre seções */
.section-transition {
  @apply h-32 bg-gradient-to-b from-transparent to-slate-800;
}
```

---

## 📝 CONFIGURAÇÃO (config.ts)
```typescript
// app/(landing)/config.ts

export const LANDING_CONFIG = {
  // Contatos
  whatsappNumber: '5511530454320',  // Formato internacional sem + e sem espaços
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
  `https://wa.me/${LANDING_CONFIG.whatsappNumber}?text=${LANDING_CONFIG.whatsappMessage}`;

// Helper: Preço formatado
export const getFormattedPrice = () => 
  `R$ ${LANDING_CONFIG.price}/mês`;
```

---

## 📄 SEÇÕES DA LANDING PAGE (Especificação Detalhada)

### 1. HeroSection

**Objetivo:** Conversão imediata com proposta de valor clara

**Copy Atualizado V3:**
```typescript
Logo/Brand: "BetChecker"
Tagline: "Análise profissional para eSoccer"

Headline Principal:
"Dados reais. Decisões informadas. Sem promessas milagrosas."

Subheadline:
"BetChecker analisa o histórico semanal completo de cada dupla em TODAS as 
modalidades (6, 8, 10, 12min). Você vê DE ONDE vêm os números e decide com inteligência."

CTA Principal: "Começar Agora - R$ 79/mês"
CTA Secundário: "💬 Chamar no WhatsApp"

Badges abaixo do CTA:
✓ Teste grátis 3 dias (sob consulta)
✓ Garantia de 7 dias
✓ Preço fixo para early adopters
```

**Estrutura do Componente:**
```typescript
// app/(landing)/components/sections/HeroSection.tsx

interface HeroSectionProps {
  whatsappLink: string;
}

export default function HeroSection({ whatsappLink }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-850 to-slate-800">
      {/* Background pattern opcional */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-32">
        {/* Logo/Brand */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">BetChecker</h1>
          <p className="text-green-400 text-lg">Análise profissional para eSoccer</p>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-4" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 leading-tight max-w-4xl mx-auto">
          Dados reais. Decisões informadas.<br/>
          Sem promessas milagrosas.
        </h2>

        {/* Subheadline */}
        <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-10">
          BetChecker analisa o histórico semanal completo de cada dupla em TODAS as 
          modalidades (6, 8, 10, 12min). Você vê DE ONDE vêm os números e decide com inteligência.
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
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
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
          <Image 
            src="/images/dashboard-v3.png" 
            alt="Dashboard BetChecker V3"
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
```

---

### 2. ProblemSection

**Objetivo:** Identificação com as dores do público

**4 Cards (Grid responsivo):**
```typescript
// app/(landing)/components/sections/ProblemSection.tsx

export default function ProblemSection() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          O problema de apostar sem análise
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16 max-w-2xl mx-auto">
          A maioria perde dinheiro porque aposta no "feeling", sem dados concretos.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Tempo */}
          <FeatureCard 
            emoji="⏱️"
            title="Falta de Tempo"
            description="Analisar manualmente histórico de cada dupla em todas as modalidades leva horas que você não tem."
          />

          {/* Card 2: Dados Dispersos */}
          <FeatureCard 
            emoji="📊"
            title="Dados Dispersos"
            description="Informações espalhadas em sites diferentes, sem comparação direta entre jogadores e modalidades."
          />

          {/* Card 3: Forma Atual */}
          <FeatureCard 
            emoji="🎯"
            title="Forma Semanal"
            description="Histórico antigo não importa. Você precisa saber quem está jogando bem NAS ÚLTIMAS SEMANAS."
          />

          {/* Card 4: Manipulação */}
          <FeatureCard 
            emoji="🎭"
            title="Manipulação?"
            description="Esoccer pode ter manipulação. Mas apostar SEM dados é pior. BetChecker mostra padrões reais."
          />
        </div>
      </div>
    </section>
  );
}
```

---

### 3. TrustSection (NOVA)

**Objetivo:** Posicionamento anti-influencer
```typescript
// app/(landing)/components/sections/TrustSection.tsx

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
              <div className="text-4xl">❌</div>
              <h3 className="text-2xl font-bold text-white">O que NÃO fazemos</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1 text-xl">•</span>
                <span>Prometemos "lucro garantido"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1 text-xl">•</span>
                <span>Vendemos "método secreto"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1 text-xl">•</span>
                <span>Damos "dicas VIP"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1 text-xl">•</span>
                <span>Escondemos a metodologia</span>
              </li>
            </ul>
          </div>

          {/* O que somos */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-8 rounded-xl border-2 border-green-900/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">✅</div>
              <h3 className="text-2xl font-bold text-white">O que fazemos</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 text-xl">•</span>
                <span>Mostramos dados concretos e atualizados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 text-xl">•</span>
                <span>Explicamos toda a metodologia</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 text-xl">•</span>
                <span>Transparência total nos cálculos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1 text-xl">•</span>
                <span>Você decide. Sempre.</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-slate-400 mt-10 italic">
          "Ferramenta de análise, não promessa de lucro."
        </p>
      </div>
    </section>
  );
}
```

---

### 4. HowItWorksSection

**Objetivo:** Explicar funcionamento com foco em transparência

**4 Steps (layout alternado - zigzag):**
```typescript
// app/(landing)/components/sections/HowItWorksSection.tsx

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-850 to-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Como funciona o BetChecker
        </h2>
        <p className="text-xl text-slate-300 text-center mb-20 max-w-3xl mx-auto">
          Ferramenta profissional que automatiza análise estatística com transparência total.
        </p>

        <div className="space-y-20">
          {/* Step 1: Próximos Jogos */}
          <StepItem 
            number={1}
            title="Veja todos os jogos + Metodologia completa"
            description="Não precisa favoritar nada. Acesse 'Próximos Jogos' e veja análises das próximas 48h. Você vê QUANTOS jogos foram analisados, DE QUAIS modalidades (6, 8, 10, 12min) e o período amostral exato."
            imageSrc="/images/proximos-jogos-v3.png"
            imageAlt="Tela Próximos Jogos V3"
            reversed={false}
          />

          {/* Step 2: Análise Multi-Modalidade */}
          <StepItem 
            number={2}
            title="Análise acumulada de TODAS as modalidades"
            description="BetChecker busca automaticamente em 6min, 8min, 10min e 12min. Depois faz análise ACUMULADA do histórico semanal (até 2 semanas). Considera se jogador está em casa ou fora. Transparência total: sem caixa-preta."
            imageSrc="/images/analise-multimodalidade.png"
            imageAlt="Análise Multi-Modalidade"
            reversed={true}
          />

          {/* Step 3: Grades (Oficial + Teste) */}
          <StepItem 
            number={3}
            title="Monte sua grade (oficial ou teste)"
            description="Adicione jogos à grade com 1 clique. Use a Grade Oficial para apostas reais. Use a Grade Teste para experimentar estratégias sem risco. Tudo separado e organizado."
            imageSrc="/images/grade-dual.png"
            imageAlt="Grade Oficial e Teste"
            reversed={false}
          />

          {/* Step 4: Gestão OCR */}
          <StepItem 
            number={4}
            title="Gestão de banca automática (OCR)"
            description="Tire print da sua aposta. BetChecker extrai AUTOMATICAMENTE: valor, odd, casa de aposta. Calcula ROI em tempo real. Multi-conta: gerencie várias casas em um só lugar."
            imageSrc="/images/ocr-gestao.png"
            imageAlt="OCR e Gestão de Banca"
            reversed={true}
          />
        </div>
      </div>
    </section>
  );
}
```

---

### 5. TransparencySection (NOVA)

**Objetivo:** Combater objeção "falta transparência estatística"
```typescript
// app/(landing)/components/sections/TransparencySection.tsx

export default function TransparencySection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Cada número tem uma fonte. Sempre.
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
          Quando mostramos "32% de probabilidade de empate", você vê exatamente DE ONDE veio esse número.
        </p>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10">
            {/* O que você vê */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                O que você vê no BetChecker:
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl font-bold">✓</span>
                  <span><strong className="text-white">Modalidades analisadas:</strong> "48 jogos (6min: 12, 8min: 15, 10min: 11, 12min: 10)"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl font-bold">✓</span>
                  <span><strong className="text-white">Período amostral:</strong> "Últimos 9 dias"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl font-bold">✓</span>
                  <span><strong className="text-white">Confrontos diretos:</strong> "18 jogos entre essa dupla"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl font-bold">✓</span>
                  <span><strong className="text-white">Histórico completo:</strong> Lista detalhada de todas as partidas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl font-bold">✓</span>
                  <span><strong className="text-white">Metodologia:</strong> Fórmulas estatísticas explicadas na FAQ</span>
                </li>
              </ul>
            </div>

            {/* O que você NÃO vê em outras plataformas */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">❌</span>
                Outras plataformas:
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl font-bold">✗</span>
                  <span>Só mostram "32%" sem contexto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl font-bold">✗</span>
                  <span>Não explicam quais modalidades foram usadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl font-bold">✗</span>
                  <span>Não mostram período amostral</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl font-bold">✗</span>
                  <span>"Algoritmo secreto" (caixa-preta)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl font-bold">✗</span>
                  <span>Sem acesso ao histórico bruto</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-10 border-t border-slate-700/50">
            <p className="text-center text-lg text-slate-300">
              <strong className="text-white text-xl">Sem segredos. Sem "algoritmo mágico".</strong><br/>
              Só matemática transparente aplicada ao histórico semanal real de cada dupla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### 6. ComparisonSection

**Mantém estrutura, ajusta bullets:**
```typescript
// app/(landing)/components/sections/ComparisonSection.tsx

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
              <div className="text-4xl">❌</div>
              <h3 className="text-2xl font-bold text-white">Sem BetChecker</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Analisar manualmente cada modalidade (6, 8, 10, 12min)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Anotar tudo em planilhas desorganizadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Perder jogos por falta de tempo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Apostar sem saber forma semanal dos jogadores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Dados dispersos em vários sites</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Confundir estratégias por desorganização</span>
              </li>
            </ul>
          </div>

          {/* Com BetChecker */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-8 rounded-xl border-2 border-green-900/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">✅</div>
              <h3 className="text-2xl font-bold text-white">Com BetChecker</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Análise automática em TODAS as modalidades</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Dashboard organizado e visual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Veja TODOS os jogos disponíveis em um lugar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Decisão baseada em forma semanal atual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Transparência total: você vê DE ONDE vêm os números</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Grade teste separada + OCR automático</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### 7. FeaturesSection
```typescript
// app/(landing)/components/sections/FeaturesSection.tsx

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Recursos profissionais incluídos
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16 max-w-2xl mx-auto">
          Tudo que você precisa para apostar com inteligência em um único plano.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            emoji="📅"
            title="Próximos Jogos"
            description="Veja todos os jogos disponíveis para as próximas 48h com análise completa de probabilidade."
          />

          <FeatureCard 
            emoji="🎲"
            title="Multi-Modalidade"
            description="Análise acumulada em 6min, 8min, 10min e 12min. Histórico semanal completo (até 2 semanas)."
          />

          <FeatureCard 
            emoji="🏠"
            title="Home/Away"
            description="Sistema considera se jogador está em casa ou fora para análise mais precisa."
          />

          <FeatureCard 
            emoji="✅"
            title="Grade Oficial"
            description="Organize os jogos que você realmente vai acompanhar na sua grade principal."
          />

          <FeatureCard 
            emoji="🧪"
            title="Grade Teste"
            description="Experimente novas estratégias separadamente sem bagunçar sua grade oficial (backtesting)."
          />

          <FeatureCard 
            emoji="📸"
            title="OCR Automático"
            description="Tire print da aposta. BetChecker extrai dados automaticamente e calcula ROI."
          />

          <FeatureCard 
            emoji="🔍"
            title="Filtros Avançados"
            description="Filtre por liga, período do dia, tipo de grade, modalidade ou apenas favoritos."
          />

          <FeatureCard 
            emoji="🏦"
            title="Multi-Conta"
            description="Gerencie apostas de várias casas (Bet365, Betano, etc) em um único dashboard."
          />

          <FeatureCard 
            emoji="📊"
            title="Transparência Total"
            description="Você vê quantos jogos foram analisados, de quais modalidades, período amostral completo."
          />
        </div>
      </div>
    </section>
  );
}
```

---

### 8. FAQSection (10 Perguntas)
```typescript
// app/(landing)/components/sections/FAQSection.tsx

const faqs = [
  {
    question: "BetChecker garante lucro?",
    answer: `NÃO. Nenhuma ferramenta garante lucro em apostas.

BetChecker mostra probabilidades baseadas em histórico semanal real. Mas:
- Não controlamos o resultado dos jogos
- Não temos "método secreto"
- Estatística não é certeza

O que BetChecker GARANTE:
✅ Dados precisos e atualizados
✅ Cálculos estatísticos corretos
✅ Transparência total na metodologia
✅ Informação para VOCÊ decidir melhor

Aposte com responsabilidade. Só arrisque o que pode perder.`
  },
  {
    question: "Como funciona a análise multi-modalidade?",
    answer: `BetChecker busca automaticamente o histórico semanal da dupla em 4 modalidades:
- 6 minutos
- 8 minutos
- 10 minutos
- 12 minutos

Depois faz análise ACUMULADA de todas elas, cobrindo até 2 semanas de histórico.

Você vê exatamente quantos jogos de cada modalidade foram analisados.

Exemplo: "48 jogos total (6min: 12, 8min: 15, 10min: 11, 12min: 10)"

Transparência total.`
  },
  {
    question: "Como funciona o teste grátis de 3 dias?",
    answer: `O teste de 3 dias está disponível SOB DEMANDA.

Como solicitar:
1. Manda mensagem no WhatsApp: +55 11 5304-5420
2. Pedimos seu email
3. Liberamos acesso COMPLETO por 3 dias
4. Você testa TUDO: grade, OCR, análises, filtros
5. Decide se quer assinar

Sem cartão de crédito.
Sem renovação automática.

Após 3 dias, se quiser continuar, é só avisar e fazemos a cobrança.`
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: `Sim, sem fidelidade.

Funcionamento:
- Assinatura mensal (R$ 79/mês)
- Se não renovar, acesso é desativado no próximo mês
- Sem multa, sem burocracia

GARANTIA DE 7 DIAS:
Se você assinar e não gostar, devolvemos 100% do valor em até 24h.
Só mandar: "Quero cancelar".

Risco zero.`
  },
  {
    question: "Qual a diferença entre Grade Oficial e Teste?",
    answer: `GRADE OFICIAL:
Para jogos que você realmente vai apostar. Organiza suas apostas ativas.

GRADE TESTE:
Para experimentar estratégias SEM risco.
Funciona como backtesting: você testa duplas, filtros, períodos antes de apostar dinheiro real.

Ambas são completamente independentes.
Você pode usar filtros diferentes em cada uma.

Exemplo prático:
- Grade Oficial: Apostas confirmadas do dia
- Grade Teste: Testando se duplas de 10min têm mais empate que 8min`
  },
  {
    question: "O que é OCR e como funciona?",
    answer: `OCR = Reconhecimento Óptico de Caracteres (extração automática de dados de imagens).

COMO FUNCIONA NO BETCHECKER:
1. Você faz uma aposta em qualquer casa (Bet365, Betano, etc)
2. Tira print da tela do bilhete
3. Cola o print no BetChecker
4. Sistema extrai AUTOMATICAMENTE:
   • Valor apostado
   • Odd (cotação)
   • Casa de aposta
   • Data/hora
5. Calcula ROI em tempo real

MULTI-CONTA:
Gerencie apostas de várias casas em um só lugar.
Dashboard unificado mostra: lucro total, ROI por casa, melhores estratégias.

Sem digitação manual. Sem planilha.`
  },
  {
    question: "Como posso garantir o acesso confiável à plataforma?",
    answer: `SEGURANÇA:
🔒 SSL/HTTPS em todas as páginas
🔒 Dados criptografados
🔒 Senha com hash bcrypt
🔒 Sem compartilhamento com terceiros

DISPONIBILIDADE:
⚡ Hospedado em servidor próprio (VPS dedicada)
⚡ Uptime médio: 99.5%+
⚡ Backup automático diário
⚡ Monitoramento 24/7

PERFORMANCE:
🚀 Cache Redis (respostas em < 1s)
🚀 CDN Cloudflare (velocidade global)
🚀 API BetsAPI enterprise (99.9% uptime)

SUPORTE:
📱 WhatsApp: +55 11 5304-5420
📧 Email: suporte@betchecker.com.br
⏱️ Resposta: até 24h`
  },
  {
    question: "Como os jogos são analisados?",
    answer: `METODOLOGIA COMPLETA (PASSO A PASSO):

1️⃣ COLETA DE DADOS
- Fonte: Dados públicos de partidas oficiais
- Período: Histórico semanal (até 2 semanas)
- Modalidades: 6min, 8min, 10min, 12min (todas)
- Atualização: Em tempo real (cache de 1h)

2️⃣ FILTRAGEM
- Isolamos confrontos diretos entre a dupla
- Exemplo: Se Thunder jogou 100 partidas no total, mas só 18 foram contra Kray, usamos essas 18

3️⃣ CÁLCULO DE PROBABILIDADES
- Empate: (total empates / total jogos) × 100
- Vitória P1: (vitórias P1 / total jogos) × 100
- Vitória P2: (vitórias P2 / total jogos) × 100

4️⃣ ANÁLISE ACUMULADA
- Combina dados de TODAS as modalidades
- Peso proporcional ao número de jogos de cada modalidade

5️⃣ VALIDAÇÃO DE AMOSTRA
- 🟢 Amostra forte: 31+ jogos
- 🟡 Amostra média: 15-30 jogos
- 🔴 Amostra fraca: < 15 jogos

VOCÊ VÊ TUDO:
Quantidade de jogos, quais modalidades, período amostral, histórico completo.

Sem segredos. Sem "algoritmo mágico".
Só matemática transparente.`
  },
  {
    question: "O que diferencia o BetChecker de outras plataformas?",
    answer: `DIFERENCIAIS ÚNICOS:

📊 TRANSPARÊNCIA DE CÁLCULO
- BetChecker: Você vê DE ONDE vêm os números (modalidades, quantidade, período)
- Outras: "Caixa-preta", sem explicação

🎲 ANÁLISE MULTI-MODALIDADE
- BetChecker: Busca em 6, 8, 10 e 12min automaticamente
- Outras: Só uma modalidade ou análise manual

🤖 GRADE AUTOMÁTICA
- BetChecker: Favorita jogadores, grade vem pronta
- Outras: Precisa pesquisar manualmente

📸 OCR DE APOSTAS
- BetChecker: Cola print, extrai dados automaticamente
- Outras: Não existe

🧪 GRADE TESTE (BACKTESTING)
- BetChecker: Testa estratégia em histórico antes de apostar
- Outras: Não existe

🏦 MULTI-CONTA
- BetChecker: Gerencia várias casas numa dashboard
- Outras: Não existe

💸 HONESTIDADE
- BetChecker: NUNCA prometemos lucro
- Outras: "Ganho garantido", "Método secreto" 🤡

EM RESUMO:
BetChecker é ferramenta PROFISSIONAL.
Não venda de sonho.`
  },
  {
    question: "E se eu não gostar?",
    answer: `GARANTIA DE 7 DIAS (devolução total):

Se você assinar e não gostar, devolvemos 100% do valor dentro de 7 dias.

COMO FUNCIONA:
1️⃣ Manda mensagem: "Quero cancelar"
2️⃣ PIX de volta em até 24h
3️⃣ Fim. Simples assim.

Sem perguntas.
Sem burocracia.

POR QUÊ?
Porque confiamos que, se você testar de verdade, vai querer ficar.
E se não ficar, não tem problema.

Risco ZERO.
Teste sem medo.

📱 WhatsApp: +55 11 5304-5420`
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Perguntas frequentes
        </h2>
        <p className="text-xl text-slate-300 text-center mb-12">
          Tudo que você precisa saber antes de começar
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index}
              className="bg-slate-900/50 backdrop-blur p-6 rounded-xl border border-slate-700/50 group"
            >
              <summary className="font-semibold text-white cursor-pointer text-lg flex items-center justify-between">
                <span>{faq.question}</span>
                <svg 
                  className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-slate-300 whitespace-pre-line">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 9. GuaranteeSection (NOVA)
```typescript
// app/(landing)/components/sections/GuaranteeSection.tsx

export default function GuaranteeSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-900/20 to-green-800/20 border-y border-green-900/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          GARANTIA DE 7 DIAS
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          💸 E se eu não gostar?
        </h2>
        
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Devolução TOTAL em 7 dias. Sem perguntas. Sem burocracia.
        </p>

        <div className="bg-slate-900/50 backdrop-blur rounded-xl p-8 border border-slate-700/50">
          <h3 className="text-xl font-bold text-white mb-8">Como funciona:</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="text-center">
              <div className="text-5xl mb-4">1️⃣</div>
              <p className="text-slate-300 text-lg">
                Manda mensagem:<br/>
                <strong className="text-white">"Quero cancelar"</strong>
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">2️⃣</div>
              <p className="text-slate-300 text-lg">
                PIX de volta<br/>
                <strong className="text-white">em até 24h</strong>
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">3️⃣</div>
              <p className="text-slate-300 text-lg">
                Fim.<br/>
                <strong className="text-white">Simples assim.</strong>
              </p>
            </div>
          </div>
        </div>

        <p className="text-slate-400 mt-8 italic text-lg">
          "Porque confiamos que, se você testar de verdade, vai querer ficar."
        </p>
      </div>
    </section>
  );
}
```

---

### 10. CTASection
```typescript
// app/(landing)/components/sections/CTASection.tsx

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
```

---

### 11. FooterSection
```typescript
// app/(landing)/components/sections/FooterSection.tsx

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
```

---

## 🎨 COMPONENTES REUTILIZÁVEIS (UI)

### CTAButton.tsx
```typescript
// app/(landing)/components/ui/CTAButton.tsx

import { ButtonHTMLAttributes } from 'react';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'md' | 'lg';
  showWhatsAppIcon?: boolean;
  children: React.ReactNode;
}

export default function CTAButton({
  href,
  variant = 'primary',
  size = 'md',
  showWhatsAppIcon = false,
  children,
  className = '',
  ...props
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-3 font-semibold rounded-xl transition-all transform hover:scale-105';
  
  const variantStyles = {
    primary: 'bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-900/50',
    secondary: 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white',
    white: 'bg-white text-green-700 hover:bg-green-50 shadow-xl'
  };

  const sizeStyles = {
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-5 text-lg'
  };

  const handleClick = () => {
    // Track Lead event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'WhatsApp CTA Click',
        value: 79,
        currency: 'BRL'
      });
    }
  };

  return (
    
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {showWhatsAppIcon && (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )}
      {children}
    </a>
  );
}
```

---

### FeatureCard.tsx
```typescript
// app/(landing)/components/ui/FeatureCard.tsx

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ emoji, title, description, className = '' }: FeatureCardProps) {
  return (
    <div className={`bg-slate-900/50 backdrop-blur p-6 rounded-xl border border-slate-700/50 hover:border-green-600/50 transition-all ${className}`}>
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
}
```

---

### StepItem.tsx
```typescript
// app/(landing)/components/ui/StepItem.tsx

import Image from 'next/image';

interface StepItemProps {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export default function StepItem({ 
  number, 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  reversed = false 
}: StepItemProps) {
  const flexDirection = reversed ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`flex flex-col ${flexDirection} items-center gap-8`}>
      {/* Texto */}
      <div className="md:w-1/2">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
            <span className="text-xl font-bold text-white">{number}</span>
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-slate-300 text-lg leading-relaxed">{description}</p>
      </div>

      {/* Imagem */}
      <div className="md:w-1/2">
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
          <Image 
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
```

---

## 📱 TRACKING & ANALYTICS

### Layout com Facebook Pixel
```typescript
// app/(landing)/layout.tsx

import { Metadata } from 'next';
import Script from 'next/script';
import { LANDING_CONFIG } from './config';

export const metadata: Metadata = {
  title: 'BetChecker - Análise Profissional para eSoccer | Multi-Modalidade',
  description: 'Análise semanal completa em TODAS as modalidades (6, 8, 10, 12min). Grade automática + OCR. Transparência total. R$ 79/mês.',
  keywords: ['esoccer', 'análise', 'apostas', 'fifa', 'grades', 'estatísticas', 'multi-modalidade', 'ocr'],
  openGraph: {
    title: 'BetChecker - Análise Profissional para eSoccer',
    description: 'Histórico semanal completo em todas as modalidades. Grade automática + OCR.',
    images: ['/og-image.png'], // 1200x630px
    type: 'website',
    url: LANDING_CONFIG.productUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BetChecker - Análise Profissional para eSoccer',
    description: 'Histórico semanal completo. Multi-modalidade. Grade automática + OCR.',
    images: ['/og-image.png'],
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
          style={{display: 'none'}}
          src={`https://www.facebook.com/tr?id=${LANDING_CONFIG.pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>

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
```

---

### Page (Orquestrador)
```typescript
// app/(landing)/page.tsx

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
```

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### Fase 1: Setup (30min)
- [ ] Criar estrutura de pastas
- [ ] Criar `config.ts` com dados corretos
- [ ] Criar `layout.tsx` com Pixel e metadata
- [ ] Criar `page.tsx` skeleton

### Fase 2: Componentes UI (1h)
- [ ] CTAButton.tsx
- [ ] FeatureCard.tsx
- [ ] StepItem.tsx

### Fase 3: Sections Principais (4-5h)
- [ ] HeroSection (copy atualizado V3)
- [ ] ProblemSection (4 cards)
- [ ] TrustSection (NOVA - anti-influencer)
- [ ] HowItWorksSection (4 steps multi-modalidade)
- [ ] TransparencySection (NOVA - metodologia)
- [ ] ComparisonSection
- [ ] FeaturesSection (9 features)
- [ ] FAQSection (10 perguntas)
- [ ] GuaranteeSection (NOVA - garantia 7 dias)
- [ ] CTASection
- [ ] FooterSection

### Fase 4: Assets (1h)
- [ ] Screenshots do dashboard V3
- [ ] Imagens de cada section
- [ ] OG Image (1200x630px)
- [ ] Converter para WebP

### Fase 5: Testes (1h)
- [ ] Responsividade (mobile, tablet, desktop)
- [ ] Links WhatsApp funcionando
- [ ] Pixel tracking (PageView + Lead)
- [ ] Performance (Lighthouse > 85)
- [ ] Spelling & grammar

### Fase 6: Deploy
- [ ] Build de produção
- [ ] Deploy Vercel/Netlify
- [ ] Validar URL final
- [ ] Testar em dispositivos reais

---

## 📸 ASSETS NECESSÁRIOS
```
/public/images/
├── dashboard-v3.png           # Hero (1200x700px)
├── proximos-jogos-v3.png      # Step 1 (800x500px)
├── analise-multimodalidade.png # Step 2 (800x500px)
├── grade-dual.png             # Step 3 (800x500px)
├── ocr-gestao.png             # Step 4 (800x500px)
└── og-image.png               # OpenGraph (1200x630px)
```

**Formato:** WebP (otimização automática com next/image)

---

## 🎯 MENSAGENS-CHAVE (Copiar Exatamente)

**NÃO USAR:**
- ❌ "últimas 100 partidas"
- ❌ "2 semanas de dados"
- ❌ "plano gratuito"

**USAR SEMPRE:**
- ✅ "histórico semanal completo (até 2 semanas)"
- ✅ "análise em TODAS as modalidades (6, 8, 10, 12min)"
- ✅ "dados acumulados de todas as modalidades"
- ✅ "R$ 79/mês (único plano)"
- ✅ "teste 3 dias (sob consulta)"
- ✅ "garantia 7 dias"
- ✅ "preço fixo para early adopters"

---

## 🚀 PRONTO PARA COMEÇAR

Esta especificação está COMPLETA e pronta para Claude Code implementar.

Cada seção tem:
✅ Copy exato atualizado para V3
✅ Estrutura de componente em TypeScript
✅ Classes Tailwind CSS
✅ Props e tipos definidos
✅ Integração com config.ts

**Próximo passo:** Abrir no VS Code com Claude Code e começar a implementar seção por seção.

Boa sorte! 🚀