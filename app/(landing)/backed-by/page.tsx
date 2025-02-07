import type { Metadata } from "next";

import Component from "@/components/pages/backed-by";


export const metadata: Metadata = {
    title: "Vultisig - Backed By",
    description:
      "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
    metadataBase: new URL("https://vultisig.com"),
    keywords: [
      "Vultisig",
      "KOLs",
      "Funds",
      "Vultisig Backed by"
    ],
    authors: [{ name: "Vultisig" }, { name: "Vultisig", url: "Vultisig.com" }],
    openGraph: {
      siteName: "Vultisig",
      title: "Vultisig - Backed By",
      description:
        "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
      url: "https://vultisig.com/backed-by",
      type: "website",
      images: "https://vultisig.com/thumbnails/backed-by.png",
    },
    twitter: {
      site: "vultisig.com",
      card: "summary_large_image",
      title: "Vultisig - Backed By",
      description:
        "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
      images: "https://vultisig.com/thumbnails/backed-by.png",
    },
    icons: {
      icon: "logo.svg",
    },
  };

export default Component;
