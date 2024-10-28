"use client";
import { vultCopy } from "@/app/copy/Vult";
import Image from "next/image";
import { Collapse, CollapseProps } from "antd";

const items: CollapseProps["items"] = vultCopy.faq.map((item, index) => ({
  key: index + 1,
  label: item.q,
  children: <p dangerouslySetInnerHTML={{ __html: item.a }}></p>,
}));

export function Sections() {
  return (
    <>
      <div className="bg"></div>
      <div className="vult-page">
        <main className="vult-page-content">
          <section className="vult-page-mediaspace">
            <div className="vult-container">
              <div className="heading">
                <span
                  dangerouslySetInnerHTML={{ __html: vultCopy.header.title }}
                  className="title monserrat-bold"
                />
              </div>

              <ul className="list">
                {vultCopy.header.data.map(({ title, value }, index) => (
                  <li key={index}>
                    <span className="title">{title}</span>
                    <span className="value">{value}</span>
                  </li>
                ))}
              </ul>

              <span
                className="description"
                dangerouslySetInnerHTML={{ __html: vultCopy.header.text }}
              />
            </div>
          </section>

          <section className="vult-page-stats">
            <div className="vult-container">
              <Image
                width={222}
                height={222}
                src="./img/back-logo.svg"
                alt="Vultisig logo"
                className="vult-page-icon"
              />

              <h2
                className="heading monserrat-bold mt-5"
                dangerouslySetInnerHTML={{
                  __html: vultCopy.airdrop.main_title,
                }}
              ></h2>
            </div>
          </section>
          <section className="vult-page-pics">
            <ul className="list-vultisig">
              {vultCopy.airdrop.img.map((img, index) => (
                <li key={index}>
                  <img src={img.src} alt="Vultisig logo" />
                </li>
              ))}
            </ul>
            <div className="join-airdrop">
              <a
                className="align-items-center btn btn-color btn-primary d-flex justify-content-center"
                style={{ height: "48px", width: "193px" }}
                href={vultCopy.airdrop.Join_the_AirDrop_URL}
                target="_blank"
              >
                {vultCopy.airdrop.Join_the_AirDrop}
              </a>
            </div>
          </section>

          <section className="vult-page-faq">
            <div className="vult-container">
              <Image
                width={222}
                height={222}
                src="./img/back-logo.svg"
                alt="Vultisig logo"
                className="vult-page-icon"
              />

              <Collapse items={items} defaultActiveKey={[1]} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
