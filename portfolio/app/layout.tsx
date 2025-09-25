import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '설코딩랩 - AI와 함께하는 미래',
  description: '인공지능 솔루션을 통해 비즈니스 혁신을 만들어가는 설코딩랩입니다.',
  icons: {
    icon: [
      { url: '/images/favicon-removebg.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    apple: '/images/favicon-removebg.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}