import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import "../../public/fonts/index.css";

import { DeviceProvider } from "@/contexts/DeviceContext";
import { SectionDetectionProvider } from "@/contexts/SectionDetectionContext";

export default function App({ Component, pageProps }) {
  return (
    <DeviceProvider>
      <SectionDetectionProvider>
        <Component {...pageProps} />
        <Analytics />
      </SectionDetectionProvider>
    </DeviceProvider>
  );
}
