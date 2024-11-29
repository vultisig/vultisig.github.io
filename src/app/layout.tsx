import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import "./styles/index.scss";

import GoogleAnalytics from "./shared-components/GoogleAnalytics";
import CookieBanner from "../app/shared-components/CookieBanner";
import MavaWidget from "./shared-components/MavaWidget";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vultisig - Multisig Crypto Vault",
  description:
    "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
  metadataBase: new URL("https://vultisig.com"),
  keywords: [
    "Vultisig",
    "Vultisig Docs",
    "Vultisig help",
    "Vultisig support",
    "Vultisig customer service",
    "Vultisig asset exchange",
  ],
  authors: [{ name: "Vultisig" }, { name: "Vultisig", url: "Vultisig.com" }],
  openGraph: {
    siteName: "Vultisig",
    title: "Vultisig - Multisig Crypto Vault",
    description:
      "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
    url: "https://vultisig.com",
    type: "website",
    images: "https://vultisig.com/img/home-thumbnail.png",
  },
  twitter: {
    site: "vultisig.com",
    card: "summary_large_image",
    title: "Vultisig - Multisig Crypto Vault",
    description:
      "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
    images: "https://vultisig.com/img/home-thumbnail.png",
  },
  icons: {
    icon: "logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MavaWidget />
      <GoogleAnalytics />
      <Script
        id="appsflyer-sdk"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(t,e,n,s,a,c,i,o,p){
              t.AppsFlyerSdkObject=a,t.AF=t.AF||function(){
                (t.AF.q=t.AF.q||[]).push([Date.now()].concat(Array.prototype.slice.call(arguments)))
              },
              t.AF.id=t.AF.id||i,t.AF.plugins={},
              o=e.createElement(n),
              p=e.getElementsByTagName(n)[0],
              o.async=1,
              o.src="https://websdk.appsflyer.com?"+(c.length>0?"st="+c.split(",").sort().join(",")+"&":"")+(i.length>0?"af_id="+i:""),
              p.parentNode.insertBefore(o,p)
            }
            (window,document,"script",0,"AF","banners",{banners: {key: "b00769bd-3ac9-4c82-a921-dcd82060413c"}});
            AF('banners', 'showBanner');
          `,
        }}
      />
      <body className={montserrat.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
