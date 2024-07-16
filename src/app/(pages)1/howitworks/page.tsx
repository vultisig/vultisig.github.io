"use server"

import { Sections } from "@/app/components/howitworks"
import { Footer } from "@/app/shared-components/Footer"
import { NavBar } from "@/app/shared-components/NavBar"

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
                <div className="circle-middle-right"></div>
                <div className="circle-middle-right-glow"></div>
                <div className="circle-bottom"></div>
                <div className="circle-bottom-glow"></div>
            </div>
        </main>


    )
}