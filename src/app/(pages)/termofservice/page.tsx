import { Sections } from "@/app/components/termofservice"
import { Footer } from "@/app/shared-components/Footer"
import { NavBar } from "@/app/shared-components/NavBar"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Vultisig |Term Of Service",
    metadataBase: new URL("https://vultisig.com/TermOfService"),
    description:"Vultisig Term Of Service.",
    keywords: ["Vultisig"," Vultisig Term Of Service"],
    openGraph: {
        siteName: 'Vultisig',
        title: "Vultisig | Term Of Service",
        type: "website",
        description: "Vultisig Term Of Service.",
        url: 'https://vultisig.com/TermOfService',
        images: 'https://vultisig.com/img/privacy-thumbnail.png',
    },
    twitter: {
        site: "vultisig.com/TermOfService",
        card: "summary_large_image",
        title: "Vultisig | Term Of Service",
        description: "Vultisig Term Of Service.",
        images: "https://vultisig.com/img/privacy-thumbnail.png"
    },
};
export default async function TermOfService() {

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