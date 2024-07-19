import { Sections } from "@/app/components/backedby"
import { Footer } from "@/app/shared-components/Footer"
import { NavBar } from "@/app/shared-components/NavBar"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vultisig | Backed By",
    metadataBase: new URL("https://vultisig.com/BackedBy"),
    keywords: ["Vultisig", "Vultisig Backed by", "Founders", "Funds", "KOLs"],
    openGraph: {
        siteName: 'Vultisig',
        title: "Vultisig | Backed By",
        type: "website",
        description: "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
        url: 'https://vultisig.com/BackedBy',
        images: 'https://vultisig.com/img/backedby-thumbnail.png',
    },
    twitter: {
        site: "vultisig.com/BackedBy",
        card: "summary_large_image",
        title: "Vultisig | Backed By",
        description: "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
        images: "https://vultisig.com/img/backedby-thumbnail.png"
    },
};

export default async function BackedBy() {
    return (
        <>
            <div className="content text-light">
                <div className="container">
                    <NavBar />
                    <Sections />
                    <Footer />
                </div>
            </div>
        </>
    )
}