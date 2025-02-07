import type { Metadata } from "next";

import Component from "@/components/pages/privacy";

export const metadata: Metadata = {
    title: "Vultisig - Privacy",
    description:
      "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
    metadataBase: new URL("https://vultisig.com"),
    keywords: [
      "Vultisig",
      "Vultisig Privacy",
      "Vultisig Docs",
      " Vultisig help",
      "Vultisig support",
      " Vultisig customer service",
      "Vultisig asset exchange",
    ],
    authors: [{ name: "Vultisig" }, { name: "Vultisig", url: "Vultisig.com" }],
    openGraph: {
      siteName: "Vultisig",
      title: "Vultisig - Privacy",
      description:
        "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
      url: "https://vultisig.com/privacy",
      type: "website",
      images: "https://vultisig.com/thumbnails/privacy.png",
    },
    twitter: {
      site: "vultisig.com",
      card: "summary_large_image",
      title: "Vultisig - Privacy",
      description:
        "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
      images: "https://vultisig.com/thumbnails/privacy.png",
    },
    icons: {
      icon: "logo.svg",
    },
  };

export default Component;
