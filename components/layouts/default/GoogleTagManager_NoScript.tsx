"use client";

import { useEffect } from "react";

const GoogleTagManager_NoScript = () => {
  useEffect(() => {
    const noscript = document.createElement("noscript");
    const iframe = document.createElement("iframe");

    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-MW93R9PQ";
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";

    noscript.appendChild(iframe);
    document.body.prepend(noscript);

    return () => {
      // Clean up the noscript tag if the component unmounts
      document.body.removeChild(noscript);
    };
  }, []);

  return null;
};

export default GoogleTagManager_NoScript;
