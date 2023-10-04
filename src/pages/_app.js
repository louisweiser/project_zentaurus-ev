import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import "../../public/fonts/index.css";

import { DeviceProvider } from "@/contexts/DeviceContext";
import { SectionRefsProvider } from "@/contexts/SectionRefsContext";

export default function App({ Component, pageProps }) {
  return (
    <DeviceProvider>
      <SectionRefsProvider>
        <Component {...pageProps} />
        <Analytics />
      </SectionRefsProvider>
    </DeviceProvider>
  );
}
