import { useEffect } from "react";
import Head from "next/head";

import Header from "@/components/Header";
import IntroductionContent from "@/components/sections/Introduction";
import AboutUsContent from "@/components/sections/AboutUs";
import ConsultationContent from "@/components/sections/Consultation";
import ApproachContent from "@/components/sections/Approach";
import ProjectsContent from "@/components/sections/Projects";
import DonateContent from "@/components/sections/Donate";
import ContactContent from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const scroll = sessionStorage.getItem("scroll");
    if (scroll) {
      window.scrollTo(0, parseInt(scroll));
      sessionStorage.removeItem("scroll");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Zentaurus-EV</title>
        <link rel="icon" href="/images/logo.png" />
        <meta name="description" content="Verein für Inklusion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zentaurus-EV" />
        <meta property="og:description" content="Verein für Inklusion" />
        <meta property="og:image" content="/images/img_02.jpg" />
        <meta property="og:url" content="https://zentaurus-ev.vercel.app/" />
      </Head>
      <main>
        <Header />
        <IntroductionContent />
        <AboutUsContent />
        <ConsultationContent />
        <ApproachContent />
        <ProjectsContent />
        <DonateContent />
        <ContactContent />
        <Footer />
      </main>
    </>
  );
}
