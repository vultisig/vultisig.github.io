"use server"
import { homeCopy } from "@/app/copy/Home"
import styles from "./page.module.scss"
import { SegmentOne } from "@/app/components/home/segment-one"
import { SegmentTwo } from "@/app/components/home/segment-two"
import { SegmentThree } from "@/app/components/home/segment-three"
import { SegmentFour } from "@/app/components/home/segment-four"
import { SegmentFive } from "@/app/components/home/segment-five"
import { SegmentStore } from "@/app/components/home/segment-store"
import Image from "next/image"
export default async function Home() {
    return (
        <> 
            <header className="header mb-2">
                <div className=" mt-2 text-white">
                    <div className={"monserrat-bold " + styles["slogan"]}>

                        <span dangerouslySetInnerHTML={{ __html: homeCopy.header.slogan }}></span>
                        <Image width={180} height={52} className={styles["back-logo"]} src="./img/back-logo.svg" alt="Vultisig Logo" />
                    </div>

                    <div className="blue-section text-small color-neutral text-start py-4 px-4 mt-5 col-lg-8 col-12">
                        <p className="col-9 monserrat" dangerouslySetInnerHTML={{ __html: homeCopy.header.subSlogan }}>
                        </p>
                    </div>

                    {/* <!-- DOWNLOAD BOX --> */}
                    <div className="blue-section text-small color-neutral text-start py-4 px-4 mt-5 col-lg-8 col-12">
                        <h4><strong className="col-9 menlo gradient-text  monserrat-bold" >
                            {homeCopy.header.downloadTitle}
                        </strong></h4>
                        <div className="mt-4 text-lg-start text-center">
                            <a href={homeCopy.store.appStoreLink.url} target={homeCopy.store.appStoreLink.traget}>
                                <Image className="my-2 my-lg-1 me-lg-3" src="./img/appstore.svg"
                                   width={180} height={52} 
                                    alt="Download on AppStore" />
                            </a>
                            <a href={homeCopy.store.githubLink.url} target={homeCopy.store.githubLink.target}>
                                <Image className="my-2 my-lg-1 me-lg-3" src="./img/github-download.svg"
                                    width={180} height={52} 
                                    alt="Download on Github" />
                            </a>
                            <a href={homeCopy.store.playStoreLink.url} target={homeCopy.store.playStoreLink.target}>
                                <Image className="my-2 my-lg-1" src="./img/playstore.svg"
                                    width={180} height={52} 
                                    alt="Download on PlayStore" />
                            </a>
                        </div>
                    </div>
                </div>

            </header>

            <div id="howitworks" className="mt-5 py-5 color-neutral">
                <SegmentOne />
                <SegmentTwo />
                <SegmentThree />
                <SegmentFour />
                <SegmentFive />
                <SegmentStore />
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

        </>
    )
}