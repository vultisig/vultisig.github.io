"use client";
import Image from "next/image";

import content from "@/components/pages/home/index.json";

import { motion } from "motion/react";

import {
  WhatIsWrong,
  ThresholdSignatures,
  FullDefi,
  RichUi,
  FamiliarHardware,
  Experience,
  Transaction,
  Remote,
} from "@/svg-images/home-svg";

import Link from "next/link";

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

  return (
    <main className="home-page">
      <section className="introduction">
        <div className="container">
          <motion.p
            {...motionFadeLeft}
            dangerouslySetInnerHTML={{ __html: content.hero_section.slogan }}
            className="slogan "
          />
          <motion.span
            {...motionFadeLeft}
            className="title gradient-text "
            transition={{ ...motionFadeLeft.transition, delay: 0.5 }}
          >
            {content.hero_section.title}
          </motion.span>
          <motion.p
            {...motionFadeLeft}
            transition={{ ...motionFadeLeft.transition, delay: 0.8 }}
            className="text "
          >
            {content.hero_section.desc}
          </motion.p>
          <motion.span
            {...motionFadeLeft}
            transition={{ ...motionFadeLeft.transition, delay: 1 }}
          >
            <Link className="btn " href={content.hero_section.link}>
              {content.hero_section.btn}
            </Link>
          </motion.span>
          <motion.div {...motionFadeRight} className="media">
            <Image
              src="/images/home/introduction-image.png"
              alt="Vultisig Wallet"
              className="image "
              height={754}
              width={1328}
            />
            <span className="gradient-shadow " />
          </motion.div>
        </div>

        <span className="gradient-shadow gradient-shadow-lt" />
      </section>

      <section className="airdrop">
        <div className="container">
          <motion.div {...motionFadeLeft}>
            <Image
              width={698}
              height={494}
              src="/images/home/airdrop.jpg"
              alt="Airdrop"
              className="image"
            />
          </motion.div>
          <div className="airdrop-info">
            <motion.p
              {...motionFadeRight}
              className="heading"
              dangerouslySetInnerHTML={{ __html: content.airdrop.heading }}
            />
            <motion.p
              {...motionFadeRight}
              transition={{ ...motionFadeRight.transition, delay: 0.5 }}
              className="airdrop-description"
              dangerouslySetInnerHTML={{
                __html: content.airdrop.description,
              }}
            />

            <motion.a
              className="btn"
              href={content.airdrop.link}
              {...motionFadeRight}
              transition={{ ...motionFadeRight.transition, delay: 1 }}
            >
              {content.airdrop.btn}
            </motion.a>
          </div>
        </div>
        <span className="gradient-shadow gradient-shadow-rb" />
      </section>

      <section className="information">
        <div className="container">
          <div className="stats">
            <motion.h3 {...motionFadeDown} className="heading">
              {content.Vultisig_tested.stats.heading}
            </motion.h3>
          </div>
          <div className="trusted">
            <h3 className="heading">
              {content.Vultisig_tested.trusted.heading}
            </h3>
            <ul className="list">
              {content.Vultisig_tested.trusted.items.map((item, index) => (
                <motion.li
                  {...motionFadeDown}
                  transition={{
                    ...motionFadeRight.transition,
                    delay: item.delay,
                  }}
                  key={index}
                >
                  <Image
                    src={item.image}
                    alt={item.symbol}
                    className="image"
                    height={80}
                    width={80}
                  />
                  <span className="symbol">{item.symbol}</span>
                  <span className="text">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* <span className="gradient-shadow gradient-shadow-lb" /> */}
      </section>

      <section className="description">
        <div className="container">
          <motion.h3
            {...motionFadeLeft}
            className="heading"
            dangerouslySetInnerHTML={{ __html: content.wrong_things.heading }}
          />
          <ul className="list">
            {content.wrong_things.items.map((item, index) => (
              <motion.li
                {...motionFadeLeft}
                transition={{
                  ...motionFadeRight.transition,
                }}
                key={index}
              >
                <h4 className="title">{item.title}</h4>
                <p
                  className="desc"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <span className="point">{item.point}</span>
              </motion.li>
            ))}
          </ul>
          <div className="media">
            <motion.div {...motionFadeRight} className="image-wraper">
              <WhatIsWrong className="image what-is-wrong" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="solution">
        <div className="container">
          <motion.h3
            {...motionFadeDown}
            className="heading"
            dangerouslySetInnerHTML={{ __html: content.Solution.heading }}
          />
          <motion.span {...motionFadeDown} className="text">
            {content.Solution.text}
          </motion.span>
          <ul className="list">
            {content.Solution.items.map((item, index) => (
              <motion.li
                {...motionFadeDown}
                transition={{
                  ...motionFadeDown.transition,
                  delay: item.delay,
                }}
                key={index}
              >
                {item.key === "Threshold" && (
                  <ThresholdSignatures className="image" />
                )}
                {item.key === "Familiar" && (
                  <FamiliarHardware className="image" />
                )}
                {item.key === "RichUi" && <RichUi className="image" />}
                {item.key === "VaultShares" && (
                  <Image
                    src="/images/home/VaultShares.png"
                    alt={item.title}
                    className="image VaultShares"
                    height={130}
                    width={153}
                  />
                )}
                <h4
                  className="title"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h4>
                <p
                  className="desc"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <motion.h3
            {...motionFadeRight}
            className="heading"
            dangerouslySetInnerHTML={{
              __html: content.Seamless_security.heading,
            }}
          />
          <ul className="list">
            {content.Seamless_security.items.map((item, index) => (
              <motion.li {...motionFadeRight} key={index}>
                <h4 className="title">{item.title}</h4>
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
                <p className="desc">{item.description}</p>
              </motion.li>
            ))}
          </ul>
          <motion.div {...motionFadeLeft} className="media">
            <Experience className="image" />
            {/* <Image
              src="/images/home/security.png"
              alt="Seamless Security"
              className="image"
              height={500}
              width={500}
            /> */}
          </motion.div>
        </div>
      </section>

      <section className="best-features">
        <div className="container">
          <motion.h3
            {...motionFadeLeft}
            className="heading"
            dangerouslySetInnerHTML={{ __html: content.bestFeatures.heading }}
          />

          <div className="item-list">
            {content.bestFeatures.items.map((item, index) =>
              index % 2 === 0 ? (
                <motion.div
                  {...motionFadeLeft}
                  className="asset-management"
                  key={index}
                >
                  <p
                    className="title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p className="desc">{item.description}</p>
                  <div className="media">
                    <Image
                      className="image"
                      alt={item.title}
                      src={item.image}
                      width={657}
                      height={1071}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  {...motionFadeRight}
                  className="asset-management"
                  key={index}
                >
                  <p
                    className="title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p className="desc">{item.description}</p>
                  <div className="media">
                    <Image
                      className="image"
                      alt={item.title}
                      src={item.image}
                      width={657}
                      height={1071}
                    />
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="other-features">
        <div className="container">
          <motion.h3
            {...motionFadeDown}
            className="heading"
            dangerouslySetInnerHTML={{ __html: content.other_features.heading }}
          />
          <ul className="list">
            {content.other_features.items.map((item, index) => (
              <motion.li
                {...motionFadeDown}
                transition={{
                  ...motionFadeDown.transition,
                  delay: item.delay,
                }}
                key={index}
              >
                {item.title === "Full DeFi" && <FullDefi className="image" />}
                {item.title === "Remote Signing" && (
                  <Remote className="image" />
                )}
                {item.title === "Transaction Policies" && (
                  <Transaction className="image" />
                )}

                <h4 className="title">{item.title}</h4>
                <p
                  className="desc"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
              </motion.li>
            ))}
          </ul>
        </div>

        <span className="gradient-shadow gradient-shadow-rb" />
      </section>

      <section className="benefits">
        <div className="container">
          <motion.h3
            {...motionFadeDown}
            className="heading"
            dangerouslySetInnerHTML={{ __html: content.for_everyone.heading }}
          />
          <ul className="list">
            {content.for_everyone.items.map((item, index) => (
              <motion.li
                {...motionFadeDown}
                transition={{
                  ...motionFadeDown.transition,
                  delay: item.delay,
                }}
                key={index}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="image"
                  height={56}
                  width={56}
                />
                <h4 className="title">{item.title}</h4>
                <p className="desc">{item.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
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
              transition={{
                ...motionFadeLeft.transition,
                delay: 0.5,
              }}
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
