"use client";
import { getLocalStorage, setLocalStorage } from "../lib/storageHelper";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieBanner.module.scss";
export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean>();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCookieConsent = getLocalStorage("cookie_consent", null);
      setCookieConsent(storedCookieConsent);
    }
  }, []);

  useEffect(() => {
    if (cookieConsent != null) {
      setLocalStorage("cookie_consent", cookieConsent);
    }
  }, [cookieConsent]);
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      getLocalStorage("cookie_consent", null) == null &&
      cookieConsent == null
    ) {
      setShow(true);
    }
  }, []);
  return (
    <>
      <div
        className={` ${styles.bannerCont} `}
        style={show ? { display: "flex" } : { display: "none" }}
      >
        <div className="text-center">
          <Link href="/privacy">
            <p style={{ color: "white", marginBlock: "auto" }}>
              We use <span className={styles.bannerText}>cookies</span> on our
              website.
            </p>
          </Link>
        </div>

        <div className={styles.ButtonCont}>
          <button
            className={styles.declineButton}
            onClick={() => {
              setCookieConsent(false);
              window.dispatchEvent(new Event("storage"));
              setShow(false);
            }}
          >
            Decline
          </button>
          <button
            className={styles.acceptButton}
            onClick={() => {
              setCookieConsent(true);
              window.dispatchEvent(new Event("storage"));
              setShow(false);
            }}
          >
            Allow Cookies
          </button>
        </div>
      </div>
    </>
  );
}
