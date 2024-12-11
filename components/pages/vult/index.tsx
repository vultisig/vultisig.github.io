import Image from "next/image";
import { Collapse, CollapseProps } from "antd";

import content from "@/components/pages/vult/index.json";

const items: CollapseProps["items"] = content.faq.map((item, index) => ({
  key: index + 1,
  label: item.q,
  children: <p dangerouslySetInnerHTML={{ __html: item.a }}></p>,
}));
export default function Component() {
  return (
    <>
      <div className="bg"></div>
      <main className="vult-page">
        <section className="mediaspace">
          <div className="container">
            <div className="heading">
              <span
                dangerouslySetInnerHTML={{ __html: content.header.title }}
                className="title monserrat-bold"
              />
            </div>
            <ul className="list">
              {content.header.data.map(({ title, value }, index) => (
                <li key={index}>
                  <span className="title">{title}</span>
                  <span className="value">{value}</span>
                </li>
              ))}
            </ul>
            <span
              className="description"
              dangerouslySetInnerHTML={{ __html: content.header.text }}
            />
          </div>
        </section>
        <section className="vult-page-stats">
          <div className="container">
            <Image
              width={222}
              height={222}
              src="images/back-logo.svg"
              alt="Vultisig logo"
              className="vult-page-icon"
            />

            <h2
              className="heading monserrat-bold mt-5 text-uppercase"
              dangerouslySetInnerHTML={{
                __html: content.airdrop.main_title,
              }}
            ></h2>
          </div>
        </section>
        <section className="vult-page-pics">
          <div className="container">
            <ul className="list-vultisig">
              {content.airdrop.items.map((item, index) => (
                <li key={index}>
                  <Image
                    className="vult-page-icon"
                    src={item.src}
                    alt="Vultisig logo"
                    height={222}
                    width={142}
                  />
                  <span
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  ></span>
                  <p className="desc"  dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}></p>
                </li>
              ))}
            </ul>
           
            <a
              className="btn"
              href={content.airdrop.JoinTheAirDropURL}
              target="_blank"
            >
              {content.airdrop.JoinTheAirDrop}
            </a>
          </div>
        </section>

        <section className="vult-page-faq">
          <div className="container">
            <Image
              width={222}
              height={222}
              src="./images/back-logo.svg"
              alt="Vultisig logo"
              className="vult-page-icon"
            />

            <Collapse items={items} defaultActiveKey={[1]} />
          </div>
        </section>
      </main>
    </>
  );
}
