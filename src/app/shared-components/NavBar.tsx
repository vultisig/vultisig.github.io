"use client";
import { Button, Drawer } from "antd";
import Image from "next/image";
import { navBarCopy } from "../copy/NavBar";
import { MenuOutlined } from "@ant-design/icons";

import type { MenuProps } from "antd";
import { Menu } from "antd";

import { useEffect, useState } from "react";
import Link from "next/link";

export function NavBar() {
  const [currentPath, setCurrentPath] = useState("");

  type MenuItem = Required<MenuProps>["items"][number];

  const MenuItems: MenuItem[] = [];

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

  navBarCopy.navbarLinks.map((link, index) => {
    if (link.children) {
      MenuItems.push({
        key: `${index}`,
        label: link.name,
        children: link.children.map((child, ind) => ({
          key: `${index}-${ind}`,
          label: (
            <a
              href={navBarCopy.download.url}
              onClick={handleClose}
              style={{ cursor: "pointer" }}
            >
              {child.name}{" "}
            </a>
          ),
        })),
      });
    } else {
      MenuItems.push({
        key: `${index}`,
        label: <a href={link.url}>{link.name}</a>,
      });
    }
  });

  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark my-5">
        <a
          href="/"
          className="navbar-brand mx-auto d-flex align-items-center"
          style={{ cursor: "pointer" }}
          onClick={handleClose}
        >
          <Image
            src="./img/logo.svg"
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
            />
          )}
        </div>
        <a
          className="align-items-center btn btn-color btn-primary d-flex justify-content-center"
          style={{ height: "48px", width: "193px" }}
          href={navBarCopy.download.url}
          onClick={handleClose}
        >
          {navBarCopy.download.name_a}
        </a>
        {loaded && (
          <Button type="link" onClick={handleOpen}>
            <MenuOutlined />
          </Button>
        )}
      </nav>

      <Drawer title="MENU" onClose={handleClose} open={show}>
        <Menu
          mode="inline"
          items={[
            ...MenuItems,
            {
              key: "1000",
              label: (
                <a href={navBarCopy.download.url} onClick={handleClose}>
                  {navBarCopy.download.name_a}
                </a>
              ),
            },
          ]}
          selectedKeys={[currentPath]}
        />
      </Drawer>
    </>
  );
}
