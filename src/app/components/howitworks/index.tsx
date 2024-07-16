import { HowItWorksCopy } from "@/app/copy/HowItWorks";
import Image from "next/image";

export function Sections() {
    return (
        <>
            <header className="mb-2">
                <div className="mt-2 text-white">
                    <div className="row align-items-center">
                        <div className="col-lg-7" style={{ position: "relative" }}>
                            <div className="monserrat-bold slogan">
                                <strong dangerouslySetInnerHTML={{ __html: HowItWorksCopy.header.slogan }}></strong>
                                <div className="sub-slogan gradient-text monserrat-regular p-text mt-2 text-uppercase"
                                    dangerouslySetInnerHTML={{ __html: HowItWorksCopy.header.subSlogan }}>
                                </div>
                            </div>
                            <Image id="how-to-back-logo" src="/img/back-logo.svg"   width={220} height={220} alt="Vultisig Logo" />
                        </div>
                        <div className="col-lg-5">
                            <div className="header-img-container mx-sm-auto w-100 w-md-75">
                                <div className="background-overlay"></div>
                                <Image width={616} height={649} className="header-img w-100" src="/img/how-it-works-header.png"
                                    alt="SIMPLE STEPS, SUPERIOR SECURITY - THE VULTISIG DIFFERENCE" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <h2 style={{ height: "16rem", marginTop: "8rem" }}
                className="monserrat-semibold color-neutral text-uppercase text-center"
                dangerouslySetInnerHTML={{ __html: HowItWorksCopy["segment-1"].title }}>
            </h2>

            <div className="info-box mb-5 top-left-gradient">
                <div className="row p-2 px-lg-5 trusted-devices-cont" style={{ overflow: "hidden" }}>
                    <div className="col-lg-6 px-4 text-center trusted-devices-img-cont" style={{ position: "relative" }}>
                        <Image   width={550} height={650} className="trusted-devices-img mt-5" src="./img/trusted-devices.svg"
                            alt={HowItWorksCopy.alts["segment-2"].img} />
                    </div>
                    <div className="col-lg-6 px-4 my-lg-auto mt-lg-5 py-lg-5">
                        <h1 className="monserrat-bold text-uppercase text-white"
                            dangerouslySetInnerHTML={{ __html: HowItWorksCopy["segment-2"].title }}>
                        </h1>
                        <p className="monserrat-regular mt-4 fs-5 color-neutral pe-lg-4 text-medium"
                            dangerouslySetInnerHTML={{ __html: HowItWorksCopy["segment-2"].description }}>
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-5">
                <div className="row">
                    <div className="col-lg-6 pe-lg-4 my-lg-0 my-2">
                        <div className="info-box text-center p-4 px-lg-5 pt-5 h-100 bottom-right-gradient">
                            <h3 className="text-uppercase monserrat-bold text-white"
                                dangerouslySetInnerHTML={{ __html: HowItWorksCopy["segment-3"].title }}>
                            </h3>
                            <p className="mt-3 fs-lg-6 fs-5 color-neutral monserrat-regular"
                                dangerouslySetInnerHTML={{ __html: HowItWorksCopy["segment-3"].description }}>
                            </p>
                            <Image   width={318} height={627} className="my-5 w-75-50" src="/img/asset-hub.png"
                                alt="ASSET MANAGEMENT HUB" />
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-4 my-sm-2">
                        <div className="info-box text-center p-4 px-lg-5 pb-5 pb-lg-0 h-100 top-left-gradient">
                            <Image  width={318} height={627}  className="mt-5 mt-lg-0 w-75-50" src="/img/asset-exchange.png"
                                alt="EASY Asset Exchange" />
                            <h3 className="text-uppercase monserrat-bold text-white mt-5"
                                dangerouslySetInnerHTML={{ __html: HowItWorksCopy["segment-4"].title }}>
                            </h3>
                            <p className="mt-3 fs-lg-6 fs-5 color-neutral monserrat-regular"
                                dangerouslySetInnerHTML={{ __html: HowItWorksCopy["segment-4"].description }}>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info-box mb-5 top-left-gradient">
                <div className="row p-2 px-lg-5 d-flex align-items-center">
                    <div className="mt-5 col-md-6 px-lg-4 text-center">
                        <Image  width={600} height={780}  style={{ width: "90%" }} src="/img/store-ipad.png"
                            alt="Store Links" />
                    </div>
                    <div className="col-md-6">
                        <h5 style={{ lineHeight: "170%" }} className="monserrat-semibold text-white px-4 fs-5 pe-lg-4 pt-9"
                            dangerouslySetInnerHTML={{ __html: HowItWorksCopy.store.title }}>
                        </h5>
                        <div className="mt-lg-5 mt-2 px-4 text-center text-lg-start"
                            style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                            <a href={HowItWorksCopy.store["app-store-link"].url} target="_blank">
                                <Image  width={180} height={55}  className="my-2 my-lg-0" src="./img/appstore.svg"
                                    alt="Download on AppStore" />
                            </a>
                            <a href={HowItWorksCopy.store["github-link"].url} target="_blank">
                                <Image  width={180} height={55}  src="./img/github-download.svg" alt="Download on Github" />
                            </a>
                            <a href={HowItWorksCopy.store["play-store-link"].url} target="_blank">
                                <Image  width={180} height={55}  src="./img/playstore.svg" alt="Download on PlayStore" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
