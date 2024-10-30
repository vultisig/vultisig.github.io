"use client";
import { Button, Drawer } from "antd";
import Image from "next/image";
import { navBarCopy } from "../copy/NavBar";
import { MenuOutlined, CaretDownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useEffect, useState } from "react";

export function NavBar() {
  const [currentPath, setCurrentPath] = useState("");

  type MenuItem = Required<MenuProps>["items"][number];

  const MenuItems: MenuItem[] = navBarCopy.navbarLinks.map((link) => {
    if (link.children) {
      return {
        key: link.url, // Use URL as the key for matching selected item
        label: link.name,
        icon: <CaretDownOutlined />,
        children: link.children.map((child) => ({
          key: child.url, // Use child URL as the key
          label: (
            <a
              href={child.url}
              onClick={() => {
                setCurrentPath(child.url);
                handleClose();
              }}
              style={{ cursor: "pointer" }}
            >
              {child.name}
            </a>
          ),
        })),
      };
    } else {
      return {
        key: link.url, // Use URL as the key for consistency
        label: (
          <a
            href={link.url}
            onClick={() => {
              setCurrentPath(link.url);
              handleClose();
            }}
          >
            {link.name}
          </a>
        ),
      };
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 0);
  }, []);

  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark my-5">
        <a
          href="/"
          className="navbar-brand mx-auto d-flex align-items-center"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setCurrentPath("/");
            handleClose();
          }}
        >
          <Image
            src="/img/logo.svg"
            width={30}
            height={30}
            className="d-inline-block align-top"
            alt="Vultisig Logo"
          />
          <strong
            style={{ fontSize: "x-large" }}
            className="monserrat-semibold"
          >
            Vultisig
          </strong>
        </a>
        <div
          id="navbarToggleMain"
          className="collapse navbar-collapse justify-content-center monserrat-medium"
        >
          {loaded && (
            <Menu
              mode="horizontal"
              items={MenuItems}
              selectedKeys={[currentPath]}
              onClick={({ key }) => setCurrentPath(key)}
            />
          )}
        </div>
        <a
          className="align-items-center btn btn-color btn-primary d-flex justify-content-center"
          style={{ height: "48px", width: "193px" }}
          href={navBarCopy.download.url}
          onClick={() => {
            setCurrentPath(navBarCopy.download.url);
            handleClose();
          }}
        >
          {navBarCopy.download.name_a}
        </a>
        {loaded && (
          <Button type="link" onClick={handleOpen}>
            <MenuOutlined />
          </Button>
        )}
      </nav>

      <div className="banner">
        <img className="warning-logo-l" src="/img/warning.svg" />
        <p>{navBarCopy.warning_Message}</p>
        <img className="warning-logo-r" src="/img/warning.svg" />
      </div>

      <Drawer title="MENU" onClose={handleClose} open={show}>
        <Menu
          mode="inline"
          items={[
            ...MenuItems,
            {
              key: navBarCopy.download.url,
              label: (
                <a
                  href={navBarCopy.download.url}
                  onClick={() => {
                    setCurrentPath(navBarCopy.download.url);
                    handleClose();
                  }}
                >
                  {navBarCopy.download.name_a}
                </a>
              ),
            },
          ]}
          selectedKeys={[currentPath]}
          onClick={({ key }) => setCurrentPath(key)}
        />
      </Drawer>
    </>
  );
}
