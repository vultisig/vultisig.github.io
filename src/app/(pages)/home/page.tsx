"use client";
import { homeCopy } from "@/app/copy/Home";
import { SegmentOne } from "@/app/components/home/segment-one";
import { SegmentTwo } from "@/app/components/home/segment-two";
import { SegmentThree } from "@/app/components/home/segment-three";
import { SegmentFour } from "@/app/components/home/segment-four";
import { SegmentFive } from "@/app/components/home/segment-five";
import { SegmentSix } from "@/app/components/home/segment-six";
import { SegmentStore } from "@/app/components/home/segment-store";
import Image from "next/image";
import { trackAction } from "@/app/lib/gtagHelper";
export default async function Home() {
  return (
    <>
      <header className="header ">
        <div
          className="header-bg mx-auto "
        />
        <div className="header-content">
          <div className=" monserrat-bold slogan mb-3 ">
             <span dangerouslySetInnerHTML={{ __html: homeCopy.header.slogan }}></span>
          </div>
          <div className="blue-section p-3 mt-3 ">
            <p
              className=""
              dangerouslySetInnerHTML={{ __html: homeCopy.header.subSlogan }}
            ></p>
          </div>
          {/* <!-- DOWNLOAD BOX --> */}
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
            <a
              href={homeCopy.store.vultiWebLink.url}
              target={homeCopy.store.vultiWebLink.target}
              onClick={() => {
                trackAction("click", "download_app", "vultiweb");
              }}
            >
              <Image
                className="my-2 my-lg-1"
                src="./img/vultiweb.svg"
                width={180}
                height={52}
                alt="View it on VultiWeb"
              />
            </a>
          </div>
        </div>
        <div className="image-box">
          <img
            className="header-img  "
            src="./img/header-img.svg"
            alt="testmckmpp"
          />
          <img
            className="shadow-img mx-auto "
            src="./img/shadow.svg"
            alt="testmckmpp"
          />
        </div>
      </header>

      <div id="howitworks" className="mt-5 py-5 color-neutral">
        <SegmentOne />
        <SegmentTwo />
        <SegmentThree />
        <SegmentFour />
        <SegmentFive />
        <SegmentSix />
        <SegmentStore />
      </div>
      <div className="circle-middle-left"></div>
      <div className="circle-middle-left-glow"></div>
      <div className="circle-middle-right"></div>
      <div className="circle-middle-right-glow"></div>
      <div className="circle-bottom"></div>
      <div className="circle-bottom-glow"></div>
    </>
  );
}
