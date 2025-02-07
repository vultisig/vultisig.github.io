"use client";
import Image from "next/image";
import { motion } from "motion/react";

import content from "@/components/pages/how-it-works/index.json";
import { PrivateKey, Storage, Human,TraditionalWallet } from "@/svg-images/how-it-work-svg";

export default function Component() {
  const motionFadeRight = {
    initial: { opacity: 0, x: 200 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };
  const motionFadeLeft = {
    initial: { opacity: 0, x: -200 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };
  const motionFadeDown = {
    initial: { opacity: 0, y: -60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
    viewport: { once: false },
  };
  const motionFadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2, ease: "easeOut" },
  };
  return (
    <main className="how-it-works-page">
      <section className="trusted-devices">
        <div className="container">
          <motion.h3
            {...motionFadeLeft}
            dangerouslySetInnerHTML={{ __html: content.sectionOne.heading }}
            className="heading"
          />
          <motion.div {...motionFadeRight} className="media">
            <Image
              src="/images/home/secure.png"
              alt="Trusted Devices"
              className="image"
              height={966}
              width={494}
            />
          </motion.div>
        </div>

        <span className="gradient-shadow gradient-shadow-lt" />
        <span className="gradient-shadow gradient-shadow-rt" />
      </section>

      <section className="traditional-wallets">
        <div className="container">
          <motion.h3
            {...motionFadeLeft}
            dangerouslySetInnerHTML={{ __html: content.sectionTwo.heading }}
            className="heading"
          />
          <ul className="list">
            {content.sectionTwo.items.map((item, index) => (
              <motion.li
                {...motionFadeLeft}
                transition={{
                  ...motionFadeRight.transition,
                }}
                key={index}
              >
                <h4 className="title">{item.title}</h4>
                <p className="desc">{item.description}</p>
              </motion.li>
            ))}
          </ul>
          <motion.div {...motionFadeIn} className="media">
            <motion.div {...motionFadeRight}>
              <TraditionalWallet className="image traditionalWallet"/>
             
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="private-keys">
        <div className="container">
          <motion.h3 {...motionFadeDown} className="heading">
            {content.sectionThree.heading}
          </motion.h3>
          <motion.span {...motionFadeDown} className="text">
            {content.sectionThree.text}
          </motion.span>
          <ul className="list">
            {content.sectionThree.items.map((item, index) => (
              <motion.li
                {...motionFadeDown}
                transition={{
                  ...motionFadeDown.transition,
                  delay: item.delay,
                }}
                key={index}
              >
                {item.title === "Private key creation" && (
                  <PrivateKey className="image privateKeySvg" />
                )}
                {item.title === "Storage of private keys" && (
                  <Storage className="image storage" />
                )}
                {item.title === "Human error" && (
                  <Human className="image human" />
                )}

                <h4 className="title">{item.title}</h4>
                <p className="desc">{item.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
        <span className="gradient-shadow gradient-shadow-lt" />
      </section>

      <section className="solutions">
        <div className="container">
          <ul className="list">
            <li>
              <motion.h4
                {...motionFadeRight}
                className="title"
                dangerouslySetInnerHTML={{
                  __html: content.sectionFour.itemOne.title,
                }}
              />
              {content.sectionFour.itemOne.description.map((item, index) => (
                <motion.p
                  {...motionFadeRight}
                  transition={{
                    ...motionFadeRight.transition,
                  }}
                  className="desc"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </li>
          </ul>

          <motion.div {...motionFadeLeft} className="media">
            <Image
              src={content.sectionFour.itemOne.image}
              alt={content.sectionFour.itemOne.title}
              className="image"
              height={580}
              width={544}
            />
          </motion.div>
        </div>
        <span className="gradient-shadow gradient-shadow-rb" />
      </section>

      <section className="call-to-action">
        <div className="container">
          <div className="wrapper">
            <motion.div {...motionFadeLeft}>
              <Image
                src="/images/home/icon-vultisig-logo.png"
                width={244}
                height={56}
                alt="vultisig"
              />
            </motion.div>
            <motion.h3 {...motionFadeLeft} className="heading">
              {content.call_to_action.heading}
            </motion.h3>
            <motion.a
              {...motionFadeLeft}
              className="btn"
              href={content.call_to_action.link}
            >
              {content.call_to_action.btn}
            </motion.a>
            <div className="img-wrapper">
              <motion.div {...motionFadeRight}>
                <Image
                  src={content.call_to_action.image}
                  alt={content.call_to_action.heading}
                  className="image"
                  height={414}
                  width={362}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
