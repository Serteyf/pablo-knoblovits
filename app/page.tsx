import HeroBanner from "@/components/HeroBanner";
import Layout from "@/components/Layout/Layout";
import { NextPage } from "next";
import ContactForm from "@/components/ContactForm";
import Awards from "@/components/Awards/Awards";
import AboutMe from "@/components/AboutMe";
import ContactBlock from "@/components/Contact/ContactBlock";

const Index: NextPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <HeroBanner />
      <AboutMe />
      <ContactBlock />
      <Awards />
    </Layout>
  );
};

export default Index;
