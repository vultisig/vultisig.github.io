import { homeCopy } from "@/app/copy/Home";
import styles from "./../../(pages)/home/page.module.scss";
import Image from "next/image";

export function SegmentThree() {
  return (
    <>
      <div className="user-experience  mt-5">
        <div className="row justify-content-center">
          {/* <!-- img --> */}
          <div className="col-lg-6 d-flex align-items-center justify-content-lg-start justify-content-center ">
            <img
              className=" w-75 mt-5 mt-lg-0 "
              src="./img/ux.svg"
              data-attribute="alt"
              alt="SEAMLESS SECURITY Of Vultisig"
            />
          </div>

          <div className="col-lg-6">
            <h2
              className="monserrat-bold mainTitle"
              dangerouslySetInnerHTML={{ __html: homeCopy.segment3.mainTitle }}
            ></h2>
            {homeCopy.segment3.items.map((item, index) => (
              <div
                key={index}
                className="mt-5 ps-4 gradient-border-left"
              >
                <h4 className="menlo monserrat-bold py-1 mb-3">{item.title}</h4>
                <p
                  className="monserrat-regular"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
