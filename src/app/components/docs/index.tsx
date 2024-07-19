import { DocsCopy } from "@/app/copy/DocsCopy";
import Image from "next/image";

export function Sections() {
    return (
        <>
        <div id="docs-sec">
                {/* <!-- READ THE DOCS --> */}
                <div className="mt-2 mb-5 text-white">
                    <div className="row align-items-center">
                        <div className="col-lg-6 ps-lg-5 p-lg-5 position-relative">
                            <div className="monserrat-bold slogan ms-auto">
                                <strong dangerouslySetInnerHTML={{ __html: DocsCopy["segment-1"].title }}></strong>
                                <br />
                                <div className="sub-slogan mt-5 w-75 ">
                                    <p className="color-neutral monserrat-medium p-text fs-5"
                                        dangerouslySetInnerHTML={{ __html: DocsCopy["segment-1"]["sub-title"] }}>
                                    </p>
                                </div>
                                <a href={DocsCopy["segment-1"].link.url} style={{ width: "200px" }}
                                    className="btn btn-primary btn-color mb-2 py-3 mt-4 rounded monserrat-semibold"
                                    target="_blank">
                                    {DocsCopy["segment-1"].link.name}
                                </a>
                                <Image  width={200} height={200}  id="docs-back-logo" src="./img/back-logo.svg" alt="Vultisig Logo" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header-img-container d-flex align-items-center ms-auto mt-5 mt-lg-0">
                                <div className="background-circle"></div>
                                <div className="background-overlay"></div>
                                <Image className="header-img"  width={470} height={470} 
                                 src="./img/doc-header.svg" alt="Want to learn about how Vultisig works" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- INTEGRATE Vultisig --> */}
                <div className="mt-2 mb-5 text-white">
                    <div className="row align-items-center">
                        <div className="col-md-6 ps-lg-5">
                            <div className="header-img-container d-flex align-items-center ms-auto mb-5 mb-lg-0">
                                <div className="background-circle-2"></div>
                                <div className="background-overlay-2"></div>
                                <Image  width={470} height={470}  className="header-img" src="./img/integration.svg" alt="Any DeFi app, chrome extension or wallet can integrate the Vultisig SDK - safely let your users generate/upload vault shares and co-sign transactions." />
                            </div>
                        </div>
                        <div className="col-md-6 pe-lg-5 p-lg-5 position-relative">
                            <div className="monserrat-bold slogan text-lg-end">
                                <strong className="m-left" dangerouslySetInnerHTML={{ __html: DocsCopy["segment-2"].title }}></strong>
                                <br />
                                <div className="sub-slogan mt-5 w-75 ms-lg-auto">
                                    <p className="color-neutral monserrat-medium p-text fs-5"
                                        dangerouslySetInnerHTML={{ __html: DocsCopy["segment-2"]["sub-title"] }}>
                                    </p>
                                </div>
                                <a href={DocsCopy["segment-2"].link.url} style={{ width: "200px" }}
                                    className="btn btn-primary btn-color mb-2 py-3 mt-4 rounded monserrat-semibold"
                                    target="_blank">
                                    {DocsCopy["segment-2"].link.name}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
       
        </>
    );
}
