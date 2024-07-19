
import { Sections } from "@/app/components/vult"
import { Footer } from "@/app/shared-components/Footer"
import { NavBar } from "@/app/shared-components/NavBar"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Vultisig | VULT",
    metadataBase: new URL("https://vultisig.com/VULT"),
    keywords: ["Vultisig", "Vultisig Token", "Vultisig VULT", "Vultisig Airdrop", "Vultisig CIRCULATING SUPPLY", "Vultisig asset exchange"],
    openGraph: {
        siteName: 'Vultisig',
        title: "Vultisig | VULT",
        type: "website",
        description: "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
        url: 'https://vultisig.com/VULT',
        images: 'https://vultisig.com/img/vult-thumbnail.png',
    },
    twitter: {
        site: "vultisig.com/VULT",
        card: "summary_large_image",
        title: "Vultisig | VULT",
        description: "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
        images: "https://vultisig.com/img/vult-thumbnail.png"
    },
};
export default async function Vult() {
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