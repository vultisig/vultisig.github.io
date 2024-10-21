import { homeCopy } from "@/app/copy/Home";
import styles from "./../../(pages)/home/page.module.scss"
import Image from "next/image";
export function SegmentOne() {
    return (
        <>
            <div className="problems">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="mt-5 monserrat-bold title" style={{ lineHeight: "150%" }}
                            dangerouslySetInnerHTML={{ __html: homeCopy.segment1.subTitle }}></h2>
                        {homeCopy.segment1.items.map((item, index) => (
                            <div key={index} className="desc ps-4 gradient-border-left mt-5">
                                <h3 className="menlo monserrat-bold py-1" >{item.title}</h3>
                                <p className="monserrat-regular fs-5 color-neutral mt-3" dangerouslySetInnerHTML={{ __html: item.description }}>
                                </p>
                            </div>
                        ))}
                    </div>


                    {/* <!-- img --> */}
                    <div className="col-lg-6  text-end m-auto d-flex justify-content-lg-end justify-content-center"
                        style={{ flexDirection: "column", alignItems: "center" }}>
                        <img className="col-8 col-lg-12"
                            src="./img/problems.svg" alt="WHAT IS WRONG WITH WALLETS" />
                        <div id="img-glow"></div>
                    </div>
                </div>
            </div>
        </>
    )
}