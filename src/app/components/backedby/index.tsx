import { BackedByCopy } from "@/app/copy/BackedBy";
import Image from "next/image";

export function Sections() {
    return (
        <>
            <h1 id="page-title" className="monserrat-bold color-neutral text-uppercase text-center gradient-text mx-auto"
                dangerouslySetInnerHTML={{ __html: BackedByCopy.title }}>
            </h1>
            {/* <!-- FUNDS --> */}
            <div id="segment-1" className="blue-section w-100 text-center mt-5">
                <h3 className="gradient-text mx-auto monserrat-bold">
                    {BackedByCopy["segment-1"].title}
                </h3>
                <div className="card-cont mt-5">
                    {BackedByCopy["segment-1"].cards.map((item, index) => (
                        <a key={index} href={item.url} target="_blank"
                            className="card-item p-3 my-4 text-white">
                            <Image className="avatar"  width={100} height={100} 
                                src={item.src} alt="21e8 Capital" />
                            <h5 dangerouslySetInnerHTML={{ __html: item.title }}
                                className="menlo text-bold mt-2"></h5>
                            <div className="text-underline text-white">
                                <span>
                                    <Image src="/img/backed-by/icon-x.png" alt="X" width={25} height={25} />
                                </span>
                                <u dangerouslySetInnerHTML={{ __html: item.twitter }} className="menlo"></u>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            {/* <!-- FOUNDERS --> */}
            <div id="segment-2" className="blue-section w-100 text-center mt-5">
                <h3 className="gradient-text mx-auto monserrat-bold">
                    {BackedByCopy["segment-2"].title}
                </h3>
                <div className="card-cont mt-5">
                    {BackedByCopy["segment-2"].cards.map((item, index) => (
                        <a key={index} href={item.url} target="_blank"
                            className="card-item p-3 my-4 text-white">
                            <Image className="avatar" src={item.src}  width={100} height={100} 
                                alt="JPTHOR" />
                            <h5 dangerouslySetInnerHTML={{ __html: item.title }} className="menlo text-bold mt-2"></h5>
                            <div className="text-underline text-white">
                                <span>
                                    <Image src="/img/backed-by/icon-x.png" alt="X" width={25} height={25}   />
                                </span>
                                <u dangerouslySetInnerHTML={{ __html: item.twitter }} className="menlo"></u>
                            </div>
                        </a>
                    )
                    )}

                </div>
            </div>

            {/* <!-- KOLS --> */}
            <div id="segment-3" className="blue-section w-100 text-center mt-5 ">
                <h3 className="gradient-text mx-auto monserrat-bold">
                    {BackedByCopy["segment-3"].title}
                </h3>
                <div className="card-cont mt-5">
                    {BackedByCopy["segment-3"].cards.map((item, index) => (
                     <a key={index} href={item.url} target="_blank"
                        className="card-item p-3 my-4 text-white">
                            <Image className="avatar" src={item.src} width={100} height={100} 
                                alt="ThorTrades" />
                            <h5 dangerouslySetInnerHTML={{ __html: item.title }} className="menlo text-bold mt-2"></h5>
                            <div className="text-underline text-white">
                                <span>
                                    <Image src="/img/backed-by/icon-x.png" alt="X" width={25} height={25}  />
                                </span>
                                <u dangerouslySetInnerHTML={{ __html: item.twitter }} className="menlo"></u>
                            </div>
                    </a>
                    )
                    )}
                </div>
            </div>
        </>
    )
}
