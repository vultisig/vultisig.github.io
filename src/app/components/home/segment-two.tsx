import { homeCopy } from "@/app/copy/Home";
import Image from "next/image";
export function SegmentTwo() {
    return (
        <>
            <div className="solutions blue-section mt-5 mb-5 text-center">
                <h2 className="monserrat-bold" dangerouslySetInnerHTML={{ __html: homeCopy.segment2.mainTitle }}></h2>
                <span className="color-neutral monserrat-regular p-text">
                    <small dangerouslySetInnerHTML={{ __html: homeCopy.segment2.subTitle }}></small></span>
                <div className="row justify-content-lg-between justify-content-center p-lg-5 p-4">
                    {homeCopy.segment2.items.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-12  mb-3 px-3">
                            <Image height={150} width={183}
                                data-attribute="alt" src={item.img}
                                alt="Vultisig is the next evolution in crypto vaults" />
                            <h5 className="menlo mt-5 monserrat-bold mb-4" >{item.title} </h5>
                            <p className="monserrat-regular text-start">
                                <small
                                    dangerouslySetInnerHTML={{ __html: item.description }}>
                                </small> </p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}