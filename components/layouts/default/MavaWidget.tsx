"use client";

import { useEffect } from "react";

const MavaWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "MavaWebChat";
    script.src = "https://widget.mava.app";
    script.defer = true;
    script.setAttribute("widget-version", "v2");
    script.setAttribute("enable-sdk", "false");
    script.setAttribute(
      "data-token",
      "c73c9b31d3bc9c171a6b5482d88bdaccec8e471532af5cdc502dd778a20321f6"
    );

    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted if needed
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default MavaWidget;
