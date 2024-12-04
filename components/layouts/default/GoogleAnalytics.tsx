"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getLocalStorage } from "../lib/storageHelper";
import { pageview } from "../lib/gtagHelper";
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);

  // Effect to check initial consent state and listen for changes
  useEffect(() => {
    const consent = getLocalStorage("cookie_consent", null);
    setHasConsent(consent);
    const handleStorageChange = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const updatedConsent = getLocalStorage("cookie_consent", null);
      if (updatedConsent !== hasConsent) {
        setHasConsent(updatedConsent);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [hasConsent]);

  // Effect to manage the Google Analytics script
  useEffect(() => {
    const addGoogleAnalyticsScript = () => {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`;
      script.async = true;
      script.id = "google-analytics-script";
      document.head.appendChild(script);

      script.onload = () => {
        (window as any).dataLayer = (window as any).dataLayer || [];
        window.gtag = function gtag(...args: any[]) {
          (window as any).dataLayer.push(args);
        };
        window.gtag("js", new Date());
        window.gtag("config", process.env.NEXT_PUBLIC_MEASUREMENT_ID, {
          page_path: window.location.pathname,
        });

        pageview(pathname);
      };
    };

    const removeGoogleAnalyticsScript = () => {
      const script = document.getElementById("google-analytics-script");
      if (script) {
        document.head.removeChild(script);
      }
      (window as any).dataLayer = [];
    };

    if (hasConsent === true) {
      addGoogleAnalyticsScript();
    } else if (hasConsent === false) {
      removeGoogleAnalyticsScript();
    }
  }, [hasConsent, pathname]);

  return null;
}
