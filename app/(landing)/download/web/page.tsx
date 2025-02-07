import type { Metadata } from "next";

import Component from "@/components/pages/download";

const Page = () => <Component tab="web" />;

export const metadata: Metadata = {
  title: "Vultisig - Download Web",
  description:
    "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
  metadataBase: new URL("https://vultisig.com"),
  keywords: [
    "Vultisig",
    "Vultisig Web",
    "Vultisig Download",
    "Install Vulticonnect",
    "Install Vultisig",
    "Download Vultisig",
    " Vultisig customer service",
    "Vultisig asset exchange",
  ],
  authors: [{ name: "Vultisig" }, { name: "Vultisig", url: "Vultisig.com" }],
  openGraph: {
    siteName: "Vultisig",
    title: "Vultisig - Download Web",
    description:
      "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
    url: "https://vultisig.com/download/web",
    type: "website",
    images: "https://vultisig.com/thumbnails/download-web.png",
  },
  twitter: {
    site: "vultisig.com",
    card: "summary_large_image",
    title: "Vultisig - Download Web",
    description:
      "A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
    images: "https://vultisig.com/thumbnails/download-web.png",
  },
  icons: {
    icon: "logo.svg",
  },
};

export default Page;
