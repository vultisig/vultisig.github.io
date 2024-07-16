"use server"

import { Sections } from "@/app/components/faqs"
import { Footer } from "@/app/shared-components/Footer"
import { NavBar } from "@/app/shared-components/NavBar"

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