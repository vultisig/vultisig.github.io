import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from 'next/script';

const montserrat = Montserrat({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Vultisig - Multisig Crypto Vault",
  description: "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
  metadataBase: new URL("https://vultisig.com"),
  keywords: ['Vultisig', 'Vultisig Docs', ' Vultisig help', 'Vultisig support', ' Vultisig customer service', 'Vultisig asset exchange'],
  authors: [{ name: 'Vultisig' }, { name: 'Vultisig', url: 'Vultisig.com' }],
  openGraph: {
    siteName: 'Vultisig',
    title: "Vultisig - Multisig Crypto Vault",
    description: "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
    url: 'https://vultisig.com',
    type: "website",
    images: 'https://vultisig.com/img/home-thumbnail.png',
  },
  twitter: {
    site: "vultisig.com",
    card: "summary_large_image",
    title: "Vultisig - Multisig Crypto Vault",
    description: "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
    images: "https://vultisig.com/img/home-thumbnail.png"
  },
  icons: {
    icon: "logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
       <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
      />

      <Script id='' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
    </>
    
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
