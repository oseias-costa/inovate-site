import StyledComponentsRegistry from './lib/registry';
import localFont from 'next/font/local'
import { Roboto } from 'next/font/google';
import { GlobalStyle } from './GlobalStyle';
import Google from './components/global/Google';
import Meta from './components/global/Meta';

export const metadata = {
  title: 'Inovate Ambiental',
  description: 'Inovate Ambiental - Soluções em Processos Ambientais e Industriais',
}

const geometos = localFont({
  display: 'swap',
  src: [
    {
      path: '../public/font/Geometos.ttf',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--font-geometos'
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['500', '300']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Meta />
      <body className={`${geometos.variable} ${roboto.variable}`}>
        <Google />
        <GlobalStyle />
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
