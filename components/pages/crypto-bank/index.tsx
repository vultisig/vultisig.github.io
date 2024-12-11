"use client";
import { useState } from "react";
import Image from "next/image";
import { Radio, Collapse, CollapseProps } from "antd";

import content from "@/components/pages/crypto-bank/index.json";

const items: CollapseProps["items"] = content.FAQ.items.map((item, index) => ({
  key: index + 1,
  label: item.q,
  children: <p dangerouslySetInnerHTML={{ __html: item.a }}></p>,
}));
export default function Component() {
  const [btnValue, setbtnValue] = useState("kyc");
  return (
    <main className="crypto-bank-page">
      <section className="introduction">
        <div className="container">
          <h3 className="heading">{content.sectionOne.heading}</h3>
          <p className="text gradient-text">{content.sectionOne.text}</p>
          <ul className="list">
            {content.sectionOne.items.map((item, index) => (
              <li key={index}>
                <p className="desc">{item.description}</p>
              </li>
            ))}
          </ul>
          <span className="btn">{content.sectionOne.btn}</span>
          <div className="media">
            <Image
              src={content.sectionOne.image}
              alt="Crypto Card"
              className="image"
              height={586}
              width={558}
            />
            <span className="gradient-shadow" />
          </div>
        </div>

        <span className="gradient-shadow gradient-shadow-lt" />
        <span className="gradient-shadow gradient-shadow-rt" />
      </section>
      <section className="benefits">
        <div className="container">
          <ul className="list">
            {content.sectionTwo.items.map((item, index) => (
              <li key={index}>
                <Image
                  src={item.image}
                  alt={item.description}
                  className="image"
                  height={60}
                  width={60}
                />
                <p className="desc">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="card-user">
        <div className="container">
          <h3
            className="heading"
            dangerouslySetInnerHTML={{ __html: content.segment1.mainTitle }}
          />
          <span className="text">{content.segment1.subTitle}</span>
          <Radio.Group
            value={btnValue}
            onChange={(e) => setbtnValue(e.target.value)}
            className="btn-box"
          >
            {content.segment1.btns.map((btn, index) => (
              <Radio.Button
                key={index}
                value={btn.value}
                className={`rounded-btn ${
                  btnValue === btn.value ? "active-btn" : ""
                } `}
              >
                {btn.text}
              </Radio.Button>
            ))}
          </Radio.Group>
          <div className="earn-up-wrapper">
            {content.segment1.items.map((item, index) => (
              <div
                key={index}
                className={` item-box ${
                  item.value === btnValue ? "item-box-active" : ""
                }`}
              >
                <h3 className="title">{item.title}</h3>
                <ul className="list">
                  {item.list.map((item, index) => (
                    <li key={index}>
                      <Image src="/images/button-checkmark.svg" alt="" />
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.text,
                        }}
                      ></p>
                    </li>
                  ))}
                </ul>
                <hr className="hr" />
                <a className="btn">{item.link}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="higher-tiers">
        <div className="container">
          <h3
            className="heading"
            dangerouslySetInnerHTML={{ __html: content.segment2.mainTitle }}
          />
          <ul className="list">
            {content.segment2.items.map((item, index) => (
              <li key={index}>
                <Image className="image" src={item.img} alt={item.title} />
                <h4 className="title">{item.title}</h4>
                <ul className="desc-list">
                  {item.list.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ul>
                <hr className="hr" />
                <a className="btn">{item.btn}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="lowest-fees">
        <div className="container">
          <div className="privileges">
            <Image className="img-bg" src="/images/crypto-bank/circle.svg" alt=""/>
            <div className="fees">
              <div className="air-drop blur-bg">
                <span className="title">{content.segment3.points}</span>
                <div className="desc">
                  <span>{content.segment3.points_value}</span>
                  <Image alt=""
                    className="arrow-right"
                    src="/images/crypto-bank/chevron-right-small.svg"
                    width={35}
                    height={54}
                  />
                </div>
                <div></div>
              </div>
              <div className="air-drop blur-bg">
                <span className="title">{content.segment3.rewards}</span>
                <div className="desc">
                  <span>{content.segment3.rewards_value}</span>
                  <Image alt=""
                    className="arrow-right"
                    src="/images/crypto-bank/chevron-right-small.svg"
                  />
                </div>
                <div></div>
              </div>
            </div>
            <div className="fees-privileges">
              <h2 className="heading">Privileges</h2>
              <div className="wrapper">
                {content.segment3.Privileges.map((item, index) => (
                  <div key={index} className="blur-bg item">
                    <span className="title">{item.q} </span>
                    <Image alt=""
                      className="arrow-right"
                      src="/images/crypto-bank/chevron-right-small.svg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lowest-fees-desc">
            <span
              className="heading"
              dangerouslySetInnerHTML={{ __html: content.segment3.mainTitle }}
            />
            <ul className="list">
              {content.segment3.items.map((item, index) => (
                <li key={index}>{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="spend-crypto">
        <div className="container">
          <div className="desc">
            <h3
              className="heading"
              dangerouslySetInnerHTML={{ __html: content.segment4.mainTitle }}
            />
            <ul className="list">
              {content.segment4.items.map((item, index) => (
                <li key={index}>
                  <p className="desc">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="media">
            <Image
              src="/images/crypto-bank/applePay.svg"
              alt="Wallet Intrusion"
              className="image"
              height={157}
              width={264}
            />
            <Image
              src="/images/crypto-bank/googlePay.svg"
              alt="Wallet Intrusion"
              className="image"
              height={120}
              width={240}
            />
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="container">
          <h3
            className="heading"
            dangerouslySetInnerHTML={{ __html: content.FAQ.main_title }}
          />
          <Collapse items={items} defaultActiveKey={[1]} />
        </div>
      </section>
      <section className="call-to-action">
        <div className="container">
          <div className="wrapper">
            <h2
              className="heading"
              dangerouslySetInnerHTML={{ __html: content.store.heading }}
            ></h2>
            <p className="desc">{content.store.subTitle}</p>
            <a className="btn" href={content.store.link}>
              {content.store.btn}
            </a>
            <Image
              src={content.store.image}
              alt={content.store.heading}
              className="image"
              height={500}
              width={300}
            />
          </div>

          <span className="gradient-shadow gradient-shadow-lb" />
        </div>
      </section>
    </main>
  );
}
