"use client"
import { FAQsCopy } from "@/app/copy/Faqs";
import { useEffect } from "react";

export function Sections() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return (
        <>
           <h1 className="monserrat-bold text-center my-5">
            {FAQsCopy["main-title"]}
           </h1>
           <div className="faq">
           <div className="accordion" id="accordionExample">
                        {FAQsCopy.items.map((item,index)=>(
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
            </div>
        </>
    )
}