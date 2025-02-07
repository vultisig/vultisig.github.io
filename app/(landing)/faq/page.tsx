import type { Metadata } from "next";

import Component from "@/components/pages/faq";

export const metadata: Metadata = {
  title: "Vultisig - FAQ",
  description:
    "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
  metadataBase: new URL("https://vultisig.com"),
  keywords: [
    "Vultisig",
    "Vultisig FAQ",
    "Vultisig Docs",
    " Vultisig help",
    "Vultisig support",
    " Vultisig customer service",
    "Vultisig asset exchange",
  ],
  authors: [{ name: "Vultisig" }, { name: "Vultisig", url: "Vultisig.com" }],
  openGraph: {
    siteName: "Vultisig",
    title: "Vultisig - FAQ",
    description:
      "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
    url: "https://vultisig.com/faq",
    type: "website",
    images: "https://vultisig.com/thumbnails/faq.png",
  },
  twitter: {
    site: "vultisig.com",
    card: "summary_large_image",
    title: "Vultisig - FAQ",
    description:
      "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
    images: "https://vultisig.com/thumbnails/faq.png",
  },
  icons: {
    icon: "logo.svg",
  },
};

export default Component;
