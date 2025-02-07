"use client";
import { FC } from "react";
import Link from "next/link";
import { motion } from "motion/react";

import content from "@/components/pages/download/index.json";
import Image from "next/image";

interface ComponnentProps {
  tab: string;
}

const Component: FC<ComponnentProps> = ({ tab }) => {
  const motionFadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1, ease: "easeOut" },
  };
  const motionFadeDown = {
    initial: { opacity: 0, y: -40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };
  return (
    <main className="download-page">
      <section className="download">
        <div className="container">
          <div className="switch-key">
            {content.switchkey.map(({ key }) => (
              <Link
                href={`/download/${key}`}
                key={key}
                className={`switch-items ${tab === key ? "active" : ""}`}
              >
                {key}
              </Link>
            ))}
          </div>
          <div className="slider">
            {content.switchkey.map(
              ({ key, img, downloadlinks, title, description }) =>
                key === tab ? (
                  <div key={key} className="slide">
                    <div className="content-wrapper">
                      <motion.h3
                        {...motionFadeDown}
                        transition={{
                          ...motionFadeDown.transition,
                          delay: 0.2,
                        }}
                        className="heading"
                      >
                        {title}
                      </motion.h3>
                      <motion.span
                        {...motionFadeDown}
                        transition={{
                          ...motionFadeDown.transition,
                          delay: 1,
                        }}
                      >
                        <span className="desc">{description}</span>
                      </motion.span>
                      <motion.div
                        {...motionFadeIn}
                        transition={{
                          ...motionFadeDown.transition,
                          delay: 1,
                        }}
                      >
                        <Image
                          height={346}
                          width={256}
                          className="slide-imag"
                          src={img}
                          alt="App face"
                        />
                        <div className="background-shadow"></div>
                      </motion.div>
                      <div className="shadow-bottem" />
                      <div className="download-buttons-wrapper">
                        {downloadlinks.map((link, linkIndex) => (
                          <motion.a
                            {...motionFadeDown}
                            transition={{
                              ...motionFadeDown.transition,
                              delay: link.delay,
                            }}
                            key={linkIndex}
                            href={link.url}
                            target="_self"
                          >
                            <Image
                              src={link.image}
                              alt={link.alt}
                              width={180}
                              height={52}
                            />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null
            )}
          </div>
        </div>

        <span className="gradient-shadow gradient-shadow-lt" />
        <span className="gradient-shadow gradient-shadow-rt" />
      </section>
    </main>
  );
};

export default Component;
