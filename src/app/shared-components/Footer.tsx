"use client";
import Image from "next/image";
import { footerCopy } from "../copy/Footer";
import { trackAction } from "../lib/gtagHelper";

export function Footer() {
  return (
    <>
      <div className="footer text-light">
        <div className="gap-2 d-flex flex-wrap flex-sm-nowrap justify-content-between align-items-center">
          <p
            className="join-text "
            dangerouslySetInnerHTML={{ __html: footerCopy.discord.title }}
          ></p>
          <div className="align-items-center ">
            <a href={footerCopy.discord.url} target={footerCopy.discord.target}>
              <button
                type="submit"
                className="btn btn-primary btn-color    rounded discord-button"
              >
                DISCORD LINK
              </button>
            </a>
          </div>
        </div>
        <hr className="solid mt-5" />
        <div className="item-wrapper mt-5 mb-5">
          <div className="item">
            <div className="d-flex align-items-center mb-5">
              <Image
                width={56}
                height={56}
                src={footerCopy.brand.image}
                alt={footerCopy.brand.title}
              />
              <strong
                className=" monserrat-semibold brand-name"
                style={{ fontSize: "xx-large" }}
              >
                {footerCopy.brand.title}
              </strong>
            </div>
            <div className="mt-5 d-flex align-items-center">
              <a
                href={footerCopy.social.githubLink.url}
                target={footerCopy.social.githubLink.target}
                onClick={() => trackAction("click", "social_link", "github")}
              >
                <Image
                  width={30}
                  height={30}
                  src="/img/github-sign.svg"
                  alt="Github"
                />
              </a>
              <a
                className="mx-3"
                href={footerCopy.social.twitterLink.url}
                target={footerCopy.social.twitterLink.target}
                onClick={() => trackAction("click", "social_link", "twitter")}
              >
                <Image
                  width={30}
                  height={30}
                  src="/img/twitter.svg"
                  alt="Twitter"
                />
              </a>
              <a
                className="me-3"
                href={footerCopy.social.discordLink.url}
                target={footerCopy.social.discordLink.target}
                onClick={() => trackAction("click", "social_link", "discord")}
              >
                <Image
                  width={30}
                  height={30}
                  className="social-icon"
                  src="/img/discord.png"
                  alt="Discord"
                />
              </a>
              <a
                href={footerCopy.social.telegramLink.url}
                target={footerCopy.social.telegramLink.target}
                onClick={() => trackAction("click", "social_link", "telegram")}
              >
                {" "}
                <Image
                  width={30}
                  height={30}
                  className="social-icon"
                  src="/img/telegram-link.png"
                  alt="Telegram"
                />
              </a>
            </div>
          </div>
          <div className="item mt-3 mt-lg-0">
            <div className="nav-bar">
              <div className="col-md-4">
                <ul className="list-unstyled monserrat">
                  <li className="mb-2 footer-item-title">
                    <strong>{footerCopy.footerLinks[2].title}</strong>
                  </li>
                  {footerCopy.footerLinks[2].links.map((link, index) => (
                    <li key={index} className="mt-2">
                      <a
                        href={link.url}
                        target={link.target}
                        className="nav-link color-neutral-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled monserrat-regular">
                  <li className="mb-2 footer-item-title">
                    <strong>{footerCopy.footerLinks[0].title}</strong>
                  </li>
                  {footerCopy.footerLinks[0].links.map((link, index) => (
                    <li key={index} className="mt-2">
                      <a
                        href={link.url}
                        target={link.target}
                        className="nav-link color-neutral-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled monserrat">
                  <li className="mb-2 footer-item-title">
                    <strong>{footerCopy.footerLinks[1].title}</strong>
                  </li>
                  {footerCopy.footerLinks[1].links.map((link, index) => (
                    <li key={index} className="mt-2">
                      <a
                        href={link.url}
                        target={link.target}
                        className="nav-link color-neutral-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 monserrat-regular color-neutral-200">
          {" "}
          <span>{footerCopy.copyright}</span>
        </div>
      </div>
    </>
  );
}
