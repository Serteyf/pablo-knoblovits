import HeroBanner from "@/components/HeroBanner";
import Layout from "@/components/Layout/Layout";
import { NextPage } from "next";
import ContactForm from "@/components/Contact/ContactForm";
import Awards from "@/components/Awards/Awards";
import AboutMe from "@/components/AboutMe";
import ContactBlock from "@/components/Contact/ContactBlock";
import ImagesCarousel from "@/components/ImagesCarousel";
import FieldOfWork from "@/components/FieldOfWork";

const Index: NextPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <HeroBanner />
      <ContactBlock />
      <AboutMe />
      <FieldOfWork />
      <Awards />
      <ContactForm />
      {/* <ImagesCarousel /> */}
    </Layout>
  );
};

export default Index;
