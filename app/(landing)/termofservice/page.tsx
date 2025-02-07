import type { Metadata } from "next";

import Component from "@/components/pages/termofservice";

export const metadata: Metadata = {
  title: "Vultisig - Term Of Service",
  description:
    "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
  metadataBase: new URL("https://vultisig.com"),
  keywords: [
    "Vultisig",
    "Vultisig Term Of Service",
    "Vultisig Docs",
    " Vultisig help",
    "Vultisig support",
    " Vultisig customer service",
    "Vultisig asset exchange",
  ],
  authors: [{ name: "Vultisig" }, { name: "Vultisig", url: "Vultisig.com" }],
  openGraph: {
    siteName: "Vultisig",
    title: "Vultisig - Term Of Service",
    description:
      "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
    url: "https://vultisig.com/termofservice",
    type: "website",
    images: "https://vultisig.com/thumbnails/termofservice.png",
  },
  twitter: {
    site: "vultisig.com",
    card: "summary_large_image",
    title: "Vultisig - Term Of Service",
    description:
      "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
    images: "https://vultisig.com/thumbnails/termofservice.png",
  },
  icons: {
    icon: "logo.svg",
  },
};

export default Component;
