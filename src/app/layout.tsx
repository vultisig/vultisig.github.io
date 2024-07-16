import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vultisig",
  description: "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
  metadataBase: new URL("https://vultisig.com"),
  keywords: ['Vultisig', 'Vultisig Docs', ' Vultisig help', 'Vultisig support', ' Vultisig customer service','Vultisig asset exchange'],
  authors: [{ name: 'Vultisig' }, { name: 'Vultisig', url: 'Vultisig.com' }],
  openGraph: {
    siteName: 'Vultisig',
    url: 'https://vultisig.com',
    images: 'https://vultisig.com/img/doc-header.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
