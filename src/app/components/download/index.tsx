"use client";
import { useState, Fragment } from "react";
import { vultCopy } from "@/app/copy/Vult";
import Image from "next/image";
import { Collapse, CollapseProps } from "antd";
import { downloadCopy } from "@/app/copy/Download";

const items: CollapseProps["items"] = vultCopy.faq.map((item, index) => ({
  key: index + 1,
  label: item.q,
  children: <p dangerouslySetInnerHTML={{ __html: item.a }}></p>,
}));

export function Sections() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwitch = (index: number) => {
    if (index !== activeIndex && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="download-page">
      <div className="switch-key">
        {downloadCopy.switch_key.map((item, index) => (
          <div
            key={index}
            className={`switch-items ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleSwitch(index)}
          >
            {item.item}
          </div>
        ))}
      </div>

      <div className="items-wrapper">
        {downloadCopy.switch_key.map((item, index) => (
          <Fragment key={index}>
            <div
              className={`${
                activeIndex === index ? "fade-in" : "fade-out"
              }`}
            >
              <div className="image-wrapper">
                <div className="title">
                  <span>{item.title}</span>
                </div>
                <img className="app-face" src={item.img} alt="App face" />
                <div className="background-shadow"></div>
                <div className="shadow-bottem" />
                <div className="download-buttons-wrapper">
                  {item.download_links.map((link, linkIndex) => (
                    <a key={linkIndex} href={link.url} target={link.target}>
                      <img src={link.image} alt={link.alt} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
