import HeroBanner from "@/components/HeroBanner";
import Layout from "@/components/Layout/Layout";
import { NextPage } from "next";
import ContactForm from "@/components/Contact/ContactForm";
import Awards from "@/components/Awards/Awards";
import AboutMe from "@/components/AboutMe";
import ContactBlock from "@/components/Contact/ContactBlock";
import ImagesCarousel from "@/components/ImagesCarousel";
import FieldOfWork from "@/components/FieldOfWork";
import CarouselBlock from "@/components/Carousel/Carousel";

const Index: NextPage = () => {
  const test = [1, 2, 3, 4];
  return (
    <Layout pageTitle={"Home"}>
      <HeroBanner />
      <ContactBlock />
      <AboutMe />
      <FieldOfWork />
      <Awards />
      <CarouselBlock gap={50}>{test}</CarouselBlock>
      <ContactForm />
    </Layout>
  );
};

export default Index;
