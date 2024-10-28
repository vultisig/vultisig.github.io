"use client";
import { homeCopy } from "@/app/copy/Home";
import styles from "./../../(pages)/home/page.module.scss";
import Image from "next/image";
import { trackAction } from "@/app/lib/gtagHelper";

export function SegmentStore() {
  return (
    <>
      <div id="store-section" className="store  pt-3 px-5 mb-5 d-flex align-items-center justify-content-center wrap">
        <div className="ms-1 mb-3">
          <h2 style={{ lineHeight: "150%" }} className="monserrat-bold">
            <strong
              dangerouslySetInnerHTML={{
                __html: homeCopy.store.title,
              }}
            ></strong>
          </h2>
          <div className="download-box ">
            <p className="text-center text-md-start ">{homeCopy.store.items.Vultisig.title}</p>
            <div className="items  justify-content-center justify-content-md-start">
              {homeCopy.store.items.Vultisig.items.map((item, index) => {
                return (
                  <>
                    <a
                      key={index}
                      href={item.url}
                      target={item.traget}
                      onClick={() =>
                        trackAction("click", "download_app", item.downloadLabel)
                      }
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
            <p className="   text-center text-md-start ">{homeCopy.store.items.VultiWallet.title}</p>
            <div className="items justify-content-center justify-content-md-start">
              {homeCopy.store.items.VultiWallet.items.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.url}
                    target={item.target}
                    onClick={() =>
                      trackAction("click", "download_app", item.downloadLabel)
                    }
                  >
                    <Image
                      className="my-2 my-lg-1 me-lg-3"
                      src={item.image}
                      width={180}
                      height={52}
                      alt="Download on AppStore"
                    />
                  </a>
                );
              })}
            </div>
            <p className="   text-center text-md-start ">{homeCopy.store.items.Browser.title}</p>
            <div className="items justify-content-center justify-content-md-start">
              {homeCopy.store.items.Browser.items.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.url}
                    target={item.target}
                    onClick={() =>
                      trackAction("click", "download_app", item.downloadLabel)
                    }
                  >
                    <Image
                      className="my-2 my-lg-1 me-lg-3"
                      src={item.image}
                      width={180}
                      height={52}
                      alt="Download on AppStore"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-center  justify-content-center">
          <img
            src="/img/iPhone-Space.png"
            className="store-img "
            alt="SECURE YOUR DIGITAL ASSETS NOW"
          />
        </div>
      </div>
    </>
  );
}
