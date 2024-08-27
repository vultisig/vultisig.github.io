"use client"
import { homeCopy } from "@/app/copy/Home";
import styles from "./../../(pages)/home/page.module.scss"
import Image from "next/image";
import { trackAction } from "@/app/lib/gtagHelper";

export function SegmentStore() {
    return (
        <>
            <div id="store-section" className={styles["store"]}>
                <div className="row" style={{ minHeight: "inherit" }}>
                    <div className="col-lg-7 px-lg-5 px-3 d-flex align-items-center">
                        <div className="ms-1">
                            <h2 style={{ lineHeight: "150%" }} className="monserrat-bold"> <strong
                                dangerouslySetInnerHTML={{ __html: homeCopy.store.title }}></strong>
                            </h2>
                            <div className="mt-4" style={{ textAlign: "center" }}>
                                <a href={homeCopy.store.appStoreLink.url} target={homeCopy.store.appStoreLink.traget}  onClick={()=>{trackAction("click","download_app","app_store")}}>
                                    <Image className="my-sm-2 me-lg-3" width={180} height={52} src={homeCopy.store.appStoreLink.image} alt={homeCopy.store.appStoreLink.alt} />
                                </a>
                                <a href={homeCopy.store.githubLink.url} target={homeCopy.store.githubLink.target} onClick={()=>{trackAction("click","download_app","github")}}>
                                    <Image className="my-sm-2 me-lg-3" width={180} height={52} src={homeCopy.store.githubLink.image} alt={homeCopy.store.githubLink.alt} />
                                </a>
                                <a href={homeCopy.store.playStoreLink.url} target={homeCopy.store.playStoreLink.target} onClick={()=>{trackAction("click","download_app","play_store")}}>
                                    <Image className="my-sm-2 me-lg-3" width={180} height={52} src={homeCopy.store.playStoreLink.image} alt={homeCopy.store.playStoreLink.alt} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-5 text-center position-relative " + styles["store-img-cont"]}>
                        <img src="/img/iPhone-new.png"
                        className={styles["store-img"]}
                             alt="SECURE YOUR DIGITAL ASSETS NOW" />
                    </div>
                </div>

            </div>

        </>
    )
}