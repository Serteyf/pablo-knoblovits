import ContactBlock from "@/components/ContactBlock";
import HeroBanner from "@/components/HeroBanner";
import Layout from "@/components/Layout";
import { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <HeroBanner />
      <ContactBlock />
    </Layout>
  );
};

export default Index;
