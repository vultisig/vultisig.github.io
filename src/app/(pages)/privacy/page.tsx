import { Sections } from "@/app/components/privacy"
import { Footer } from "@/app/shared-components/Footer"
import { NavBar } from "@/app/shared-components/NavBar"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Vultisig | Privacy Policy",
    metadataBase: new URL("https://vultisig.com/Privacy"),
    description:"Vultisig Privacy Policy.",
    keywords: ["Vultisig"," Vultisig Privacy Policy", "Vultisig Security", "Vultisig support", "Vultisig customer service", "Vultisig asset exchange"],
    openGraph: {
        siteName: 'Vultisig',
        title: "Vultisig | Privacy Policy",
        type: "website",
        description: "Vultisig Privacy Policy.",
        url: 'https://vultisig.com/Privacy',
        images: 'https://vultisig.com/img/thumbnail/privacy.png',
    },
    twitter: {
        site: "vultisig.com/Privacy",
        card: "summary_large_image",
        title: "Vultisig | Privacy Policy",
        description: "Vultisig Privacy Policy.",
        images: "https://vultisig.com/img/thumbnail/privacy.png"
    },
};
export default async function Privacy() {

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