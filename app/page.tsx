import ContactBlock from "@/components/ContactBlock";
import Bio from "@/components/Bio";
import HeroBanner from "@/components/HeroBanner";
import Layout from "@/components/Layout";
import { NextPage } from "next";
import ContactForm from "@/components/ContactForm";

const Index: NextPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <HeroBanner />
      <ContactBlock />
      <ContactForm />
    </Layout>
  );
};

export default Index;
