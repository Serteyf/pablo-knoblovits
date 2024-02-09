import HeroBanner from "@/components/HeroBanner";
import Layout from "@/components/Layout/Layout";
import { Metadata, NextPage } from "next";
import ContactForm2 from "@/components/Contact/ContactForm";
import Awards from "@/components/Awards/Awards";
import AboutMe from "@/components/AboutMe";
import ContactBlock from "@/components/Contact/ContactBlock";
import ImagesCarousel from "@/components/ImagesCarousel";
import FieldOfWork from "@/components/FieldOfWork";
import CarouselBlock from "@/components/Carousel/Carousel";

{
  /* <link rel="icon" href="/favicon.ico" sizes="any" />; */
}
export const metadata: Metadata = {
  title: "Pablo Knoblovits",
  description: "Médico Endocrinólogo - Andrólogo",
  icons: { icon: "/favicon1.svg" },
};

const Index: NextPage = () => {
  const gallery = [
    "/gallery/gallery01.png",
    "/gallery/gallery02.png",
    "/gallery/gallery03.png",
    // "/gallery/gallery04.png",
    // "/gallery/gallery05.png",
    "/gallery/gallery06.png",
    "/gallery/gallery07.png",
    "/gallery/gallery08.png",
    "/gallery/gallery09.png",
  ];

  return (
    <Layout>
      <HeroBanner />
      <ContactBlock />
      <AboutMe />
      <FieldOfWork />
      <Awards />
      <CarouselBlock gap={50}>{gallery}</CarouselBlock>
      <ContactForm2 />
    </Layout>
  );
};

export default Index;
