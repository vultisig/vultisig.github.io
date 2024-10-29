"use client";
import { useEffect, useState, Fragment } from "react";
import { vultCopy } from "@/app/copy/Vult";
import { CollapseProps } from "antd";
import { downloadCopy } from "@/app/copy/Download";
import { useParams } from "next/navigation";

const items: CollapseProps["items"] = vultCopy.faq.map((item, index) => ({
  key: index + 1,
  label: item.q,
  children: <p dangerouslySetInnerHTML={{ __html: item.a }}></p>,
}));

export function Sections() {
  const { tab } = useParams<{ tab: string }>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let id = 0;
    if (tab) {
      console.log("tab", tab);
      switch (tab.toLowerCase()) {
        case "vultisig":
          setActiveIndex(0);
          break;
        case "vultiwallet":
          setActiveIndex(1);
          break;
        case "browser":
          setActiveIndex(2);
          break;
        case "airdrop":
          setActiveIndex(3);

          break;
        default:
          break;
      }
    }
  }, []);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwitch = (index: number) => {
    console.log("activeIndex", activeIndex);
    if (index !== activeIndex && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        console.log("index", index);
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
              className={`${activeIndex === index ? "fade-in" : "fade-out"}`}
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
                    <a key={linkIndex} href={link.url} target="_self">
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
