"use server"

import { Sections } from "@/app/components/backedby"
import { Footer } from "@/app/shared-components/Footer"
import { NavBar } from "@/app/shared-components/NavBar"

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