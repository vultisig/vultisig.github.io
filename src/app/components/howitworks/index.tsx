"use client";
import { homeCopy } from "@/app/copy/Home";
import { HowItWorksCopy } from "@/app/copy/HowItWorks";
import { trackAction } from "@/app/lib/gtagHelper";
import Image from "next/image";

export function Sections() {
  return (
    <>
      <header className=" mt-2 howItWorke-header">
        <div className=" header-content">
          <div className="row align-items-center">
            <div className="col-lg-7 " style={{ position: "relative" }}>
              <div className="monserrat-bold slogan ">
                <strong
                  dangerouslySetInnerHTML={{
                    __html: HowItWorksCopy.header.slogan,
                  }}
                ></strong>
                <Image
                  className="how-to-back-logo"
                  src="/img/back-logo.svg"
                  width={119}
                  height={119}
                  alt="Vultisig Logo"
                />
              </div>
            </div>
            <div className="col-lg-5 justify-items-start">
              <div className="header-img-container mx-sm-auto w-100 w-md-75">
                <div className="background-overlay"></div>
                <img
                  className="header-img w-100"
                  src="/img/how-it-works-header.png"
                  alt="SIMPLE STEPS, SUPERIOR SECURITY - THE VULTISIG DIFFERENCE"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <---! segment one ---> */}
      <div className="private-keys">
        <div className="row">
          <div className="col-lg-6">
            <h2
              className=" monserrat-bold title"
              style={{ lineHeight: "150%" }}
              dangerouslySetInnerHTML={{
                __html: HowItWorksCopy.segment1.subTitle,
              }}
            ></h2>
            {HowItWorksCopy.segment1.items.map((item, index) => (
              <div key={index} className="desc ps-4 gradient-border-left mt-5">
                <h3 className="menlo monserrat-bold py-1">{item.title}</h3>
                <p
                  className="monserrat-regular fs-5 mt-4"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
              </div>
            ))}
          </div>

          {/* <!-- img --> */}
          <div
            className="col-lg-6  text-end m-auto d-flex justify-content-lg-end justify-content-center"
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <img
              className="col-8 col-lg-12"
              src="./img/private-keys-img.svg"
              alt="WHAT IS WRONG WITH WALLETS"
            />
          </div>
        </div>
      </div>

      {/* <---!segment two---> */}
      <div className="private-keys  mt-5  text-center">
        <h2
          className="monserrat-bold mainTitle"
          dangerouslySetInnerHTML={{
            __html: HowItWorksCopy.segment2.mainTitle,
          }}
        ></h2>
        <span className=" monserrat-regular p-text px-3">
          <small
            dangerouslySetInnerHTML={{
              __html: HowItWorksCopy.segment2.subTitle,
            }}
          ></small>
        </span>
        <div className="mt-5">
          <div className="row  justify-content-center g-5">
            {HowItWorksCopy.segment2.items.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6   mx-5  item  text-center "
              >
                <div className="p-3 blue-section h-100 item ">
                  <Image
                    height={130}
                    width={200}
                    data-attribute="alt"
                    src={item.img}
                    className="mx-auto"
                    alt="Vultisig is the next evolution in crypto vaults"
                  />
                  <h5 className="menlo mt-5 monserrat-bold mb-4  title">
                    {item.title}
                  </h5>
                  <p className="monserrat-regular ">
                    <small
                      className="desc"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <---!segment three---> */}
      <div className="crypto-security mb-5">
        <h2
          className="monserrat-bold mainTitle text-center mb-5 "
          dangerouslySetInnerHTML={{
            __html: HowItWorksCopy.segment4.mainTitle,
          }}
        ></h2>
        <div className="crypto-security-box mb-5 top-left-gradient mt-3 ">
          <div
            className="row trusted-devices-cont py-3 "
            style={{ overflow: "hidden" }}
          >
            <div
              className="col-lg-6  text-center align-items-center "
              style={{ position: "relative" }}
            >
              <div className="d-flex h-100 justify-content-center align-items-center my-auto  px-2">
                <img
                  className="trusted-devices-img "
                  src="./img/crypto-security-img-2.svg"
                  alt=""
                />
                <img
                  className="trusted-devices-img "
                  src="./img/crypto-security-img-1.svg "
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6  my-auto  ">
              <div className="p-4">
                <h3
                  className="monserrat-bold text-uppercase text-white"
                  dangerouslySetInnerHTML={{
                    __html: HowItWorksCopy["segment4"].subTitle,
                  }}
                ></h3>
                {HowItWorksCopy.segment4.description.map((item, index) => (
                  <p
                    key={index}
                    className="monserrat-regular mt-4 fs-5 color-neutral pe-lg-4 text-medium"
                  >
                    {item.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <---!segment stor---> */}
      <div className="howitwork-store pb-3 pt-3 px-5 mb-5 d-flex align-items-center justify-content-center">
        <div className="ms-1 ">
          <h2 style={{ lineHeight: "150%" }} className="monserrat-bold">
            <strong
              dangerouslySetInnerHTML={{
                __html: homeCopy.store.title,
              }}
            ></strong>
          </h2>
          <p
                className="monserrat fs-5 "
                dangerouslySetInnerHTML={{
                  __html: HowItWorksCopy.store.subTitle,
                }}
              ></p>
          <div className=" download-box ">
            <p className="   text-center text-md-start ">
              {homeCopy.store.items.Vultisig.title}
            </p>
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
            <p className="   text-center text-md-start ">
              {homeCopy.store.items.VultiWallet.title}
            </p>
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
            <p className="   text-center text-md-start ">
              {homeCopy.store.items.Browser.title}
            </p>
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
