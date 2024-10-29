"use client";
import { homeCopy } from "@/app/copy/Home";
import styles from "./../../(pages)/home/page.module.scss";
import Image from "next/image";
import { trackAction } from "@/app/lib/gtagHelper";
import { navBarCopy } from "@/app/copy/NavBar";

export function SegmentStore() {
  return (
    <>
      <div
        id="store-section"
        className="store align-items-center justify-content-center"
      >
        <div className="ms-1 mb-3">
          <h2 style={{ lineHeight: "150%" }} className="monserrat-bold">
            <strong
              dangerouslySetInnerHTML={{
                __html: homeCopy.store.title,
              }}
            ></strong>
          </h2>
          <div className="download-box">
            <a
              className="align-items-center btn btn-color btn-primary d-flex justify-content-center"
              style={{ height: "48px", width: "193px" }}
              href={navBarCopy.download.url}
            >
              {navBarCopy.download.name}
            </a>
          </div>
        </div>
        <div className="text-center  justify-content-center">
          <img
            src="/img/iPhone-Space-b.png"
            className="store-img "
            alt="SECURE YOUR DIGITAL ASSETS NOW"
          />
        </div>
      </div>
    </>
  );
}
