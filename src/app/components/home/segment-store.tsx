"use client";
import { homeCopy } from "@/app/copy/Home";
import styles from "./../../(pages)/home/page.module.scss";
import Image from "next/image";
import { trackAction } from "@/app/lib/gtagHelper";

export function SegmentStore() {
  return (
    <>
      <div id="store-section" className="store pt-3 px-2">
        <div className="row  ">
          <div className="col-lg-7 px-lg-5 px-3 d-flex align-items-center justify-content-center">
            <div className="ms-1">
              <h2 style={{ lineHeight: "150%" }} className="monserrat-bold">
                {" "}
                <strong
                  dangerouslySetInnerHTML={{ __html: homeCopy.store.title }}
                ></strong>
              </h2>
              <div className=" download-box align-content-start">
                <p>{homeCopy.store.items.Vultisig.title}</p>
                <div className="items">
                  {homeCopy.store.items.Vultisig.items.map((item, index) => {
                    return (
                      <>
                        <a
                          key={index}
                          href={item.url}
                          target={item.traget}
                          onClick={() => {
                            trackAction(
                              "click",
                              "download_app",
                              item.downloadLabel
                            );
                          }}
                        >
                          <Image
                            className="my-2 my-lg-1 me-lg-3"
                            src={item.image}
                            width={180}
                            height={52}
                            alt="Download on AppStore"
                          />
                        </a>
                      </>
                    );
                  })}
                </div>
                <p>{homeCopy.store.items.VultiWallet.title}</p>
                <div className="items">
                  {homeCopy.store.items.VultiWallet.items.map((item, index) => {
                    return (
                      <>
                        <a
                          key={index}
                          href={item.url}
                          target={item.target}
                          onClick={() => {
                            trackAction(
                              "click",
                              "download_app",
                              item.downloadLabel
                            );
                          }}
                        >
                          <Image
                            className="my-2 my-lg-1 me-lg-3"
                            src={item.image}
                            width={180}
                            height={52}
                            alt="Download on AppStore"
                          />
                        </a>
                      </>
                    );
                  })}
                </div>
                <p>{homeCopy.store.items.Browser.title}</p>
                <div className="items">
                  {homeCopy.store.items.Browser.items.map((item, index) => {
                    return (
                      <>
                        <a
                          key={index}
                          href={item.url}
                          target={item.target}
                          onClick={() => {
                            trackAction(
                              "click",
                              "download_app",
                              item.downloadLabel
                            );
                          }}
                        >
                          <Image
                            className="my-2 my-lg-1 me-lg-3"
                            src={item.image}
                            width={180}
                            height={52}
                            alt="Download on AppStore"
                          />
                        </a>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={"col-lg-5 text-center  justify-content-center"}>
            <img
              src="/img/iPhone-Space.png"
              className="store-img img-fluid"
              alt="SECURE YOUR DIGITAL ASSETS NOW"
            />
          </div>
        </div>
      </div>
    </>
  );
}
