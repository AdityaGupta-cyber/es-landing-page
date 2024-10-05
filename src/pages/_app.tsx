import "@/styles/globals.css";
import type { AppProps } from "next/app";
import normalizeWheel from "normalize-wheel";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.addEventListener("mousewheel", function (event) {
      const normalized = normalizeWheel(event);

      console.log(normalized.pixelX, normalized.pixelY);
    });
  }, []);

  return <Component {...pageProps} />;
}
