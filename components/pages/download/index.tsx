"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { CopyOutlined, LockOutlined } from "@ant-design/icons";
import { Tooltip, Button } from "antd";
import content from "@/components/pages/download/index.json";
import Image from "next/image";
import Elipsis from "@/components/items/elipsis";

interface ComponnentProps {
  tab: string;
}

const Component: FC<ComponnentProps> = ({ tab }) => {
  const [tooltipText, setTooltipText] = useState("Click to copy");

  const handleCopy = (textToCopy: any) => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setTooltipText("Copied!");
        setTimeout(() => setTooltipText("Click to copy"), 2000);
      },
      (err) => {
        console.error("Failed to copy text: ", err);
        setTooltipText("Failed to copy");
      }
    );
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
            {content.switchkey.map(({ key, img, downloadlinks, title,description, SHA }) =>
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
                    {SHA ? (
                        <div className="sha-boxs">
                          {SHA?.map((sha, shaindex) => (
                            <div className="sha-box" key={shaindex}>
                              <div className="heding">
                                <div className="icons">
                                  <Image
                                    height={20}
                                    width={20}
                                    className=""
                                    src={sha.icon}
                                    alt="App face"
                                  />
                                  <LockOutlined className="lock-icon" />
                                <span>SHA256</span>
                                </div>
                                <Tooltip
                                  title={tooltipText}
                                  className="copy-icon"
                                >
                                  <CopyOutlined
                                    onClick={() => handleCopy(sha.SHA256)}
                                  />
                                </Tooltip>
                              </div>
                              <div className="key-wraper">
                                <Elipsis text={sha.SHA256} />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
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
