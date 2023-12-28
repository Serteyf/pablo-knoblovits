import AboutMe from "@/components/AboutMe";
import Awards from "@/components/Awards/Awards";
import ContactBlock from "@/components/Contact/ContactBlock";
import HeroBanner from "@/components/HeroBanner";
import Layout from "@/components/Layout/Layout";
import { NextPage } from "next";

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
