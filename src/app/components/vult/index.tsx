"use client"
import { vultCopy } from "@/app/copy/Vult";
import Image from "next/image";
import { useEffect } from "react";

export function Sections() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return (
        <>
        <div id="vult-main">
                <div className="mt-5 mb-5 text-white">
                    <div className="row  py-5 align-items-center">
                        <div className="col-lg-5 ps-lg-5 position-relative">
                            <div className="monserrat-bold  slogan ms-auto">
                                <strong dangerouslySetInnerHTML={{ __html: vultCopy.header.title }}></strong>
                                <br />
                            </div>

                        </div>
                        <div className="col-lg-4 d-flex ">
                            <div className="header-img-container d-flex align-items-center mx-auto ms-lg-auto">
                                <div className="background-circle"></div>
                                <Image className="header-img" width={280} height={240}
                                 data-query="vlti.alts.header.img" data-attribute="alt"
                                    src="./img/vix-header.svg" alt="VLTI" />
                            </div>

                        </div>
                        <div className="col-lg-3">
                            <div className="monserrat-bold slogan text-center text-lg-start"><strong
                                dangerouslySetInnerHTML={{ __html: vultCopy.header.price }}></strong></div>
                        </div>
                    </div>
                    <div className="mt-5 pt-4 d-flex" style={{ justifyContent: "space-around", flexWrap: "wrap" }}>
                        <div className="px-5">
                            <div className="text-uppercase monserrat-medium gradient-text mx-lg-0 mx-auto mt-5 mt-lg-0"
                                style={{ fontSize: "medium" }} data-query="vlti.header.data.0.title">
                                {vultCopy.header.data[0].title}
                                </div>
                            <div className="monserrat-bold text-lg-start text-center" style={{ fontSize: "xx-large" }}>
                                {vultCopy.header.data[0].value}
                            </div>
                        </div>
                        <div className="px-5 justify-content-center">
                            <div className="text-uppercase monserrat-medium gradient-text m-auto mt-5 mt-lg-0"
                                style={{ fontSize: "medium" }} >
                                {vultCopy.header.data[1].title}
                                </div>
                            <div className="monserrat-bold text-center " style={{ fontSize: "xx-large" }}>
                                {vultCopy.header.data[1].value}
                                </div>
                        </div>
                        <div className="px-5">
                            <div className="text-uppercase monserrat-medium gradient-text mx-lg-0 mx-auto mt-5 mt-lg-0"
                                style={{ fontSize: "medium" }}>
                                {vultCopy.header.data[2].title} 
                                </div>
                            <div className="monserrat-bold text-lg-start text-center" style={{ fontSize: "xx-large" }}>
                                {vultCopy.header.data[2].value} 
                                </div>
                        </div>
                    </div>

                    <div className="mt-5 monserrat-medium" style={{ fontSize: "medium" }}>
                        { vultCopy.header.text}

                    </div>
                </div>


                <div className="mt-5 text-center ">
                    <Image className="vix-chart" width={1200} height={560}
                     src="./img/vix-chart.svg" data-query="vlti.alts.chart" 
                        alt="Launch Chart" />
                </div>

                <div className="mt-5 mb-5 air-drop text-center position-relative" >
                    <h2 className="mt-5 p-text monserrat-bold">
                        {vultCopy.airdrop["main-title"]}
                    </h2>
                    <h1 className="mt-4 monserrat-bold gradient-text mx-auto">
                        {vultCopy.airdrop.details[0].value}
                    </h1>
                    <h5 className="mt-4 p-text monserrat-medium text-uppercase">
                        {vultCopy.airdrop.details[0].title}
                    </h5>
                    <h2 className="mt-4 p-text monserrat-bold gradient-text mx-auto">
                        {vultCopy.airdrop.details[1].value}
                    </h2>
                    <h5 className="mt-4 p-text monserrat-medium text-uppercase">
                        {vultCopy.airdrop.details[1].title}
                    </h5>
                    <Image style={{ position: "absolute", bottom: "-5rem", left: "10%", width: "220px", height: "220px" }}
                        width={220} height={220} src="./img/back-logo.svg"
                        alt="Vultisig logo" />
                </div>

                <div className="vix-faq">
                 
                     <div className="accordion" id="accordionExample">
                        {vultCopy.faq.map((item,index)=>(
                            <div key={index} className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className={`accordion-button menlo ${index > 0 ? 'collapsed' : ''}`}
                                     type="button" data-bs-toggle="collapse"
                                        data-bs-target={`#collapse-${index}`} aria-expanded={index == 0 ? 'true' : 'false'} 
                                        aria-controls={`collapse-${index}`}>
                                        {item.q}
                                    </button>
                                </h2>
                                <div id={`collapse-${index}`} 
                                className={`accordion-collapse collapse ${index == 0 ? 'show' : ''}`}
                                    aria-labelledby={`collapse-${index}`}
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body monserrat-regular color-neutral-200">
                                        <p>
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                      

                    </div> 
                    <Image  style={{ position: "absolute", bottom: "-15rem", right: "-3rem", width: "220px", height: "220px", zIndex: "-1" }}
                        src="./img/back-logo.svg" 
                      width={220} height={220} alt="Vultisig logo" />
                </div>

        </div>
        
        </>
    )
}