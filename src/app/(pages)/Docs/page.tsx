"use server"

import { Sections } from "@/app/components/docs"
import { Footer } from "@/app/shared-components/Footer"
import { NavBar } from "@/app/shared-components/NavBar"

export default async function Docs() {
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