"use client";
import { homeCopy } from "@/app/copy/Home";
import styles from "./../../(pages)/home/page.module.scss";
import Image from "next/image";
import { trackAction } from "@/app/lib/gtagHelper";

export function SegmentStore() {
  return (
    <>
      <div id="store-section" className="store pt-3 px-2">
        <div className="row  " >
          <div className="col-lg-7 px-lg-5 px-3 d-flex align-items-center justify-content-center">
            <div className="ms-1">
              <h2 style={{ lineHeight: "150%" }} className="monserrat-bold">
                {" "}
                <strong
                  dangerouslySetInnerHTML={{ __html: homeCopy.store.title }}
                ></strong>
              </h2>
              <div className=" download-box  d-flex align-content-start flex-wrap">
                <a
                  href={homeCopy.store.appStoreLink.url}
                  target={homeCopy.store.appStoreLink.traget}
                  onClick={() => {
                    trackAction("click", "download_app", "app_store");
                  }}
                >
                  <Image
                    className="my-2 my-lg-1 me-lg-3"
                    src="./img/appstore.svg"
                    width={180}
                    height={52}
                    alt="Download on AppStore"
                  />
                </a>
                <a
                  href={homeCopy.store.githubLink.url}
                  target={homeCopy.store.githubLink.target}
                  onClick={() => {
                    trackAction("click", "download_app", "github");
                  }}
                >
                  <Image
                    className="my-2 my-lg-1 me-lg-3"
                    src="./img/github-download.svg"
                    width={180}
                    height={52}
                    alt="Download on Github"
                  />
                </a>
                <a
                  href={homeCopy.store.playStoreLink.url}
                  target={homeCopy.store.playStoreLink.target}
                  onClick={() => {
                    trackAction("click", "download_app", "play_store");
                  }}
                >
                  <Image
                    className="my-2 my-lg-1 me-lg-3"
                    src="./img/playstore.svg"
                    width={180}
                    height={52}
                    alt="Download on PlayStore"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              "col-lg-5 text-center  justify-content-center" 
            }
          >
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
