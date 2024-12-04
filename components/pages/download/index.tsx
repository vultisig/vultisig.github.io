"use client";
import { FC } from "react";
import Link from "next/link";

import content from "@/components/pages/download/index.json";
import Image from "next/image";

interface ComponnentProps {
  tab: string;
}

const Component: FC<ComponnentProps> = ({ tab }) => {
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
            {content.switchkey.map(({ key, img, downloadlinks, title,description }) =>
              key === tab ? (
                <div key={key} className="slide">
                  <div className="content-wrapper">
                    <h3 className="heading">{title}</h3>
                    <span className="desc">{description}</span>
                    <Image height={346} width={256} className="slide-imag" src={img} alt="App face" />
                    <div className="background-shadow"></div>
                    <div className="shadow-bottem" />
                    <div className="download-buttons-wrapper">
                      {downloadlinks.map((link, linkIndex) => (
                        <a key={linkIndex} href={link.url} target="_self">
                          <Image src={link.image} alt={link.alt} width={180}  height={52}/>
                        </a>
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
