import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '설코딩랩 - AI와 함께하는 미래',
  description: '인공지능 솔루션을 통해 비즈니스 혁신을 만들어가는 설코딩랩입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}