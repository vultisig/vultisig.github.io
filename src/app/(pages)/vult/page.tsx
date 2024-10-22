import { Metadata } from "next";
import Image from "next/image";
import { Collapse, CollapseProps } from "antd";

import { Footer } from "@/app/shared-components/Footer";
import { NavBar as Header } from "@/app/shared-components/NavBar";
import { vultCopy } from "@/app/copy/Vult";

export const metadata: Metadata = {
  title: "Vultisig | VULT",
  metadataBase: new URL("https://vultisig.com/VULT"),
  keywords: [
    "Vultisig",
    "Vultisig Token",
    "Vultisig VULT",
    "Vultisig Airdrop",
    "Vultisig CIRCULATING SUPPLY",
    "Vultisig asset exchange",
  ],
  openGraph: {
    siteName: "Vultisig",
    title: "Vultisig | VULT",
    type: "website",
    description:
      "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
    url: "https://vultisig.com/VULT",
    images: "https://vultisig.com/img/vult-thumbnail.png",
  },
  twitter: {
    site: "vultisig.com/VULT",
    card: "summary_large_image",
    title: "Vultisig | VULT",
    description:
      "Vultisig is a secure and easy-to-use platform that allows you to manage your digital assets.",
    images: "https://vultisig.com/img/vult-thumbnail.png",
  },
};

const items: CollapseProps["items"] = vultCopy.faq.map((item, index) => ({
  key: index + 1,
  label: item.q,
  children: <p dangerouslySetInnerHTML={{ __html: item.a }}></p>,
}));

export default async function Vult() {
  return (
    <div className="vult-page">
      <header className="vult-page-header">
        <div className="container">
          <Header />
        </div>
      </header>

      <main className="vult-page-content">
        <section className="vult-page-mediaspace">
          <div className="container">
            <div className="heading">
              <span
                dangerouslySetInnerHTML={{ __html: vultCopy.header.title }}
                className="title"
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
          <div className="container">
            <Image
              width={222}
              height={222}
              src="./img/back-logo.svg"
              alt="Vultisig logo"
              className="vult-page-icon"
            />

            <h2 className="heading">{vultCopy.airdrop["main-title"]}</h2>

            <ul className="list">
              <li>
                <h3 className="title">{vultCopy.airdrop.details[0].title}</h3>
                <span className="text vult-gradient-txt">
                  {vultCopy.airdrop.details[0].value}
                </span>
              </li>
              <li>
                <h3 className="title">{vultCopy.airdrop.details[1].title}</h3>
                <span className="date vult-gradient-txt">
                  {vultCopy.airdrop.details[1].date}
                </span>
                <span className="text vult-gradient-txt">
                  {vultCopy.airdrop.details[1].value}
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="vult-page-faq">
          <div className="container">
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

      <footer className="vult-page-footer">
        <div className="container">
          <Footer />
        </div>
      </footer>

      <div className="container">
        <span className="circle-top-left" />
        <span className="circle-top-left-glow" />
      </div>
    </div>
  );
}
