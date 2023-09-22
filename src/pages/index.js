import Head from "next/head";
import Header from "@/components/Header";
import HomeContent from "@/components/Home";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <ImageSlider />
      <HomeContent />
      <Footer />
    </>
  );
}
