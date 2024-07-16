import { homeCopy } from "@/app/copy/Home";
import styles from "./../../(pages)/home/page.module.scss"
import Image from "next/image";

export function SegmentThree() {
    return (
        <>
            <div className="user-experience mb-5 mt-5">

                <div className="row justify-content-center">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 d-flex  justify-content-lg-start justify-content-center">
                        <h4 className="monserrat-medium gradient-text " >{homeCopy.segment3.mainTitle}</h4>
                    </div>

                    {/* <!-- img --> */}
                    <div
                        className="col-lg-6 d-flex align-items-center justify-content-lg-start justify-content-center ">
                        <Image className=" w-75 mt-5 mt-lg-0" src="./img/ux.svg" width={558} height={482}
                            data-attribute="alt" alt="SEAMLESS SECURITY Of Vultisig" />
                    </div>

                    <div className="col-lg-6">
                        <h2 className="mt-5 monserrat-bold" style={{ lineHeight: "150%" }} >{homeCopy.segment3.subTitle} </h2>
                        {homeCopy.segment3.items.map((item, index) => (
                            <div key={index} className={"mt-5 ps-4 " + styles["gradient-border-left"]}>
                                <h4 className="menlo monserrat-bold py-1" >{item.title}</h4>
                                <p className="monserrat-regular fs-5 color-neutral" dangerouslySetInnerHTML={{ __html: item.description }}>
                                </p>
                            </div>
                        ))}
                    </div>



                </div>
            </div>
        </>
    )
}