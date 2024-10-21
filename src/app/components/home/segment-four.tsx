import { homeCopy } from "@/app/copy/Home";
import Image from "next/image";
export function SegmentFour() {
  return (
    <>
      <div className="best-features text-center  ">
        <h2
          className="monserrat-bold mainTitle "
          dangerouslySetInnerHTML={{ __html: homeCopy.segment4.mainTitle }}
        ></h2>
        <div className="mb-4 mt-5">
          <div className="row">
            <div className="col-lg-6  col-md-12 mt-4 pe-4">
              <div className="asset-managemant text-center p-4 h-100">
                <h3
                  className="text-uppercase monserrat-bold text-white mt-2"
                  dangerouslySetInnerHTML={{
                    __html: homeCopy.segment4.itemOne.title,
                  }}
                ></h3>
                <p
                  className="mt-3 fs-lg-6 fs-5  monserrat-regular"
                  dangerouslySetInnerHTML={{
                    __html: homeCopy.segment4.itemOne.description,
                  }}
                ></p>
                <img
                  className="mt-5 w-75-50 mx-auto "
                  src="/img/best-features-image-1.png"
                  alt="Asset Management Hub"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-4 ps-4 ">
              <div className="crypto-exchange text-center p-4 h-100">
                <img
                  className="fiat-img w-75-50 mx-auto mb-5 "
                  src="/img/best-features-image-2.png"
                  alt="Asset Management Hub"
                />
                <h3
                  className="text-uppercase monserrat-bold  mt-2 title"
                  dangerouslySetInnerHTML={{
                    __html: homeCopy.segment4.itemTwo.title,
                  }}
                ></h3>
                <p
                  className="mt-3 fs-lg-6 fs-5  monserrat-regular "
                  dangerouslySetInnerHTML={{
                    __html: homeCopy.segment4.itemTwo.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mb-3">
          <div className=" leading-fiat row p-2  mt-5  justify-content-center ">
            <div className="  col-lg-4 pe-5">
              <img
                className="fiat-img mx-auto img-fluid"
                src="/img/best-features-image-3.png"
                alt={homeCopy.segment4.itemThree.alt}
              />
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center ">
              <h1
                className="text-uppercase monserrat-bold text-start "
                dangerouslySetInnerHTML={{
                  __html: homeCopy.segment4.itemThree.title,
                }}
              ></h1>
              <p
                className="monserrat-regular mt-3  text-medium text-start "
                dangerouslySetInnerHTML={{
                  __html: homeCopy.segment4.itemThree.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
