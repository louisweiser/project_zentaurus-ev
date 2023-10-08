import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import "../../public/fonts/index.css";

import { DeviceProvider } from "@/contexts/DeviceContext";

export default function App({ Component, pageProps }) {
  return (
    <DeviceProvider>
      <Component {...pageProps} />
      <Analytics />
    </DeviceProvider>
  );
}
