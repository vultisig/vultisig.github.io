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
    <div className="vult-page">
      <main className="vult-page-content">
        <section className="vult-page-mediaspace">
          <div className="vult-container">
            <div className="heading">
              <span
                dangerouslySetInnerHTML={{ __html: vultCopy.header.title }}
                className="title monserrat-bold"
              />
              <Image
                className="image"
                width={280}
                height={240}
                src="./img/vix-header.svg"
                alt="VULT"
              />
              <span
                dangerouslySetInnerHTML={{ __html: vultCopy.header.price }}
                className="price"
              />
            </div>

            <ul className="list">
              {vultCopy.header.data.map(({ title, value }) => (
                <li>
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

            <h2 className="heading monserrat-bold mt-5">
              {vultCopy.airdrop["main-title"]}
            </h2>

            <div className="list">
              <span className="text vult-gradient-txt monserrat-bold">
                {vultCopy.airdrop.details.value}
              </span>
            </div>
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
          <h2 className="heading monserrat-bold text-uppercase">
            {vultCopy.airdrop.details_1}
          </h2>
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
  );
}
