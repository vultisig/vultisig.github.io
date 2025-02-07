import type { Metadata } from "next";

import Component from "@/components/pages/download";

const Page= () => <Component tab="vultisig"/>;

export const metadata: Metadata = {
    title: "Vultisig - Download Vultisig",
    description:
      "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
    metadataBase: new URL("https://vultisig.com"),
    keywords: [
      "Vultisig",
      "Vultisig Download",
      "Install Vulticonnect",
      "Install Vultisig",
      "Download Vultisig",
    ],
    authors: [{ name: "Vultisig" }, { name: "Vultisig", url: "Vultisig.com" }],
    openGraph: {
      siteName: "Vultisig",
      title: "Vultisig - Download Vultisig",
      description:
        "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
      url: "https://vultisig.com/download/vultisig",
      type: "website",
      images: "https://vultisig.com/thumbnails/download-vultisig.png",
    },
    twitter: {
      site: "vultisig.com",
      card: "summary_large_image",
      title: "Vultisig - How it Works",
      description:
        "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
      images: "https://vultisig.com/thumbnails/download-vultisig.png",
    },
    icons: {
      icon: "logo.svg",
    },
  };

export default Page;
