import { Metadata } from "next";
import { Sections } from "@/app/components/download"

import { Footer } from "@/app/shared-components/Footer";
import { NavBar } from "@/app/shared-components/NavBar";

export const metadata: Metadata = {
  title: "Vultisig | downloads",
  metadataBase: new URL("https://vultisig.com/downloads"),
  keywords: [
    "Vultisig",
    "Vultisig Token",
    "Vultisig downloads",
    "Vultisig Airdrop",
    "Vultisig CIRCULATING SUPPLY",
    "Vultisig asset exchange",
  ],
  openGraph: {
    siteName: "Vultisig",
    title: "Vultisig | downloads",
    type: "website",
    description:
      "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
    url: "https://vultisig.com/downloads",
    images: "https://vultisig.com/img/vult-thumbnail.png",
  },
  twitter: {
    site: "vultisig.com/downloads",
    card: "summary_large_image",
    title: "Vultisig | downloads",
    description:
      "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
    images: "https://vultisig.com/img/vult-thumbnail.png",
  },
};

export default async function Faq() {
  return (
      <>
          <div className="content text-light">
              <div className="container">
                  <NavBar />
                  <Sections />
                  <Footer />

                  <div className="circle-top-left"></div>
                  <div className="circle-top-left-glow"></div>
                  <div className="circle-top-right"></div>
                  <div className="circle-top-right-glow"></div>
              </div>
          </div>
      </>
  )
}
