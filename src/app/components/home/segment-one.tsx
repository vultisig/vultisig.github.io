import { homeCopy } from "@/app/copy/Home";
import styles from "./../../(pages)/home/page.module.scss"
import Image from "next/image";
export function SegmentOne() {
    return (
        <>
            <div className="problems mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h4 className="gradient-text monserrat-medium" >{homeCopy.segment1.mainTitle}</h4>
                        <h2 className="mt-5 monserrat-bold" style={{ lineHeight: "150%" }}
                            dangerouslySetInnerHTML={{ __html: homeCopy.segment1.subTitle }}></h2>
                        {homeCopy.segment1.items.map((item, index) => (
                            <div key={index} className={"mt-5 ps-4 " + styles["gradient-border-left"]}>
                                <h3 className="menlo monserrat-bold py-1" >{item.title}</h3>
                                <p className="monserrat-regular fs-5 color-neutral" dangerouslySetInnerHTML={{ __html: item.description }}>
                                </p>
                            </div>
                        ))}
                    </div>


                    {/* <!-- img --> */}
                    <div className="col-lg-6  text-end m-auto d-flex justify-content-lg-end justify-content-center"
                        style={{ flexDirection: "column", alignItems: "center" }}>
                        <Image className="col-8 col-lg-12" width={744} height={744}
                            src="./img/problems.svg" alt="WHAT IS WRONG WITH WALLETS" />
                        <div id="img-glow"></div>
                    </div>
                </div>
            </div>
        </>
    )
}