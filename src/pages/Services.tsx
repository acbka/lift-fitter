import React from "react";
import servicesBg from "../assets/services-bg.jpg";
import servicesIcon from "../assets/services.png";
import { CardsContainer } from "../common/styles";
import { services } from "../common/constants";
import Card from "../components/Card";
import ContactSection from "../components/ContactSection";
import Layout from "../components/Layout";

const Services: React.FC = () => {
  return (
    <Layout pageTitle="Services" icon={servicesIcon} bgImage={servicesBg}>
      <CardsContainer>
        {services.map((service) => (
          <Card key={service.id} item={service}></Card>
        ))}
      </CardsContainer>
      <ContactSection />
    </Layout>
  );
};

export default Services;
