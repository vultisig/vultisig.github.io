import { Sections } from "@/app/components/cryptobank"
import { Footer } from "@/app/shared-components/Footer"
import { NavBar } from "@/app/shared-components/NavBar"
import { Metadata } from "next";
import { trackAction } from "@/app/lib/gtagHelper";
export const metadata: Metadata = {
    title: "Vultisig | How it Works",
    metadataBase: new URL("https://vultisig.com/CryptoBank"),
    keywords: ["Vultisig", "Crypto Bank", "Vultisig features", "Vultisig security", "Vultisig asset management", "Vultisig asset exchange"],
    openGraph: {
        siteName: 'Vultisig',
        title: "Vultisig | CryptoBank",
        type: "website",
        description: "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
        url: 'https://vultisig.com/CryptoBank',
        images: 'https://vultisig.com/img/howitworks-thumbnail.png',
    },
    twitter: {
        site: "vultisig.com/CryptoBank",
        card: "summary_large_image",
        title: "Vultisig | How it Works",
        description: "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
        images: "https://vultisig.com/img/howitworks-thumbnail.png"
    },
};
export default async function HowItWork() {
    return (
        <main>
            <div className="content">
                <div className="container">
                    <NavBar />
                    <Sections />
                    <Footer />
                </div>
                <div className="circle-top-left"></div>
                <div className="circle-top-left-glow"></div>
                <div className="circle-top-right"></div>
                <div className="circle-top-right-glow"></div>
                <div className="circle-middle-left"></div>
                <div className="circle-middle-left-glow"></div>
            </div>
        </main>


    )
}