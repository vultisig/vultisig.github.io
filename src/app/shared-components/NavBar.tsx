"use client";
import { Button, Drawer } from "antd";
import Image from "next/image";
import { navBarCopy } from "../copy/NavBar";
import { MenuOutlined } from "@ant-design/icons";

import type { MenuProps } from "antd";
import { Menu } from "antd";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const router = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  type MenuItem = Required<MenuProps>["items"][number];

  const MenuItems: MenuItem[] = [];

  useEffect(() => {
    if (router) {
      setCurrentPath(router);
    }
  }, [router]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 0);
  }, []);

  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log(e.key);
  };

  navBarCopy.navbarLinks.map((link, index) => {
    if (link.children) {
      MenuItems.push({
        key: `${index}`,
        label: link.name,
        children: link.children.map((child, ind) => ({
          key: `${index}-${ind}`,
          label: <Link href={child.url}>{child.name}</Link>,
        })),
      });
    } else {
      MenuItems.push({
        key: `${index}`,
        label: <Link href={link.url}>{link.name}</Link>,
      });
    }
  });

  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark my-5">
        <Link
          className="navbar-brand mx-auto d-flex align-items-center"
          href="/"
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
        </Link>
        <div
          id="navbarToggleMain"
          className="collapse navbar-collapse justify-content-center monserrat-medium"
        >
          {loaded && (
            <Menu onClick={onClick} mode="horizontal" items={MenuItems} />
          )}
        </div>
        <Link
          className="align-items-center btn btn-color btn-primary d-flex justify-content-center"
          style={{ height: "48px", width: "193px" }}
          href={navBarCopy.download.url}
          target={navBarCopy.download.target}
        >
          {navBarCopy.download.name}
        </Link>
        <Button type="link" onClick={handleOpen}>
          <MenuOutlined />
        </Button>
      </nav>

      <Drawer title="MENU" onClose={handleClose} open={show}>
        <Menu
          onClick={onClick}
          mode="inline"
          items={[
            ...MenuItems,
            {
              key: "1000",
              label: <Link href="#store-section">DOWNLOAD APP</Link>,
            },
          ]}
        />
      </Drawer>
    </>
  );
}
