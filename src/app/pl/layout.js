import { Montserrat, Oswald, Inter } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-oswald',
  weight: ['400', '600'],
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '600', '700'],
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

export default function PlLayout({ children }) {
  return (
    <html lang="pl" className={`${montserrat.variable} ${oswald.variable} ${inter.variable}`}>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}

