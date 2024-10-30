"use client";
import { homeCopy } from "@/app/copy/Home";

import { SegmentTotal } from "@/app/components/home/segment-total";
import { SegmentOne } from "@/app/components/home/segment-one";
import { SegmentTwo } from "@/app/components/home/segment-two";
import { SegmentThree } from "@/app/components/home/segment-three";
import { SegmentFour } from "@/app/components/home/segment-four";
import { SegmentFive } from "@/app/components/home/segment-five";
import { SegmentSix } from "@/app/components/home/segment-six";
import { SegmentStore } from "@/app/components/home/segment-store";
import { navBarCopy } from "@/app/copy/NavBar";
export default async function Home() {
  return (
    <>
      <header className="header ">
        <div className="header-content">
          <div className=" monserrat-bold slogan mb-3 ">
            <span
              dangerouslySetInnerHTML={{ __html: homeCopy.header.slogan }}
            ></span>
          </div>
          <div className="subSlogan">
            <span
              dangerouslySetInnerHTML={{ __html: homeCopy.header.subSlogan }}
            ></span>
          </div>
          <div className="blue-section p-3 mt-3 ">
            <p
              className=""
              dangerouslySetInnerHTML={{ __html: homeCopy.header.boxText }}
            ></p>
          </div>
          {/* <!-- DOWNLOAD BOX --> */}
          <div className=" download-box align-content-start">
            <div className="items">
              <a
                className="align-items-center btn btn-color btn-primary d-flex justify-content-center"
                style={{ height: "48px", width: "193px" }}
                href={navBarCopy.download.url}
              >
                {navBarCopy.download.name_b}
              </a>
            </div>
          </div>
        </div>
        <div className="image-box">
          <img
            className=" header-image mx-auto"
            src="./img/header-img.png"
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
        <SegmentTotal />
        <SegmentOne />
        <SegmentTwo />
        <SegmentThree />
        <SegmentFour />
        <SegmentFive />
        <SegmentSix />
        <SegmentStore />
      </div>
      <div className="shadow-top-left"></div>
      <div className="shadow-top-right"></div>
      <div className="shadow-middle-left"></div>
      <div className="circle-middle-left"></div>
      <div className="circle-middle-left-glow"></div>
    </>
  );
}
