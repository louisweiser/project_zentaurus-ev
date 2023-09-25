import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ConsultationContent from "@/components/sections/Consultation";
import AboutUsContent from "@/components/sections/AboutUs";
import IntroductionContent from "@/components/sections/Introduction";
import ApproachContent from "@/components/sections/Approach";
import ProjectsContent from "@/components/sections/Projects";
import BlogContent from "@/components/sections/Blog";
import ContactContent from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zentaurus-EV</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main>
        <Header />
        <IntroductionContent />
        <AboutUsContent />
        <ConsultationContent />
        <ApproachContent />
        <ProjectsContent />
        <BlogContent />
        <ContactContent />
        <Footer />
      </main>
    </>
  );
}
