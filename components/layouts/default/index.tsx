"use client";
import { useEffect, useState } from "react";
import { ConfigProvider, Drawer, Menu, MenuProps } from "antd";
import { CaretDownOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import content from "@/components/layouts/default/index.json";

import { HamburgerMD, Vultisig } from "@/icons";
import MavaWidget from "./MavaWidget";
import GoogleAnalytics from "./GoogleAnalytics";


interface InitialState {
  currentPath: string;
  opened?: boolean;
}

export default function Component({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState: InitialState = { currentPath: "1" };
  const [state, setState] = useState(initialState);
  const { currentPath, opened } = state;
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setState((prevState) => ({ ...prevState, opened: !prevState.opened }));
  };

  useEffect(() => {
    switch (pathname) {
      case "/download/vultisig":
      case "/download/browser":
      case "download/web":
        setState((prevState) => ({ ...prevState, currentPath: "1" }));
        break;
      case "/how-it-works":
        setState((prevState) => ({ ...prevState, currentPath: "2" }));
        break;
      case "/backed-by":
        setState((prevState) => ({ ...prevState, currentPath: "3" }));
        break;
      case "/docs":
        setState((prevState) => ({ ...prevState, currentPath: "4" }));
        break;
      case "/vult":
        setState((prevState) => ({ ...prevState, currentPath: "5" }));
        break;
      default:
        setState((prevState) => ({ ...prevState, currentPath: "" }));
        break;
    }
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 0);
  }, []);

   


  const navbar: MenuProps["items"] = content.navbar.map(
    ({ label, children, url }, index) =>
      children
        ? {
            key: `${index + 1}`,
            label: label,
            icon: <CaretDownOutlined />,
            children: children.map(({ label, url }, ind) => ({
              key: `${index}-${ind}`,
              label: <Link href={url}>{label}</Link>,
            })),
          }
        : {
            key: `${index + 1}`,
            label: <Link href={url}>{label}</Link>,
          }
  );

  return (
    <html lang="en">
      <MavaWidget />
      <GoogleAnalytics />
      <body className="layout">
        <ConfigProvider theme={{ token: { fontFamily: "inherit" } }}>
          <header>
            <div className="container">
              <Link href="/" className="logo">
                <Vultisig />
                Vultisig
              </Link>
              {loaded && (
                <Menu
                  mode="horizontal"
                  rootClassName="header-submenu"
                  items={navbar}
                  selectedKeys={[currentPath]}
                />
              )}

              <span className="menu" onClick={handleMenu}>
                <HamburgerMD />
              </span>

              <Link href={content.download.url} className="btn download">
                {content.download.label}
              </Link>
            </div>
          </header>
          {children}
          <footer>
            <div className="container">
              <div className="discord">
                <p className="title">{content.discord.title}</p>
                <a
                  href={content.discord.url}
                  target={content.discord.target}
                  className="btn"
                >
                  {content.discord.btn}
                </a>
              </div>

              <div className="info">
                <Link href="/" className="logo">
                  <Vultisig />
                  Vultisig
                </Link>

                <ul className="socials">
                  <li>
                    <a
                      href={content.social.github.url}
                      target={content.social.github.target}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={content.social.github.img}
                        alt={content.social.github.alt}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={content.social.twitter.url}
                      target={content.social.twitter.target}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={content.social.twitter.img}
                        alt={content.social.twitter.alt}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={content.social.discord.url}
                      target={content.social.discord.target}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={content.social.discord.img}
                        alt={content.social.discord.alt}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={content.social.telegram.url}
                      target={content.social.telegram.target}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={content.social.telegram.img}
                        alt={content.social.telegram.alt}
                      />
                    </a>
                  </li>
                </ul>

                <span className="copyright">{content.copyright}</span>
              </div>

              <div className="links">
                <div className="shortcut">
                  <h4 className="title">{content.shortcut.vultisig.title}</h4>
                  <ul className="list">
                    {content.shortcut.vultisig.links.map(
                      ({ label, newTab, url }, index) => (
                        <li key={index}>
                          {newTab ? (
                            <a href={url}>{label}</a>
                          ) : (
                            <Link href={url}>{label}</Link>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="shortcut">
                  <h4 className="title">{content.shortcut.support.title}</h4>
                  <ul className="list">
                    {content.shortcut.support.links.map(
                      ({ label, newTab, url }, index) => (
                        <li key={index}>
                          {newTab ? (
                            <a href={url}>{label}</a>
                          ) : (
                            <Link href={url}>{label}</Link>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="shortcut">
                  <h4 className="title">{content.shortcut.legal.title}</h4>
                  <ul className="list">
                    {content.shortcut.legal.links.map(
                      ({ label, newTab, url }, index) => (
                        <li key={index}>
                          {newTab ? (
                            <a href={url}>{label}</a>
                          ) : (
                            <Link href={url}>{label}</Link>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </footer>

          <Drawer
            title="MENU"
            placement="left"
            closeIcon={false}
            onClose={handleMenu}
            open={opened}
            extra={
              <span style={{ color: "#ffffff" }} onClick={handleMenu}>
                <CloseOutlined />
              </span>
            }
          >
            <Menu
              mode="inline"
              items={[
                ...navbar,
                {
                  key: "1000",
                  label: (
                    <Link href={content.download.url}>
                      {content.download.label}
                    </Link>
                  ),
                },
              ]}
              selectedKeys={[]}
              onClick={handleMenu}
            />
          </Drawer>
        </ConfigProvider>
      </body>
    </html>
  );
}
