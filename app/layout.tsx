import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BetChecker - Análise Profissional para eSoccer',
  description: 'Análise semanal completa em TODAS as modalidades. Próximos Jogos e Gerado de Grade (Oficial/Teste). Transparência total. R$ 79/mês.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-slate-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
