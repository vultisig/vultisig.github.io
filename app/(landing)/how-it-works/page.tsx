import type { Metadata } from "next";

import Component from "@/components/pages/how-it-works";

export const metadata: Metadata = {
  title: "Vultisig - How it Works",
  description:
    "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
  metadataBase: new URL("https://vultisig.com"),
  keywords: [
    "Vultisig",
    "Vultisig how it works",
    " Vultisig features",
    "Vultisig security",
    "Vultisig Introduc",
  ],
  authors: [{ name: "Vultisig" }, { name: "Vultisig", url: "Vultisig.com" }],
  openGraph: {
    siteName: "Vultisig",
    title: "Vultisig - How it Works",
    description:
      "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
    url: "https://vultisig.com/how-it-works",
    type: "website",
    images: "https://vultisig.com/thumbnails/how-it-works.png",
  },
  twitter: {
    site: "vultisig.com",
    card: "summary_large_image",
    title: "Vultisig - How it Works",
    description:
      "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
    images: "https://vultisig.com/thumbnails/how-it-works.png",
  },
  icons: {
    icon: "logo.svg",
  },
};

export default Component;
