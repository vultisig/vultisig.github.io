import { homeCopy } from "@/app/copy/Home";
import Image from "next/image";
export function SegmentFive() {
    return (
        <>
            <div className="whoisfor mt-5 mb-5  pt-5 text-center">
                <h2 className="monserrat-bold" dangerouslySetInnerHTML={{ __html: homeCopy.segment5.mainTitle }}></h2>
                <div className="row py-5 justify-content-center">
                    {homeCopy.segment5.items.map((item, index) => (
                        <div key={index} className="col-lg-4 text-center mt-5 mt-lg-0 ">
                            <Image src={item.image} className="feature-img-size"
                            height={56} width={56}
                                alt={item.alt} />
                            <h3 className="menlo monserrat-bold mt-4 mb-4">{item.title} </h3>
                            <p className="monserrat-regular px-5"> <small
                                dangerouslySetInnerHTML={{ __html: item.description }}></small>
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}