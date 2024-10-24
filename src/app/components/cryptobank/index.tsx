"use client";
import { useEffect } from "react";
import { HowItWorksCopy } from "@/app/copy/HowItWorks";
import { CryptoBankCopy } from "@/app/copy/CryptoBank";
import { trackAction } from "@/app/lib/gtagHelper";
import Image from "next/image";
import { homeCopy } from "@/app/copy/Home";

export function Sections() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <header className=" mt-2 cryptoBank-header">
        <div className=" header-content">
          <div className="row align-items-center">
            <div className="col-lg-6" style={{ position: "relative" }}>
              <div className="monserrat-bold slogan ms-2">
                <strong
                  dangerouslySetInnerHTML={{
                    __html: CryptoBankCopy.header.mainTitle,
                  }}
                ></strong>
              </div>

              <div className="mt-5 subTitle  ms-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: CryptoBankCopy.header.subTitle,
                  }}
                ></span>
              </div>
              <div className="mt-5">
                <ul>
                  {CryptoBankCopy.header.items.map((item, index) => (
                    <li key={index} className="desc mt-4">
                      <p
                        className=" fs-5 "
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-color px-5 py-2 mt-5  ms-3"
              >
                Get Started
              </button>
            </div>
            <div className="col-lg-6  ">
              <div className="header-img-container mx-sm-auto w-100 ">
                <div className="background-shadow "></div>
                <img
                  className="header-img  mx-auto"
                  src="/img/credit-cards-3.svg"
                  alt="SIMPLE STEPS, SUPERIOR SECURITY - THE VULTISIG DIFFERENCE"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="row gap-3 header-boxs ">
              {CryptoBankCopy.header.boxs.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6  blue-section p-3  item bullet-border-left"
                >
                  <Image
                    height={58.91}
                    width={58.91}
                    data-attribute="alt"
                    src={item.img}
                    className="mb-3"
                    alt="Vultisig is the next evolution in crypto vaults"
                  />
                  <p className="monserrat-regular text-start">
                    <small
                      className="desc"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    ></small>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* <---! segment one ---> */}
      <div className="earn-up ">
        <h2
          className="monserrat-bold mainTitle mb-5 text-center "
          dangerouslySetInnerHTML={{
            __html: CryptoBankCopy.segment1.mainTitle,
          }}
        ></h2>
        <p
          className=" monserrat-regular text-center"
          dangerouslySetInnerHTML={{
            __html: CryptoBankCopy.segment1.subTitle,
          }}
        ></p>
        <div className="btn-box mx-auto mt-5 d-flex justify-content-center  ">
          <button className="rounded-btn active-btn">KYC</button>
          <button className="rounded-btn">1st Top up</button>
        </div>
        <div className="row earn-up-wrapper justify-content-center align-items-center gap-0 column-gap-5">
          {CryptoBankCopy.segment1.items.map((item, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-6  mt-5 p-4 blue-section   item-box "
            >
              <h3 className=" monserrat-bold mb-4 text-start mt-3 ms-2">
                {item.title}
              </h3>
              <ul>
                {item.list.map((item, index) => (
                  <li
                    key={index}
                    className="earn-up-item monserrat-regular text-start mt-4 d-flex"
                  >
                    <img src="./img/button-checkmark.svg"></img>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.text,
                      }}
                    ></p>
                  </li>
                ))}
              </ul>
              <hr className="hr" />
              <button
                type="button"
                className="btn btn-primary btn-color px-5 py-2  "
              >
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* <---!segment two---> */}
      <div className="unlock-vultisig">
        <h2
          className="monserrat-bold mainTitle text-center"
          dangerouslySetInnerHTML={{
            __html: CryptoBankCopy.segment2.mainTitle,
          }}
        ></h2>
        <div className="mt-5">
          <div className="row  justify-content-center gap-5 column-gap-5">
            {CryptoBankCopy.segment2.items.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6  blue-section p-3  item-box "
              >
                <img
                  src={item.img}
                  className="mx-auto unlock-vultisig-img"
                  alt="Vultisig is the next evolution in crypto vaults"
                />
                <h3 className=" mt-5 monserrat-bold mb-4 text-start title ">
                  {item.title}
                </h3>
                <ul>
                  {item.list.map((item, index) => (
                    <li className="monserrat-regular text-start" key={index}>
                      <small
                        className="desc"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      ></small>
                    </li>
                  ))}
                </ul>
                <hr className="hr" />
                <button
                  type="button"
                  className="btn btn-primary btn-color px-5 py-2  mx-auto "
                >
                  {item.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <---!segment three---> */}
      <div className="lowest-fees">
        <div className="row">
          <div className="col-lg-6 col-md-12 text-end m-auto d-flex justify-content-lg-end justify-content-center">
            <div className="box mb-3 text-start">
              <img className="img-bg" src="./img/circle.svg"></img>
              <div className="fees">
                <div className="air-drop blur-bg">
                  <span className="mb-1">$VULT Airdrop Points</span>
                  <div>
                    <span>2244</span>
                    <img
                      className="arrow-right"
                      src="./img/chevron-right-small.svg"
                    />
                  </div>
                </div>

                <div className="air-drop blur-bg">
                  {" "}
                  <span>Total Referral Rewards</span>
                  <div>
                    <span>3,995.34 $VULT</span>
                    <img
                      className="arrow-right"
                      src="./img/chevron-right-small.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="fees-privileges">
                <h2 className="privileges monserrat-bold">Privileges</h2>
                <div className="privileges">
                  {CryptoBankCopy.segment3.Priviledges.map((item, index) => (
                    <div key={index} className="blur-bg">
                      <h4>{item.q} </h4>
                      <img
                        className="arrow-right"
                        src="./img/chevron-right-small.svg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 px-5">
            <h2
              className=" monserrat-bold title  ms-2"
              style={{ lineHeight: "150%" }}
              dangerouslySetInnerHTML={{
                __html: CryptoBankCopy.segment3.mainTitle,
              }}
            ></h2>
            <ul>
              {CryptoBankCopy.segment4.items.map((item, index) => (
                <li key={index} className="desc  mt-4">
                  <p
                    className="monserrat-regular fs-5 "
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <---!segment four---> */}
      <div className="spend-crypto">
        <div className="row">
          <div className="col-lg-6">
            <h2
              className=" monserrat-bold title  ms-2"
              style={{ lineHeight: "150%" }}
              dangerouslySetInnerHTML={{
                __html: CryptoBankCopy.segment4.mainTitle,
              }}
            ></h2>
            <ul>
              {CryptoBankCopy.segment4.items.map((item, index) => (
                <li key={index} className="desc  mt-4">
                  <p
                    className="monserrat-regular fs-5 "
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </li>
              ))}
            </ul>
          </div>

          {/* <!-- img --> */}
          <div
            className="col-lg-6  text-end m-auto d-flex justify-content-lg-end justify-content-center"
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <img
              className="col-8 col-lg-12 applePay-img "
              src="./img/applePay.svg"
              alt="WHAT IS WRONG WITH WALLETS"
            />
            <img
              className="col-8 col-lg-12 googlePay-img"
              src="./img/googlePay.svg"
              alt="WHAT IS WRONG WITH WALLETS"
            />
          </div>
        </div>
      </div>

      {/* <---!F&Q---> */}
      <div className="cryptoBank-FandQ ">
        <h2
          className=" monserrat-bold text-center mb-5"
          style={{ lineHeight: "150%" }}
          dangerouslySetInnerHTML={{
            __html: CryptoBankCopy.FandQ["main-title"],
          }}
        ></h2>
        <div className="faq-item">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {CryptoBankCopy.FandQ.items.map((item, index) => (
              <div key={index} className="accordion-item ">
                <h2 className="accordion-header ">
                  <button
                    className="accordion-button  collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${index}`}
                    aria-expanded={index == 0 ? "true" : "false"}
                    aria-controls={`collapse-${index}`}
                  >
                    {item.q}
                  </button>
                </h2>
                <div
                  id={`collapse-${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`collapse-${index}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body monserrat-regular color-neutral-200">
                    <p dangerouslySetInnerHTML={{ __html: item.a }}></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <---!segment stor---> */}
      <div className="howitwork-store pt-3 px-5 mb-5 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center me-5">
          <div className="ms-1">
            <h2 style={{ lineHeight: "150%" }} className="monserrat-bold">
              <strong
                dangerouslySetInnerHTML={{
                  __html: HowItWorksCopy.store.mainTitle,
                }}
              ></strong>
            </h2>
            <p
              className="monserrat fs-5 "
              dangerouslySetInnerHTML={{
                __html: HowItWorksCopy.store.subTitle,
              }}
            ></p>
            <div className=" download-box align-content-start">
              <p>{homeCopy.store.items.Vultisig.title}</p>
              <div className="items">
                {homeCopy.store.items.Vultisig.items.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target={item.traget}
                    onClick={() => {
                      trackAction("click", "download_app", item.downloadLabel);
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
                ))}
              </div>
              <p>{homeCopy.store.items.VultiWallet.title}</p>
              <div className="items">
                {homeCopy.store.items.VultiWallet.items.map((item, index) => 
                      <a
                        key={index}
                        href={item.url}
                        target={item.target}
                        onClick={() =>
                          trackAction(
                            "click",
                            "download_app",
                            item.downloadLabel
                          )
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
                )}
              </div>
              <p>{homeCopy.store.items.Browser.title}</p>
              <div className="items">
                {homeCopy.store.items.Browser.items.map((item, index) => 
                      <a
                        key={index}
                        href={item.url}
                        target={item.target}
                        onClick={() =>
                          trackAction(
                            "click",
                            "download_app",
                            item.downloadLabel
                          )
                        }
                      >
                        <Image
                          className="my-2 my-lg-1 me-lg-3"
                          src={item.image}
                          width={180}
                          height={52}
                          alt="Download on AppStore"
                        />
                      </a>)}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center  justify-content-center ms-5">
          <img
            src="/img/cryptobank-store.svg"
            className="store-img img-fluid"
            alt="SECURE YOUR DIGITAL ASSETS NOW"
          />
        </div>
      </div>
    </>
  );
}
