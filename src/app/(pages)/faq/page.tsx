

import { Sections } from "@/app/components/faqs"
import { Footer } from "@/app/shared-components/Footer"
import { NavBar } from "@/app/shared-components/NavBar"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Vultisig | FAQ",
    metadataBase: new URL("https://vultisig.com/faq"),
    keywords: ["Vultisig", "Vultisig FAQs", "Vultisig help", "Vultisig support", "Vultisig customer service", "Vultisig asset exchange"],
    openGraph: {
        siteName: 'Vultisig',
        title: "Vultisig | FAQ",
        type: "website",
        description: "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
        url: 'https://vultisig.com/Docs',
        images: 'https://vultisig.com/img/faq-thumbnail.png',
    },
    twitter: {
        site: "vultisig.com/faq",
        card: "summary_large_image",
        title: "Vultisig | FAQ",
        description: "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
        images: "https://vultisig.com/img/faq-thumbnail.png"
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