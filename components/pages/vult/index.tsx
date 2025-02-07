"use client";
import Image from "next/image";
import { Collapse, CollapseProps } from "antd";
import { motion } from "motion/react";

import content from "@/components/pages/vult/index.json";

const motionFadeDown = {
  initial: { opacity: 0, y: -60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1 },
  viewport: { once: false },
};

const items: CollapseProps["items"] = content.faq.map((item, index) => ({
  key: index + 1,
  label: item.q,
  children: (
    <motion.p
      {...motionFadeDown}
      dangerouslySetInnerHTML={{ __html: item.a }}
    ></motion.p>
  ),
}));
export default function Component() {
  return (
    <>
      <div className="bg"></div>
      <main className="vult-page">
        <section className="mediaspace">
          <div className="container">
            <motion.div {...motionFadeDown} className="heading">
              <span
                dangerouslySetInnerHTML={{ __html: content.header.title }}
                className="title monserrat-bold"
              />
            </motion.div>
            <ul className="list">
              {content.header.data.map(({ title, value, delay }, index) => (
                <motion.li
                  {...motionFadeDown}
                  transition={{
                    ...motionFadeDown.transition,
                    delay: delay,
                  }}
                  key={index}
                >
                  <span className="title">{title}</span>
                  <span className="value">{value}</span>
                </motion.li>
              ))}
            </ul>
            <motion.span
              {...motionFadeDown}
              transition={{
                ...motionFadeDown.transition,
                delay: 0.8,
              }}
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

            <motion.h2
              {...motionFadeDown}
              className="heading monserrat-bold mt-5 text-uppercase"
              dangerouslySetInnerHTML={{
                __html: content.airdrop.main_title,
              }}
            ></motion.h2>
          </div>
        </section>
        <section className="vult-page-pics">
          <div className="container">
            <ul className="list-vultisig">
              {content.airdrop.items.map((item, index) => (
                <motion.li
                  {...motionFadeDown}
                  transition={{
                    ...motionFadeDown.transition,
                    delay: item.delay,
                  }}
                  key={index}
                >
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
                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  ></p>
                </motion.li>
              ))}
            </ul>

            <motion.a
              {...motionFadeDown}
              transition={{
                ...motionFadeDown.transition,
                delay: 0.7,
              }}
              className="btn"
              href={content.airdrop.JoinTheAirDropURL}
              target="_blank"
            >
              {content.airdrop.JoinTheAirDrop}
            </motion.a>
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
            <motion.div {...motionFadeDown}>
              <Collapse items={items} defaultActiveKey={[1]} />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
