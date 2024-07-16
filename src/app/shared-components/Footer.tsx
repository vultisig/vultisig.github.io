import Image from "next/image";
import { footerCopy } from "../copy/Footer";

export function Footer() {
    return (
        <>
            <div className="footer text-light">
                <div className="row" id="contact">
                    <div className="col-md-6 monserrat-semibold">
                        <h5 dangerouslySetInnerHTML={{ __html: footerCopy.discord.title }}></h5>
                    </div>
                    <div className="col-md-6">
                        <a href={footerCopy.discord.url} target={footerCopy.discord.target}>
                            <button type="submit" style={{ width: "200px" }}
                                className="btn btn-primary btn-color mb-2 py-3 rounded discord-button"> <Image width={30} height={30} className="discord-link-img" src="/img/discord-white.png" alt="Discord" /> DISCORD
                            </button>
                        </a>
                    </div>
                </div>
                <hr className="solid mt-5" />
                <div className="row mt-5 mb-5">
                    <div className="col-lg-6 col-md-12">
                        <div className="d-flex align-items-center mb-5"> <Image width={30} height={30} src={footerCopy.brand.image} alt={footerCopy.brand.title} />
                            <strong className=" monserrat-semibold" style={{ fontSize: "xx-large" }}>{footerCopy.brand.title}</strong>
                        </div>
                        <div className="mt-5">
                            <a href={footerCopy.social.githubLink.url} target={footerCopy.social.githubLink.target}>
                                <Image width={30} height={30} src="/img/github-sign.svg" alt="Github" />
                            </a>
                            <a className="mx-3" href={footerCopy.social.twitterLink.url} target={footerCopy.social.twitterLink.target}>
                                <Image width={30} height={30} src="/img/twitter.svg" alt="Twitter" />
                            </a>
                            <a className="me-3" href={footerCopy.social.discordLink.url} target={footerCopy.social.discordLink.target}>
                                <Image width={30} height={30}
                                    className="social-icon" src="/img/discord.png" alt="Discord" />
                            </a>
                            <a href={footerCopy.social.telegramLink.url} target={footerCopy.social.telegramLink.target}> <Image width={30} height={30}
                                className="social-icon" src="/img/telegram-link.png" alt="Telegram" />
                            </a>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12 mt-3 mt-lg-0">
                        <div>
                            <div className="row justify-content-end">
                                <div className="col-md-3">
                                    <ul className="list-unstyled monserrat-regular">
                                        <li className="mb-2">
                                            <strong >{footerCopy.footerLinks[0].title}</strong>
                                        </li>
                                        {footerCopy.footerLinks[0].links.map((link, index) => (
                                            <li key={index}>
                                                <a href={link.url} target={link.target}
                                                    className="nav-link color-neutral-200">{link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list-unstyled monserrat">
                                        <li className="mb-2">
                                            <strong >{footerCopy.footerLinks[1].title}</strong>
                                        </li>
                                        {footerCopy.footerLinks[1].links.map((link, index) => (
                                            <li key={index}>
                                                <a href={link.url} target={link.target} className="nav-link color-neutral-200">
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-5 monserrat-regular color-neutral-200"> <span>{footerCopy.copyright}</span>
                </div>
            </div>

        </>
    )
}