"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Docs, Integrate } from "@/svg-images/docs-svg";
import content from "@/components/pages/docs/index.json";

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
  return (
    <main className="docs-page">
      <section className="introduction">
        <div className="container">
          <div className="heading-wraper">
            <motion.h3 {...motionFadeLeft} className="heading">
              {content.sectionOne.heading}
            </motion.h3>
            <Image
              src="images/back-logo.svg"
              alt="Vultisig Logo"
              className="back-logo"
              height={70}
              width={70}
            />
          </div>
          <motion.p
            {...motionFadeLeft}
            transition={{ ...motionFadeLeft.transition, delay: 0.5 }}
            className="text"
          >
            {content.sectionOne.text}
          </motion.p>
          <motion.a
            {...motionFadeLeft}
            transition={{ ...motionFadeLeft.transition, delay: 1 }}
            href={content.sectionOne.link}
            className="btn"
          >
            {content.sectionOne.btn}
          </motion.a>
          <div className="media">
            <motion.div {...motionFadeRight} className="wraper">
              <Docs className="image " />
              <span className="gradient-shadow" />
            </motion.div>
          </div>
        </div>

        <span className="gradient-shadow gradient-shadow-lt" />
        <span className="gradient-shadow gradient-shadow-rt" />
      </section>
      <section className="integrate-vultisig">
        <div className="container">
          <motion.h3 {...motionFadeRight} className="heading">
            {content.sectionTwo.heading}
          </motion.h3>
          <motion.p
            {...motionFadeRight}
            transition={{ ...motionFadeLeft.transition, delay: 0.5 }}
            className="text"
          >
            {content.sectionTwo.text}
          </motion.p>
          <motion.a
            {...motionFadeRight}
            transition={{ ...motionFadeLeft.transition, delay: 1 }}
            href={content.sectionTwo.link}
            className="btn"
          >
            {content.sectionTwo.btn}
          </motion.a>
          <div className="media">
            <motion.div {...motionFadeLeft} >
              <Integrate className="image" />
              <span className="gradient-shadow" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
